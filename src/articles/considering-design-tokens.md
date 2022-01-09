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
Recently I watched [the latest stream from SomeAnticsDev](https://someantics.dev/build-your-own-design-system/) featuring Mike Aparicino and on the topic of creating design systems. There were some approaches and principles they touched upon that resonated with me and I thought it might be a useful approach when starting a new project, so just thought I would write some of my takeaways up to look back on.

## What is a design token?
A design system is a collection of visual style decisions. For example, color palette, typography, spacing, etc and design tokens are a way we can translate these into code. Whilst they are similar to variables ([they are much more powerful](https://piccalil.li/tutorial/what-are-design-tokens/)), design tokens allow us to use these values cross-platform, so not only on the web but also android, iOS even keynote, etc.

Design systems should be tech agnostic and work with any/different stacks, and setting up tokens can help make these transitions consistent, not just for development but also for design.

## Separating the purpose of tokens
How to organise and categorise your tokens. Splitting them out to both feed into each other, but also serve slightly different purposes. Allowing more manageable and scaleable updating of your system in the future.

1. ### Global tokens
High-level, core settings. Colors, fonts, spacing, etc. Changing these will result in changing something everywhere. Color, type, space, and size are such a large part of the CSS rules we write in a project. So setting up some core global tokens for these in a design system is key.

```css
/* Global tokens */

--color-black: #000;
--color-white: #fff;

--color-yellow-400: #ffe900;
--color-yellow-500: #ffe000;
--color-yellow-600: #d0bd33;

--color-blue-400: #265c85;

--font-size-400: .85rem;
--font-size-500: 1rem;
--font-size-600: 1.25rem;
--font-size-700: 2rem;
--font-size-800: 3rem;

--spacing-400: .85rem;
--sapcing-500: 1rem;
--spacing-600: 1.25rem;

--line-height-body: 1.4;
--line-height-heading: 1.2;
```

2. ### Contextual tokens
Where and how global tokens should be used. 'primary', 'accent', etc. Change to alter multiple components in certain contexts. Here we start to use more 't-shirt' sizing naming. This differentiates from our global tokens and makes more sense in contexts.

```css
/* Contextual tokens */

--color-text-default: var(--color-black);
--color-text-brand: var(--color-blue-400);
--color-text-accent: var(--color-yellow-400);

--text-small-font-size: var(--font-size-400);
--text-medium-font-size: var(--font-size-500);
--text-large-font-size: var(--font-size-600);
--heading-1-font-size: var(--font-size-800);
--heading-2-font-size: var(--font-size-700);

--spacing-xsmall: var(--spacing-400);
--spacing-small: var(--spacing-500);
--spacing-medium: var(--spacing-600);

--radius-small: var(--spacing-xsmall);
--radius-medium: var(--spacing-small);
--radius-large: var(--spacing-medium);
```

3. ### Component tokens
Finely tuned control over how individual components should look. Can refer back to global and contextual tokens. Change component visuals without touching any CSS values and adding random ones in.

```css
/* Component tokens */

--card-max-width: 300px;
--card-max-count: 3;
--card-link-underline: none;
--card-link-color: var(--color-text-default);
--card-image-radius: var(--radius-medium);
--card-text-size: var(--text-medium-font-size);
--card-heading-color: var(--color-text-brand);
--card-text-color: var(--color-text-default);

--button-text-color: var(--color-text-default);
--button-background-color: var(--color-background-accent);
--button-border: var(--border-width-thin) solid transparent;
--button-padding: var(--spacing-small) var(--spacing-medium);
--button-radius: var(--radius-small);
--button-font-size: var(--text-medium-font-size);
--button-font-weight: var(--font-weight-bold);
--button-hover-background-color: var(--color-background-accent-hover);
```
<div class="post-note">
<h3>Note</h3>
<p>I'm using a hundredth scale naming convention in the global token examples above (similar to font-weight). I find this an easy way to quickly tell if a certain color token would be lighter or darker, font-size smaller or bigger, etc, and also not having to resort to more obscure names (particularly useful for greyscales!). But not covering or worrying about naming tokens here.</p>
</div>

## Token accessibility
Trying to set rules to look out for in terms of matching what combinations would be accessible. This can actually be helped by using the numbering scale (see previous note) for token names, as it allows you to match up passing combinations relatively easily.

Having these rules set up, it ensures you're meeting contrast requirements when building components, which in turn means when building out your product using those components, you're using accessible patterns established in your tokens.

## Resilience

## Making life easier for developers
Less CSS needed, no random values being entered. Design/developer collab.

## Token handling tools
* [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/) - store key/value pairs as JSON and export them to a form the language/platform format required. 
* [Design systems working group tool](https://github.com/design-tokens/community-group)

Use these together.

## Looking ahead
Auto-generate tokens from Figma designs. JSON format and then convert to CSS.
