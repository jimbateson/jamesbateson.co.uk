---
layout: layouts/post.njk
title: Accessibility for content editors
metaTitle: Accessibility for content editors
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

First off, this is defnitely not a finger pointing excerise at content editors. They often have lots of content to edit, articles to add etc on a daily basis. It may be that the tools they have to do this are not suitable, or training on these tools has not been sufficient.

There are also many content editors out there that are following accessibility best practices and upholding these standard across their teams.

The aim of this article is to look at ways we can better assist content editors in learning about and being aware of accessibility considerations when we hand over a product.

## Education

## Why and how not just the doing

One of the most valuable ways to pass on accessibility knowledge, habits and more importantly, the **why** of the importance of accessibility and the barriers it can create if not considered can be to involve people that will be editing content when reviewing, identifiying and fixing accessibility issues.

A legacy client project that I worked on received an accessibility audit, it flagged many issues, some that we could remedy in the codebase and a result of some bad ARIA useage (that's another article). However, a large percentage of them, were from pages/templates that were populated with content via the CMS (static page templates, news articles etc).

Whilst investigating a cross-section of these pages to find the common issues and the ones raised in the audit, we introduced the main content editors to one of the tools we were using to do this.

### WAVE

We wanted to demonstrate a tool that would be easy for people with little to no technical knowledge to understand and use. The WAVE tool from webaim felt like the ideal option. It's a tool that I'll often start with when investigating accessibility of a site/component. It adds icons to the page so people can see where the errors and warnings have occured. It also offers explainations of issues it find in easier ways to understand than official documentation, and in ways that might make more sense to add to ticket/rely to collegues. If WCAG guidelines are something that are understood and required, it also links off to the success criteria that issues fall affect.

## Training

## Handovers