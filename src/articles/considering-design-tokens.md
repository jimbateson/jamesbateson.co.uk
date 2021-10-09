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
This week I watched the latest stream from SomeAnticsDev\[add link]. It was with Mike Aparicino and on the topic of creating design systems. There were a couple of ideas and principles they touched upon that resonated with me and I found myself nodding along with and I thought I'd jot them down here.

## Purpose of tokens
The first was how to structure/categorise your tokens. Splitting them out to both feed into each other, but also serve slightly different purposes, allowing more manageable and scaleable updating of your system in the future.

### Global tokens
High level, core branding etc. Change to alter sitewide things.

### Contextual tokens
Where bulk of styling will come from. Where and how global token values should be used. 'primary', 'accent' etc.

### Component tokens
More fine-grain controlling over how components should look can be made up of global and contextual tokens.
