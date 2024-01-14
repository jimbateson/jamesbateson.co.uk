---
layout: layouts/post.njk
title: Accessibility for content editors
metaTitle: Accessibility for content authors
metaDesc: How can we ensure that accessibility good practices are understood and
  passed onto content editors.
socialImage: /images/social-share-default.jpg
date: 2024-01-13T12:42:25.500Z
tags:
  - Accessibility
---
## Accessibility is everybody's responsibility

During a product lifecycle, our aim is to move accessibility considerations and conversations earlier in the process (referred to as 'shifting left'). This involves cross-discipline teams colloborating and considering peoples expereinces at each stage of the process. However, if once you ship a product, what happens if the content editors that will manage the site going forwards are external, unaware of accessibility requirements and not technically proficient. How can we ensure that our hard work in making a product accessible is not undone, or falls into a cycle of having to constantly remedy the same problems.

## Not a blame game

First off, this is defnitely not a finger pointing excerise at content authors. They often have lots of content to edit, articles to add etc on a daily basis. It may be that the tools they have to do this are not suitable, or training on these tools has not been sufficient.

There are also many content authors out there that are following accessibility best practices and upholding these standard across their teams.

The aim of this article is to look at ways we can better assist content authors in learning about and being aware of accessibility considerations when we hand over a product.

## Education

A great place to start can be to signpost people in the direction of resources that can help them learn more about why accessibility is so important and to learn what responsibilities they may have to ensure standards are met.

As part of the accessibility champions network at Code Computerlove, we encourge new starters and people wanting to learn more to take the free [W3C digital accessibility foundations course](https://www.w3.org/WAI/courses/foundations-course/). This is a course is non-technical and suitable for a variety of disciplines, including content authors. This could be an ideal resource to get people understanding accessibility.

Another way at Code we have engaged external people with the importance of accessibility is to deliver a fundementals skillshare. Like the W3C course, this can introduce people from different disciplines to why accessibility is so important. It's again chance to pass on exterpise and passion around the subject in a face-to-face session, a mix of educational slides and facts mixed with some hands-on interactive exercies, such as, mouse-free browsing tasks can really help deliver the message and put people in the position of their users and the barriers they may face.

## Why and how not just the doing

One of the most valuable ways to pass on accessibility knowledge, habits and more importantly, the **why** of the importance of accessibility and the barriers it can create if not considered can be to involve people that will be editing content when reviewing, identifiying and fixing accessibility issues.

A legacy client project that I worked on received an accessibility audit, it flagged many issues, some that we could remedy in the codebase and a result of some bad ARIA useage (that's another article). However, a large percentage of them, were from pages/templates that were populated with content via the CMS (static page templates, news articles etc).

Whilst investigating a cross-section of these pages to find the common issues and the ones raised in the audit, we introduced the main content authors to one of the tools we were using to do this.

### WAVE

We wanted to demonstrate a tool that would be easy for people with little to no technical knowledge to understand and use. The [WAVE tool from WebAIM](https://wave.webaim.org/) felt like the ideal option. It's a tool that I'll often start with when investigating accessibility of a site/component. It adds icons to the page so people can see where the errors and warnings have occured. It also offers explainations of issues it find in easier ways to understand than official documentation, and in ways that might make more sense to add to ticket/rely to collegues. If WCAG guidelines are something that are understood and required, it also links off to the success criteria that issues relate to.

Wave also has inbuilt tools to check colour contrast and crucially for content editors a content structure visualiser.

We demo'd Wave on a call with the content editors and went through these features and helped them get it installed in their browsers.

Showing the content editors what these tools were, how to use them and what to look out for made a real impact. It gave them a way to check new content they were adding and also learn more about common issues as they went along, avoiding them resurfacing in the future and ending up back at square one.

## Handovers