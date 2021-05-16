---
layout: layouts/post.njk
title: Playing with GSAP timelines
metaTitle: GSAP timeline learnings
metaDesc: A few bits I have picked up having a little play around with GSAP timelines
socialImage: /images/social-share-default.jpg
date: 2021-05-14T16:55:28.931Z
tags:
  - JavaScript
  - GSAP
---
Recently I've been trying to improve on my development skillset, and as part of this I've (unofficially) started on the 100 days of code challenge. Just thought it would be worth writing up what I've learned about GSAP timelines today.

## What have I been building?

There's been a lot of Tailwind stuff flying around on tech Twitter over the last week or so, and it led me to take another look at their site. Whilst doing that, I saw a nice slick grid animation that I wanted to replicate.

It used CSS Grid for layout and kind of 'exploded' with a nice transition on switching a tab. I decided to try and recreate this, with CSS Grid and GSAP for the animations.

## Why timelines?

To be totally upfront, I'm very new to using GSAP and this is absolutely not an expert article, I'll possibly draft an intro article on my learnings at some point, but this article is just a 'things I learned about timelines in a day of experimenting' thing.

For my given grid I had 5 elements, each of which I needed to animate using the `.to()` method.

Originally I took a different approach to timelines, using what I've seen referred to as 'loose tweens' these are tweens that have no relationship to each other running on their own. I then run just ran these in reverse for my `mouseleave` event. This however didn't really give me the effect or control I needed, as well as meaning repeated code. I had to define each tween as a variable, start that on `mouseenter` and then reverse each one on `mouseleave` this included all properties (ease, duration, etc) for each tween. Enter timelines.

[The GSAP docs](https://greensock.com/docs/v3/GSAP/Timeline) state:
> A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation.


## Creating a timeline
To create a new timeline, it's as easy as `const tl = gsap.timeline();`

## The timeline object
As touched upon in the docs defenition, timelines can save repeated code and make updating timings, easings and ordering much easier in one place.

## Controlling positions on a timeline

## Nesting timelines