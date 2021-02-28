---
layout: layouts/post.njk
title: I repaired my water heater
socialImage: /images/social-share-default.jpg
date: 2021-02-28T12:46:48.788Z
tags:
  - Misc
  - UX
---
Ok, so this post initially doesn't really seem like it has anything to do with development and UX, and in truth, it doesn't really. It's just a little note of a reminder that the decisions we make when building applications and interfaces, can have a real impact on users.

To cover off the boring bit, last night, a fault light appeared on my water storage heater, meaning if I didn't try and fix it, I would have no hot water. This could have been an issue, especially with how uncertain and stressful having someone come out to your house can be at the moment.

I have very limited DIY skills, and an even more limited set of tools (basic screwdrivers and hammers, etc), after reading some articles on what the issue could be, it seemed that my thermostat might have tripped, so I turned to YouTube to see if anyone had any video walkthroughs of how I could reset the unit (the advised first fix to try).

It seemed quite simple, first remove the front panel from the unit, then find the reset button and press it. However, in reality when you don't really know anything about electronics and how they work, seeing the circuit board and nothing that looked like a button was quite daunting.

Upon closer inspection, there was a handily placed label, near a control that looked nothing like a button, that read "Thermostat reset". This drew my attention to another small component that then had a small indicator of how to unscrew and reveal the reset button.

A lot of waffle there, and not really sure where I was going with this. It just hit me that one person's decision to include that small label greatly improved the experience I had when studying the unit. Translated to the web, it made me think about how when we build a UI or add some functionality to a component, it's easy to forget that it's obvious to us building it what things are meant to do, and have expectations on how a user may interact with it. But adding little helpful pointers to assist people who may not be as knowledgable or technically-minded can really improve their experience of your product.

These could be little things as simple as:
* Labelling form fields suitable, and in a place where they are visible at all times when the user is still typing
* Providing helper text for form fields that might be more complex
* Choosing suitable iconography so a user isn't confused by a button's purpose - or possibly providing a small text context for it if that would be better

I was really pleased that I managed to solve my issue and now have hot water again and hopefully won't have to get somebody out to fix it, incurring the stress and cost that would come with that. All because of one little label.