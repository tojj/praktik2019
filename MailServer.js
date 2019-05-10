const nodemailer = require("nodemailer")

const MailServer = async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "tojjinfo@gmail.com",
      accessToken:
        "ya29.GlsEB5qpJgKRa1HHRQUnGhiAeVDh-inz7gxSE71kZ1WvyMwTUxgOhBA2sPeAh4d5YqZrd2Hk0ciMZeWrGK8qwpXkTpB5MAzpOUjyGZbTPyWBdSSjiInXarEhuCwG"
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"NIGERIAN PRINCE" <j3sp_@hotmail.com>', // sender address
    to: ["a.toholjevic@gmail.com", "oliver.nilsson94@gmail.com"], // list of receivers
    subject: "GRATIS IPAD I GULD!", // Subject line
    text:
      "Jag skickar detta till dig för att visa att vår mailserver fungerar, MVH Oliver Nilsson", // plain text body
    html: "<body><h3>Hello and thank you my friend.</h3><p>Jag har bilen full på grejjor. Ipads, macboooks, mobill & kaffe i lösvikt.<br /> Faktura kommer att skickas om 5 minuter om du inte avbryter beställningen <a href='http://erdetfredag.dk'>här</a>.</p></body>" // html body
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
module.exports = MailServer