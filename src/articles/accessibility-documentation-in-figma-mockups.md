---
layout: layouts/post.njk
title: Accessibility documentation in Figma mockups
metaDesc: Some learnings I took from a wonderful talk by Stéphanie Walter on
  plugins and toolkits that can be used to document accessibility in Figma.
socialImage: /images/social-share-default.jpg
date: 2024-07-15T16:52:07.957Z
tags:
  - Design
  - Figma
  - Accessibility
---
Last week (July 10th) I attended an excellent online talk from Friends of Figma. The speaker was Stéphanie Walter, a UX and Product Designer and the topic was plugins and annotation kits you can use in Figma to document accessibility in design mockups.

A [previous study from Deque](https://www.deque.com/blog/auditing-design-systems-for-accessibility/#design-should-consider-accessibility) found that 67% of acceddibility issues originate in design, meaning that accessibility tooling, learning and understanding is vitally important.

I'm not going to run through each plugin, please do [read Stéphanie's accompaining article](https://stephaniewalter.design/blog/how-to-check-and-document-design-accessibility-in-your-figma-mockups/) which contains a full list of the plugins and a link to the talk slides and a video of the talk. But I wanted to write a little about my learnings from the talk, highlight a couple of the plugins and talk about how important doing this can be to design-developer collaboration.

## Plugins

Going to start by just running through three of the plugins Stéphanie highlighted and demoed. Some of these I have used before, or wish I could have used more before when collaborating with designers, but some were also new to me.

### Annotation Kit

[Get the annotation kit](https://shop.stephaniewalter.design/b/accessibility-interactions-designer-checklist-annotation-kit).

An accessibility annotation kit is a series of labels that can be used to identify accessibility considerations on a design.

Landmarks, links, heading levels, alternative text and more can be labelled and highlighted next to or within the mockup. The link above is to the one Stéphanie has curated and made available for purchase, there are other examples out there.

When working Code I tried to help get buy-in and encourge the use of a similar kit to this, as I think there are at least a couple of major benifits to making this part of the design-development workflow.

#### Education and collaboration

Whilst in theory I love the idea of designers using this kit as part of the their mockup process. In practice I have found that workflow and mindset change can take time, and especially when the designer might not nescesserily have knowledge of HTML, or the process might add time on to delivery expectations. Having people inexperinced with accessibility and design, may also lead to confusion and do more harm than good.

I have found from using a similar kit, that it's a great opportunity to encourge more design-developer collaboration and communication earlier and can also provide an excellent learning and understand opportunity for people.

At Code we used to have a developer run lead the session and drive, adding the labels and explaining the process and answering any questions people may have had. This was an opportunity for instant feedback if something might need to be tweaked, and everybody could get context of why. I think it was also a great opportunity for designers who may not have coding experince to see the kinds of decisions and thought that needs to go into crafting components and pages in a semantic and accessible way.

#### Accessibility earlier

By considering how components and/or pages might be structured semantically at the design stage, encourages accessibility to be considered earlier in the process (or 'shift left'), not just done at the development stage. Although accessibility should be considered even earlier in the process. I think the annotation kit is an excellent way to make sure that when the developer starts building the mockup, how the markup might be structured has already been thought about, and there is less chance something will be missed.

### Focus Order

[A11y - focus Order plugin from Microsoft](https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order)

When designing components with several interactive elements or potentially complex interactions, focus/tab order issues can often arise when it comes to development.

This plugin enables you to annotate focus order numbers to elements in the mockup. this helps developers understand the intended order that keyboard focus navigation should take. There's multiple options for adding and removing and the ability to re-order if you make a mistake. Can be toggled on/off as a single layer group.

Interactive elements that have styling applied to lay them out and the change the visual order from the order they appear in the DOM, can be confusing and furstrating when relying on using the keyboard navigate a site, so considering this and documenting it at the design phase makes intent clear and ensures a good user experince for keyboard users. Thinking about a journey from the perspective of using a different input to a mouse can also improve the UX/UI of a component and page.

### Stark in Figma

## Collaboration