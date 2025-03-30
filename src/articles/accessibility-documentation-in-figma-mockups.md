---
layout: layouts/post.njk
title: Accessibility documentation in Figma mockups
metaTitle: Accessibility documentation in Figma mockups
metaDesc: Some learnings I took from a wonderful talk by Stéphanie Walter on
  plugins and toolkits that can be used to document accessibility in Figma.
socialImage: /images/social-share-default.jpg
date: 2024-08-09T13:55:07.178Z
tags:
  - Accessibility
  - Design
  - Figma
---
Last month (July 10th) I attended an excellent online talk from Friends of Figma. The speaker was Stéphanie Walter, a UX and Product Designer, and the topic was plugins and annotation kits you can use in Figma to document accessibility in design mockups.

A [previous study from Deque](https://www.deque.com/blog/auditing-design-systems-for-accessibility/#design-should-consider-accessibility) found that 67% of accessibility issues originate in design, meaning that accessibility tooling, learning, and understanding are vitally important.

I'm not going to run through each plugin, please do read Stéphanie's accompanying article which contains a full list of the plugins a link to the talk slides, and a video of the talk. But I wanted to write a little about what I learned from the talk, highlight a couple of the plugins, and talk about how important doing this can be to design-developer collaboration.

## Plugins

I will start by just running through three of the plugins Stéphanie highlighted and demoed. Some of these I have used before, or wish I could have used more before when collaborating with designers, but some were also new to me.

### Annotation Kit

[Get the annotation kit](https://shop.stephaniewalter.design/b/accessibility-interactions-designer-checklist-annotation-kit).

An accessibility annotation kit is a series of labels that can be used to identify accessibility considerations in a design.
Landmarks, links, heading levels, alternative text, and more can be labeled and highlighted next to or within the mockup. The link above is to the one Stéphanie has curated and made available for purchase, there are other examples out there, for example, the [Include—Accessibility Annotations](https://www.figma.com/community/plugin/1208180794570801545/includeaccessibility-annotations) kit.

When working at Code I tried to help get buy-in and encourage using a similar kit to this, as I think there are at least a couple of major benefits to making this part of the design-development workflow.

### Education and collaboration

While in theory, I love the idea of designers using this kit as part of their mockup process. In practice, I have found that workflow and mindset change can take time, especially when the designer might not necessarily have knowledge of HTML, or the process might add time to delivery expectations. Having people inexperienced with accessibility and design, may also lead to confusion and do more harm than good.

I have found from using a similar kit, that it's a great opportunity to encourage more design-developer collaboration and communication earlier and can also provide an excellent learning and understanding opportunity for people.

At Code we used to have a developer lead the session and drive, adding the labels explaining the process and answering any questions people may have had. This was an opportunity for instant feedback if something might need to be tweaked, and everybody could get context for why. I think it was also a great opportunity for designers who may not have coding experience to see the kinds of decisions and thoughts that need to go into crafting components and pages in a semantic and accessible way.

### Accessibility earlier

Considering how components and pages might be structured semantically at the design stage, encourages accessibility to be considered earlier in the process (or 'shift left'), not just done at the development stage. Accessibility should be considered even earlier in the process.
 
I think the annotation kit is an excellent way to make sure that when the developer starts building the mockup, how the markup might be structured has already been thought about, and there is less chance something will be missed.

## Focus Order

[A11y - focus Order plugin from Microsoft](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order).

When designing components with several interactive elements or potentially complex interactions, focus/tab order issues can often arise when it comes to development.

This plugin enables you to annotate focus order numbers to elements in the mockup. this helps developers understand the intended order that keyboard focus navigation should take. There are multiple options for adding and removing and the ability to re-order if you make a mistake. Can be toggled on/off as a single-layer group.

Interactive elements that have styling applied to lay them out and change the visual order from the order they appear in the DOM, can be confusing and frustrating when relying on using the keyboard to navigate a site, so considering this and documenting it at the design phase makes the intent clear and ensures a good user experience for keyboard users. Thinking about a journey from the perspective of using a different input to a mouse can also improve the UX/UI of a component and page.

## Stark in Figma

[Stark - Contrast & Accessibility Checker](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker).

Stark is a plugin that I have read a lot about and seen news about awesome features added, but have heard from designers that a lot of the features were premium-only, so it was nice to see it being used in a demo. Having looked at their pricing plan page afterward, it does seem like on the free starter plan you get by creating an account, you get all of the accessibility checking tools, just not the sidekick ones which help automatically fix issues (not sure if I'd want that anyway!).

This plugin is a collection of tools that effectively make up an automated accessibility testing suite. It can help check this such as colour contrast (with suggestions), tap target sizes, focus order, vision simulator, and more.

I'm going to give this one and install and try it out, as it looks like something that could be used to check and document many different accessibility features. All the communications and tools I've seen from Stark previously also suggest they are passionate about accessibility tooling and always looking to improve and add extra support and improvements.

## Collaboration

A major benefit I have found using the annotation kit and also saw with the other plugins Stéphanie showed, was the increased collaboration, accessibility awareness/considerations, and shared language opportunities between design and development.

Rather than designs being passed to development with accessibility issues, or difficult-to-build components and interfaces, decisions and documentation can be more agile and collaborative.

While some of the plugins may require developers to lead a session. There are many chances for collaborative learning and upskilling, that could then inform future design decisions.

### Can't replace human interaction
One point that resonated with me was that much like automated accessibility testing, these plugins do not replace having conversations with people about accessibility, other designers, developers, etc.

Whilst these tools provide helpful ways to consider accessibility. They could cause more confusion if not used correctly, or somebody misinterpreted an intention. Short huddles/conversations/pairing sessions and using the tools to lead the chat could save a lot of time and aid the collaboration and learning experience.