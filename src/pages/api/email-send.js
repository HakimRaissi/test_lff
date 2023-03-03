const nodemailer = require('nodemailer');

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    port: process.env.SMTP_PORT,
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.ZOHO_MAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.ZOHO_MAIL,
    to: req.body.email,
    subject: `test`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`
  }

  if (req.method === 'POST') {
    transporter.sendMail(mailData, (err, info) => {

      if (err) {

        console.log(err)
        res.status(403).json({
          error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }

  return res.status(200);
}
