const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  // SERVIDOR A UTILIZAR PARA HACER EL ENVÍO DE CORREOS
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "israelmyname@gmail.com",
      pass: "wronhwcqqezolcuq",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "israelmyname@gmail.com", // sender address
    to: "bradjoseconnor@gmail.com", // list of receivers
    subject: "Correo para ti", // Subject line
    text: "Hello mailer testing bro?", // plain text body
    html: "<b>Hello mailer testing?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main();
