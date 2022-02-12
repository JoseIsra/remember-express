const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { noExtendLeft } = require("sequelize/dist/lib/operators");

require("dotenv").config();

const authController = {
  getUser: async (name, password) => {
    const user = await User.findOne({
      where: {
        name,
      },
    });
    console.log("usuario encontrado", user);
    if (!user) {
      throw boom.unauthorized();
    }

    // comparamos el hash del usuario
    const hashed = await bcrypt.compare(password, user.password_hash);
    console.log("hashed", hashed);
    if (!hashed) {
      // si no coinciden
      throw boom.unauthorized();
    }
    delete user.dataValues.password_hash; // para remover el campo password_hash de la respuesta, solo es visual
    return user;
  },
  signToken: (user) => {
    const payload = {
      sub: user.id,
      role: user.role_id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return {
      user,
      token,
    };
  },
  sendEmail: async function (infoMail) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail(infoMail);
    return { message: "Email SENT 🚀" };
  },
  sendRecovery: async (email) => {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) throw boom.unauthorized();
    const payload = { sub: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15min",
    });
    const link = `http://kusawasi.com/recover?token=${token}`;
    // updating user
    await User.update(
      {
        recovery_token: token,
      },
      {
        where: {
          email: user.email,
        },
      }
    );

    const mail = {
      from: process.env.GMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Email de recuperación", // Subject line
      html: `
      <h1><b>Accede al enlace para generar una nueva contraseña</b></h1>
      <a href="${link}">${token}</a>
      `,
    };

    const rest = await authController.sendEmail(mail);
    return rest;
  },
  changePassword: async (token, newPassword) => {
    try {
      // verificar usuario
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({
        where: {
          id: payload.sub,
        },
      });
      console.log("USER", user);
      console.log("payload", payload);
      if (!user) throw boom.unauthorized();

      // if (user.recovery_token !== token) throw boom.unauthorized();
      // si todo ta cool, hash y guardar
      const result = await bcrypt.hash(newPassword, 10);
      // guardar contraseña
      console.log("NUEVA PASSWORD?", result);
      if (result) {
        await User.update(
          {
            password_hash: result,
          },
          {
            where: {
              email: user.email,
            },
          }
        );
        res.status(200).json({
          message: "contraseña actualizada",
        });
      }
    } catch (error) {
      throw boom.unauthorized();
    }
  },
};

module.exports = authController;
