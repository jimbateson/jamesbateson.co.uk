require('dotenv').config();

module.exports = {
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	refreshToken: process.env.REFRESH_TOKEN
};
