# facebooklikes
## Remove likes from Facebook notifications

This code looks at all the notifications in the Facebook Notifications dropdown and if they are likes, removes the "newness" from them (they are no longer highlighted blue). 

It deducts the number of likes and reacts from the total number of notifications. 

Finally, it changes the number displayed in the red ball and also in the page title. 

This is just Javascript to be run as a bookmarklet. Works in the Chrome console.

Also works as a Chrome bookmarklet; see below instructions to create.

Next I want to change it into a Chrome extension.

## To create a bookmarklet, in Chrome:

 1. Open up bookmark manager.
 1. In the folder* where you want the new bookmarklet, under the Organize pulldown, choose Add Page ...
 1. Call the bookmarklet whatever you want, highlight the entire functionality_jswidget_min.js file, and paste into the URL field.

\*I have a bookmark subdir with a few JS widgets.
