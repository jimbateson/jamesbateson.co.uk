---
layout: layouts/post.njk
title: Switching to variable fonts
date: 2020-02-07T21:08:13.297Z
tags:
  - fonts
  - css
---
Variable fonts are something that I've been meaning to experiment with for a while now. I've seen so many cool demos using them - [for example](https://codepen.io/cassie-codes/pen/jOEdPEJ?editors=0100) 😍. So I decided to try switching this site to use them and learn a bit more. There are likely tons more write-ups better than this, I'm just documenting this in case I use them on future projects at work.
 
## Goals
 
I had recently switched this site to use the awesome [Inter](https://rsms.me/inter/) font family. I was including 4 weights; black, bold, medium and regular. This meant 4 requests at around 450kb. When downloading Inter, you also get a WOFF2 variable font. My goal was to switch to this, reducing my font file requests to just one and hopefully lower the page weight taken by fonts.
 
## Where to start
 
I started by reading a few articles on things to consider when implementing variable fonts and also how to go about it. Here are a couple of ones I found particularly useful:
 
- [Handy step by step guide with code examples](https://medium.com/clear-left-thinking/how-to-use-variable-fonts-in-the-real-world-e6d73065a604)
- [CSS Tricks intro to variable fonts](https://css-tricks.com/one-file-many-options-using-variable-fonts-web/)
- [24 ways article with editable examples](https://24ways.org/2019/an-introduction-to-variable-fonts/)
- [Subsetting fonts](https://michaeljherold.com/2015/05/04/creating-a-subset-font/)
- [MDN guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [Integration guides for various fonts](https://variablefonts.dev/)
 
## Subsetting and converting to WOFF2
 
As you'd expect, most variable font file sizes are quite large by default. After all, they do contain all features and glyphs the family has to offer.
 
Therefore subsetting your font to include only the things you need is a good idea, it'll dramatically reduce the weight of your font file. Variable fonts are also supported by all browsers that support WOFF2 font types, therefore it makes sense to convert your font to this.
 
Inter comes with a variable font in WOFF2 format, so I didn't need to worry about converting this, however, the tool I used to subset the font handily converts them too.
 
I found [glyphhanger](https://github.com/filamentgroup/glyphhanger) from the ever-awesome filament group. It has a couple of prerequisite setup steps (python, pip, fonttools, and brotli) but once ready it makes subsetting a font super easy.
 
You can run glyphhanger against your local .html files or even cooler a URL - it checks exactly what you need to keep! You then specify your input font/font type, any features of your font you would like to maintain (tabular numbers etc) and finally define your output file (optional). It's worth checking out the docs on their site for a full guide, but my command looked something like:
 
``` text
glyphhanger https://jamesbateson.co.uk --formats=woff2 --feature-settings=ss01,ss02,case --subset=./src/fonts/inter.woff2
```
 
Using this tool I reduced my font file size from 300kb > 70kb and I'll be looking to optimise this further in the near future.
 
## Including the font
 
Once you are happy with your font settings you can include your font with `@font-face`. The font-face syntax for a variable font is pretty much the same as including a standard font, with a couple of bonus variable properties you can add.
 
``` scss
@font-face {
 font-family: Inter;
 src: local('Inter'), url('/fonts/inter.woff2') format('woff2');
 font-weight: 1 999;
 font-display: swap;
 font-feature-settings: 'ss01', 'ss02', 'case';
};
```
 
`font-weight: 1 999;` specifies a 'scale' of font weights that you can use. The cool thing here is that you are no longer constrained to the regular font-weight values. So if the font you're using is too light at 500, but too heavy at 600 you can now use in-between values for example 550 (basically any value between the scale numbers you set).
 
You can also do this with other variable properties for example `font-stretch: 85% 100%;` - this is essentially the width of your font. There are a couple more settings you have for some fonts too (height, italics, optical size, grade, and slant) - again check out some of the links at the top of this article for more info.
 
## Support and fallbacks
 
[According to caniuse](https://caniuse.com/#feat=variable-fonts) global support for variable fonts is 88.48% at the time of writing. As usual for a browser such as IE, you'll need to provide fallbacks if your design relies on your chosen font, etc. For this site, I decided that I was confident my content would look acceptable with system-ui and sans-serif fallbacks, something that I think outweighs having to include fallback bloat.
 
Think about using `@supports` if you do need legacy browser support. Maybe something like:
 
``` scss
p {
 font-family: YourStaticFontFamily;
}
 
@supports (font-variation-settings: normal) {
 p {
 font-family: YourVariableFontFamily;
 }
}
```
 
Then use `@font-face` as normal to include your standard font file types. Modern browsers will still only use the one variable file, whilst legacy browsers will still have your nice font too.
 
## Summary
 
As you'll have gathered this is by no means a good guide to implementing variable fonts, however, it'll hopefully serve as a good pointer in things to consider and steps to look into when doing so.
 
Variable fonts not only save on page requests and page load but also give us much more design and creative freedom, we can start thinking about animating font weights, layering different weights and so much more!
 
## Useful links
 
As well as the links you will find towards the top of this article, there are a couple here that I think are helpful when working with variable fonts.
 
- [Find a variable font](https://v-fonts.com/)
- [See what your font can do](https://wakamaifondue.com/) - this site gives you some interesting stats and details on your font, and also offers some handy CSS you could drop into a _typography.scss module or such
- [Variable fonts playground](https://www.axis-praxis.org/specimens/__DEFAULT__)

Developing, running, walking, cooking, and looking old
