---
layout: layouts/project-single.njk
title: Jatalie Heights
url: https://jatalieheights.co.uk/
listingImage: /images/jatalie-heights-listing.jpeg
bannerImage: /images/jatalie-heights-banner.jpg
shortDescription: A less than regular personal walking blog.
date: 2020-05-18T19:18:09.907Z
tags:
  - Walking
  - Eleventy
  - Tailwind
  - Side Project
---
As mentioned on my [about page](/about/), Iʼm a keen walker, and love to get up to The Lakes. This project is somewhere I can document these walks, and reflect on enjoying the great outdoors.

## Project Background

This project was originally setup with a regular walking partner, however, unfortunataly that is no longer a thing, so this has become my personal walking blog.

Its main purpose it to document walks I have been on and create a list of walks that I'd like to do.

Admittedly this project has fallen a little stale, however, it was a great chance to build my first site using a static stite generator  [Eleventy](https://www.11ty.dev/) - which I then went on to use building this very site!

## How does it work?

The site builds Nunjunks templates and markdown files into HTML files. The Nunjunks templates are responsible for the layouts of the pages, and the markdown files are the content (walk posts for example).

The site has a couple of 'collections', The Walks and The List. these are walks that I have completed and have written a post about, and walks that I aim to do in the future.

When developing a fast prototype for this project, I decided to use [Tailwind CSS](https://tailwindcss.com/) - a utility based CSS framework. As well as ending up very lightweight (with the addition of Critcal CSS) this allowed me to quickly style up elements without having to write a lot of custom CSS.

I love writing CSS, so this does seem like a bit of a strange approach, but when looking to get an idea off the ground with a very quick turnaround, this is a great option.

Here's an example of how the Tailwind classes work

```html
<a href="{{ '/' | url }}" class="font-sans text-white uppercase no-underline text-5xl text-center mt-12">
	<img src="/assets/images/logo.svg" class="h-36 w-64" alt="Jatalie Heights logo">
</a>
```

## Any plans for this project?

This site needs a little bit of TLC in all honesty. 

Since building it, I've used Eleventy on this site and learned so much more about how powerful it can be. So I plan to do a complete rebuild of Jatalie Heights. Making it easier to update and look a little nicer!

Hopefully once lockdown is over, I'll be able to get a bit further afield and cross some walks off the list.