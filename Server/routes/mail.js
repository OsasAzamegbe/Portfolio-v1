const router = require('express').Router()
const dotenv = require('dotenv')
dotenv.config()

let transporter = require('../config/nodemailerConfig')

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});


router.post('/', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const title = req.body.title
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n title: [PORTFOLIO] - ${title} \n message: ${message} `
    const mail = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: title,
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
        console.log("fail", "\n", err)
      } else {
        res.json({
         status: 'success'
        })
        console.log("success", "\n", data)
      }
    })
  })


module.exports = router