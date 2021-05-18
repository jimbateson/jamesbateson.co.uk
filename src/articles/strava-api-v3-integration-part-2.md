---
layout: layouts/post.njk
title: "Strava API (v3) integration: Part 2"
socialImage: /images/social-share-default.jpg
date: 2021-04-22T20:09:42.186Z
tags:
  - Running
  - JavaScript
---
This is the second article in the write-up I am doing on how to integrate the Strava JavaScript API. You can read the [First article here](https://jamesbateson.co.uk/articles/strava-api-integration-part-1/). This details how to set up your Strava app and deal with the oAuth2 setup. In this article, I'll detail how I went about consuming this API and using the data to display my latest 6 activities on this site.

<div class="post-note">
<h3>Headz up</h3>
<p>As this is built with Eleventy, I used the <a href="https://www.11ty.dev/docs/plugins/cache/">Eleventy Cache Assets plugin</a>. So this article does have details that use this, however, many of the implementation techniques/syntax used can be transferred to other stacks.</p>
</div>
