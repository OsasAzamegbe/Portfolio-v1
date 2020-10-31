const router = require('express').Router()
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()


nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
});