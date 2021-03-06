---
layout: layouts/post.njk
title: "Strava API (V3) integration: Part 1"
metaTitle: How to integrate the Strava JavaScript API (V3)
metaDesc: Setting up a the Strava API (V3)
socialImage: /images/social-share-default.jpg
date: 2021-04-17T16:56:22.804Z
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

<h3>Must watch</h3><p>I followed <a href="https://www.youtube.com/watch?v=sgscChKfGyg">this excellent video tutorial</a> on how to use Postman to create the various tokens required for the Strava API. I would highly recommend going through this. It has all the steps I'll be covering in the article, plus you can watch along and pause when needed.</p></div>

## Creating a Strava app

To use the Strava API you'll first need to create an app within your Strava account. When logged into Strava head to your account settings and you may see 'My API Application' as the bottom menu item. If however, you've not set one up in the past, you won't see this. If that is the case—head to this url to create one (https://www.strava.com/settings/api).

When setting up your application fill in the relevant details. I chose to categorise my app as "Traning" and you'll only need to pick a club if you have created one and it's associated with that. For the website I just put my personal one, the more important one is the callback domain. When first setting up, set it to <strong>localhost</strong>. Once you have done your development work and you're ready to push live, you'll need to change this to your live URL.

Once you've created the app, you'll see the details you set displayed, as well as your clientID, client secret, authorization token, refresh token, and your rate limits. These are the details we'll use in the next steps.

## Requesting the correct authorisation for your app

A couple of links here to start with:

[Strava API getting started guides](https://developers.strava.com/docs/getting-started/) - Handy to have a read-through. You can also find documentation of all the calls that can be made etc.

[Postman](https://www.postman.com/) - the tool I'll be using to build my URL requests. I found its UI very intuitive.

<div class="post-note"><h3>Tip</h3>
<p>It's also probably worth just creating a new blank file in your text editor or something, to copy in the various codes we'll be receiving. Make a note next to each one as to what it's for.</p>
</div>

To return a list of recent activities we need to [List athlete activities](https://developers.strava.com/docs/reference/#api-Activities-getLoggedInAthleteActivities) as you will see from that link that requires `activities:read_all`.

> Requires activity:read. Only Me activities will be filtered out unless requested by a token with activity:read_all

However, by default, your app authorisation will only be `read`. So there are several things we need to request to be able to get the activities we want.

First up let's request an authorisation code, this is a one-time thing that will need to be done, and can just be pasted into your browser. Here's the URL you will need (you'll need to remember to add your own `client_id` here - find this in your settings and then My API Application):

`https://www.strava.com/oauth/authorize?client_id={your client id}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all`

On the resulting page, you should see a screen that asks you to authorise your app, authorise and then you will then probably see a screen that makes it look like this didn't work. However, what we're after here is the number after `code=` in the URL of that page. Copy this code somewhere handy.

## Exchange authorisation code for access and refresh tokens
<br>
<div class="post-note"><h3>Note</h3>
<p>From this point I found the official [Strava developer getting started docs](https://developers.strava.com/docs/getting-started/) made a lot more sense.
</div>

Now's the time to hop into Postman, we need to make a `POST` request to get our tokens. Here's an example API URL:

`https://www.strava.com/oauth/token?client_id={your client id}&client_secret={your client secret}&code={your authorisation code}&grant_type=authorization_code`

When you hit 'send' on that request in Postman, you should then see a response in the panel below, you will notice this includes `access_token` and `refresh_token`. Copy both of these somewhere handy.

## Use your generated access token to get your activities

Back into Postman we go, and this time we need to do a `GET` request, so open a new tab in there and make sure 'GET' is set.

Here's an example of the URL we need to query:

`https://www.strava.com/api/v3/athlete/activities?access_token={your access token}`

In the Postman response panel, you should now see ~30 (I _think_ - this is the API `per_page` parameter default) of your activities. Boom! We have what we need.

You can also just paste that URL into your browser as well, and you'll see the JSON response.

## Use your refresh token to get new access tokens

So, oAuth2 access tokens have an expiry time, normally 4 hours. This means that our access token is going to change regularly and we'll need to check this and use our refresh token to generate a new one.

This will make more sense when we come to consume this API response in the second part of this tutorial, but we need to get this setup right from the off. 

So back into Postman we go, and we need to do another 'GET' request now. So again, open a new tab and make sure 'GET' is set. Here's an example of the API URL we need to build. again make sure to replace your details here that you should (hopefully) have pasted into a handy document!

`https://www.strava.com/api/v3/oauth/token?&client_id={you client id}&client_secret={your client secret}&grant_type=refresh_token&refresh_token={your refresh token}`

In the Postman response panel, you will now see an `access_token` and a `refresh_token` (this will be the same as the one you used in the URL query, and it never expires).

This is an important request. We'll basically need to run this request each time we hit our API, to use the refresh token to get a new access token if it has expired, and along with the previous request, are the ones we will use when consuming the API with our code in the next tutorial. Essentially once we have established the correct access token, we can then use that to request our activities - you should hopefully get the idea now.

This is probably meat and drink to people who have experience with oAuth, but this is the first time I'd ever used it, so wanted to go through basic principles.

## Summary - What we've done

So, hopefully, this has all made sense, and you've been able to hit some Strava APIs.

We are now able to request our latest activities, and we now have all the tokens we're going to need to consume this API with our code.

## What's next?

This is the first of a two-part article. The second article will be how you can now use all these API details with your code and integrate Strava data into your site.

I've kept these articles separate, just in case you want to integrate into a different environment or use another method. I wanted to keep this one purely about getting the whole oAuth2 setup sorted.

Hopefully, this has been useful and you have managed to follow it through. If there is anything wrong with the article, or you're having issues, please reach out and I'll make the relevant changes and endeavor to help!