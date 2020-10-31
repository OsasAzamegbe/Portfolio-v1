import * as googleAuth from 'google-auth-library';
import { Credentials } from 'google-auth-library/build/src/auth/credentials';
const dotenv = require('dotenv')
dotenv.config()

const scope = "https://mail.google.com/";


export const credentials = {
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