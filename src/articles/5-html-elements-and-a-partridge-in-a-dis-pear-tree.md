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

This div would now be announced as an interactive element by assistive technology, this is all well and good, but why?

As well as this extra role, we'd also then need to handle focus behaviour manually using JavaScript and the `tabindex` attribute. This adds unnecessary complexity and requires the user to download JavaScript just to do something that could be done with a native element.

```html
<button>That's better</button>
```

### Extra considerations

Whilst using a native button is a great start, there are other things to consider. Does your button have a suitable accessible name? If the buttons purpose it to take the user to another page, should it actually be a link?

- Suitable button text (make sure it has an accessible name) - TODO: Link needed
- [Links, Buttons, Submits, and Divs, Oh Hell](https://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html) - Adrian Roselli

These points are beyond the scope of this article, but the links provided are great resources for helping create a great button (or link).

## `<select>`

A `<select>` is a control that provides a menu of options.

```html
<label for="select">Sort by</label>
<select id="select" name="select">
    <option value="popularity">By popularity</option>
    <option value="price-low-high">By lowest price</option>
    <option value="price-high-low">By highest price</option>
</select>
```
When a person changes the option of the select, the value of it then becomes the new options value, nice! All browsers support this control and [assistive technology support](https://a11ysupport.io/tech/html/select_element) is strong too. With screen readers annoucing the control accessible name (our label in this example), how to open the select menu, the list of options, and then the value when selected.

For what is an important interaction for many products, it's suprising how many custom-built 'select' controls there are in the wild. This normally comes down to a few reasons, all fairly related to each other:

* The design has come through and included other elements than text in the select options (checkboxes, images, etc)
* Select controls can be notoriously difficult to style, even more so the options
* Rendering inconsistencies between browsers/OS - although the functionality remains consistent, a select and it's states can look very different from one browser to another and especially with their options showing

### Why not 'fake' a select though?

As with other element examples in the post, you can create custom select menus using different HTML element mixed with ARIA attributes, for example:



## `<nav>`

## `<ul/ol>`

## `<fieldset>`

## Further reading

TODO: Useful links I've come across whilst researching/learning 'over the years'