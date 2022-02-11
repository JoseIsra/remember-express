const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

require("dotenv").config();

module.exports = {
  getUser: async (name, password) => {
    const user = await User.findOne({
      where: {
        name,
      },
    });

    if (!user) {
      throw boom.unauthorized();
    }

    // comparamos el hash del usuario
    const hashed = await bcrypt.compare(password, user.password_hash);
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
  sendEmail: async (email) => {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) throw boom.unauthorized();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL, // sender address
      to: email, // list of receivers
      subject: "SIN ASUNTO", // Subject line
      text: "Testeo de recuperación", // plain text body
      html: "<b>Hello mailer testing?</b>", // html body
    });
    return { message: "Email SENT 🚀" };
  },
};
