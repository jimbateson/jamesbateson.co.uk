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

### Defaults
The defaults object is a great way to save repetition on properties you may want to be the same on all children of the timeline. For example, duration and easing.

``` JavaScript
const tl = gsap.timeline({ defaults: { duration: 1, ease: 'back' }});
tl
  .to('.element-1', { rotation: -270 })
  .to('.element-2', { rotation: -360 })
  .to('.element-3', { x: 400, rotation: -180 });
```

In this example, all timeline children would inherit a `duration` or `3` and a `back` easing. Much cleaner than defining the same properties and values on each element, plus it means only updating in one place should you wish to.

### Properties and callbacks
As well as the defaults object, timelines have their own set of properties you can apply. There are quite a few, so be sure to [read through them out here](https://greensock.com/docs/v3/GSAP/Timeline#h3-special-properties-and-callbacks). However, here are a few that I can see being useful:

* `onComplete` - a function that should run when the timeline animation has completed
* `onRepeat` - same as above but run on each repeat
* `puased` - if set to `true` the animation will be paused on page load
* `repeat` - how many times the animation should repeat
* `yoyo` - if set to `true` every other repeat cycle the animtion will play in reverse

## Controlling positions on a timeline
By default a timeline will play in sequence in the order that each element is called, one after the other until finished. You can however have more intricate control over when the animtions happen, by passing a position parameter to an item.

``` JavaScript
tlOut
    .to('.grid__item--1', { x: 0, y: 0, scale: 1.1, rotate: -6, z: 0 })
    .to('.grid__item--2', { x: 8, y: 60, scale: .75, rotate: 6, z: 0 }, '<')
```

In the example above `<` at the end of the second element animation is the position paramtere. In this instance we are telling the second animtion to play at the _same time_ as the first.

A couple more examples of the syntax I found useful:

* `+=1` - delay this item starting after the previous by 1 second
* `-=1` - this item should start 1 second before the previous item animation has finished

There are a bunch more examples on the docs site that are worth taking a look at. I found this to be a really nice feature that I can see being really powerful for creating more complex animations in the future.


## Nesting timelines
This isn't something I needed to use as part of my pen, but the idea seems like it might be really handy. You can nest timelines as deeply as you wish, then call them on one 'master' timeline. This seems like a great way to modulorise animations, maybe into separate sections for example. Here's the example **from the docs**

``` JavaScript
Version:
GreenSock Docs
search

Back to GSAP

Timeline

Properties

.autoRemoveChildren

.data

.labels

.parent

.smoothChildTiming

.vars

Methods

.add()

.addLabel()

.addPause()

.call()

.clear()

.currentLabel()

.delay()

.duration()

.endTime()

.eventCallback()

.from()

.fromTo()

.getById()

.getChildren()

.getTweensOf()

.invalidate()

.isActive()

.iteration()

.kill()

.nextLabel()

.pause()

.paused()

.play()

.previousLabel()

.progress()

.recent()

.remove()

.removeLabel()

.removePause()

.repeat()

.repeatDelay()

.restart()

.resume()

.reverse()

.reversed()

.seek()

.set()

.shiftChildren()

.startTime()

.then()

.time()

.timeScale()

.to()

.totalDuration()

.totalProgress()

.totalTime()

.tweenFromTo()

.tweenTo()

.yoyo()
Timeline

A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation. For example...:

// WITHOUT Timelines (only using tweens with delays):
gsap.to("#id", {x: 100, duration: 1});
gsap.to("#id", {y: 50, duration: 1, delay: 1});      //wait 1 second
gsap.to("#id", {opacity: 0, duration: 1, delay: 2}); //wait 2 seconds

What if you wanted to make the first animation longer? You'd need to adjust every delay thereafter. And what if you want to pause() the whole sequence or restart() it or reverse() it on-the-fly or repeat it twice? This could become quite messy, but GSAP's Timelines make it incredibly simple:

//WITH Timelines (cleaner, more versatile)
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.to("#id", {x: 100, duration: 1});
tl.to("#id", {y: 50, duration: 1});
tl.to("#id", {opacity: 0, duration: 1});

// then we can control the whole thing easily...
tl.pause();
tl.resume();
tl.seek(1.5);
tl.reverse();
...

Now we can adjust the timing without worrying about trickle-down changes to delays! Increase the duration of that first tween and everything automatically adjusts.

For a quick overview of GSAP's timelines, check out this video from the "GSAP 3 Express" course by Snorkl.tv - one of the best ways to learn the basics of GSAP 3. Learn free through November 30th.

 
Positioning animations in a timeline

The secret to building gorgeous animations with intricate timing is understanding the position parameter which is used in many various Timeline methods. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines. In other words, it tells the timeline exactly where to insert the animation. It typically comes after the vars parameter and it has multiple behaviors:

    Absolute time, like 3 (a number)

    //insert exactly 3 seconds from the start of the timeline
    tl.to(".class", {x: 100}, 3);

    Relative time, like "+=1" or "-=1" (relative to the end of the timeline)

    //create a gap (insert 1 second after end of timeline)
    tl.to(".class", {x: 100}, "+=1");

    //overlap end by 1 second
    tl.to(".class", {y: 100}, "-=1");

    Label, like "someLabel"

    //insert at the "someLabel" label (if it doesn't exist yet, it gets added to the end of the timeline)
    tl.to(".class", {x: 100}, "someLabel");

    Relative to a label, like "someLabel+=1"

    //insert 2 seconds after the "someLabel" label
    tl.to(".class", {x: 100}, "someLabel+=2");

    At the start of most recently-added animation, "<"

    //insert at the START of the most recently added animation
    tl.to(".class", {x: 100}, "<");

    At the end of the most recently-added animation, ">"

    //insert at the END of the most recently added animation
    tl.to(".class", {x: 100}, ">");

    Relative to the start of the most recently-added animation, like "<1"

    //insert 1 second after the START of the most recently added animation
    tl.to(".class", {x: 100}, "<1");

    //insert 2 seconds before the START of the most recently added animation (negative number)
    tl.to(".class", {y: 100}, "<-2");

    Relative to the end of the most recently-added animation, like ">1"

    //insert 1 second after the END of the most recently added animation
    tl.to(".class", {x: 100, duration: 1}, ">1");

    //insert 2 seconds before the END of the most recently added animation (negative number)
    tl.to(".class", {y: 100, duration: 1}, ">-2");

Hint: think of "<" and ">" as pointers to the start or end of the most recently-added animation.
Special Properties and Callbacks

Add any of these to your vars object to give your animation special powers:

gsap.timeline({onComplete: myFunction, repeat: 2, repeatDelay: 1, yoyo: true});

All of timeline’s vars properties are described below:
Property 	Description
autoRemoveChildren 	Boolean If autoRemoveChildren is set to true, as soon as child tweens/timelines complete, they will automatically get killed/removed. This is normally undesireable because it prevents going backwards in time (like if you want to reverse() or set the progress lower, etc.). It can, however, improve speed and memory management. The root timelines use autoRemoveChildren: true.
callbackScope 	Object The scope to be used for all of the callbacks (onStart, onUpdate, onComplete, etc.). The scope is what this refers to inside any of the callbacks.
delay 	Number Amount of delay in seconds before the animation should begin.
onComplete 	Function A function that should be called when the animation has completed.
onCompleteParams 	Array An array of parameters to pass the onComplete function. For example, gsap.timeline({onComplete: myFunction, onCompleteParams: ["param1", "param2"]});.
onRepeat 	Function A function that should be called each time the animation repeats.
onRepeatParams 	Array An Array of parameters to pass the onRepeat function. For example, gsap.timeline({onRepeat: myFunction, onRepeatParams: ["param1", "param2"]});.
onReverseComplete 	Function A function that should be called when the animation has reached its beginning again from the reverse direction. For example, if reverse() is called the tween will move back towards its beginning and when its time reaches 0, onReverseComplete will be called. This can also happen if the animation is placed in a timeline instance that gets reversed and plays the animation backwards to (or past) the beginning.
onReverseCompleteParams 	Array An array of parameters to pass the onReverseComplete function. For example, gsap.timeline({onReverseComplete: myFunction, onReverseCompleteParams: ["param1", "param2"]});.
onStart 	Function A function that should be called when the animation begins (when its time changes from 0 to some other value which can happen more than once if the tween is restarted multiple times).
onStartParams 	Array An array of parameters to pass the onStart function. For example, gsap.timeline({onStart: myFunction, onStartParams: ["param1", "param2"]});.
onUpdate 	Function A function that should be called every time the animation updates (on every frame while the animation is active).
onUpdateParams 	Array An array of parameters to pass the onUpdate function. For example, gsap.timeline({onUpdate: myFunction, onUpdateParams: ["param1", "param2"]});.
paused 	Boolean If true, the animation will pause itself immediately upon creation.
repeat 	Number Number of times that the animation should repeat after its first iteration. For example, if repeat is 1, the animation will play a total of twice (the initial play plus 1 repeat). To repeat indefinitely, use -1. repeat should always be an integer.
repeatDelay 	Number Amount of time in seconds between repeats. For example, if repeat is 2 and repeatDelay is 1, the animation will play initially, then wait for 1 second before it repeats, then play again, then wait 1 second again before doing its final repeat.
repeatRefresh 	Setting repeatRefresh: true causes a repeating timeline to invalidate() all of its child tweens and re-record their starting/ending values internally on each full iteration (not including yoyo's). This is useful when you use dynamic values (relative, random, or function-based). For example, x: "random(-100, 100)" would get a new random x value on each repeat. duration, delay, and stagger do NOT refresh.
smoothChildTiming 	Boolean Controls whether or not child animations are repositioned automatically (changing their startTime) in order to maintain smooth playback when timing-related properties are changed on-the-fly. For example, imagine that the timeline’s playhead is on a child tween that is 75% complete, moving element’s left from 0 to 100 and then that tween’s reverse() method is called. If smoothChildTiming is false (the default except for the globalTimeline), the tween would flip in place, keeping its startTime consistent. Therefore the playhead of the timeline would now be at the tween’s 25% completion point instead of 75%. See the "How to timelines work?" section below for details.
yoyo 	Boolean If true, every other repeat cycle will run in the opposite direction so that the tween appears to go back and forth (forward then backward). This has no affect on the reversed property though. So if repeat is 2 and yoyo is false, it will look like: start - 1 - 2 - 3 - 1 - 2 - 3 - 1 - 2 - 3 - end. But if yoyo is true, it will look like: start - 1 - 2 - 3 - 3 - 2 - 1 - 1 - 2 - 3 - end.

Defaults

Anything in the defaults object of a timeline gets inherited by its child animations when they get created, so if you find yourself setting the same ease or duration (or any value) over and over again, this can help make your code more concise. For example:

// WITHOUT defaults (long)
var tl = gsap.timeline();
tl.to(".class1", {rotation: -270, duration: 1, ease: "elastic"})
  .to(".class2", {rotation: -360, duration: 1, ease: "elastic"})
  .to(".class3", {rotation: -180, duration: 1, ease: "elastic"});

//WITH defaults (shorter)
var tl = gsap.timeline({ defaults: {duration: 1, ease: "elastic"} } );
tl.to(".class1", {rotation: -270}) //child tweens will inherit the duration and from the parent timeline!
  .to(".class2", {rotation: -360})
  .to(".class3", {rotation: -180});

Any defaults you set this way will get pushed into every child tween - it's not limited to a certain subset of properties. Inherited defaults are easily overwritten anytime a property is declared on a child animation.
Nesting

Nest timelines within timelines as deeply as you want. This lets you modularize your code and make it more maintainable. For example, you could build your animation in sections and stitch them together in a master timeline like:

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

## Exciting this to build



<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="jim-bateson" data-slug-hash="dyvGaRG" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grid animation">
  <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/dyvGaRG">
  Grid animation</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

 