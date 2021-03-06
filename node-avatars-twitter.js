const slugify = require("slugify");
const fs = require("fs-extra");
const fastglob = require("fast-glob");
const getTwitterAvatarUrl = require("twitter-avatar-url");
const eleventyImg = require("@11ty/eleventy-img");
const cleanName = require("./src/config/cleanAuthorName");

eleventyImg.concurrency = 5;
getTwitterAvatarUrl.concurrency = 1;

async function fetch(name) {
	if(!name) {
		return;
	}

	let slug = slugify(name).toLowerCase();
	let dir = `./src/avatars/twitter/`;
	await fs.ensureDir(dir);

	let path = `${dir}${slug}.json`;

	if(!fs.pathExistsSync(path)) {
		console.log( "Getting image url for", name );
		let result = await getTwitterAvatarUrl(name);
		if(result && result[0].url.large) {
			let stats = await eleventyImg(result[0].url.large, {
				formats: ["webp", "jpeg"],
				widths: [90],
				urlPath: "./src/images/avatars/twitter/",
				outputDir: "./src/images/avatars/twitter/",
			});

			return fs.writeFile(path, JSON.stringify(stats, null, 2));
		}

		console.log(`Could not retrieve twitter avatar url for ${name}`, result);
	}
}

(async function() {
	let twitterUsernames = new Set();

	// Twitter
	let resume = require("./src/_data/resume.json").map(entry => entry.twitter);
	for(let twitter of resume) {
		twitterUsernames.add(cleanName(twitter).toLowerCase());
	}

	console.log( "Found", twitterUsernames.size, "usernames" );
	let sorted = Array.from(twitterUsernames).sort();
	for(let name of sorted) {
		await fetch(name);
	}
})();
