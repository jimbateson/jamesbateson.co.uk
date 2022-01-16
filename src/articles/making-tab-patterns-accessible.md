---
layout: layouts/post.njk
title: Making tabs accessible
metaDesc: Learnings from making an aria tab component accessible.
socialImage: /images/social-share-default.jpg
date: 2022-01-15T15:12:52.509Z
tags:
  - Accessibility
  - ARIA
---
Whilst investigating some accessibility audit feedback for a client at work recently, I was required to do some research into what makes the aria tab pattern fully accessible and apply this to our component to make sure it was inclusive. I learned a lot and thought it would be useful to document these for my future self.

## The problem
The report described the issue as 'mouse dependant areas' with the following description:

> Add description from the audit here

It's worth noting that this is a legacy codebase, and it was apparent that an effort had been made to make the component accessible, which I think is commendable. The issue was that the aria had been misused, creating more problems than it was intended to solve. [Highlighting that aria should be used only when needed and properly](https://www.w3.org/TR/using-aria/).

> No ARIA is better than Bad ARIA

<br aria-hidden="true" />

<div class="post-note"><h3>Must read</h3><p>There are a couple of resources that are my go-to when learning how to make common component patterns accessible and both came in handy here.</p><br/><p>The first are the <a href="https://www.w3.org/TR/wai-aria-practices/">aria authoring practices examples.</a> These serve as guides on how aria should be used to make accessible patterns along with concept explanations. Probably not the best idea to just copy and paste these examples, but use as a starting point to learn the features you need to implement.</p>
<br/>

<p>Secondaly there is <a href="https://inclusive-components.design/">Inclusive Components from Heydon Pickering</a>. I love how thorough the examples are in this book (also available as a physical book). Heydon starts by covering the minimum viable experience the component should cover, be that with no CSS/JS and then enhances with JS to make fully inclusive.</p></div>

So now we know the initial issue that was reported and have some examples of how tabs should be marked up and function accessibly, I'm going to run through each point I learned whilst fixing my broken component.

## role="tab"
From my reading of the issue in the report, this seemed to be the main thing wrong. Here is an example of how the markup looked for a tab (this shows the one selected by default when the page loads).

```html
```

## aria-selected

## Arrow key behavior

## Focus behavior

## Tabindex