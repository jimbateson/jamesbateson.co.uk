---
layout: layouts/post.njk
title: Monitoring site performance with Speedlify
metaTitle: James Bateson | Monitoring site performance with Speedlify
metaDesc: Setting up a personal instance of Speedlify to monitor site performance
socialImage: /images/social-share-default.jpg
date: 2020-08-02T06:27:42.248Z
tags:
  - Performance
  - Accessibility
---

 PrettySpeedlify is a [tool from Zach Leatherman](https://www.speedlify.dev/) that uses Google Lighthouse to benchmark web pages over time. after all if you spend so much time making your site fast and accessible, let’s keep it that way!

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

`test-pages` is the command that does all the magic and will take the longest, if you watch the terminal output, you'll see it checking against each of the urls setup in the `_data/sites/*.js` file(s) - pretty darn cool! Once this is done, you'll notice a file created in the `data` directory `resulsts-last-run.json` this just includes a timestamp of the last time Speedlify ran on each of the sites you have setup.

Now it's time to check the results. `npm start` will run `eleventy --serve` and give you a local url. Go to this address and you should now see your own Speelify instance :tada:. Under the "Choose a category" heading should be a list of each of the sites you setup (each JS file in _data/sites). You can then click into each of these to see the leaderboard and dig into the results of each page. It really is nice to have an overview like this to get an idea of the numbers behind all of your page types in one place.

## Publishing

Now we have our own Speedling instance and have our data showing, we can publish this to the Netlify site we have setup. As it's linked to the repo we created just commit all the changes we have made to the repo and Netlify will handle the rest. You can watch your deploy log to make sure everything is running smoothly, and then once the publish has done, visit your url! [Here's my example](https://james-bateson-speedlify.netlify.app/).

<p class="post-note"><strong>Note</strong>By default Netlify will give your new site a nice humerous name. You can change this in the site setting, as well as setup custom domains etc should you wish.</p>

It's also worth noting, that if you didn't want to publish these results, I guess you could just keeping running this locally when you wanted to check on thigs, and just use the start task to check your results on the local url.

## Taking thigs further

### API

That's right, when you run Speedlify, it also [generates an API url](https://james-bateson-speedlify.netlify.app/api/urls.json) for you! This can be for all sites such as that example, or for each individual site. This could open up the possibilities for all sorts of cool implementations. For example Zach has added the lighthouse scores for certian pages to the footer of his personal site. This data is coming from his Speedlify results! [Read the article on how](https://www.zachleat.com/web/lighthouse-in-footer/).

### Look and feel

If you wanted you could dig around in the layout files of Speedlify and brand it as you wish, maybe display the results in a slighty different way etc.

### Automation

This is something that I am keep to get setup next. It's great being able to manually run Speedlify and see all your results, however, it would be so much nicer if it ran automatically periodically and then built if the results changed.

I still need to work out how to acheive this, so I'll update this post once I have got something in place. However, it's looking like using Netlify build hooks (something I've never used before) is going to be the way forward. 

In all honesty this will more likely be useful for sites where content is getting updated quite regularly (although watch your build minutes here if your on the free tier you get 300 a month), monitoring performace a few times a week may be beneficial if you're publishing quite a lot of new content/constantly making changes. For this site, I'll probably set it to run once a week, then publish to my Speedlify site if the resulst have changed.

## Wrapping up

I hope this guide will prove useful to anyone getting started will Speedlify. It really is a nice tool to have in your workflow when thinking about keeping a site fast and performant once it's built and live. Something that can be forgotten once you're adding content and making changes.

