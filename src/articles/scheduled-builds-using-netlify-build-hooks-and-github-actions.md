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

First thing's first, let's create a build hook in Netlify. This will give us a URL to post to and trigger a build.

From your sites dashboard, navigate to `Settings` (top navigation, last item at the time of writing). In the left hand nav on that page find `Build & Deploy`. On this page scroll down until you find the `Build Hooks` section and select "Add build Hook".

You'll then have the chance to give your build hook a suitable name. Make this something obvious relating to the action/reason you are triggering a build. Then select the branch you will be using to setup this trigger on.

![Screenshot show the UI for adding a build hook, bu giving the build hook a name and selecting the branch to set it up on](/images/screenshot-2020-08-18-at-21.28.30.png)

Once the build hook has been create, you'll see it listed, note the small downward facing chevron to the right, if you expand this, it'll give you an example of how you can use your build hook, something like `curl -X POST -d {} https://api.netlify.com/build_hooks/your-unique-build-hook-id`. Copy this to your clipboard, or keep this tab open as you'll need it in the coming steps.

## Creating a Github secret token