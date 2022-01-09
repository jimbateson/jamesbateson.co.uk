---
layout: layouts/post.njk
title: Considering design tokens
metaTitle: Considering design tokens
metaDesc: Some interesting ideas learnt on approaching design tokens and how and
  why they might be used.
socialImage: /images/social-share-default.jpg
date: 2021-10-09T11:57:57.513Z
tags:
  - CSS
---
Recently I watched [the latest stream from SomeAnticsDev](https://someantics.dev/build-your-own-design-system/) featuring Mike Aparicino and on the topic of creating design systems. There were some approaches and principles they touched upon that resonated with me and I thought may be a useful approach when starting a new project, so just thought I would write some of my takeaways up to look back on.

## What is a design token?
A design system is a collection of visual style decisions. For example, colour palette, typography, spacing, etc and design tokens are a way we can translate these into code. Whilst they are similar to variables ([they are much more powerful](https://piccalil.li/tutorial/what-are-design-tokens/)), design tokens allow us to use these values cross-platform, so not only on the web but also android, iOS even keynote, etc.

## Separating the purpose of tokens
How to organise and categorise your tokens. Splitting them out to both feed into each other, but also serve slightly different purposes. Allowing more manageable and scaleable updating of your system in the future.

1. ### Global tokens
High level, core settings. Colours, fonts, spacing, etc. Changing these will result in changing something everywhere.

```css
/* Global tokens */

--color-yellow-400: #ffe900;
--color-yellow-500: #ffe000;
--color-yellow-600: #d0bd33;

--font-size-400: .85rem;
--font-size-500: 1rem;
--font-size-600: 1.25rem;

--spacing-400: .85rem;
--sapcing-500: 1rem;
--spacing-600: 1.25rem;

--line-height-body: 1.4;
--line-height-heading: 1.2;
```

2. ### Contextual tokens
Where the bulk of styling will come from. Where and how global tokens should be used. 'primary', 'accent', etc. Change to alter multiple components in certain contexts.

3. ### Component tokens
Finely tuned control over how individual components should look. Can refer back to global and contextual tokens. Change component visuals without touching any CSS.

## Token naming and accessibility
Using font-weight numbering pattern. Trying to set rules to look out for in terms of matching what combinations would be accessible. Change to control specific components. Font-size scale. Ensure that accessible patterns are setup and then reused.

## Resiliance

## Making life easier for developers
Less CSS needed, no random values being entered. Design/developer collab.

## Token handling tools
* [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/) - store key/value pairs as JSON and export them to a form the language/platform format required. 
* [Design systems working group tool](https://github.com/design-tokens/community-group)

Use these together.

## Looking ahead
Auto-generate tokens from Figma designs. JSON format and then convert to CSS.
