---
layout: layouts/post.njk
title: "Strava API (v3) integration: Part 2"
socialImage: /images/social-share-default.jpg
date: 2021-04-22T20:09:42.186Z
tags:
  - Running
  - JavaScript
---
This is the second article in the write-up I am doing on how to integrate the Strava JavaScript API. You can [read the first article here](https://jamesbateson.co.uk/articles/strava-api-integration-part-1/). In this article, I'll detail how I went about consuming the Strava API and using the data to display my latest 6 activities.

<div class="post-note"><h3>Heads up</h3><p>As this site is built with Eleventy, I used the <a href="https://www.11ty.dev/docs/plugins/cache/">Eleventy Cache Assets plugin</a>. So this article does have details that use this, however, many of the implementation techniques/syntax used can be transferred to other stacks.</p><br><p>It's also worth noting that currently I'm not displaying these activities on the site. But they'll be back soon!</div>

## What we should have so far
In part one of this article we got the following set up:
* A Strava app
* Correct authorisations for the app
* Access and refresh tokens
* New access tokens that generate on expiration (handled by the refresh token)



