---
layout: layouts/post.njk
title: "Strava API integration: Part 1"
metaTitle: How to integrate the Strava JavaScript API
metaDesc: Setting up a the Strava API
socialImage: /images/social-share-default.jpg
date: 2021-01-15T06:40:44.790Z
tags:
  - Running
  - JavaScript
---
Recently I added Strava API integration to my site. It was a little bit of pain to set up, to say the least, so I thought I would do a couple of articles writing up how I went about setting up my Strava app and generating the relevant oAuth tokens, and then how I consumed this API and integrated the data into this site.

This first article will cover the following steps:

* Creating your Strava app
* Requesting the correct authorisations for your app
* Getting access and refresh tokens
* Setting up the refresh token so it generates new access tokens when needed

<div class="post-note">

<strong>Note</strong>

<p>I followed <a href="https://www.youtube.com/watch?v=sgscChKfGyg">this excellent video tutorial</a> on how to use Postman to create the various tokens required for the Strava API. I would highly recommend going through this. It has all the steps I'll be covering in the article, plus you can watch along and pause when needed.</p>

</div>

## Creating a Strava app

To use the Strava API you'll first need to create an app within your Strava account. When logged into Strava head to your account settings and you may see 'My API Application' as the bottom menu item. If however, you've not set one up in the past, you won't see this. If that is the case—head to this url to create one](https://www.strava.com/settings/api).

When setting up your application fill in the relevant details. I chose to categorise my app as "Traning" and you'll only need to pick a club if you have created one and it's associated with that. For the website I just put my personal one, the more important one is the callback domain. When first setting up, set it to <strong>localhost</strong>. Once you have done your development work and you're ready to push live, you'll need to change this to your live url.

Once you've created the app, you'll see the details you set displayed, as well as your clientID, client secret, authorization token, refresh token and your rate limits. These are the details we'll use in the next steps.

## Requesting the correct authorisations for your app