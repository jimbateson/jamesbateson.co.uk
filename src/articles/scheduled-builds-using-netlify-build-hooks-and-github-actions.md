---
layout: layouts/post.njk
title: Scheduled builds using Netlify build hooks and Github actions
metaTitle: Netlify build hooks and Github actions
metaDesc: How to set up a simple automated Netlify site build and deploy
  workflow using Netlify build hooks and Github actions
socialImage: /images/social-share-default.jpg
date: 2020-08-16T10:21:18.858Z
tags:
  - Netlify
---
A couple of weeks ago I published [an article](https://jamesbateson.co.uk/articles/speedlify/) on how I set up scheduled Speedlify builds for this site, to help monitor the performance and accessibility of some key pages. As part of an update to the article, I learnt how to use Netfliy web hooks and Github actions to trigger a rebuild and publish of the site. I feel I may have rushed that explanation a little, so this article is a more in-depth look into that workflow.

## Creating a Netlify build hook

First thing's first, let's create a 
