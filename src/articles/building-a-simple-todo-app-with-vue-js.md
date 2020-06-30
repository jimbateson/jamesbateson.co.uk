---
layout: layouts/post.njk
title: Building a simple todo app with Vue.js
metaTitle: Building a simple todo app with Vue.js
metaDesc: How to build a simpale todo app with Vue.js
socialImage: /images/social-share.jpg
date: 2020-06-09T17:53:07.158Z
tags:
  - JS
  - Vue.js
---
 Over the last few weeks, I’ve started to [learn Vue.js](https://frontendmasters.com/learn/vue/), a progressive JavaScript framework. Alongside working through the Frontend Masters course, I decided to try and rebuild my very basic todo app functionality with it.

My app (Today) is a simple todo app - often a go-to build when starting to learn a new language. I'd started to build it using vanilla JavaScript and Electron. Whilst getting my head around Vue I realised that my core functionality needs would be suited to using Vue for, also some of my JavaScript had started to get a little unwieldy!

Today has 4 main actions:

* Display todos
* Add a new todo
* Complete a todo
* Delete a todo

This post will detail how I went about using Vue to achieve each of these.

<p class="post-note"><strong>Note</strong> This post will not go into, or apply any styling to the todo list, or detail any of the Electron implementation (I'll cover those in a further, more in-depth post once it's all good to go).</p>

Here's the finished Codepen of what I built (see the note above about styling etc)

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html,result" data-user="jim-bateson" data-slug-hash="bGEGmBx" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Today">
  <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/bGEGmBx">
  Today</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<h2>Creating the Vue Instance</h2>

The first thing we need to do is attach Vue to a DOM node

```javascript
new Vue({
	el: '.js-todo-app'
});
```

<h2>Displaying the todos</h2>

For this demo, I've used some dummy data, when I integrate this with my Electron codebase, I'll need to read and write from a JSON file.

Vue reads all data from its `data` object. So in here, we define our todos array

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

Here `todos` is the array we are looping through and `todo` is our name for the array element we are iterating over. You can also pass an (optional) second option to `v-for`, which is the index of the item.

<h2>Add a new todo</h2>

This is where my Vue implementation slightly deviates from the initial vanilla/Electron setup I have. In which Electron creates a new window (view) in which you add a new todo, which is then sent to the main window. However, using Vue things can be made much simpler and handled by the framework.

Firstly let's create an input to enter the new todo (make sure to add an associated label for the input)

```html
<label for="add_todo">Add a new todo</label>

<input type="text" id="add_todo" v-model="newTodo" @keyup.enter="addTodo" name="add_todo" placeholder="Today I want to...">
```
There are a couple of Vue bits we are attaching to this input:

* `v-model` is a two way binding on elements such as `input` and `textarea`. Depending on the element, it detects the value/status and passes this data to/from Vue. [More info here](https://vuejs.org/v2/guide/forms.html).
* `@keyup.enter` (can also be written `v-bind:enter`) this is an example of a Vue event handler, in this instance pressing the `enter` key. When this is done, our `AddTodo` method will be run. Pushing the no todo to the todo array (we defined in `data`).

<h2>Completing a todo</h2>

To enable us to complete a todo, there are a couple of things we'll need to setup.

Firstly let's add the element we'll use to action the complete. In this case that's going to be a checkbox.

``` html
<label>
    <input type="checkbox" v-model="todo.completed">
    <span>{{ todo.title }}</span>
</label>
```

Here we are setting the `v-model` to the completed property from our data, this means on checking/unchecking the input set that to true/false.

In anticipation of adding some styling to these completed items, we will then make use of Vue's class bindings on the todo item itself.

``` html
<li class="todo-item js-todo-item" :class="{ 'todo-item--completed' : todo.completed }">...</li>
```

We already have a couple of classes on the `<li>` this might be for some styling and/or custom JavaScript functionality (they're not important for this demo). Vue allows us to conditionally bind classes (and styles) based on certain conditions being met. Here we're using a ternary to add the `todo-item--completed` class if the todo has been completed (based on the value of our model).


<h2>Deleting a todo</h2>

Once a todo has been completed, or if one is added by mistake, it may need to be deleted. To do this we need to remove it from the data (array).

As of v2.2.0 [Vue has a handy delete method built-in](https://vuejs.org/v2/api/#Vue-delete).

First let's create a button that will trigger this.

``` html
<button @click="deleteTodo(index)">Delete todo</button>
```

Then create a method in our instance.

``` javascript
deleteTodo(index) {
    this.$delete(this.todos, index);
}
```

We start by passing index as an argument of the method (as defined in our event in the HTML), then use Vue delete. The first argument being the array we are removing the item from and the second using the index we passed into our method.

<h2>Todo or not todo?</h2>

So we now have our 4 main, core pieces of functionality needed to build a simple todo app! It's a great intro to Vue, using many of the core principles available in the framework.

I'll be expanding on this write up when I finish the app and integrate with Electron and get the app packaged up. But here we have a great start to take a todo list in any direction you wish. It could even be implemented into an existing codebase as I have done - which is one of the great things about Vue!

There are a couple of bits of functionality I'd like to add at some point:

* Don't let a user add duplicate todos
* Sorting options (priority etc)
* Warnings for stale todos

<h2>Hey! I also made this</h2>

As well as going through the Frontend Masters course (linked in the intro), I've found the Vue docs site to be very clear, with some great practical examples. I also made this summary pen of directives and bindings to help me remember things.

<p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-user="jim-bateson" data-slug-hash="wvKYJLE" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Directives &amp;amp; Data Rendering">
  <span>See the Pen <a href="https://codepen.io/jim-bateson/pen/wvKYJLE">
  Directives &amp; Data Rendering</a> by James Bateson (<a href="https://codepen.io/jim-bateson">@jim-bateson</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>