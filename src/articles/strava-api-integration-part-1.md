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
This week I have added Strava API integration to my site. It was a little bit of pain to set up, to say the least, so I thought I would do a couple of articles writing up how I went about setting up my Strava app and generating the relevant oAuth tokens, and then how I consumed this API and integrated the data into this site.

This first article will cover the following steps:

* Creating your Strava app
* Requesting the correct authorisations for your app
* Getting access and refresh tokens
* Setting up the refresh token so it generates new access tokens when needed

## Creating a Strava app

To use the Strava API you'll first need to create an app within your Strava account. When logged into Strava head to your account settings and you _may_ see 'My API Application' as the bottom menu item. If however, you've not set one up in the past, you won't see this. If that is the case, [head to this url to create one](https://www.strava.com/settings/api).
