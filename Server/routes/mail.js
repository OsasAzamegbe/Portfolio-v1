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
    const content = `name: ${name} \n email: ${email} \n title: ${title} \n message: ${message} `
    const mail = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: `[PORTFOLIO] - ${title}`,
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })


module.exports = router