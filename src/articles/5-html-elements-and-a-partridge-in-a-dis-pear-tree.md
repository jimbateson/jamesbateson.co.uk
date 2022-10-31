---
layout: layouts/post.njk
title: 5 HTML elements and a partridge in a despair tree
socialImage: /images/social-share-default.jpg
date: 2022-09-23T11:32:47.946Z
tags:
  - HTML
  - Accessibility
---
HTML is a beautiful programming language. It comes with many out-of-the-box accessibility benefits—it conveys semantic meaning to assistive technology, enabling people to consume content and complete often important journeys that they may not be able to do outside of the web. So why is all that goodness we can get for free ignored so often?

To expand on that point a little, why do we ignore native HTML elements that will tell people exactly what their purpose is and enable them to interact with it, and use overly complex ARIA-laden JavaScript solutions? Some of this may come down to how something is designed, while in other cases it may be misunderstanding/confusion or copied-and-pasted bad practices. In this article, we'll look at 5 common issues where semantic HTML has been ignored.

## `<button>`

Let's start with a topic that people will have seen many discussions around—interactive buttons. Take a look at the [latest postings on the HTMLHell site](https://www.htmhell.dev/), which will no doubt feature this issue heavily!

A button is often used to toggle or activate some dynamic functionality for a user. That could be to reveal a menu with important pages included, submit a form, toggle expandable content, and so on.

HTML includes the `<button>` element. This tells people that it can be interacted with and can help communicate the state of a component. By default, it is focusable, has key events, and comes with some browser default styles.

```html
<button>I'm a real button</button>
```

Here we have some default browser styling making it *look like a button*, have focus behavior handled for us, and have key events mapped to it (`click`, `keyup`, `keydown`, etc) making it *act like a button*. Because **it is a button!**

<button type="button">I'm a real button</button>

Unfortunately, a pattern that is all too common–and used in the wrong circumstances–is to turn a non-interactive element into a faux button.

This will often be achieved with an ARIA role:

```html
<div role="button" tabindex="0">I'm not a button</div>
```

This div (a non-semantic element designed for containing things) would now be announced as an interactive element by assistive technology, this is all well and good, but is it robust and accessible? No.

We're telling assistive technology that it's a button, but providing none of the functionality that comes with the native element.

As well as the role, we'd also then need to handle focus behavior manually using JavaScript and the `tabindex` attribute and also [handle key events](https://adrianroselli.com/2022/04/brief-note-on-buttons-enter-and-space.html). This adds unnecessary complexity and requires the user to download JavaScript just to do something that could be done with a native element.

### Extra considerations

Whilst using a native button is a great start, there are other things to consider. Does your button have a suitable accessible name? (especially if it's an icon button). If the button has a purpose of taking a person to another page, it should be a link (`<a>`).

The following links are great resources for helping create a great button (or link).

* [A complete guide to Links and buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/) on CSS-Tricks
* [Links, Buttons, Submits, and Divs, Oh Hell](https://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html) by Adrian Roselli

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

When a person changes the option of the select, the value of it then becomes the value of the new option, nice! All browsers support this control and [assistive technology support](https://a11ysupport.io/tech/html/select_element) is strong too. Screen readers announce the control's accessible name (our label in this example), how to open the select menu, the list of options, and then the value when selected.

For what is an important interaction for many products, it's surprising how many custom-built 'select' controls there are in the wild. This normally comes down to a few reasons, all fairly related to each other:

* The design has come through and included elements other than text in the select options (checkboxes, images, multi-select functionality)
* Select controls can be notoriously difficult to style, and the options even more so
* Rendering inconsistencies between browsers/OS: Although the functionality remains consistent, a select and its states can look very different from one browser to another and especially with their options showing

### Why not 'fake' a select though?

It is of course possible to build something that looks and behaves like a select with other elements and a sprinkle of JavaScript and ARIA. It's also possible to make this into a robust and accessible solution; for example, [Julie Grundy's article](https://24ways.org/2019/making-a-better-custom-select-element/) from 24 WAYS. This example uses semantic HTML and is careful in its usage of ARIA.

Whilst it may be doable, let's consider a few reasons it might still be better to suggest and use the native `<select>`.

#### Future developer readability

Whilst a more custom and complex approach may make sense to one developer who has followed an example/tutorial to build the component, a developer picking up bugs/changes/feature requests in the future may not have as good of an understanding around how all the elements have been set up and what their roles are supposed to be.

Although this could be solved with sufficient documentation, it's still extra work for somebody else to get up to speed with.

#### Misconfiguration

When using ARIA to add a role to an element to try and improve assistive technology communication, it can often require very specific roles to be included in parent/child element relationships. If misconfigured, not only will the whole component not announce correctly, but it's breaking accessibility and might cause more problems than it was used to solve!

The more complex and ARIA-heavy these custom components are—a custom select being a good example of one that could be with enough features—the more chance of this misconfiguration happening, especially concerning the previous point of somebody with less understanding picking up changes.

#### Communicate with design—'shift left'

Many accessibility issues can be solved during the design phase. The barriers we create are designed in, and the more we can shift the conversation and responsibility of accessibility to earlier in the product lifecycle, the better (often referred to as shifting left).

Constant and efficient communication between designers and developers can play a huge part in this. During sessions such as a design to developer handover, or [accessibility annotation pairing](https://www.figma.com/community/file/953682768192596304), it could be a great time to have a conversation about how a certain component design might lead to extra complexity, and to see if a native HTML element might be able to fit into the design.

Not only could this help educate a designer when it comes to semantics and accessibility considerations for future work, but it could also stop accessibility issues from getting to development or even to further down the line, when fixes/changes become much more expensive, or, even worse, end up unintentionally excluding people in production.

### Help on the way?

[The Open UI project](https://open-ui.org) is trying to make it easier for designers/developers to both use native controls for elements like `<select>` and to have the styling and functionality freedom that often turns people to using more complex custom solutions that can be inaccessible:

> The purpose of Open UI to the web platform is to allow web developers to style and extend built-in web UI controls, such as `<select>` dropdowns, checkboxes, radio buttons, and date/color pickers.
>
> To do that, we'll need to fully specify the component parts, states, and behaviors of the built-in controls, as well as necessary accessibility requirements, and provide test suites to ensure compatibility. We'll also implement polyfills for our extensible web UI controls.

Whilst the project is still in its infancy, concerning the `<select>` element, there have been some developments with `<selectmenu>`. Whilst not ready for production yet, it can be [enabled in Chromium-based browsers with a flag](https://open-ui.org/prototypes/selectmenu). `<selectmenu>` allows greater customisation of the select control and the options that sit inside of it.

## `<nav>`

Navigation allows users to complete important journeys and find the key information they may need.

HTML includes the `<nav>` element. This is [a landmark element](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/landmark_role) and means it will automatically communicate to assistive technology that it's an element being used for navigation links (the same as adding `role="navigation"`).

```html
<nav aria-label="Main">
    <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/history">Our History</a></li>
        <li><a href="/contact">Contact Us</a></li>
    </ul>
</nav>
```

This is a perfectly accessible example of some navigation. **No ARIA is needed**. However, navigation can often require multiple levels of nested dropdowns, and become more complex. The example can still add this and be accessible, which we will take a look at, but first let's look at a pattern often reached for when it comes to navigation with dropdowns - `aria-menu`.

Whilst the naming of `aria-menu` and the child roles it requires (`aria-menuitem`) may suggest that it'd be perfect to use for site navigation, the purpose of it is very different. This pattern is more for replicating desktop application menus. [Adrian Roselli has a superb article](https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html) explaining the difference.

You can see an example of how this would be marked up on the [aria authoring practices site](https://www.w3.org/WAI/ARIA/apg/example-index/menubar/menubar-navigation.html). Whilst there are cautionary recommendations at the top of the page detailing how this is unsuitable for site navigation, the page goes on to use it for one. This is an example of how just using these resources as a copy-and-paste solution can lead to bad practices.

Going back to how we can use `<nav>` and more semantic elements to start to create a site navigation with multiple levels:

```html
<nav aria-label="Main">
	<ul>
		<li><a aria-current="page" href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button type="button" aria-expanded="false" aria-controls="about-us-submenu">
					<!-- Visual cue icon - for example a downward facing chevron -->
					<svg aria-hidden="true" focusable="false">
						<!-- Icon SVG code -->
					</svg>
					<span class="visually-hidden">Toggle About Us submenu</span>
				</button>
			</a>
			<ul id="about-us-submenu">
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

Here we're using nested unordered lists to mark up the second level of navigation. Meaning that visually and semantically this would be related, even without CSS and JavaScript loading.

You might be asking "but there is ARIA in there now, and you said we didn't need any?". This is true, but we can use ARIA in the appropriate way to **enhance** the experience for people using assistive technology. Not solely rely on it's role to communicate that's it's a navigation in the first place. Of course JavaScript will also be needed to toggle some of these attributes as well. But by default, without any of this our markup is semantic and accessible.

For a more detailed guide to building a semantic and accessible navigation, check out [the web.dev navigation article by Manuel](https://web.dev/website-navigation/).

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

They can help with things such as visually and semantically breaking down complex points, and give expectations of important steps to complete or consider. Communicating that a list with a number of items (and possibly links) exists can be important to people using assistive technology, for example, it can communicate how many items are in the list.

A common mistake that can be made, is to just visually represent a list with a combination of other HTML elements, for example (taken from HTMLHell):

```html
<p>
  • HTML
  <br>
  • CSS
  <br>
  • JavaScript
</p>
```

Whilst this may visually represent a list, it is going to give people using assistive technology a very different experience. Each 'item' has no relation to the other, it's just one paragraph element, this would give people no indication of how many items were present and how they relate in context and order if they needed to be read sequentially.

### Who would do that though?

Unordered lists were amongst the [first 18 HTML tags released](https://www.webdesignmuseum.org/web-design-history/tim-berners-lee-published-a-document-called-html-tags-1991) so why do people still ignore them over just visually representing a list? And why are they so important? Aside from poor markup choices, there could be a few other reasons for this issue occurring.

#### CMS WSYWYG output

It may not be apparent to somebody how to add lists in a content management system WSYWYG editor. Causing them to just visually create the list of items (for example using the bullet point shown in the previous example).

#### Content editor skill gaps

When content editors add content in a CMS it may be that they have misunderstood that using return to add items to a newline does not create a list, but it might visually appear to look like one to them in previews, etc.

#### Markdown/other language confusion

In some content language formats, such as markdown, lists can be added by using the hyphen/asterisk to indicate a list item, and these are then translated into correct list markup. It could be that somebody has mistakenly tried this thinking it might be the case.

### Slight tangent incoming!

Educating content editors on using semantic markup can be an important part of ensuring that semantic, accessible content is being added to a site. Despite designing and building an accessible experience, this work could be undone by fundamental knowledge gaps when adding content such as blog posts, case studies, etc if they are handled through a CMS. Link text, image alt text, heading structure, correct element usage, etc can all have detrimental effects on a person's experience.

If the importance of using semantic and accessible elements and structure is lost on somebody, it can be useful to remind people that it can have many benefits, for example SEO, and readability. Jeremy Keith has an interesting thought on [doing the right things for the wrong reason](https://adactio.com/journal/18199).

End of tangent.

### Lists and Safari "list"-itis

Something to consider when using lists and testing behavior with iOS/MacOS and Safari and VoiceOver, is the removal of default styles (`list-style: none;`). With this combination of OS and browser, this style will remove the semantics using the `<ul>` or `<ol>` element provides. The reasoning behind this comes from the overuse of lists to mark components up.

A bug was filed for this 'issue' which prompted the following response:

> This was a purposeful change due to rampant “list”-itis by web developers. … Basically, if you remove all default visible indication of the list, there is no indication to a sighted user or screen reader user that the content is a list. If you want to override this heuristic for accessibility, you can always add an explicit ARIA role=”list”.

As suggested to get around this, you can explicitly add a role to the element:

```html
<ul role="list">
    <!-- List items -->
</ul>
```

Although this seems verbose (it'll also get flagged when validating HTML) and is an extra 'thing' to remember, it'll make the experience much better for people using VoiceOver and encountering a list.

## `<fieldset>`

Forms are a critical part of many journeys on a site, but yet they are so often marked up inaccessibly or use patterns that do not take user needs into account. There are also many examples I've seen where native elements have been ignored in favor of overly complex solutions.

The `<fieldset>` and `<legend>` elements are a great way to break up more complex forms, and can greatly improve the flow and experience of filling a form out for many people:

```html
<form>
    <fieldset>
        <legend>How would you like to hear from us?</legend>

        <!-- Checkboxes with selection options -->
    </fieldset>
</form>
```

The `<fieldset>` element implicitly communicates a role of `group`—useful for grouping logically related items, and the `<legend>` provides the 'caption' or accessible name for it. Thus, communicating to assistive technology such as screen readers that the fields within are related and providing a label to announce.

Here's an example seen recently on a documentation site of using non-semantic elements to do this:

```html
<Form>
    <div id="my-radio-group">Picked</div>
    <div role="group" aria-labelledby="my-radio-group">
        <label>
            <Field type="radio" name="picked" value="One" />
            One
        </label>
        <label>
            <Field type="radio" name="picked" value="Two" />
            Two
         </label>
         <div>Picked: {values.picked}</div>
    </div>

    <button type="submit">Submit</button>
</Form>
```

This would result in a very similar experience to the fieldset and legend pattern but is just doing more work to get there. It's using non-semantic elements and using ARIA to turn them into something that can be done natively!

The issue with examples like this being included on documentation sites is that it runs the risk of being copied and pasted as an example, and then becoming habits in that codebase.

Other benefits native elements can offer would also have to be manually handled, for example `<fieldset>` can take a `disabled` attribute, which would make all child input controls disabled.

### Other form element tips

OK, so these do push this article over the 5 elements specified in the title. *However*, due to the number of times these issues come up on forms, and how low-hanging, high-impact they can be to fix, let's quickly mention them.

#### Accessible input names

Don't rely solely on placeholder attributes for input controls that require people to enter text/numbers etc. These can often fail colour contrast requirements, have patch support for assistive technology, and aren't translated if internationalisation is required.

One solution could be to add an `aria-label` to the control, this would provide an accessible name, however, even better would be to include an associated visual label for the control. This has benefits for many user groups. 

Do also try to steer clear of the 'floating label' pattern. Although it does seem to strike a great balance between the designed 'placeholder' look and having a label. It can often introduce accessibility issues of its own, such as hard-to-read text and leaving the input feeling crowded.

#### Validation messaging

Ensure that colour alone is not being relied on convey meaning in validation messaging. It can be nice UX (user experience) to include a suitable icon along with the message, for example, an exclamation with an error. If this can't be achieved, [ensure messaging is well-written](https://design-system.service.gov.uk/components/error-message/#be-clear-and-concise).

Make sure that the messaging is suitably announced to assistive technology. This can be done via a live region. When we think about errors associated with inputs in particular, not having this surfaced immediately could create barriers for people relying on using a form to complete a journey/access a vital service.

## Summary

In this article, we've covered only a small amount of the [HTML elements available](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Each case reviewed how using a native HTML element can reduce complexity when building a component and the need for having to manually handle a range of possible interactions people using different input methods need to use, which requires JavaScript.

When reviewing a design, consider if you might be able to use a native HTML element to achieve the functionality, or consider having a conversation with design to see if something could change to allow you to do so. Communications such as accessibility annotation sessions can be useful for this.

HTML can do a lot, without needing to reach for and ship large chunks of JavaScript and potentially exclude whole groups of people interacting with a component. It's robust, semantic, and accessible. Take time to learn it, and where and when to use it.

## Further reading

Some useful links to help learn more about using semantic and accessible HTML. Also how to use ARIA responsibly if needed.

* [web.dev - learn HTML](https://web.dev/learn/html/)—some lessons still to be added at time of writing
* [web.dev - learn accessibility](https://web.dev/learn/accessibility/)—some lessons still to be added at time of writing
* [Why semantics matter](https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html)—reasoning and examples, should you need it
* [Inclusive Components](https://inclusive-components.design/)—progressive, robust, semantic, and accessible common component patterns from Heydon Pickering
* [Using ARIA](https://www.w3.org/TR/aria-in-html/)—including the 5 rules of ARIA