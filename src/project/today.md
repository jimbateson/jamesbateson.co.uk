---
layout: layouts/project-single.njk
title: Today
url: https://github.com/jimbateson/today/releases
shortDescription: The simple todo app that nobody asked for or needed. Built
  with Electron and Vue.js
metaTitle: James Bateson | Today
metaDesc: Today - the simple todo app that nobody asked for or needed
socialImage: /images/social-share-default.jpg
date: 2020-08-05T19:18:24.400Z
tags:
  - Vue.js
  - Electron
  - Side Project
  - Desktop App
---
Love them or hate them, a todo app is a great way to learn a new technology. That's why they are used in a fair few getting started tutorials - and that's exactly where Today started.


## Learning with todos

Firstly there are endless todo apps and examples out there, and I am in no way claiming this is better than any of those. This was just a project that I was using the learn a couple of new technologies, and has turned into actually releasing and using it.

It all started with [this tutorial](https://codeburst.io/build-a-todo-app-with-electron-d6c61f58b55a). A nice and clear walkthrough of how to create a simple todo desktop app using Electron and JavaScript. I was really happy to get this built, and learnt a bunch on the way about how Electron passed data between windows to its main process.

However, there were a few things I wanted to change, for example moving the adding of new todos to the main window, completing todos, etc. This cam at the time I had started learning Vue and I though combining these would be a perfect marrige!

<div class="post-note"><p><strong>Note</strong>I wrote a little guide on how I implemented Vue into my app <a href="https://jamesbateson.co.uk/articles/building-a-simple-todo-app-with-vue-js/">in this article</a>.</p></div>

## So what does it do?

In its current state Today is _very_ simple. It has four main actions:
* List todos
* Create a new todo
* Complete a todo
* Delete a todo

The todos are read and written to a JSON file stored in the users file system along with Today's other install files in AppData (windows) and ApplicationSupport (OSX). Electron has a handy helper `app.getPath('userData')` that gives access to this path cross-platform. Cool!

To read and write with this file I used a module from Sindre Sorhus called [Electron Store](https://github.com/sindresorhus/electron-store).

> Electron doesn't have a built-in way to persist user preferences and other data. This module handles that for you, so you can focus on building your app.