---
layout: layouts/post.njk
title: Considering design tokens
metaTitle: Considering design tokens
metaDesc: Some interesting ideas learnt relating to design tokens.
socialImage: /images/social-share-default.jpg
date: 2021-10-09T11:57:57.513Z
tags:
  - CSS
---
This week I watched [the latest stream from SomeAnticsDev](https://www.twitch.tv/videos/1168203379). It was with Mike Aparicino and on the topic of creating design systems. There were a couple of ideas and principles they touched upon that resonated with me and I found myself nodding along with and I thought I'd jot them down here.

## Purpose of tokens
The first was how to structure/categorise your tokens. Splitting them out to both feed into each other, but also serve slightly different purposes, allowing more manageable and scaleable updating of your system in the future.

### Global tokens
High level, core branding, etc. Change to alter sitewide things.

### Contextual tokens
Where the bulk of styling will come from. Where and how global token values should be used. 'primary', 'accent' etc.

### Component tokens
More fine-grain controlling over how components should look can be made up of global and contextual tokens.

## Token naming and accessibility
Using font-weight numbering pattern. Trying to set rules to look out for in terms of matching what combinations would be accessible.

## Making life easier for developers
Less CSS needed, no random values being entered. Design/developer collab.

## Token generation and managing tools
- Amazon tool
- Design systems working group tool

Use these together.

## Looking ahead
Auto-generate tokens from Figma designs. JSON format and then convert to CSS.
