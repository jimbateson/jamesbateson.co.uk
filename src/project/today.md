---
layout: layouts/project-single.njk
title: Today
url: https://github.com/jimbateson/today/releases
listingImage: /images/today-listing.jpg
shortDescription: The simple todo app that nobody asked for or needed. Built
  with Electron and Vue.
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
Love them or hate them, a todo app is a great way to learn a new technology or language. That's why they are used in a fair few getting started tutorials - and that's exactly where Today started.

## Learning with todos

Firstly there are endless todo apps and examples out there, and I am in no way claiming this is better than any of those. This was just a project that I was using the learn a couple of new technologies, and has turned into actually releasing and using it.

It all started with [this tutorial](https://codeburst.io/build-a-todo-app-with-electron-d6c61f58b55a). A nice and clear walkthrough of how to create a simple todo desktop app using Electron and JavaScript. I was really happy to get this built and learned a bunch on the way about how Electron passed data between windows to its main process.

However, there were a few things I wanted to change, for example moving the adding of new todos to the main window, completing todos, etc. This cam at the time I had started learning Vue and I thought combining these would be a perfect marriage!

<div class="post-note"><p><strong>Note</strong>I wrote a little guide on how I implemented Vue into my app <a href="https://jamesbateson.co.uk/articles/building-a-simple-todo-app-with-vue-js/">in this article</a>.</p></div>

## So what does it do?

![Today UI display a couple of todos, one of which is completed](/images/today-shot.png)

In its current state, Today is *very* simple. It has four main actions:

* List todos
* Create a new todo
* Complete a todo
* Delete a todo

The todos are read and written to a JSON file stored in the user's file system along with Today's other install files in AppData (windows) and ApplicationSupport (OSX). Electron has a handy helper `app.getPath('userData')` that gives access to this path cross-platform. Cool!

To read and write with this file I used a module from Sindre Sorhus called [Electron Store](https://github.com/sindresorhus/electron-store).

> Electron doesn't have a built-in way to persist user preferences and other data. This module handles that for you, so you can focus on building your app.

This then allowed me to create a data sources (JSON) file

```javascript
const Store = require('electron-store');
const dataStore = new Store({
    name: 'today-todos'
});
```

This allows me to then set my Vue data as this JSON file

```javascript
data() { 
    return {
	    todos: dataStore.get('todos') || [],
    }
},
```

You maybe be wondering where `get('todos')` comes from. This I am setting in my `updateTodos` method.

```javascript
updateTodos() {
    dataStore.set('todos', this.todos);
}
```

Then whenever a todo is added/removed/completed it calls this method.

I'll be explaining this further in a more detailed article/tutorial currently in draft.

## Distributing

Probably the steepest learning curve of this project was how to package up and distribute the app once I had got it into a useable state. I decided to use [Electron Forge](https://www.electronforge.io/) for this.

There was a lot to get my head around here. Setting up configs for the different `makers` (to distribute on multiple platforms), setting up the various icon formats, and then using Githubs release process ensuring that I extracted only the file the end-user would need to install the app.

It was a great learning experience and I picked up a few handy Github/semantic versioning workflow tips along the way (working with tags, etc).

## Any future plans for this project?

This first release is just the start for Today. It's been so exciting and rewarding to use an app that I have built and I'd like to take the app further and make it something really useful for myself and others.

I have started using my [Github issues](https://github.com/jimbateson/today/issues) for the project as a place to put ideas before I forget them. A few of these are also from colleagues who have tried the app out!

As I add these features/fix any bugs I'll be trying to do some more regular releases.