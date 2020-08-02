---
layout: layouts/post.njk
title: Monitoring site performance with Speedlify
metaTitle: James Bateson | Monitoring site performance with Speedlify
metaDesc: Setting up a personal instance of Speedlify to monitor site performance
socialImage: /images/social-share-default.jpg
date: 2020-07-31T05:40:57.181Z
tags:
  - Performance
  - Accessibility
---
Speedlify is a [tool from Zach Leatherman](https://www.speedlify.dev/) that uses Google Lighthouse to benchmark web pages over time. after all if you spend so much time making your site fast and accessible, let’s keep it that way!

In this article I will document how I created my own instance of Speedlify to help monitor performance measurements on this site.

<p class="post-note"><strong>Important Read</strong>Zach has already <a href="https://www.zachleat.com/web/speedlify/">written a great article</a> introducing Speedlify, much better that I could ever hope to. So I'd reccommend reading that first to learn a bit more about the project.</p>

## Getting setup

First thing's first clone or fork [the Github repo](https://github.com/zachleat/speedlify/). If you're clonning, you'll then want to push this to a repo on your git hosting, for this example I'll be using Github.

If you wish you can then change any values in the `package.json` file to contain your own details, and I also removed a redirect config set up in the `netlify.toml` file.

In the readme, you'll notice Zach has included a handy "Deploy to Netlify" button. I won't go into how good of a tool Netlify is here, but seriously worth getting started with it if you haven't already. After deploying to Netlify, we'll now have a site setup, linked to the Github repo created in the previous step. This means whenever changes are pushed to that repo, Netlify will run a build and deploy the site!

## Changing the defaults

The copy of Speedlify that we now have, will still have all of Zach's site data set, so we need to change this. In the `_data/sites` directory there are a few JS files. These contain the Speedlify config for each sites/group of sites Zach is running tests on. For this example I removed all of these except `zachleat.js`. Depending on what you want to run Speedlify against, pick the best 'template' to keep and edit with your details.

Inside the config files, you will see that the options are pretty self-explanitory and there are some useful comments in there to explain the less obvious ones. One option you'll want to change is `skip`. This is set to skip any runs on an instance of Speedlify that isn't Zachs, which we don't want, so simply set `skip: false` here.

Once your basics setting are sorted, it's then a case of listing the urls you want Speedlify to run against. It's worth noting that it will run on each url 3 times, so the more you add, the longer the build will take. For this site I added all of my key pages, plus a few larger articles. I'd say that trying to keep to within 20 urls would be sensible. But you do you.

## Installing and running

So now we have our own config setup, it's time to run Speedlify against this. As per the readme, the three commands we'll want are:

```
npm install
npm run test-pages
npm run start
```

`test-pages` is the command that does all the magic and will take the longest, if you watch the terminal output, you'll see it checking against each of the urls setup in the `_data/sites/*.js` file(s).

