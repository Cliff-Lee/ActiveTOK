# TOK Cognitive Science Activity Bank

A simple static website for IB Theory of Knowledge teachers. It uses only HTML, CSS, and vanilla JavaScript.

## Files

- `index.html` - homepage with hero, category cards, feature highlights, and featured activities
- `activities.html` - searchable and filterable activity library
- `pricing.html` - placeholder pricing page where everything is free for now
- `about.html` - project purpose and design principles
- `styles.css` - responsive styling and visual system
- `script.js` - reusable category data, activity data, filters, and navigation behavior
- `assets/hero-tok-cognitive-science.png` - local generated hero image
- `content/` - Markdown source files for activity pages
- `resources/` - free classroom resource packs with exact lesson questions, stimulus packets, printable cards, visual prompts, and CSV files
- `premium/` - worksheet PDFs, run-kit PDFs, teacher-note PDFs, PowerPoint slide decks, and editable Markdown/HTML resource pages
- `tools/activity-data.mjs` - source activity data used to generate Markdown, HTML, and the browser database
- `tools/activity-enhancements.mjs` - classroom examples, run kits, teacher prompts, adaptations, and extensions for every activity
- `tools/additional-activities.mjs` - extra hand-authored activities added after the initial imported activity set
- `tools/additional-activity-enhancements.mjs` - classroom examples and run resources for the additional activities
- `tools/more-activities.mjs` - latest expansion activities organized separately for easier editing
- `tools/more-activity-enhancements.mjs` - classroom examples and run resources for the latest expansion
- `tools/practical-lesson-kits.mjs` - exact student questions, concrete stimuli, answer keys, and teacher reveals for printable resources
- `tools/generate-activity-pages.mjs` - regenerates Markdown and static activity pages from the activity content set
- `tools/resource-pack-generator.mjs` - builds free classroom resource packs, card decks, data files, and visual prompts
- `tools/generate-pdf-resources.mjs` - regenerates downloadable worksheet, teacher-note, and run-kit PDFs
- `tools/generate-slide-decks.mjs` - regenerates the PowerPoint slide decks with example slides and embedded visual panels

## Use

Open `index.html` in a browser. No build step, package manager, or server is required.

To regenerate activity Markdown, HTML pages, free classroom resource packs, worksheets, teacher notes, and the `script.js` activity database after editing activity source or enhancement files, run:

```bash
node tools/generate-activity-pages.mjs
```

To regenerate the downloadable PDF resources, run:

```bash
node tools/generate-pdf-resources.mjs
```

To regenerate the PowerPoint slide decks after editing activity content, run:

```bash
node tools/generate-slide-decks.mjs
```

## Activity Categories

- Knowledge and the Knower
- Knowledge and Technology
- Knowledge and Language
- Mathematics
- Natural Sciences
- Human Sciences
- History
- The Arts
- Cross-AOK

## Adding Activities

Add imported/core activity objects in `tools/activity-data.mjs`. Add newer hand-authored activity objects in `tools/additional-activities.mjs` or `tools/more-activities.mjs`, then add classroom-ready details in the matching enhancement file.

Required fields:

- `id`
- `title`
- `category`
- `time`
- `summary`
- `bigIdea`
- `free`
- `premiumResources`

Use `free: true` for current activity pages. Premium worksheet drafts, teacher notes drafts, and PowerPoint slide decks are generated into `premium/`. Enhancement fields add ready-to-use examples, run resources, teacher language, sample student output, adaptations, and extension tasks.

## Notes

All current activity resources are free. The pricing page and activity card data model are designed so premium resources can be introduced later without redesigning the site.
