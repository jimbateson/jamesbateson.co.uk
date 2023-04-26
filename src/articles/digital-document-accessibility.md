---
layout: layouts/post.njk
title: Digital document accessibility
date: 2023-04-26T04:21:15.692Z
tags:
  - Accessibility
---
When considering the digital products we design and build, we consider accessibility from the start and throughout, we also communicate important information both internally and externally via digital documents such as presentation decks, word documents, spreadsheets, and PDFs (more on those later though). However, making these accessible can often be forgotten. But how many people could we be excluding by not checking them? We don't know who may one day need to consume the information we present, and how vital this may be to them.

At Code we currently use the Microsoft suite of document applications, and these all have ways of checking for accessibility. In this article I'm going to run through how these checks can be done, and some common issues that you may find in your documents.

**NOTE**: In this article, I am going to be using Powerpoint as the example, however, the techniques to check for accessibility are the same in other Microsoft document editing applications.

## Where to find the accessibility checker

There are a couple of ways you can activate the accessibility checker. Once you have it open, make sure that the "Keep accessibility checker running while I work" checkbox is checked.

### Through the Review Menu item

You can open the accessibility sidebar by using the "Review" menu item and then using the "Check Accessibility" menu item. You should then see any accessibility errors, warnings, and tips shown in a side panel.

\[Screenshot of review menu and Check accessibility highlighted]

### Through the helper toolbar

To take a couple of steps out of the above, you can also pin the accessibility checker to the bottom helper toolbar.

To do this (if you don't already see accessibility there) secondary click on the bottom toolbar (where the language etc is shown) and choose to show the accessibility checker.

As well as being easier to access and show the checker, it also shows a handy little status as you create your document. Either "Accessibility: Good to go" or "Accessibility: Investigate" along with an icon.

\[Screenshot of the status bar in both states?]

## Common issues

So now we can open the checker, what kind of issues are common to see? Although  documents are a slightly different type of communication method from something like a website. The easy-to-fix, high-impact issues we see are similar to those associated with web accessibility.

### Alternative text

Alternative text is used to describe to assimilate technology such as screen readers what is in an image. On the web, images are commonly used to support content and convey extra context or emotion, for icons, and also just for decoration proving no extra information or context.

This is the same in digital documents, however, alternative text for these images often isn't considered and can be added. Let's look at how this can be done and any considerations that can be made.

### Adding alternative text

When inserting an image you can secondary click on it, in the menu that opens you should see a "View alt text" menu item. Selecting this will open up a panel in the same area as the main accessibility one. Here you should a texture where you can enter the alternative text you want for the image. There is also a checkbox for marking the image as decorative and then some nice explainer text on why alternative text is important.

\[Screenshots of image secondary click and then alt text panel]

### When is it needed and when is it decorative?

Choosing when and what to write as alternative text can be trickier than it sounds. As a general rule of thumb, if the image gives the supporting content extra information, context, or emotion then it should be described with alternative text so that people using screen readers do not miss out on it.

Objects such as icons, shapes, and background images (in some cases) do not necessarily need to be announced if they offer no relevant and important information, and this is where the decorative checkbox comes in. This can be checked to ensure that accessibility requirements are met but that people do not need to hear about this image.

The decision can be particularly important in digital documents as they often contain images of charts, graphs, tables, and infographics. Showing information that is vital to the document. It is key that these images are described with the content they display, otherwise, people are being excluded for being able to consume the document and may miss out on something vitally important.

\[Link about good alt text practices]

### Watch out for generated alt text

There are a few instances when I've seen images added and the software does its best to add alternative text. Whilst this is quite cool, and no doubt improving with the current trends around AI, I believe that alternative text is something that still needs human context and consideration. The accessibility checker will flag images that have alt text set in this way as a warning, and I would advise that you check these to make sure something nonsensical that is going to mislead somebody has been added.

### Colour contrast

Sufficient colour contrast is required so people can easily see the content. It's measured by programmatically checking the contrast between a background and foreground colour (for example text against the background it sits on). There are many automated tools that check this on the web, and the document accessibility checker will also flag errors where they are not sufficient.

Keeping on top of these and checking in often is important, especially if you're creating template documents that may be reused by other people. This one is easy to fix and can have a high impact by ensuring people do not miss vital content.

As I would also advise with web accessibility, it's generally not a good idea to try and include text over the top of images, it can make finding a good contrast very hard. If this is needed then try and still include a solid background colour behind the copy.

\[Screenshot of contrast issue being shown]

A colleague at Code, Alex Clapperton, has built and released a brilliant contrast checker that can be used on the web and as a Chrome extension.\[link to Alex Clapperton's colour contrast tool for checking contrasts] and you can also download apps that allow you to check contrast anywhere on your screen (so when it other apps etc) \[link to desktop contrast app]

### Heading structure

Just as content design and structure are an important part of accessibility on the web, the same can be applied to digital documents, after all, they are effectively just larger content pages. In Word you can choose heading levels, this can help visually and hierarchically break up documents, making them easier to read and scan.

People using screen readers may wish to navigate documents by the headings, therefore ensuring they are set, logically ordered, and suitably worded can go a long way to making a document more readable for everybody.

\[screenshot of heading level in Word]

#### Missing and duplicate slide titles (Powerpoint)

The content structure of presentations is made up slightly differently, as it's a series of broken-up slides, as opposed to a single document/body of content. However, it's still important to make sure that each slide has an associated title, after all, if these are missing or duplicated how is somebody who wants to quickly navigate the slides supposed to know what they relate to?

Duplicate slide titles can happen when dedicating sections of presentations to one topic and having the same slide title repeated and then revealing a bit more information on each slide. If doing this, it may be worth considering using a staggered animation or such to bring this content in.

The most common examples of missing slide titles I see are when the slide just contains a full image, or a logo, etc and these images have no alternative text and the slide has no title. To somebody using a screen reader, this slide would not be readable and they would miss any information or context it contained.

\[Screenshot of the 'slide content tree']

##### Setting hidden slide titles

From the Check Accessibility screen, you can set slide titles in a couple of ways. You can assign a slide a title (if there is some existing text for example) or you can set hidden slide titles too. Setting this will show the title you enter *above* the slide. When you present it will not be seen, crucially, however, it does give the slide an associated title.

\[Screenshot of the slide title menu and a visually hidden title]

### Reading order (Powerpoint)

The reading of slides determines what order the information on them will be interpreted by assistive technology such as screen readers. This is important so that not to confuse information in the wrong order that could change its context etc.

Powerpoint seems to flag lots of instances of this when running the accessibility checker, they are flagged as warnings, so things that need to be manually checked.

Reading order is dealt with oddly, however, and it can be hard to find. In the accessibility checker view toolbar find the "Arrange" panel and open the little dropdown arrow, this should then show a "Reading order" menu item. Selecting this will open a panel (in the same location as the accessibility checker) with the different elements on the slide in order.

This displays all the elements on the slide that would be read out and the order in which that would happen. The slightly odd thing is that Powerpoint decides this from bottom to top. So although it can be tempting to put the title at the top, then the subtitle, etc. The title would go at the bottom and then the next bit of information visually, and so on.

To re-order the items, you can drag them around to re-order, this doesn't affect the order visually.

\[Screenshot of reading order panel]

\[Link to more information on reading order]

## A note on PDFs

Many websites link to or offer downloads of PDF documents that contain important information. PDFs can be notoriously difficult to make accessible. There are ways to check the accessibility of PDFs using tools such as Adobe Acrobat, but it might not be possible to use software like this, and can often have large quantities of large, complex PDFs.

The reason this section has been included slightly separately is that would generally recommend asking if rather than using a PDF to display information a static page on the website would be a better alternative. Not only does it save people from having to download a document possibly coming at a larger data cost, but as long as the site is accessible, it will inherently be easier to make the information accessible.

## Summary and considerations

In this post, we have run through some common accessibility issues that can occur when putting together digital documents. This list is by no means exhaustive, but with continual checking of these documents as we produce them, many can be easy to fix and keep and top of and have a massive impact on making them inclusive and allowing people to consume your content, you never know who may need the information in them one day.

Some top-level things to remember:

* Consider and check alternative text when using images
* Make sure text designed to be headings, is set as so and that the order is logical
* In Powerpoint, make sure to set hidden slide titles if no visual title to give the slide an accessible name and try to avoid duplicate slide titles
* Make sure colour contrast between the text and background is sufficient
* In Powerpoint check the reading order of slides to ensure this logical
* Consider static pages over uploading and using many PDF documents

## Further reading

\[Collate list of useful links related to post - how to make accessible spreadsheets, pdfs, etc - need to name these links better rather than just urls]

* https://www.gov.uk/guidance/publishing-accessible-documents
* https://helpx.adobe.com/uk/acrobat/using/create-verify-pdf-accessibility.html
* https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/
* https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d
* https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593