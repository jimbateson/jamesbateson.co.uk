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

<h3><strong>Must watch</strong></h3>

<p>I followed <a href="https://www.youtube.com/watch?v=sgscChKfGyg">this excellent video tutorial</a> on how to use Postman to create the various tokens required for the Strava API. I would highly recommend going through this. It has all the steps I'll be covering in the article, plus you can watch along and pause when needed.</p>

</div>

## Creating a Strava app

To use the Strava API you'll first need to create an app within your Strava account. When logged into Strava head to your account settings and you may see 'My API Application' as the bottom menu item. If however, you've not set one up in the past, you won't see this. If that is the case—head to this url to create one (https://www.strava.com/settings/api).

When setting up your application fill in the relevant details. I chose to categorise my app as "Traning" and you'll only need to pick a club if you have created one and it's associated with that. For the website I just put my personal one, the more important one is the callback domain. When first setting up, set it to <strong>localhost</strong>. Once you have done your development work and you're ready to push live, you'll need to change this to your live URL.

Once you've created the app, you'll see the details you set displayed, as well as your clientID, client secret, authorization token, refresh token, and your rate limits. These are the details we'll use in the next steps.

## Requesting the correct authorisation for your app

A couple of links here to start with:

[Strava API getting started guides](https://developers.strava.com/docs/getting-started/) - Handy to have a read through. You can also find documentation of all the calls that can be made etc.

[Postman](https://www.postman.com/) - the tool I'll be using to build my URL requests. I found its UI very intuitive.

To return a list of recent activities we need to [List athlete activities](https://developers.strava.com/docs/reference/#api-Activities-getLoggedInAthleteActivities) as you will see from that link that requires `activities:read_all`.

> Requires activity:read. Only Me activities will be filtered out unless requested by a token with activity:read_all

However, by default, your app authorisation will only be `read`. So there are a few things we need to request to be able to get the activities we want.

First up let's request an authorisation code, this is a one-time thing that will need to be done, and can just be pasted into your browser. Here's the URL you will need (you'll need to remember to add your own `client_id` here - find this in your settings and then My API Application):

`https://www.strava.com/oauth/authorize?client_id={your client id}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all`

On the resulting page, you should see a screen that asks you to authorise your app, authorise and then you will then probably see a screen that makes it look like this didn't work. However, what we're after here is the number after `code=` in the URL of that page.

## Exchange authorisation code for access and refresh tokens

Now's the time to hop into Postman, we need to make a `POST` request to get our tokens. Here's an example API URL:

`https://www.strava.com/oauth/token?client_id={your client id}&client_secret={your client secret}&code={your authorisation code}&grant_type=authorization_code`

