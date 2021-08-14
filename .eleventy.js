const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const fs = require('fs');

// Import filters
const dateFilter = require('./src/filters/date-filter.js');
const secondsFilter = require('./src/filters/seconds-filter.js');
const metersFilter = require('./src/filters/meters-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Import transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Import data files
const site = require('./src/_data/site.json');

// Generate social share images
const generateSocialImages = require('@manustays/eleventy-plugin-generate-social-images');

module.exports = (config) => {
	// Plugins
	config.addPlugin(generateSocialImages, {
		promoImage: './src/images/avatar-rounded.png',
		outputDir: './dist/images/social-preview',
		urlPath: '/images/social-preview',
		siteName: 'jamesbateson.co.uk',
		titleColor: '#ffe000',
		bgColor: '#444',
		customFontFilename: 'nunito-black.woff',
	});

	// Filters
	config.addFilter('dateFilter', dateFilter);
	config.addFilter('secondsFilter', secondsFilter);
	config.addFilter('metersFilter', metersFilter);
	config.addFilter('markdownFilter', markdownFilter);
	config.addFilter('w3DateFilter', w3DateFilter);

	// Layout aliases
	config.addLayoutAlias('home', 'layouts/home.njk');
	config.addLayoutAlias('post', 'layouts/post.njk');

	// Transforms
	config.addTransform('htmlmin', htmlMinTransform);
	config.addTransform('parse', parseTransform);

	// Passthrough copy
	config.addPassthroughCopy('src/fonts');
	config.addPassthroughCopy('src/images');
	config.addPassthroughCopy('src/js');
	config.addPassthroughCopy('src/admin/config.yml');
	config.addPassthroughCopy('src/admin/previews.js');
	config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

	const now = new Date();

	// Custom collections
	const liveArticles = (post) => post.date <= now && !post.data.draft;
	config.addCollection('articles', (collection) => {
		return [...collection.getFilteredByGlob('./src/articles/*.md').filter(liveArticles)].reverse();
	});

	const liveJournal = (journal) => journal.date <= now && !journal.data.draft;
	config.addCollection('journal', (collection) => {
		return [...collection.getFilteredByGlob('./src/journal/*.md').filter(liveJournal)].reverse();
	});

	config.addCollection('postFeed', (collection) => {
		return [...collection.getFilteredByGlob('./src/articles/*.md').filter(liveArticles)]
			.reverse()
			.slice(0, site.maxPostsPerPage);
	});

	config.addCollection('journalFeed', (collection) => {
		return [...collection.getFilteredByGlob('./src/journal/*.md').filter(liveJournal)]
			.reverse()
			.slice(0, site.maxPostsPerPage);
	});

	const liveProject = (project) => project.date <= now && !project.data.draft;
	config.addCollection('projects', (collection) => {
		return [...collection.getFilteredByGlob('./src/project/*.md').filter(liveProject)].reverse();
	});

	// Plugins
	config.addPlugin(rssPlugin);
	config.addPlugin(syntaxHighlight);

	// 404
	config.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, browserSync) {
				const content_404 = fs.readFileSync('dist/404.html');

				browserSync.addMiddleware('*', (req, res) => {
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			},
		},
	});

	return {
		templateFormats: ['njk', 'md', 'html', '11ty.js'],
		dir: {
			input: 'src',
			output: 'dist',
		},
		passthroughFileCopy: true,
	};
};
