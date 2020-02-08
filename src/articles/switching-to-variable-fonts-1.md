---
layout: layouts/post.njk
title: Switching to variable fonts
date: 2020-02-07T21:08:13.297Z
tags:
  - fonts
  - css
---
Variable fonts are something that I've been meaning to experiment with for a while now. I've seen so many cool demos using them - [for example](https://codepen.io/cassie-codes/pen/jOEdPEJ?editors=0100) 😍. So I decided to try switching this site to use them and learn a bit more. There are liekly tons more write ups better than this, I'm just documenting this in case I use them on future projects at work.

## Goals

I had recently switched this site to use the awesome [Inter](https://rsms.me/inter/) font family. I was including 4 weights; black, bold, medium and regular. This meant 4 requests at around 450kb. When downloading Inter, you also get a WOFF2 variable font. My goal was to switch to this, reducing my font file requests to just one and hopefully lower the page weight taken by fonts.

## Where to start

I started by reading a few articles on things to consider when implementing variable fonts and also how to go about it. Here are a couple of ones I found particulaly useful:

- [Handy step by step guide with code examples](https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604)
- [CSS Tricks intro to variable fonts](https://css-tricks.com/one-file-many-options-using-variable-fonts-web/)
- [24 ways article with editable examples](https://24ways.org/2019/an-introduction-to-variable-fonts/)
- [Subsetting fonts](https://michaeljherold.com/2015/05/04/creating-a-subset-font/)
- [MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)

## Subsetting and converting to WOFF2

As you'd expect, most variable font file sizes are quite large by default. After all they do contain all features and glyphs the family has to offer.

Therefore subsetting your font to include only the things you need is a good idea, it'll dramatically reduce the weight of your font file. Variable fonts are also supported by all browsers that support WOFF2 font types, therefore it makes sense to convert your font to this.

Inter comes with a variable font in WOFF2 format, so I didn't need to worry about converting this, however, the tool I used to subset the font handily converts them too.

I found [glyphhanger](https://github.com/filamentgroup/glyphhanger) from the ever awesome filament group. It has a couple of prerequisite setup steps (python, pip, fonttools and brotli) but once ready it makes subsetting a font super easy.

You can run glyphhanger against your local .html files or even cooler a url. You then specify your input font/font type, any features of your font you would like to maintain (tabular numbers etc) and finally define your output file (optional). It's worth checking out the docs on their site for a full guide, but my command looked something like:

``` text
glyphhanger https://jamesbateson.co.uk --formats=woff2 --subset=./src/fonts/inter.woff2
```

## Including the font

The font-face syntax for a variable font is pretty much the same as including a standard font, with a couple of extra variable properties you can add.

``` scss
@font-face {
    font-family: Inter;
    src: local('Inter'), url('/fonts/inter.woff2') format('woff2');
    font-weight: 1 999;
    font-display: swap;
    font-feature-settings: 'ss01', 'ss02', 'case';
};
```

`font-weight: 1 999;` specifies a 'scale' of font weights that you can use. The cool thing here is that you are no longer contrained to the regular font-weight values. So if the font you're using is too light at 500, but too heavy at 600 you can now use inbetween values for example 550 (basically any value between the scale numbers you set).
