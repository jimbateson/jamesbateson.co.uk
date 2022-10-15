---
layout: layouts/post.njk
title: 5 HTML elements and a partridge in a dis-pear tree
socialImage: /images/social-share-default.jpg
date: 2022-09-23T11:32:47.946Z
tags:
  - HTML
  - Accessibility
---
HTML is a beautiful programming language. It comes with so many out-of-the-box accessibility benefits—it conveys semantic meaning to assistive technology, enabling people to consume content and complete often important journeys that outside of the web they may not be able to do. So why is all that goodness we can get for free ignored so often?

To expand on that point a little, why do we ignore native HTML elements that will tell people exactly what it's purpose is and enable them to interact with it, and use overly complex ARIA-laden JavaScript solutions? Some of this may come down to how something is designed, in other cases it may be misuderstanding/confusion or copied-and-pasted bad practices. In this article I'm going to highlight 5 common issues I see where semantic HTML has been ignored.

## `<button>`

Let's start with an example that people will no-doubt have seen many discussions around-interactive buttons.

A button is often used to toggle or activate some dynamic functionality for a user, that could be to reveal a menu with important pages included, submit a form, toggle expandable content and so on.

HTML includes the `<button>` element. This tells people that it can be interacted with and can help communicate the state of a component. By default it is focusable and comes with some browser default styles.

Unfortunantaly a pattern that is reached for far to often, and in the wrong circumstances is to turn a non-interactive element in a faux button.

This can be achieved with an ARIA role:

```html
<div role="button" tabindex="0">I'm not a button</div>
```

This div would now be announced as an interactive element by assistive technology, this is all well and good, but why?

As well as this extra role, we'd also then need to handle focus behaviour manually using JavaScript and the `tabindex` attribute. This adds unnecessary complexity and requires the user to download JavaScript just to do something that could be done with a native element:

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

https://24ways.org/2019/making-a-better-custom-select-element/

TODO:

- Have a think about how to frame this one, as the example does look good (Although a lot more work) and there are a few downsides to the select element
- Mention having a conversation with design?
- Mention Open UI selectmenu

## `<nav>`

Navigation is a critical part of any site. It allows users to complete important journeys and find the key information they may need.

HTML includes the `<nav>` element. This is a [landmark element](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/landmark_role) and means it will automatically communicate to assistive technology that it's an element being used for navigation links.

```html
<nav aria-label="Main">
    <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/history">Our History</a></li>
        <li><a href="/contact">Contact Us</a></li>
    </ul>
</nav>
```

This is a perfectly accessible example of some navigation. No ARIA needed. However, navigation can often require multiple levels of nested dropdowns, and become more complex. The example can still add this and be accessible, which will be shown, first let's look at a pattern often reached for when it comes to navigation with dropdowns - 

## `<ul/ol>`

Lists (ordered and unordered) are very common elements used on sites. They both have semantic HTML elements:

```html
<ul>
    <li>Unordered list item</li>
    <li>Another unordered list item</li>
    <li>Yet another unordered list item</li>
</ul>
```

```html
<ol>
    <li>Ordered list item</li>
    <li>Another ordered list item</li>
    <li>Yet another ordered list item</li>
</ol>
```

### Lists and Safari "Listitis"

Something to consider when using lists and testing behaviour with iOS/MacOS and Safari is the removal of default styles (`list-style: none;`). With this combination of OS and browser, this style will actually remove the semantics using the `<ul>` or `<ol>` element provides. The reasoning behind this comes from the overuse of lists to mark components up.

*TODO quote from Apple guy about listitis*

To get around this, you can explicitly add a role to the element:

```html
<ul role="list">
    <!-- List items -->
</ul>
```

Although this seems verbose and is an extra 'thing' to remember, it'll make the experience much better for people using screen readers and encountering a list. For example, the amount of items might be important information to somebody, in a checkout progress stepper.

## `<fieldset>`

Forms are a critical part of many journeys on a site, but yet they are so often marked up inaccessibly or use patterns that do not take user needs into account. There's also many examples I've seen where native elements have been ignored in favor of overly complex solutions.

The `<fieldset>` and `<legend>` elements are a great way to break up more complex forms, and can greatly improve the flow and expereince of filling a form out for many user groups.

### Other form element tips

Ok, so these do push this article over the 5 elements specified in the title. _However_, due to the amount of times these issues come up on forms, and how low-hanging, high impact they can be to fix, I couldn't not mention them.

#### Accessible input names

Don't rely solely on placeholder attributes for input controls that require people to enter text/numbers etc. These con often fail contrast requirements, have patch support for assistive technology, and aren't translated if internationalisation is required.

One solution could be to add an `aria-label` to the control, this would provide an accessible name, however, event better would be to include an associated visual label for the control. This has benefits for many user groups. 

Do also try to steer clear of the 'floating label' pattern. Although it does seem to strike a great balance between the designed 'placeholder' look and having a label. It can often introduce accessibility issues of its own, such as hard to read text and leaving the input feeling crowded.

#### Validation messaging

Ensure that colour alone is not being relied on convey validation messaging. It can be nice UX (user experience) to include a suitable icon along with the message.

Make sure that the messaging is suitable announced to assistive technology. This can be done via a live region. When we think about errors on inputs in particular, not having this surfaced immediately could create barriers for people relying on using a form to complete a journey/access a vital service.

## Further reading

TODO: Useful links I've come across whilst researching/learning 'over the years'