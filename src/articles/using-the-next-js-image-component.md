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

<div class="post-note"><h3>Mindset change</h3><p>First off I just wanted to address something from <a href="">my previous post</a>. In this post, In I mentioned how JavaScript frameworks and such didn't really excite me. However, due to this project using React, I've started to dive into focusing on how this works. I have to say that I'm <strong>really</strong> enjoying it and this has changed my thought process on these technologies considerably.</p></div>

So, here's the use case: in a component, I'm building for a React application (using Next.js) I need to display a statically rendered image. I would like this image to be accessible, optimised, and reusable. I could probably default to using the `<picture>` tag, asking a designer for responsive versions of the image, running the image through an optimiser, make sure I have the optimised file format for the image (webp for example), how will the image lazyload, how will it be positioned, how will it be styled, the list could go on.

Enter the Next.js `<Image>` component — it handles all of this for you! One of the reasons I wanted to write this article was that I was <strong>so</strong> impressed with how much this did.

The image component has a few default options you need to pass it. These are:
- `src` - pretty obvious here. Next  assumes the root of these images is `root` so start your path from there.
- `width` - unless you're using an optional option such a `layout`
- `height` - unless you're using an optional option such a `layout`

A basic example of this usage might look like this

```javascript
<Image src="{public dir}/images/my-image-src.jpg" alt="" width={600}  height={300} />
```


