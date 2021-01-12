const Cache = require("@11ty/eleventy-cache-assets");
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */

const auth_link = 'https://www.strava.com/api/v3/oauth/token';

module.exports = async () => {
    // Return auth info
    const data = await reAuthorize();

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?per_page=6&access_token=${data.access_token}`;

    try {
		// Grabs either the fresh remote data or cached data (will always be fresh live)
		const items = await Cache(
			activities_link,
			{
				duration: "1d", // 1 day
				type: "json",
			}
		);
		return items;
	} catch (ex) {
		console.log(ex);

		// If failed, return back an empty array
		return [];
	}
};

const reAuthorize = async () => {
    return fetch(auth_link, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: process.env.REFRESH_TOKEN,
            grant_type: 'refresh_token'
        })
    })
	.then(res => res.json())
    .then(data => data);
}

reAuthorize();
