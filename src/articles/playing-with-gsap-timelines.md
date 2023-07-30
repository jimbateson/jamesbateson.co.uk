---
layout: layouts/post.njk
title: Playing with GSAP timelines
metaTitle: GSAP timeline learnings
metaDesc: A few bits learned from having a little play around with GSAP timelines
socialImage: /images/social-share-default.jpg
date: 2021-05-18T06:33:32.653Z
tags:
  - JavaScript
  - GSAP
  - Animation
---
Recently I've been trying to improve on my development skillset, and as part of this I've (unofficially) started on the 100 days of code challenge. Just thought it would be worth writing up what I've learned about GSAP timelines.

## What have I been building?

There's been a lot of Tailwind stuff flying around on tech Twitter over the last week or so, and it led me to take another look at their site. Whilst doing that, I saw a nice slick grid animation that I wanted to replicate.

It used CSS Grid for layout and kind of 'exploded' with a nice transition on switching a tab. I decided to try and recreate this, with CSS Grid and GSAP for the animations.

## Why timelines?

To be upfront, I'm very new to using GSAP and this is not an expert article, I'll possibly draft an intro article on my learnings at some point, but this article is just a 'things I learned about timelines in a day of experimenting' thing.

<div class="post-note"><h3>Note</h3><p>If you're wanting to learn more about GSAP also, I recommend starting with the <a href="https://www.creativecodingclub.com/courses/gsap-3-express?ref=44f484" rel="nofollow" rel="noreferrer">GSAP 3 Express course</a> from Carl Schoof. I've been working my way through this and it's been great at introducing concepts and giving clear examples and things to practice.</p></div>

For my given grid I had 5 elements, each of which I needed to animate using the `.to()` method.

Originally I took a different approach to timelines, using what I've seen referred to as 'loose tweens' these are tweens that have no relationship to each other running on their own. I then just ran these in reverse for my `mouseleave` event. This however didn't really give me the effect or control I needed, as well as meaning repeated code. I had to define each tween as a variable, start that on `mouseenter` and then reverse each one on `mouseleave` this included all properties (ease, duration, etc) for each tween. Enter timelines.

[The GSAP docs](https://greensock.com/docs/v3/GSAP/Timeline) state:

> A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation.

## Creating a timeline

Creating a new timeline, is as easy as `const tl = gsap.timeline();`

## The timeline object

As touched upon in the docs definition, timelines can save repeated code and make updating timings, easings, and ordering much easier in one place.

### Defaults

The defaults object is a great way to save repetition on properties you may want to be the same on all children of the timeline. For example, duration and easing.

```js
const tl = gsap.timeline({ defaults: { duration: 1, ease: 'back' }});
tl
  .to('.element-1', { rotation: -270 })
  .to('.element-2', { rotation: -360 })
  .to('.element-3', { x: 400, rotation: -180 });
```

In this example, all timeline children would inherit a `duration` of `1` and a `back` easing. Much cleaner than defining the same properties and values on each element, plus it means only updating in one place should you wish to.

### Properties and callbacks

As well as the defaults object, timelines have their own set of properties you can apply. There are quite a few, so be sure to [read through them out here](https://greensock.com/docs/v3/GSAP/Timeline#h3-special-properties-and-callbacks). However, here are a few that I can see being useful:

* `onComplete` - a function that should run when the timeline animation has completed
* `onRepeat` - same as above but run on each repeat
* `puased` - if set to `true` the animation will be paused on page load
* `repeat` - how many times the animation should repeat
* `yoyo` - if set to `true` every other repeat cycle the animation will play in reverse

## Controlling positions on a timeline

By default, a timeline will play in sequence in the order that each element is called, one after the other until finished. You can however have more intricate control over when the animations happen, by passing a position parameter to an item.

```js
tlOut
    .to('.grid__item--1', { x: 0, y: 0, scale: 1.1, rotate: -6, z: 0 })
    .to('.grid__item--2', { x: 8, y: 60, scale: .75, rotate: 6, z: 0 }, '<')
```

In the example above `<` at the end of the second animation is the position parameter. In this instance, we are telling the second animation to play at the *same time* as the first.

A couple more examples of the syntax I found useful:

* `+=1` - delay this item starting after the previous by 1 second
* `-=1` - this item should start 1 second before the previous item animation has finished

There are a bunch more examples on the docs site that are worth taking a look at. I found this to be a great feature that I can see being powerful for creating more complex animations in the future.

## Nesting timelines

This isn't something I needed to use as part of my pen, but the idea seems like it might be really handy. You can nest timelines as deeply as you wish, then call them on one 'master' timeline. This seems like a great way to modularise animations, maybe into separate sections for example. Here's the example **from the docs**

```js
function intro() {
	var tl = gsap.timeline();
	//...add animations here...
	return tl;
}

function middle() {
	var tl = gsap.timeline();
	//...add animations here...
	return tl;
}

function conclusion() {
	var tl = gsap.timeline();
	//...add animations here...
	return tl;
}

// stitch them together in a master timeline...
var master = gsap.timeline();
master.add(intro())
      .add(middle(), "+=2")     //with a gap of 2 seconds
      .add(conclusion(), "-=1") //overlap by 1 second
```

## Exciting things to build

Building my animated grid pen, I only scratched the surface timelines, but the intricate control they can give you over animations is incredible. They give you the ability to give each animation a 'playhead' meaning control over each element but within a relationship with all others. Nesting allows more complex animations to be modularised and managed within their own timeline, but then called on a master timeline with a relationship to other timelines, very cool!

I'll be trying to build some more GSAP related pens over the coming months as I learn more about it, and I'm sure timelines will feature heavily.

As mentioned at the start of the post, I'll put together an article on my basic GSAP learnings so far very soon. 

## Here's one I made earlier

Just for reference, this is the animated grid pen I have been referencing in this article should you wish to see it.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="jim-bateson" data-slug-hash="dyvGaRG" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grid animation">
  <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/dyvGaRG">
  Grid animation</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>