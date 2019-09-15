---
layout: layouts/post.njk
title: Using transitionEnd and animationEnd
date: 2019-09-15T06:49:57.968Z
tags:
  - JS
---
This is less of a write up, more of a note to myself of things to remember when using the `transitionEnd` and `animationEnd` events.

What do these events do? Well, they are faily self explanatory. They fire either when the transitions or animations on the element in question have finished. One thing that I have learnt using this recently is that the event will fire for each property you are transitioning. So using `transition: all .3s` for example, might not be the best idea (IMO shouldn't really use that anyway, just transition what you need).

## Example

I had a fairly simple case to use this, and to be fair, maybe it wasn't needed. However, I had been meaning to have a play around with how it worked for a while.

I was building a little UI prototype on codepen. When clicking an icon an extra element was added to the DOM, clicking any other icon then removed this element again. Adding the element and having it transition was straightforward, I just set an animation on the element, which ran when it was added, resulting in a nice smooth transition in. However, when I wanted to remove the element with the same smooth transition out, it was not working as even though I had set the animation to reverse, it was just being remove from the DOM immediately, which gave a kind of 'jumping' effect.

Enter `transitionEnd` with this, I could tell the JS to only remove the element from the DOM once my reveresed animation had finished, cool!
