---
layout: layouts/post.njk
title: Making tabs accessible
metaDesc: Learnings from making an aria tab component accessible.
date: 2022-01-15T15:12:52.509Z
tags:
  - Accessibility
---
Whilst investigating some accessibility audit feedback for a client at work recently, I was required to do some research into what makes the aria tab pattern fully accessible and apply this to our component to make sure it was inclusive. I learned a lot and thought it would be useful to document these for my future self.

## The problem
The report described the issue as 'mouse dependant areas' with the following description:

> Add description from the audit here

It's worth noting that this is a legacy codebase, and it was apparent that an effort had been made to make the component accessible, which I think is commendable. The issue was that the aria had been misused, creating more problems than it was intended to solve. [Highlighting the point that aria should be used only when needed and properly](https://www.w3.org/TR/using-aria/).

> No ARIA is better than Bad ARIA

<div class="post-note"><h3>Must read</h3><p>There are a couple of resources that are my go-to when learning how to make common component patterns accessible and both came in handy here. The first are the [aria authoring practices examples](https://www.w3.org/TR/wai-aria-practices/)</p></div>

## aria-selected

## role="tab"

## Arrow key behavior

## Focus behavior

## Tabindex