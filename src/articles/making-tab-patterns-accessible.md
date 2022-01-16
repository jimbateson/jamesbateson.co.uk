---
layout: layouts/post.njk
title: Making tabs accessible
metaDesc: Learnings from making an aria tab component accessible.
socialImage: /images/social-share-default.jpg
date: 2022-01-16T19:46:13.052Z
tags:
  - Accessibility
  - ARIA
---
Whilst investigating some accessibility audit feedback for a client at work recently, I was required to do some research into what makes the ARIA tab pattern fully accessible and apply this to our component to make sure it was inclusive. I learned a lot and thought it would be useful to document these for my future self. This is not a full tabs implementation guide. See the further reading note for more detailed guides on how to build a tabbed component.

Here are some terms that will be used throughout this article and any ways I may refer to them.

<dl>
<dt>tablist</dt>
<dd>Parent element for the individual tab role items. Must be present.</dd>
<dt>tab role, tablist item<dt>
<dd>The individual tabs that reveals its related tabpanel content. They should be direct children of an element with the tablist role set.</dd>
<dt>tabpanel</dt>
<dd>The content related to a tab, shown when the tablist item is active.</dd>
</dl>

## The problem
The report described the issue as 'mouse dependant areas' with the following description:

> An element with a role that hides child elements contains focusable child elements.
>
>This role element marks child elements as presentational, which hides them from the accessibility tree, but some of these children are focusable, so they can be navigated to, but are not voiced in a screen reader.

It's worth noting that this is a legacy codebase, and it was apparent that an effort had been made to make the component accessible, which I think is commendable. The issue was that the aria had been misused, creating more problems than it was intended to solve. [Highlighting that aria should be used only when needed and properly](https://www.w3.org/TR/using-aria/).

> No ARIA is better than Bad ARIA

<br aria-hidden="true" />

<div class="post-note"><h3>Further reading</h3><p>There are a couple of resources that are my go-to when learning how to make common component patterns accessible and both came in handy here.</p><br/><p>The first are the <a href="https://www.w3.org/TR/wai-aria-practices/">aria authoring practices examples.</a> These serve as guides on how aria should be used to make accessible patterns along with concept explanations. Probably not the best idea to just copy and paste these examples, but use as a starting point to learn the features you need to implement.</p>
<br/>

<p>Secondaly there is <a href="https://inclusive-components.design/">Inclusive Components from Heydon Pickering</a>. I love how thorough the examples are in this book (also available as a physical book). Heydon starts by covering the minimum viable experience the component should cover, be that with no CSS/JS, and then enhances with JS to make it fully inclusive.</p></div>

So now we know the initial issue that was reported and have some examples of how tabs should be marked up and function accessibly, I'm going to run through each point I learned whilst fixing my broken component. Note that I've removed/edited some attribute names/content for brevity.

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

I chose to simplify this and use a more suitable and semantic element for our tabs: `<button>`. Whilst being an interactive element it also comes with accessibility goodness for free.

```html
<button class="is-active" role="tab" aria-controls="tab-1-content" id="tab-1-id" aria-selected="true" data-tabs-button="0">Tab 1 label</button>
```
Much better!

## aria-selected
Another incorrect ARIA implementation you may have noticed from the original markup is that `aria-selected` was on the wrong element. It needs to be on the tab role element itself, being applied to the radio input was causing an accessibility issue. Now on the correct element screen reader announcement of the newley selected element is working.

## Arrow key behavior
There are three arrow key behaviors we need to consider for tabs. It sounds confusing, but the <kbd>tab</kbd> key should not be used to move between tabs(?!). More on that in the focus section.

* Left arrow — should switch the active tab to the previous tab item. If you have quite a few tabs it might be worth adding the ability to jump to the last tab if the first one is active.
* Right arrow — should switch the active tab to the next tab item. Again it might be worth adding the ability to jump back to the first tab if the active tab is the last one in the tablist.
* Down arrow — should switch the users focus to the open tabpanel (content) for the currently active tab. [If a screen reader user is navigating](https://webaim.org/resources/shortcuts/nvda#reading) through the page with the down arrow key, without setting this up they will be switched to the next tab in the tablist. By intercepting this and moving to the open tabpanel content it means this isn't missed.

After making sure these key bindings were setup, one more issue cropped up. When announcing the tabs, VoiceOver was only annoucing that there was one tab. This was strange as the tablist role was set on an element wrapping the tabs and both buttons had the tab role. The fix for this was to make sure that the tab elements are direct children of the tablist element. There was some extra grid related markup which nested the tab buttons an extra level. Removing these wrappers resulted in VoiceOver correctly announcing there where two tabs.

## Focus behavior
As well as the down arrow key functionality (see item 3 in the previous section) there are also two other focus related behaviors to setup.

* `tabpanel` — when the user presses the <kbd>tab</kbd> key they should not navigate between the tabs (see arrow key behavior on that pont). Instead focus should be given to the open tabpanel element that relates to the active tab. This means the user will not have to move past each tab to reach the content for that tab.
* Active tab — when the use is focused on the active tabpanel using <kbd>Shift</kbd> + <kbd>Tab</kbd> should take the users focus back to the active tab, not the last tab in the tablist and force them to move through them all to find the one they were on. This can be acheived by handling the `tabindex` of all tabs that are not active.

## Tabindex
This leads on nicely from the focus behavior, as it's the `tabindex` attribute that ensures the order of focus is suitable.

As mentioned in the previous section, we need to make sure that if the user has focus on the currently open tabpanel that using <kbd>Shift</kbd> + <kbd>Tab</kbd> returns them to the active tablist item. This can be done by ensuring that all tablist items have `tabindex="-1"` set, apart from the active item, which would have no tabindex set. This unsures that inactive tabs are not in the focus order, but do allow focus via a script (for using the arrow navigation).

Tabindex is also useful on the tabpanel itself. `tabindex="0"` should be set on each to ensure they are in a logical focus order and that the whole tabpanel will receive focus when tabbed to (make sure to set suitable styles for this focus state).

## aria-label
It's useful to add and `aria-label` to the element you have set the tablist role on. This is announced by a screen reader when focus enters the tabs component and can make it clear what they relate to. This could probably also be done with aria-labelledby or a suitable heading if within content that suited this approach.

## aria-labelledby
Make sure each tabpanel has this arrtibute set, and its value is that of the id of the related tablist item. This gives the content an accessible name that will be announced by a screen reader when focus is given to the tabpanel, making it obvious where the user is, and which related tab content they are now within.

## Summary
As mentioned at the start of this article, it is in no way a full implementation guide for the tab pattern. These are accessibility related learnings I have taken from a very misconfigured example I have recently fixed.

Tabs can be hard to get right, and it's worth considering if they are really the right way forward for what you're trying to acheive. The example I had, probably didn't in all honesty, and it has caused accessibility issues and complications when another developer has come to look at it.

However, if you do need to use them. These accessible considerations will ensure that users with different access needs will be able to navigate the tabs along with benefits for sighted/mouse users.