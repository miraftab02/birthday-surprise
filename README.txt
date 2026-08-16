BIRTHDAY SURPRISE WEBSITE — UPDATED
===================================

Flow
----
index.html -> surprise.html -> gallery.html -> propose.html -> journey.html

What was changed
----------------
1. Kept every existing href/link destination unchanged.
2. Added a dusty-rose birthday doodle background inspired by the supplied reference.
3. Improved text contrast so headings, body text and buttons remain readable.
4. Surprise page now has a large CSS birthday cake with six candles.
5. The user must click "Blow the Candles" before the next-surprise link unlocks.
6. Blowing the candles turns the flames off and starts confetti/hearts.
7. Proposal page now has ONLY one YES button.
8. Proposal page clearly warns that YES is required to unlock the next surprise.
9. YES triggers hearts/confetti and then opens journey.html.
10. Journey page is now charming but simple, with the same dusty-rose birthday vibe.
11. Final message is large: "Happy Birthday Again My Love".
12. Final affectionate line is intentionally small: "I love u snitch ♡".
13. Added cinematic.js because the previous journey page referenced it but it was missing.

Photos
------
The existing photo filenames were kept unchanged.
Replace the files in assets/ if you want to use different photos.

Pattern
-------
assets/birthday-pattern.jpg is the supplied birthday doodle reference used softly
as the repeating background texture.


FIX APPLIED:
- Fixed the Our Journey page vertical scrolling. The page previously used overflow:hidden, which clipped content and prevented normal downward scrolling.
- Vertical overflow is now visible/auto while horizontal overflow remains hidden.
