---
layout: layouts/post.njk
title: Make an accessible <nav> with dropdowns
metaDesc: Navigation is a critical part of any application, it allows people to
  complete journeys and find the information they need. So making it accessible
  is key.
socialImage: /images/social-share-default.jpg
date: 2024-08-21T11:12:01.657Z
tags:
  - Accessibility
---
Navigation is a critical part of any application and can often involve many levels of nesting. It allows people to complete journeys and find the information they need. So making it accessible is key. HTML includes the <code>&lt;nav&gt;</code> landmark element to help with this.

<div class="post-note"><h3 id="heading-further-reading">Note<a href="#heading-note" class="heading-permalink"><span class="visually-hidden"> permalink</span><svg fill="currentColor" aria-hidden="true" focusable="false" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"></path></svg></a></h3><p>This article is currently under pull request <a href="https://www.a11yproject.com/">The A11y Project</a>. However, I wanted to post it whilst waiting on this. Once this is hopefully published in their How To section, I will remove it from this site.</p></div>

## The <code>&lt;nav&gt;</code> landmark element

Let's start with a quick overview of <code>&lt;nav&gt;</code>. The <code>&lt;nav&gt;</code> landmark element has semantic meaning and comes with accessibility benefits by using it to mark-up sections of navigation.

<blockquote>
	<p>The <code>&lt;nav&gt;</code> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</p>
	<footer>
		<cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav">MDN web docs: &lt;nav&gt;: The Navigation Section element</a></cite>
	</footer>
</blockquote>

Here's the example markup that we'll build up throughout this article. It's worth noting this is an example of accessible navigation.

```html
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Semantics

The <code>&lt;nav&gt;</code> element will communicate a role of navigation-equal to setting `role="navigation"`, meaning it can be easily navigated to by people with screen readers—as a landmark.

### Best practice

* Not all blocks containing links need to use <code>&lt;nav&gt;</code>. Use it for larger sections of navigation links. Overuse can create "noise" for people using screen readers.
* Uniquely label the <code>&lt;nav&gt;</code> to give a better idea of its purpose. This can be done with a heading or `aria-label` or `aria-labelledby`. **Note**: Screen readers will already announce the element as being navigation, so avoid using the word "nav" or "navigation" in the accessible name.
* For site navigation with more than two links, consider using a list (`<ul>` or `<ol>`) inside of the <code>&lt;nav&gt;</code>. This will allow people who use assistive technology to know how many links the list contains.

#### Using a heading & aria-labelledby

```html
<nav aria-labelledby="main-nav-label">
	<h2 id="main-nav-label" class="visually-hidden">Main</h2>

	<ul>
		...
	</ul>
</nav>
```

#### Using an aria-label

```html
<nav aria-label="Main">
	<ul>
		...
	</ul>
</nav>
```

## Adding dropdowns

Navigation often needs one or more levels of links underneath a top-level link. This results in using the dropdown pattern, whereby a hidden set of links are shown by interacting with the parent. This approach can nest links many levels deep.

* How would the navigation show if there were no styles?
* How should the parent link toggle the dropdown?
* How can focus order be handled correctly?
* Does the parent link still need to keep its link functionality?
* Make sure that dropdowns are hidden from assistive technology until needed.

Dropdown sub-navigation is typically marked up as a nested list inside of the parent link list item.

```html
<nav aria-label="Main">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">About</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Tip 1: No styles

Structuring the markup as shown in the previous example means without any CSS loaded, the links would show as a default nested list and items underneath the parent link, clear both visually and semantically.

### Tip 2: Parent link toggle

Navigation patterns will often attach a click/focus event to the entire parent link to reveal the dropdown of nested items. This comes with two problems:

1. Using a click means extra functionality is needed to handle the primary purpose of the parent link, which should itself act as a link.
2. By using focus, people traversing the navigation using a keyboard would be required to tab through all dropdowns regardless of whether they wanted to or not.

Adding a toggle element, for example, an arrow icon button, within the parent link allows people to only show the dropdown if they are interested in seeing further links associated with the parent. Make sure that the toggle element has enough of a tap/click (this pattern could be used for mobile as well) area and accessible focus/hover states.

**Note:** If your parent elements don't need to be a link themselves, make sure to use `<button type="button">` element, so that they can communicate they are expandable and have an event associated and benefit from all the accessible goodness buttons get for free.

```html
<nav aria-label="Main">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button type="button">
					<!-- Visual cue icon - for example a downward facing chevron -->
					<svg aria-hidden="true" focusable="false">
						<!-- Icon SVG code -->
					</svg>
					<span class="visually-hidden">Toggle About Us submenu</span>
				</button>
			</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Tip 3: Focus order

By nesting the dropdown list as a direct child of the parent list item, it means that when visible, the first link will be the next focusable element after the parent item toggle.

So adding a trigger inside the parent link is a great way to ensure a person intends to see the dropdown for that link and so take focus to the first link in said dropdown.

Related to focus, another nice feature would be to make sure that if the person pressed the <kbd>ESC</kbd> key, the dropdown would close, and the person's focus returns to the toggle element they used to open it.

### Tip 4: Parent link functionality

A parent link for a dropdown generally will still need to keep its functionality as a link. This can present problems, for example, a click event has been attached to it to reveal a dropdown. Giving people an explicit way to toggle the visibility of dropdowns via a separate control is a more accessible option.

### Tip 5: Showing/hiding the dropdown

When the navigation dropdown is closed, it's important to ensure the nested links are not visible to assistive technology. For example, people using a keyboard cannot tab to the links—this can lead to confusion on where their focus is on the page.

To hide elements such as sub-menus from assistive technology, you should not rely on `opacity`. Although visually hidden, it would still allow the dropdown to be discoverable via assistive technology. To ensure that dropdowns are hidden until people choose to access that sub-navigation, consider toggling the `display: none;` or `visibility: hidden;` properties.

## What about ARIA?

<blockquote>
	<p>Before you use ARIA,  use native HTML elements or attributes first. In the case that the semantics you are looking for is not available in HTML, then use ARIA.</p>
	<footer>
		<cite><a href="https://www.deque.com/blog/top-5-rules-of-aria/">Deque: Top 5 rules of ARIA</a></cite>
	</footer>
</blockquote>

When thinking about making some component interactions accessible, it's often assumed that more complex ARIA attributes and patterns may be needed. But a <code>&lt;nav&gt;</code> with dropdowns <strong>does not</strong> need any.

Although <code>&lt;nav&gt;</code> can be used without ARIA to create accessible navigation, there are things we can do with it to provide a better experience for people:

### Expanded states (aria-expanded)

The `aria-expanded` attribute can be used to communicate whether a toggle control is expanded or collapsed. In our navigation example, this could be useful to inform people using screen readers if the dropdown is open or not, based on whether the toggle is expanded or collapsed. This value of the attribute would need to be changed via JavaScript when the person opened and closed the dropdown.

```html
<nav aria-label="Main">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button aria-expanded="false">
					<!-- Visual cue icon - for example a downward facing chevron -->
					<svg aria-hidden="true" focusable="false">
						<!-- Icon SVG code -->
					</svg>
					<span class="visually-hidden">Toggle About Us submenu</span>
				</button>
			</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Current link (aria-current)

A common navigation design will see the currently active page link visually different in some way, indicating to the person which page they are on. But this isn't helpful for people who may not be able to see this distinction. The `aria-current` attribute can be used to inform assistive technology that a link is the current page. `aria-current` accepts a set list of values, the most suitable for the main navigation item would be `aria-current='page'`.

Using ARIA attributes as styling hooks can also be a helpful strategy in ensuring that we don't omit helpful or necessary accessibility semantics. [Ben Myers wrote this excellent post](https://benmyers.dev/blog/semantic-selectors/) (including an example for the `aria-current` scenario mentioned in the previous paragraph). The idea is, as well as not having two separate attributes to handle (a toggled class and an attribute), you're also considering accessibility upfront and ensuring that's part of the visual experience as well as benefits for assistive technology.

## Skip links

Although not technically required to make accessible navigation, making sure your site has a [skip link](https://www.a11yproject.com/posts/skip-nav-links/) that can be set to bypass the main site navigation is a handy usability feature. It allows someone to skip repeated site areas, such as the main navigation, so someone using assistive technology does not need to traverse this repetitive content on every page.

## Alternatives

Multi-level navigation with dropdowns often referred to as 'mega menus' can often be complex and need some thought to navigate. In certain cases, we might want to consider an alternative:

### In-page navigation/table of contents

One option could be to keep the top-level navigation as links only. Then, on their child pages, have an in-page navigation/table of contents. If the content length was suitable and the page didn't need to be broken out into further pages, these links would then anchor down the page to the relevant sections.

**Note**: There are [accessibility considerations to be aware of](https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/) when using this pattern.

### Local navigation

Local navigation can help people understand where they are, and what content might be related to the page they are on. This could look similar to the page of contents previously mentioned, but instead of the links anchoring, each would go to a separate page. Or it could sit below the main navigation, for example, but being individual to a page.

<blockquote>
	<p>Visible local navigation is usually beneficial when users engage in exploratory browsing, rather than known-item search. In such situations, users may visit several pages within a category — either because they do not know exactly what category they need, even though they have a sense of its neighborhood, or because they need to combine or compare information from multiple categories</p>
	<cite><a href="https://www.nngroup.com/articles/local-navigation/">Nielsen Norman Group: Local Navigation Is a Valuable Orientation and Wayfinding Aid</a></cite>
</blockquote>

**Note**: Be wary of changing how navigation appears and functions across multiple pages, predictability can be an important part of [cognitive accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility).

## Summary

Navigation provides consistent and critical paths for peple to navigate to important information they need to find. Therefore making sure it is accessible and inclusive is vital.

Overly complex ARIA solutions are not needed to acheive this. The <code>&lt;nav&gt;</code> landmark element provides a natively accessible way to mark up an area of navigation. Carefully considered ARIA can then be added to enhance the expereince for assistive technology users, not defnie and control it, for example the active page and accessible name.

If navigation requires dropdowns to provide mutiple nested levels of pages, again, semantic HTML can be used to nest `<ul>` or `<ol>` elements. As long as these dropdows are visually and programatically hidden from people until they choose to see navigate them. Again ARIA can be used to enhance these native semantics by announcing if the parent link/button toggle is expanded or collapsed, and in some screen reader cases, which element it controls.

With designers and developers working collaborativly to remove extra complexity from navigations (even with dropdowns) semantic, accessible HTML can be used to remove the need for inaccessible navigation solutions, that could create barriers for people trying to complete important journeys.