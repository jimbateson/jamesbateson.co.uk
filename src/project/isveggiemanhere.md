---
layout: layouts/project-single.njk
title: Is Veggie Man Here?
url: https://isveggiemanhere.co.uk
listingImage: /images/is-veggie-man-here-listing.jpg
bannerImage: /images/veggie-test.jpg
shortDescription: The answer to most important question every Wednesday and
  Saturday. Is veggie man here?
date: 2020-05-03T19:10:04.587Z
tags:
  - CSS
  - HTML
  - JS
  - Side Project
---
As side projects go, this is probably up there with the most pointless and niche. However, it was a good exercise in building something from scratch using some modern ES6 features, and also some more (much needed) practice with JavaScript date/time.

## Project Background

As anyone from Lancaster will know, every Wednesday and Saturday the street market comes to town, bringing an eclectic mix of stalls selling crafts, local produce, and food to go. The pick of these food stalls is without a doubt the halloumi and falafel wrap stall, affectionately known as 'Veggie Man'.

However, there's nothing more disappointing in life that walking to the market, only to find that he's not here that week. So this site aims to help you avoid that crushing feeling by pre-empting whether he'll be there or not on that day.

> Carrot, lettuce, onions, tomatoes?

## How does it work?

In short, very simply!

It's checking if the current date is either Wednesday or Saturday, then if the config object has `isHeHere: true` show a certain message, if not show another. There are a couple of more rules - if it's not a market day and if the market has finished.

The coolest feature I got a chance to use here was the Fetch API. The `fetch()` method provides a way to fetch resources asynchronously across the network. Here's how I used it:

``` javascript
fetch('./config.json')
.then(obj => {
	return obj.json();
})
.then(objConfig => {
    // Message to display logic here 
})
.catch(err => {
	console.log(err);
});
```
When fetching my config file (where `isHeHere` is set) it returns a promise which contains the response from the file/url as a responnse object. We need to then get the JSON from this response.

From there we can then define our properties

``` javascript
const { isHeHere, isHeHereSpecial } = objConfig;
```

And then use to check against our dates.

## Any plans for this project?

Yes. Currently to update whether Veggie Man is Here. I need to manually update the config, push to the repo which runs a Netlify build. However, I'd like this to be more of an automatic process. Maybe a separate page that I can use a button on to set the config value, or maybe even Veggie Man himself could update!

