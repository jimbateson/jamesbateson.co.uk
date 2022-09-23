---
layout: layouts/post.njk
title: 5 HTML elements and a partridge in a dis-pear tree
socialImage: /images/social-share-default.jpg
date: 2022-09-23T11:32:47.946Z
tags:
  - HTML
  - Accessibility
---
HTML is a beautiful programming language. It comes with so many out-of-the-box accessibility benefits - it conveys semantic meaning to assistive technology - enabling people to consume content and complete often important journeys that outside of the web they may not be able to do. So why is all that goodness we can get for free ignored so often?

To expand on that point a little, why do we ignore native HTML elements that will tell people exactly what it's purpose is and enable them to interact with it, and use overly complex ARIA-laden JavaScript solutions? Some of this may come down to how something is designed, in other cases it may be misuderstanding or copied-and-pasted bad practices. In this article I'm going to highlight 5 common issues I see where semantic HTML has been ignored.

## `<button>`
Let's start with an example that people will no-doubt have seen many discussions around-interactive buttons.

A button is often used to toggle or activate some dynamic functionality for a user, that could be to reveal a menu with important pages included, submit a form, toggle expandable content and so on.

HTML includes the `<button>` element. This tells people that it can be interacted with and can help communicate the state of a component. By default it is focusable and comes with some browser default styles.

Unfortunantaly a pattern that is reached for far to often, and in the wrong circumstances is to turn a non-interactive element in a faux button.

This can be achieved with an ARIA role:

```html
<div role="button" tabindex="0">Why</div>
```

TODO: Link to Fable assistive technology dictionary/glossary/defenition

This div would now be announced as an interactive element by assitive technology, this is all well and good, but why?

As well as this extra role, we'd also then need to handle focus states manually using JavaScript and the `tabindex` attribute. This adds unescessay compliexty and requires the user to download JavaScript just to do something that could be done with a native element.

```html
<button>That's better</button>
```
TODO: Link to 5 rules of ARIA (no ARIA is better than bad ARIA, should only be a last resort etc)

It's worth noting that there are circumstances that might warrent using this ARIA pattern. But consider these rules of ARIA when deciding on this-

### Extra considerations
Whilst using a native button is a great start, there are some other things to think about:

TODO: add links to articles here

- Suitable button text (make sure it has an accessible name)
- Should it be a button or a link (`<a>`)

These points are beyond the scope of this article, but the links provided are great resources for helping create a great button (or link).

## `<select>`

## `<nav>`

## `<ul/ol>`

## `<fieldset>`

## Further reading

TODO: Useful links I've come across whilst researching/learning 'over the years'