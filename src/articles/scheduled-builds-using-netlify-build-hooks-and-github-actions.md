---
layout: layouts/post.njk
title: Scheduled builds using Netlify build hooks and Github actions
metaTitle: James Bateson | Netlify build hooks and Github actions
metaDesc: How to set up a simple automated Netlify site build and deploy
  workflow using Netlify build hooks and Github actions
socialImage: /images/social-share-default.jpg
date: 2020-08-19T07:22:24.120Z
tags:
  - Netlify
  - Github
---

A couple of weeks ago I published [an article](https://jamesbateson.co.uk/articles/speedlify/) on how I set up scheduled Speedlify builds for this site, to help monitor the performance and accessibility of some key pages. As part of an update to the article, I learned how to use Netfliy build hooks and Github actions to trigger a rebuild and publish of the site. I feel I may have rushed that explanation a little, so this article is a more in-depth look into that workflow.

## Creating a Netlify build hook

First thing's first, let's create a build hook in Netlify. This will give us a URL to post to and trigger a build.

From your site dashboard, navigate to `Settings` (top navigation, last item at the time of writing). In the left-hand nav on that page find `Build & Deploy`. On this page scroll down until you find the `Build Hooks` section and select "Add build Hook".

You'll then have the chance to give your build hook a suitable name. Make this something obvious relating to the action/reason you are triggering a build. Then select the branch you will be using to set up this trigger on.

![Screenshot showing the UI for adding a build hook, by giving the build hook a name and selecting the branch to set it up on](/images/screenshot-2020-08-18-at-21.28.30.png)

Once the build hook has been created, you'll see it listed, note the small downward-facing chevron to the right, if you expand this, it'll give you an example of how you can use your build hook, something like `curl -X POST -d {} https://api.netlify.com/build_hooks/your-unique-build-hook-id`. Copy this to your clipboard, or keep this tab open as you'll need it in the coming steps.

## Creating a Github secret token

Rather than display the unique ID for our build hook where anyone can see it, we're going to store it in a Github secret token here. We'll be able to reference this when we set our Github workflow up.

This step is kind of optional, however, I think it's good practice not to store your build ID in a public repo. So if you are not using a private repo - or your repo will be public in the future, I'd suggest following this step. Not exactly sure what someone could do if they had your build ID but I'm imagining someone with the right skills would be able to do some nasties. When storing a value in a secret **only you** will be able to access this token.

So we'll need to switch over to the repo on Github for this step, once inside the relevant repo, go to the `Settings` item in the top repo navigation, then find `Secrets` item towards the bottom of the left-hand menu. Here you will see any other secret tokens listed, or none if this is your first. Either way hit the "New Secret" button to the right.

There's a couple of simple fields to fill in here. As with the build hook, give your token a sensible name relating to the value you're storing. From other examples, I've seen the convention seems to be all uppercase and underscore spaces. I'm guessing that because they're probably going to be used as a constant. As an example, I names my token `NETLIFY_SPEEDLIFY_BUILD_WEEKLY`. Then inside the value textarea, you'll want to paste in just your unique build ID (not the full curl command just the end bit). Copy or make a note of your secret token name, as we'll need this shortly.

## Github workflows

Now we have our basics setup, we can create a workflow for Github and tell it what to do!

First off we'll need to create a workflow directory and configuration file in our project. So in your text editor of choice, open your project and in the root create `.github/workflows` directory, and inside there create a sensibly named `YAML` file. For example `weekly-build.yml`.

Inside that file, paste this configuration (this is the basic one I am using for a scheduled weekly build).

```yaml
name: Scheduled build
on:
  schedule:
    - cron: '0 9 * * 1'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Trigger our build webhook on Netlify
      env:
        TOKEN: ${{{ secrets.NETLIFY_SPEEDLIFY_BUILD_WEEKLY }}}
	  run: curl -X POST -d {} https://api.netlify.com/build_hooks/${TOKEN}
```

<p class="post-note"><strong>Note</strong>Only use double handlebars around the <code>TOKEN</code> value. There's an issue on my site where even in code examples the using moustache templating syntax tries to compile!<br><br>
<a href="https://github.com/jimbateson/speedlify/blob/main/.github/workflows/weekly-build.yml">Here's a link to my example setup</a> so you can see it properly.</p>

Before we break down a few of these settings, you'll need to change a couple of bits specific to the bits we set up in previous steps.

* **name (and jobs:build:name)** - change these to something that better describes what your build is doing
* **schedule** - this uses Cron syntax to tell Gtihub when exactly to run the build. This can look confusing, but the basic syntax is minute - hour - day (month) - month - day (week). So my example above runs at 9am every Monday. [This site](https://crontab.guru/) provides a handy visualisation of that syntax.
* **TOKEN** This is where you will need the name of the token you created in the previous step, add that name after the `secrets.` replacing mine. You can then see that this is passed to the curl URL that Netlify gave us for our build hook, rather than putting your full unique ID in there!

It's worth noting that there are more options you can set up in this file. This was just all I needed to trigger a weekly build of a site. [Check out the detailed documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions) on the actions workflow, for other bits you can set.

If you now commit this directory to Github and go to the `Actions` menu item (top repo navigation - has a little play icon) you *should* be able to see the action you have set up! When your action runs, it will create a log of whether it was successful or not, how long it took, with some other info as well.

![Screenshot showing a successful Github action build](/images/screenshot-2020-08-19-at-07.20.03.png)

If your action fails, it will also tell you here, and you can view the configuration file you set up for it, and even edit it inline and commit right away if you spot a syntax error, etc.

## What we’ve acheived

So we should now have a Github action setup, that runs at a scheduled time. When the action runs it triggers a build of a Netlify site that we have created a build hook for, this in turn then deploys the site. Pretty cool! [My use case for this](https://jamesbateson.co.uk/articles/speedlify/) was to run a build on my Speedlify instance each week, to better monitor the performance of this site. I hope this guide has been clear and maybe even helpful in some way.
