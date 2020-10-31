const nodemailer = require('nodemailer');
const googleAuth = require('./googleAuthConfig');
const dotenv = require('dotenv')
dotenv.config()

const EMAIL_USERNAME =process.env.EMAIL_ADDRESS,;
const COMMON_NAME = "[PORTFOLIO]";

const nodemailerSettings = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	service: 'Gmail',
	from: `"${COMMON_NAME}" <${EMAIL_USERNAME}>`,
	
	auth: {
		type: 'OAuth2',
		user: EMAIL_USERNAME,
		clientId: googleAuth.credentials.web.client_id,
		clientSecret: googleAuth.credentials.web.client_secret,
		refreshToken: googleAuth.tokens.refresh_token,
		accessToken: googleAuth.tokens.access_token,
		expires: googleAuth.tokens.expiry_date
	}
};

const transporter = nodemailer.createTransport(nodemailerSettings);

module.exports = transporter