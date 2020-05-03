---
layout: layouts/post.njk
title: Using transitionend and animationend
date: 2019-09-15T06:49:57.968Z
tags:
  - JS
---
This is less of a write-up, more of a note to myself of things to remember when using the `transitionend` and `animationend` events.
 
What do these events do? Well, they are fairly self-explanatory, they fire either when the transitions or animations on the element in question have finished. One thing that I have learned using this recently is that the event will fire for each property you are transitioning. So using `transition: all .3s` for example, might not be the best idea (IMO shouldn't use that anyway, just transition what you need).
 
## Example
 
I had a fairly simple case to use this and to be fair, maybe it wasn't needed. However, I had been meaning to have a play around with how it worked for a while.
 
I was building a little UI prototype on codepen. When clicking an icon an extra element was added to the DOM, clicking any other icon then removed this element again. Adding the element and having it transition was straightforward, I just set an animation on the element, which ran when it was added, resulting in a nice smooth transition in. However, when I wanted to remove the element with the same smooth transition out, it was not working as even though I had set the animation to reverse, it was just being remove from the DOM immediately, which gave a kind of 'jumping' effect.
 
Enter `transitionend` with this, I could tell the JS to only remove the element from the DOM once my reversed animation had finished, cool!
 
```js
objAdd.addEventListener('transitionend', () => {
    // This removes the class that has added the reverse animation
    objAdd.classList.remove('icon-add--removing');
    // Remove the element from the DOM
    objBar.removeChild(objAdd);
});
```
 
## Things to learn
 
One thing that I still do need to dig a bit deeper into here is why `transitionEnd` works in this case, but trying to use `animationEnd` does not. I am using animation to change the properties, so I would expect that to fire.
 
```css
@keyframes show-button {
    0% {
        flex-grow: 0;
        margin-top: -150px;
        opacity: 0;
        transform: scale(0);
    }
	
    50% {
        flex-grow: 1;
    }
	
    100% {
        margin-top: -75px;
        opacity: 1;
        transform: scale(1);
    }
}
```
 
However, when experimenting with both events, I can only ever get `transitionend` to fire. I'll update this article once I have looked into this some more!
 
If you would like to see the full demo of the little UI experiment I was tinkering with, here's the codepen.
 
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="jim-bateson" data-slug-hash="JgmKRz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Mobile icon bar">
 <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/JgmKRz/">
 Mobile icon bar</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
 on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
 
