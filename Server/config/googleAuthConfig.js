const googleAuth = require('google-auth-library');
const Credentials = require('google-auth-library/build/src/auth/credentials');
const dotenv = require('dotenv')
dotenv.config()

const scope = "https://mail.google.com/";


const credentials = {
    "web": {
        "client_id": process.env.CLIENT_ID,
        "project_id":"nodemailer-294211",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": process.env.CLIENT_SECRET,
        "redirect_uris": ["http://localhost"],
		"javascript_origins": ["http://localhost"]
    }
}

/**
 * Step 1: Authorize in the browser
 */

const getAuthorizeUrl = (callback) => {
	const oauth2Client = new googleAuth.OAuth2Client(credentials.web.client_id, credentials.web.client_secret, credentials.web.redirect_uris[0]);

	const authUrl = oauth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: scope
	});

	callback(null, authUrl);
}

// getAuthorizeUrl((err, url) => {
// 	if(err) return console.log(err);
// 	console.log("Auth url is: ", url);
// });


const code = process.env.AUTH_URI

const getAccessToken = (callback) => {
	const oauth2Client = new googleAuth.OAuth2Client(credentials.web.client_id, credentials.web.client_secret, credentials.web.redirect_uris[0]);

	oauth2Client.getToken(code, (err, token) => {
		if(err) return console.log(err);

		callback(null, token);
	});
}

// getAccessToken((err, token) => {
// 	if(err) return console.log(err);
// 	console.log("Auth token is: ", token);
// });


const tokens = {
    access_token: process.env.ACCESS_TOKEN,
    refresh_token: process.env.REFRESH_TOKEN,
    scope: 'https://mail.google.com/',
    token_type: 'Bearer',
    expiry_date: 1604150529866
  }

module.exports = {credentials, getAuthorizeUrl, getAccessToken, tokens}