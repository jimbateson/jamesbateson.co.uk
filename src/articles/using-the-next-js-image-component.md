---
layout: layouts/post.njk
title: Using the Next.js image component
metaTitle: Using the Next.js image component
metaDesc: Things I have learnt about how good the Next.js image component is out
  of the box.
socialImage: /images/social-share-default.jpg
date: 2021-08-14T14:56:36.723Z
tags:
  - JavaScript
  - Next
---
The tech stack on my new project at work involves me working with Next.js — something I have no experience using. However, having got stuck in, there's a lovely component I've used that I thought was worth writing about — the `<Image>` component.

<div class="post-note"><h3>Mindset change</h3><p>First off I just wanted to address something from <a href="https://jamesbateson.co.uk/articles/finding-my-thing/">my previous post</a>. In this post, In I mentioned how JavaScript frameworks and such didn't really excite me. However, due to this project using React, I've started to dive into focusing on how this works. I have to say that I'm <strong>really</strong> enjoying it and this has changed my thought process on these technologies considerably.</p></div>

So, here's the use case: in a component, I'm building for a React application (using Next.js) I need to display a statically rendered image. I would like this image to be accessible, optimised, and reusable. I could probably default to using the `<picture>` tag, asking a designer for responsive versions of the image, running the image through an optimiser, make sure I have the optimised file format for the image (webp for example), how will the image lazyload, how will it be positioned, how will it be styled, the list could go on.

Enter the Next.js `<Image>` component — it handles all of this for you! One of the reasons I wanted to write this article was that I was <strong>so</strong> impressed with how much this did.

The image component has a few default options you need to pass it. These are:

* `src` - pretty obvious here. Next assumes that the root of these images is `public` so start your path from there.
* `width` - unless you're using an optional option such a `layout`
* `height` - unless you're using an optional option such a `layout`

## Easy wins

A basic example of this usage might look like this

```javascript
<Image src="{public dir}/images/my-image-src.jpg" alt="" width={600}  height={300} />
```

Even with nothing style-opinionated like this, the image component will make sure the image you're delivering is optimised for the screen size of the user using `sizes`. You'll also get a webp version of the image if your browser supports it. By default, there's a .75 quality applied, meaning giving us some optimisation (this can be tweaked).

## Styling

In my use case, I needed the image to fill the size of its parent container. The component has options for this, as mentioned in the default props earlier, instead of passing in the width and height, you can also set some optional props. In my case setting `layout="fill" object="fill"` were what I needed. This article isn't about how these work, but as long as the image's parent is set to relative, these props will ensure the image fills this space (also meaning that the width and height props don't need to be passed).

## Further options

I only used a few of the option props that `<Image>` provides for my use case, more are available and I would recommend [reading the official documentation to learn more](https://nextjs.org/docs/api-reference/next/image).

## Gotchas

Despite all the glory it offers, there were a couple of things that caught me out:

* Your `<img>` will be wrapped in a `<div>` element that has some inline styles applied. The actual image will also have some. When using CSS modules and the `{styles.img}` workflow this proved difficult to override with an !important. I resorted to wrapped the component in my own element.
* if you pass in the width and height props, your image element (inside of the wrapping div) will receive a child element that acts as a placeholder with the dimensions you passed in. I think this is to avoid any layout shift (equivalent of giving a native image width and height).

## Summary

Despite a few issues with the styling (possibly down to my continued learning), I'm so impressed with how this component behaved by default.

In this case, I passed in a large 295kb `.jpg` file as my source image, and when inspecting the network tab, not only was a correctly sized image for my current viewport being passed in, but it was in `.webp` format and down to a mere 35kb! With very little config! I had to apply no extra styles to size it my containing element as well. If you're using Next.js in your tech stack, give this component a try.

<div class="post-note"><h3>Disclaimer</h3><p>I'm still very new to the whole React/Next ecosystem, so bear with me if some things don't quite ring true, I'm learning everyday!</p></div>