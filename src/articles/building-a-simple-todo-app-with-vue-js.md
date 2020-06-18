---
layout: layouts/post.njk
title: Building a simple todo app with Vue.js
date: 2020-06-09T17:53:07.158Z
tags:
  - JS
  - Vue.js
---
Over the last few weeks I’ve started to [learn Vue.js](https://frontendmasters.com/learn/vue/), a progressive JavaScript framework. Alongside working through the Frontend Master course, I decided to try and rebuild my very basic todo app functionality with it.

My app (Today) is a simple todo app - often a go to build when starting to learn a new language. I'd started to build it using vanilla JavaScript and Electron. Whilst getting my head around Vue I realised that my core functionality needs would be suited to using Vue for, as some of my JavaScript had started to get a little unweilding.

Today has 4 main actions:

* Display todos
* Add a new todo
* Complete a todo
* Delete a todo

This post will detail how I went about using Vue to acheive each of these.

<p class="post-note"><strong>Note</strong> This post will not go into, or apply any styling to the todo list, or detail any of the Electron implementation (I'll cover those in a further more in depth post once it's all good to go).</p>

Here's the finished Codepen of what I built (see note above about styling etc)

<p class="codepen" data-height="350" data-theme-id="dark" data-default-tab="html,result" data-user="jim-bateson" data-slug-hash="bGEGmBx" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Today">
  <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/bGEGmBx">
  Today</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h2>Creating the Vue Instance</h2>

First thing we need to do is attach Vue to a DOM node

```javascript
new Vue({
	el: '.js-todo-app'
});
```

<h2>Displaying the todos</h2>

For the purposes of this demo, I've used some dummy data, when I integrate this with my Electron codebase, I'll need to read and write from a JSON file.

Vue reads all its data from its `data` object. So in here we define our todos array

```javascript
data: {
	todos: [
	    {
		    title: 'Test todo',
		    completed: false
	    },
	    {
		   title: 'Test todo 2',
		   completed: false
	    }
	]
},
```

To loop through this data and display it, we need to to use `v-for`

```html
<li v-for="(todo, index) in todos">
     {{ todo.title }}
</li>
```

Here `items` is the array we are looping through and `item` is our name for the array element we are iterating over. You can also pass a (optional) second option to `v-for`, which is the index of the item.

<h2>Add a new todo</h2>

This is where my Vue implementation slightly devaites from the initial vanilla/Electron setup I have. In which Electron creates a new window (view) in which you add a new todo, which is ten sent to the main window. However, using Vue things can be made much simpiler and handled by the framework.

Firstly let's create an input to enter the new todo (make sure to add an associated label for the input)

```html
<label for="add_todo">Add a new todo</label>

<input type="text" id="add_todo" v-model="newTodo" @keyup.enter="addTodo" name="add_todo" placeholder="Today I want to...">
```
There are a couple of Vue bits we are attaching to this input:

* `v-model` is a two way binding on elements such as `input` and `textarea`. Depending on the element, it detects the value/status and passes this data to/from Vue. [More info here](https://vuejs.org/v2/guide/forms.html).
* `@keyup.enter` 


