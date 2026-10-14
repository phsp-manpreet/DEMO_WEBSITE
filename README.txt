CHAK BRO WEBSITE
================
Files
- index.html  : page structure
- style.css   : custom styles (Tailwind CSS loads from a CDN, so an internet connection is needed)
- script.js   : interactivity. Edit the data at the top:
                CONFIG   -> phone, address, full-menu link, Google reviews link
                MENU     -> dishes and descriptions (no prices)
                EXP      -> special experiences
                GALLERY  -> gallery photos
                REVIEWS  -> verified guest reviews only
- images/     : logo and photos. Replace a file with the same name to change a photo.

How to open: double-click index.html.
How to publish: upload all files and the images folder to any web host
(Netlify, Vercel, GitHub Pages or your hosting panel).

Before going live
- Confirm you have the right to use every photo (some are marked "Representative image").
- Check opening hours and the phone number.
- Crispy Corn and several other dishes still use a placeholder: add a photo in images/ and
  map it in DISH_IMG inside script.js.
