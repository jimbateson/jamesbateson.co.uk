---
layout: layouts/post.njk
title: An intro to digital document accessibility
date: 2023-04-26T04:21:15.692Z
tags:
  - Accessibility
---
When considering the digital products we design and build, we consider accessibility from the start and throughout. We also communicate important information both internally and externally via digital documents such as presentation decks, word documents, spreadsheets, and PDFs (more on those later though). However, making these accessible can often be forgotten. But how many people could we be excluding by not checking them? We don't know who may one day need to consume the information we present, and how vital this may be to them.

At Code we currently use the Microsoft suite of document applications, and these all have ways of checking for accessibility. In this article I'm going to run through how these checks can be done, and some common issues that you may find in your documents.

**NOTE**: In this article, I am going to be mianly using Powerpoint as the example, however, the techniques to check for accessibility are the same in other Microsoft document editing applications.

### Through the Review Menu item

You can open the accessibility pane by using the "Review" menu item and then using the "Check Accessibility" menu item. You should then see any accessibility errors, warnings, and tips shown in a side panel.

![Screenshot of the Powerpoint toolbar, the Review item is selected and displaying the options underneath.](/images/screenshot-2023-04-28-at-16.19.32.png)

### Through the helper toolbar

To take a couple of steps out of the above, you can also pin the accessibility checker to the bottom helper toolbar.

To do this (if you don't already see accessibility there) secondary click on the bottom toolbar (where the language etc is shown) and choose to show the accessibility checker.

As well as being easier to access and show the checker, it also shows a handy little status as you create your document. Either "Accessibility: Good to go" or "Accessibility: Investigate" along with an icon.

**Tip**: You can also toggle the "Keep accessibility checker running white I work" checkbox off and and to hide/show in the status bar.

![Screenshot of the Powerpoint helper toolbar. Showing Accessibility Checker as being selected to show.](/images/screenshot-2023-04-28-at-16.20.08.png)

## Common issues

So now we can open the checker, what kind of issues are common to see? Although  documents are a slightly different type of communication method from something like a website. The easy-to-fix, high-impact issues we see are similar to those associated with web accessibility.

### Alternative text

Alternative text is used to describe to assisitve technology such as screen readers what is in an image. On the web, images are commonly used to support content and convey extra context or emotion, for icons, and also just for visual decoration proving no extra information or context.

This is the same in digital documents, however, alternative text for these images often isn't considered and can be added. Let's look at how this can be done and any considerations that can be made.

### Adding alternative text

When inserting an image you can secondary click on it, in the menu that opens you should see a "View Alt Text..." menu item. Selecting this will open up a panel in the same area as the main accessibility one. Here you should see a text box where you can enter the alternative text you want for the image. There is also a checkbox for marking the image as decorative and then some nice explainer text on why alternative text is important.

![Screenshot of the aalt text panel open in Powerpoint.](/images/screenshot-2023-05-16-at-20.18.42.png)

### When is it needed and when is it decorative?

Choosing when and what to write as alternative (alt) text can be trickier than it sounds. As a general rule of thumb, if the image gives the supporting content extra information, context, or emotion then it should be described with alternative text so that people using screen readers do not miss out on it.

Objects such as icons, shapes, and background images (in some cases) do not necessarily need to be announced if they offer no relevant and important information, and this is where the decorative checkbox comes in. This can be checked to ensure that accessibility requirements are met but that people do not need to hear about this image.

The decision can be particularly important in digital documents as they often contain images of charts, graphs, tables, and infographics. Showing information that is vital to the document. It is key that these images are described with the content they display, otherwise, people are being excluded from being able to consume the document and may miss out on something vitally important.

[A11y Project - using alt text properly](https://www.a11yproject.com/posts/alt-text/)

### Watch out for generated alt text

There are a few instances when we've seen images added and the software does its best to add alternative text. Whilst this is quite cool, and no doubt improving with the current trends around AI, alternative text is something that still needs human context and consideration. The accessibility checker will flag images that have alt text set in this way as a warning, and it's worth checking these to make sure something nonsensical that is going to mislead somebody has not been added.

To generate the alt text you can you use the "Generate alt text for me" button.

### Web application versions and alt text

From experience trying to use the web version of Powerpoint, it doesn't seem possible to mark an image as decorative.

### Colour contrast

Sufficient colour contrast is required so people can easily see the content. It's measured by programmatically checking the contrast between a background and foreground colour (for example text against the background it sits on). There are many automated tools that check this on the web, and the document accessibility checker will also flag errors where they are not sufficient.

Keeping on top of these and checking in often is important, especially if you're creating template documents that may be reused by other people. This one is easy to fix and can have a high impact result by ensuring people do not miss vital content.

As I would also advise with web accessibility, it's generally not a good idea to try and include text over the top of images, it can make finding a good contrast very hard. If this is needed then try and still include a solid background colour behind the copy.

Whislt there doesn't seem to be any in built tool for checking the contrast rating (the issues are just reported as "Hard-to-read to contrast"), there are many tools available online that you can use to check.

A colleague at Code, Alex Clapperton, has built and released a [brilliant contrast checker- colourcontrast.cc](https://colourcontrast.cc/) that can be used on the web and as a Chrome extension. And you can also download apps that allow you to check contrast anywhere on your screen (so when in other apps etc) for example the [TPGi color contrast analyser](https://www.tpgi.com/color-contrast-checker/).

### Heading structure

Just as content design and structure are an important part of accessibility on the web, the same can be applied to digital documents, after all, they are effectively just larger content pages. In Word you can choose heading levels, this can help visually and hierarchically break up documents, making them easier to read and scan.

People using screen readers may wish to navigate documents by the headings, therefore ensuring they are set, logically ordered (heading 1, heading 2, heading 3 for example, not skipping levels), and suitably worded can go a long way to making a document more readable for everybody.

Word offers styles for document titles, subtitles and then heading levels. These can found in the syles pane, where you can add more levels if needed.

![Screenshot of the styles pane open in Microsoft word. Showing a variety of text styles to pick from.](/images/screenshot-2023-05-17-at-07.45.29.png)

#### Missing and duplicate slide titles (Powerpoint)

The content structure of presentations is made up slightly differently, as it's a series of broken-up slides, as opposed to a single document/body of content. However, it's still important to make sure that each slide has an associated title, after all, if these are missing or duplicated how is somebody who wants to quickly navigate the slides supposed to know what they relate to?

Duplicate slide titles can happen when dedicating sections of presentations to one topic and having the same slide title repeated and then revealing a bit more information on each slide. If doing this, it may be worth considering using a staggered animation or such to bring this content in.

The most common examples of missing slide titles I see are when the slide just contains a full image, or a logo, etc and these images have no alternative text and the slide has no title. To somebody using a screen reader, this slide would not be readable and they would miss any information or context it contained.

Top open the slide content outline, you can select one of the missing slide title errors from the accessibility pane, or use View - Outline menu items.

![Screenshot of the presentation outline view in Microsoft PowerPoint. It shows a number of slides with missing slide titles.](/images/screenshot-2023-05-17-at-07.50.30.png)

##### Setting hidden slide titles

From the accessibility checking toolbar, you can set slide titles in a couple of ways. You can assign a slide a title (if there is some existing text for example) or you can set hidden slide titles too. Setting this will show the title you enter *above* the slide. When you present it will not be seen, crucially, however, it does give the slide an associated title.

![Screenshot of the accessibility slide title menu open. Displaying options to show a slide title or a hidden slide title.](/images/screenshot-2023-05-17-at-07.55.16.png)

![Screenshot showing how a hidden slide title is placed above the slide it relates to.](/images/screenshot-2023-05-17-at-07.56.15.png)

### Reading order (Powerpoint)

The reading of slides determines what order the information on them will be interpreted by assistive technology such as screen readers. This is important so that not to confuse information in the wrong order that could change its context etc.

Powerpoint seems to flag lots of instances of this when running the accessibility checker, they are flagged as warnings, so things that need to be manually checked.

Reading order is dealt with oddly, however, and it can be hard to find. In the accessibility checker view toolbar find the "Arrange" panel and open the little dropdown arrow, this should then show a "Reading order" menu item. Selecting this will open a panel (in the same location as the accessibility checker) with the different elements on the slide in order.

This displays all the elements on the slide that would be read out and the order in which that would happen. The slightly odd thing is that Powerpoint decides this from bottom to top. So although it can be tempting to put the title at the top, then the subtitle, etc. The title would go at the bottom and then the next bit of information visually, and so on.

To re-order the items, you can drag them around to re-order, this doesn't affect the order visually.

![Screenshot showing the accessibility selection pane open in Microsoft PowerPoint.](/images/screenshot-2023-05-17-at-20.23.27.png)

[Find out more on slide reading order](https://support.microsoft.com/en-us/office/make-slides-easier-to-read-by-using-the-reading-order-pane-863b5c1c-4f19-45ec-96e6-93a6457f5e1c)

## Emails

Emails for a large part of digital communication in nearly all organisations. Although many can simpily be quick notes or small blocks of text, it's still important that they are accessible and inclusive for people that may need to know about the information they contain.

Outlook also has the accessibility pane to check your email content. This can be found by using the three dots at the top right when composing an email.

In some versions of the app you can also select File > Options > Accessibility and turn on little tooltip accessibility notifications as you compose emails.

![Screenshot showing the check accessibility menu item in Microsoft Outlook.](/images/screenshot-2023-05-17-at-21.16.05.png)

## A note on PDFs

Many websites link to or offer downloads of PDF documents that contain important information. PDFs can be notoriously difficult to make accessible and require a lot of upkeep and maintenance. There are ways to check the accessibility of PDFs using tools such as Adobe Acrobat, but it might not be possible to use software like this, and can often have large quantities of large, complex PDFs.

The reason this section has been included slightly separately is that would generally recommend asking if rather than using a PDF to display information a static page on the website would be a better alternative. Not only does it save people from having to download a document possibly coming at a larger data cost, but as long as the site is accessible, it will inherently be easier to make the information accessible.

## Differences in Microsoft Office OS apps

One of the things I've personally found most furstrating when trying to both learn more about digital document accessibility, demo it, and pass that knowledge on, is the differences in features the applications offer from Mac to Windows to Web versions.

I beleive that accessibility should be the core of any product, and to not include some across different OS versions is highly frustrating.

Here are some examples that I've come across and to watch out for:

### PowerPoint

* In the Mac app, it doesn't appear possible to control the reading order of slides in the same way you can on Windows, which has its own reading and arrange order
* In the Windows app you can add subtitles/transcripts to videos, however, in the Mac app you must make sure these are on the video before embedding
* On the web version, it doesn't seem possible to mark images as decorative when adding alt text

### Outlook

* In the Mac app don't appear to be able to find a all the accessibility options (could be Outlook version)
* When working in dark mode you only seem to get colour contrast issues being flagged, the tooltip does not show

There is more information on [checking accessibility whilst working in office apps](https://support.microsoft.com/en-gb/office/check-accessibility-while-you-work-in-office-apps-ae9e8ea7-1f22-41af-ad04-cc2919daebae).

## Summary and considerations

In this post, we have run through some common accessibility issues that can occur when putting together digital documents. This list is by no means exhaustive, but with continual checking of these documents as we produce them, many can be easy to fix and keep and top of and have a massive impact on making them inclusive and allowing people to consume your content, you never know who may need the information in them one day.

Some top-level things to consider:

* Consider and check alternative text when using images
* Make sure text designed to be headings, is set as so and that the order is logical
* In Powerpoint, make sure to set hidden slide titles if no visual title to give the slide an accessible name and try to avoid duplicate slide titles
* Make sure colour contrast between the text and background is sufficient
* In Powerpoint check the reading order of slides to ensure this logical
* Check emails. Especially ones  containing lots of information, templates and ones containing formatting
* Consider static pages over uploading and using many PDF documents

## Further reading

Here are some useful articles that explain how you can check accessibility in the software mentioned in this article. Where applicable they cover any differences between the apps on various operating systems.

* [GOV.uk guidance on publishing accessible documents](https://www.gov.uk/guidance/publishing-accessible-documents)
* [Adobe article on verifying PDF accessibility](https://helpx.adobe.com/uk/acrobat/using/create-verify-pdf-accessibility.html)
* [GOV.uk blog on why their content should be published in HTML not PDF format](https://gds.blog.gov.uk/2018/07/16/why-gov-uk-content-should-be-published-in-html-and-not-pdf/)
* [Excellent article explaining the Microsoft office document accessibility checker](https://support.microsoft.com/en-us/office/rules-for-the-accessibility-checker-651e08f2-0fc3-4e10-aaca-74b4a67101c1)—this includes what rules apply to the different document types. **Well worth reading to familiarise yourself with them**.
* [Microsoft PowerPoint accessibility](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)
* [Microsoft Word document accessibility](https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d)
* [Microsoft Excel document accessibility](https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593)
* [Microsoft Outlook accessibility](https://support.microsoft.com/en-us/office/make-your-outlook-email-accessible-to-people-with-disabilities-71ce71f4-7b15-4b7a-a2e3-cf91721bbacb)