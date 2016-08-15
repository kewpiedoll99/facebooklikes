# facebooklikes
## Remove likes from Facebook notifications

Right now this is just Javascript to be run as a bookmarklet. 
Eventually I hope to change it into a Chrome extension, but for now I will be happy if I get the bookmarklet to work correctly.

At present this doesn't work. Where I'm at:
- I determined that mouseover causes dom to replace `span` under `div._33p/div#u_0_m to div._50-t/...` and the latter's children are what you need to be able to see to get at the list of notifications.
- I was able to spoof a mouseover, and when I do this in the console, it replaces the `span` with the `div`s.
- When I run this inside my script, the replacement doesn't happen fast enough? 
- I even check to see if `div.#u_0_m` has children in a while loop that runs up to 10000x but that is not long enough.

## To create a bookmarklet, in Chrome:

 1. Open up bookmark manager.
 1. In the folder where you want the new bookmarklet, under the Organize pulldown, choose Add Page ...
 1. Call the bookmarklet whatever you want, highlight the entire functionality_jswidget_min.js file, and paste into the URL field.

I have a bookmark subdir with a few JS widgets.
