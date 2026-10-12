# PSA Resit Trainer

A study tool for the Prescribing Safety Assessment, built to the official blueprint (8 sections, 60 items, 200 marks, 2 hours).

Open `index.html` in a browser. No build step.

- **Days 1–7**: each day teaches the next most valuable section (by marks), opens with recall cards from earlier days, then mixes new practice with spaced review. Items you got wrong come back on later days.
- **Drills**: practise any one section; wrong and unseen items come first.
- **Full mock**: a random 60-item paper in the real section order, with a 2-hour timer and section-by-section results.

Files: `data/questions.js` (question bank), `data/days.js` (lessons and curriculum), `app.js` (logic).

Progress is stored in the browser's localStorage. Doses follow the BNF and NICE guidance; always confirm against the live BNF.
