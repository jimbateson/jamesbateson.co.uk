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

So now we know the initial issue that was reported and have some examples of how tabs should be marked up and function accessibly, I'm going to run through each point I learned whilst fixing my broken component. Note that I've removed/edited some attribute names for brevity.

## role="tab"
From my reading of the issue in the report, this seemed to be the main thing wrong. Here is an example of how the markup looked for a tab (this shows the one selected by default when the page loads).

```html
<div role="tab" aria-controls="tab-1-content">
    <fieldset>
        <legend class="u-visually-hidden">tab 1 sr only text</legend>
        <input data-tab="tab-1" id="tab-1-id" value="tab 1 value" type="radio" name="tab-1-name" checked="checked" class="is-active" aria-selected="true">
        <label for="tab-1-id" id="tab-1-label">Tab label</label>
    </fieldset>
</div>
```
[According to the aria specs](https://www.w3.org/TR/wai-aria-1.1/#tab), an element with a tab role marks its children as presentational. This is an issue in our case as we have a radio input inside of the tab, but this will be hidden from the accessibility tree (as the report mentions screen readers included).

You'll also probably notice how the markup is a little bit overkill for what we need here, there are form elements being used outside of a form, use of a label and visually hidden text, and our tab role is set on a `<div>`.

I chose to simplify this and use a more suitable and semantic element for our tabs: `<button>`. Whilst being an interactive element it also comes with accessibility bonuses for free.

```html
<button class="is-active" role="tab" aria-controls="tab-1-content" id="tab-1-id" aria-selected="true" data-tabs-button="0">Tab 1 label</button>
```
Much better!

## aria-selected
Another incorrect ARIA implementation you may have noticed from the original markup is that `aria-selected` was on the wrong element. It needs to be on the tab role element itself, being applied to the radio input was causing an accessibility issue.

## Arrow key behavior
There are three arrow key behaviors we need to consider for tabs. It sounds confusing, but the tab key should not be used to tab between tabs(?!). More on that in the focus section.

1. Left arrow — should switch the active tab to the previous tab item. If you have quite a few tabs it might be worth adding the ability to jump to the last tab if the first one is active.
2. Right arrow — should switch the active tab to the next tab item. Again it might be worth adding the ability to jump back to the first tab if the active tab is the last one in the tablist.
3. Down arrow — should switch the users focus to the open tabpanel (content) for the currently active tab.

## Focus behavior

## Tabindex

## aria-labelledby