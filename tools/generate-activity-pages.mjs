import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { activities } from "./activity-data.mjs";
import { enhanceActivity, visualSvgFor } from "./activity-enhancements.mjs";
import { resourcePackFiles } from "./resource-pack-generator.mjs";
import { lessonKitFor } from "./practical-lesson-kits.mjs";
import { htmlEscape, htmlWithMath, markdownWithMath } from "./math-formatting.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const titleById = new Map(activities.map(activity => [activity.id, activity.title]));
const slugById = new Map(activities.map(activity => [activity.id, activity.slug]));

const yamlValue = value => JSON.stringify(value);
const markdownList = items => items.map(item => `- ${markdownWithMath(item)}`).join("\n");
const markdownOrderedList = items => items.map((item, index) => `${index + 1}. ${markdownWithMath(item)}`).join("\n");
const htmlList = items => items.map(item => `                <li>${htmlWithMath(item)}</li>`).join("\n");
const htmlParagraphs = items => items.map(item => `              <p>${htmlWithMath(item)}</p>`).join("\n");
const resourceLinkLabel = resource => resource.title.replace(/^Premium /, "");
const resourceLinkVerb = resource => resource.kind === "slides" ? "Download" : "Open";
const resourceDownloadAttribute = resource => resource.kind === "slides" ? " download" : "";
const enhancementFor = activity => activity.enhancement ?? enhanceActivity(activity);
const shortResourceTitle = resource => resource.kind === "run-kit" ? "run kit" : resourceLinkLabel(resource);
const htmlListFrom = (items, indent = "                ") => items.map(item => `${indent}<li>${htmlWithMath(item)}</li>`).join("\n");
const fieldList = (activity, key) => Array.isArray(activity[key]) ? activity[key] : [];
const optionalMarkdownSection = (title, items) => items.length ? `## ${title}\n\n${markdownList(items)}\n\n` : "";
const optionalHtmlSection = (id, title, items) => items.length ? `
            <section aria-labelledby="${id}">
              <h2 id="${id}">${title}</h2>
              <ul>
${htmlList(items)}
              </ul>
            </section>
` : "";
const markdownLessonQuestions = kit => kit.lessonQuestions
  .map(question => `${question.number}. ${markdownWithMath(question.question)}${question.answer ? `\n   - Teacher key/cue: ${markdownWithMath(question.answer)}` : ""}`)
  .join("\n");
const markdownStimulusCards = kit => kit.stimulusCards
  .map(card => `### ${markdownWithMath(card.title)}\n\n${markdownWithMath(card.body)}\n\n${card.meta ? `Teacher cue: ${markdownWithMath(card.meta)}\n` : ""}`)
  .join("\n");
const htmlLessonQuestionRows = kit => kit.lessonQuestions.map(question => `
                  <tr>
                    <td>${question.number}</td>
                    <td>${htmlWithMath(question.question)}</td>
                    <td>${htmlWithMath(question.answer || "")}</td>
                  </tr>`).join("");
const htmlStimulusCards = kit => kit.stimulusCards.map(card => `
              <article class="print-card stimulus-card">
                <p class="print-card-type">Stimulus</p>
                <h3>${htmlWithMath(card.title)}</h3>
                <p>${htmlWithMath(card.body)}</p>
                <small>${htmlWithMath(card.meta || card.teacherUse || "")}</small>
              </article>`).join("");

function premiumResourceList(activity) {
  return activity.premiumResources
    .map(resource => {
      const links = [
        resource.pagePath ? resource.pagePath : null,
        resource.pdfPath ? resource.pdfPath : null,
        resource.pptxPath ? resource.pptxPath : null
      ].filter(Boolean);
      const pathNote = links.length ? ` (${[...new Set(links)].join(", ")})` : "";
      return `- ${resource.title}: ${resource.message}${pathNote}`;
    })
    .join("\n");
}

function premiumResourceCards(activity, pathPrefix = "") {
  return activity.premiumResources.map(resource => `
                <div class="activity-resource-card ${resource.pagePath ? "resource-card-ready" : "resource-card-locked"}">
                  <span>${htmlEscape(resource.title)}</span>
                  <p>${htmlWithMath(resource.message)}</p>
                  <div class="resource-actions">
                    ${resource.pagePath ? `<a class="resource-link" href="${pathPrefix}${resource.pagePath}"${resourceDownloadAttribute(resource)}>${resourceLinkVerb(resource)} ${htmlEscape(shortResourceTitle(resource))}</a>` : ""}
                    ${resource.pdfPath ? `<a class="resource-link" href="${pathPrefix}${resource.pdfPath}" download>Download PDF</a>` : ""}
                  </div>
                </div>`).join("");
}

function premiumResourceMarkdown(activity, resource) {
  if (resource.kind === "worksheet") {
    return worksheetMarkdown(activity, resource);
  }

  if (resource.kind === "teacher-notes") {
    return teacherNotesMarkdown(activity, resource);
  }

  if (resource.kind === "run-kit") {
    return runKitMarkdown(activity, resource);
  }

  if (resource.kind === "slides") {
    return slidesMarkdown(activity, resource);
  }

  return `---\n` +
    `title: ${yamlValue(resource.title)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `resourceType: ${yamlValue(resource.kind)}\n` +
    `premium: true\n` +
    `status: ${yamlValue(resource.status)}\n` +
    `---\n\n` +
    `# ${resource.title}\n\n` +
    `${resource.message}\n`;
}

function worksheetMarkdown(activity, resource) {
  const kit = lessonKitFor(activity);
  return `---\n` +
    `title: ${yamlValue(`${activity.title} Worksheet`)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `resourceType: ${yamlValue(resource.kind)}\n` +
    `premium: true\n` +
    `status: ${yamlValue(resource.status)}\n` +
    `---\n\n` +
    `# ${activity.title} Worksheet\n\n` +
    `Name: ________________________________  Class: __________________  Date: __________________\n\n` +
    `## Learning Focus\n\n` +
    `${markdownWithMath(activity.bigIdea)}\n\n` +
    `## Student Prompt\n\n` +
    `${markdownWithMath(kit.studentPrompt)}\n\n` +
    `## Concrete Stimulus Packet\n\n` +
    `${markdownStimulusCards(kit)}\n\n` +
    `## Actual Lesson Questions\n\n` +
    `${markdownLessonQuestions(kit)}\n\n` +
    `## Before the Activity\n\n` +
    `1. What do you think this activity will test about knowledge, evidence, or interpretation?\n` +
    `2. What assumptions might you bring to this activity?\n` +
    `3. How confident are you that your first judgement will be reliable? Explain briefly.\n\n` +
    `## Materials or Stimulus\n\n` +
    `${markdownList(activity.materials)}\n\n` +
    optionalMarkdownSection("Ready-to-Use Examples", fieldList(activity, "exampleStimuli")) +
    optionalMarkdownSection("Run Resources", fieldList(activity, "runResources")) +
    `## Activity Steps\n\n` +
    `${markdownOrderedList(activity.procedure)}\n\n` +
    optionalMarkdownSection("Teacher Language", fieldList(activity, "sampleTeacherLanguage")) +
    `## Student Task\n\n` +
    `${markdownWithMath(kit.studentTask)}\n\n` +
    `## Observation and Evidence Record\n\n` +
    `Use this table to separate what you noticed from what you inferred.\n\n` +
    `| What I noticed | What I inferred | Evidence for my inference | Confidence level |\n` +
    `| --- | --- | --- | --- |\n` +
    `|  |  |  |  |\n` +
    `|  |  |  |  |\n` +
    `|  |  |  |  |\n\n` +
    `## TOK Debrief\n\n` +
    `${markdownList(activity.debrief)}\n\n` +
    `## Knowledge Questions\n\n` +
    `${markdownList(activity.knowledgeQuestions)}\n\n` +
    `Choose one question above and write a 5-7 sentence response that uses this activity as evidence.\n\n` +
    `## Exhibition Object Connection\n\n` +
    `${markdownWithMath(activity.exhibitionObject)}\n\n` +
    optionalMarkdownSection("Extension Tasks", fieldList(activity, "extensionTasks")) +
    `Sketch or describe a possible TOK exhibition object connected to this activity.\n\n` +
    `Object: ________________________________________________________________________________\n\n` +
    `How it connects to knowledge: __________________________________________________________\n\n` +
    `## Exit Ticket\n\n` +
    `Complete these sentences:\n\n` +
    `- Before this activity, I assumed...\n` +
    `- The activity challenged that assumption because...\n` +
    `- A better knowledge question I can now ask is...\n`;
}

function teacherNotesMarkdown(activity, resource) {
  const kit = lessonKitFor(activity);
  const timingRows = activity.procedure
    .map((step, index) => `| ${index + 1} | ${markdownWithMath(step).replace(/\|/g, "/")} | Watch for student assumptions, confidence shifts, and evidence claims. |`)
    .join("\n");
  const related = activity.related
    .map(id => `- ${titleById.get(id)} (${slugById.get(id)}.html)`)
    .join("\n");

  return `---\n` +
    `title: ${yamlValue(`${activity.title} Teacher Notes`)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `resourceType: ${yamlValue(resource.kind)}\n` +
    `premium: true\n` +
    `status: ${yamlValue(resource.status)}\n` +
    `---\n\n` +
    `# ${activity.title} Teacher Notes\n\n` +
    `## Overview\n\n` +
    `${markdownWithMath(activity.summary)}\n\n` +
    `## TOK Fit\n\n` +
    `Category: ${activity.category}\n\n` +
    `Big idea: ${markdownWithMath(activity.bigIdea)}\n\n` +
    `This activity works best when students first experience a small uncertainty, surprise, disagreement, or interpretive tension, then name what the experience reveals about knowledge.\n\n` +
    `## Student Prompt\n\n` +
    `${markdownWithMath(kit.studentPrompt)}\n\n` +
    `## Concrete Stimulus Packet\n\n` +
    `${markdownStimulusCards(kit)}\n\n` +
    `## Actual Lesson Questions and Key\n\n` +
    `${markdownLessonQuestions(kit)}\n\n` +
    `## Teacher Reveal\n\n` +
    `${markdownWithMath(kit.teacherReveal)}\n\n` +
    `${markdownList(kit.answerKey)}\n\n` +
    `## Preparation\n\n` +
    `${markdownList(activity.materials)}\n\n` +
    optionalMarkdownSection("Setup Notes", fieldList(activity, "setup")) +
    optionalMarkdownSection("Ready-to-Use Examples", fieldList(activity, "exampleStimuli")) +
    optionalMarkdownSection("Run Resources", fieldList(activity, "runResources")) +
    `Before class, prepare the stimulus or scenario and decide whether students will work individually, in pairs, or in small groups.\n\n` +
    `## Suggested Timing\n\n` +
    `Total time: ${activity.time}\n\n` +
    `| Stage | Teacher move | Facilitation note |\n` +
    `| --- | --- | --- |\n` +
    `${timingRows}\n` +
    `| Debrief | Use the TOK questions to move from activity outcome to knowledge analysis. | Ask students to distinguish evidence, interpretation, confidence, and perspective. |\n\n` +
    optionalMarkdownSection("Sample Teacher Language", fieldList(activity, "sampleTeacherLanguage")) +
    `## Facilitation Moves\n\n` +
    `- Start with private thinking before public discussion so students can notice their own assumptions.\n` +
    `- Ask students to justify claims with evidence from the activity rather than general opinion.\n` +
    `- Press for TOK language: evidence, justification, perspective, method, reliability, interpretation, certainty, and community.\n` +
    `- Keep the tone low-stakes; the goal is reflective noticing, not catching students out.\n\n` +
    optionalMarkdownSection("Sample Student Output", fieldList(activity, "sampleStudentOutput")) +
    `## Likely Student Responses\n\n` +
    `- Students may treat the activity as a trick rather than as evidence about knowing.\n` +
    `- Students may overgeneralise from one classroom demonstration.\n` +
    `- Students may say \"it depends\" without naming the criteria that matter.\n` +
    `- Students may need help turning a concrete result into an abstract knowledge question.\n\n` +
    `## Common Pitfalls\n\n` +
    `- Moving too quickly to explanation before students record their first judgement.\n` +
    `- Letting the discussion become only psychological content rather than TOK analysis.\n` +
    `- Treating uncertainty as failure instead of as a normal feature of inquiry.\n\n` +
    optionalMarkdownSection("Activity-Specific Adaptations", fieldList(activity, "adaptations")) +
    `## Differentiation\n\n` +
    `- Support: Give students sentence starters such as \"This shows that knowledge depends on...\" or \"The evidence is limited because...\".\n` +
    `- Challenge: Ask students to compare this activity with another AOK or design a stronger method for testing the same issue.\n` +
    `- Extension: Have students turn one debrief point into a TOK exhibition-style object commentary.\n\n` +
    optionalMarkdownSection("Extension Tasks", fieldList(activity, "extensionTasks")) +
    `## Assessment Evidence\n\n` +
    `Look for students who can:\n\n` +
    `- Distinguish observation from interpretation.\n` +
    `- Explain how a method, tool, language choice, or perspective shapes knowledge.\n` +
    `- Formulate a knowledge question rather than a subject-specific factual question.\n` +
    `- Use the classroom activity as evidence without overclaiming.\n\n` +
    `## Debrief Questions\n\n` +
    `${markdownList(activity.debrief)}\n\n` +
    `## Knowledge Questions\n\n` +
    `${markdownList(activity.knowledgeQuestions)}\n\n` +
    `## Exhibition Object Suggestion\n\n` +
    `${markdownWithMath(activity.exhibitionObject)}\n\n` +
    `## Related Activities\n\n` +
    `${related}\n`;
}

function runKitMarkdown(activity, resource) {
  const kit = lessonKitFor(activity);
  const related = activity.related
    .map(id => `- ${titleById.get(id)} (${slugById.get(id)}.html)`)
    .join("\n");

  return `---\n` +
    `title: ${yamlValue(`${activity.title} Run Kit`)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `resourceType: ${yamlValue(resource.kind)}\n` +
    `premium: true\n` +
    `status: ${yamlValue(resource.status)}\n` +
    `pdf: ${yamlValue(resource.pdfFilename)}\n` +
    `resourcePack: ${yamlValue(activity.resourcePackPath)}\n` +
    `visualPrompt: ${yamlValue(activity.visualPromptPath)}\n` +
    `---\n\n` +
    `# ${activity.title} Classroom Run Kit\n\n` +
    `## One-Minute Teacher Brief\n\n` +
    `${markdownWithMath(activity.summary)}\n\n` +
    `Big idea: ${markdownWithMath(activity.bigIdea)}\n\n` +
    `## Student-Facing Prompt\n\n` +
    `${markdownWithMath(kit.studentPrompt)}\n\n` +
    `## Concrete Stimulus Packet\n\n` +
    `${markdownStimulusCards(kit)}\n\n` +
    `## Actual Lesson Questions\n\n` +
    `${markdownLessonQuestions(kit)}\n\n` +
    `## Student Task\n\n` +
    `${markdownWithMath(kit.studentTask)}\n\n` +
    `## Teacher Key / Reveal\n\n` +
    `${markdownWithMath(kit.teacherReveal)}\n\n` +
    `${markdownList(kit.answerKey)}\n\n` +
    `## Setup Checklist\n\n` +
    `${markdownList(fieldList(activity, "setup").length ? fieldList(activity, "setup") : activity.materials)}\n\n` +
    `## Ready-to-Use Examples\n\n` +
    `${markdownList(fieldList(activity, "exampleStimuli"))}\n\n` +
    `## Run Resources\n\n` +
    `${markdownList(fieldList(activity, "runResources"))}\n\n` +
    `## Teacher Language\n\n` +
    `${markdownList(fieldList(activity, "sampleTeacherLanguage"))}\n\n` +
    `## Student Output Examples\n\n` +
    `${markdownList(fieldList(activity, "sampleStudentOutput"))}\n\n` +
    `## Procedure\n\n` +
    `${markdownOrderedList(activity.procedure)}\n\n` +
    `## Debrief Questions\n\n` +
    `${markdownList(activity.debrief)}\n\n` +
    `## Adaptations\n\n` +
    `${markdownList(fieldList(activity, "adaptations"))}\n\n` +
    `## Extension Tasks\n\n` +
    `${markdownList(fieldList(activity, "extensionTasks"))}\n\n` +
    `## Related Activities\n\n` +
    `${related}\n`;
}

function slidesMarkdown(activity, resource) {
  const related = activity.related
    .map(id => `- ${titleById.get(id)} (${slugById.get(id)}.html)`)
    .join("\n");

  return `---\n` +
    `title: ${yamlValue(`${activity.title} Slides`)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `resourceType: ${yamlValue(resource.kind)}\n` +
    `premium: true\n` +
    `status: ${yamlValue(resource.status)}\n` +
    `pptx: ${yamlValue(resource.pptxFilename)}\n` +
    `---\n\n` +
    `# ${activity.title} Slides\n\n` +
    `${resource.message}\n\n` +
    `PowerPoint deck: [${resource.pptxFilename}](${resource.pptxFilename})\n\n` +
    `## Slide Sequence\n\n` +
    `1. Activity frame: category, time, big idea, and visual prompt.\n` +
    `2. Purpose and setup: learning focus, materials, and teacher move.\n` +
    `3. Concrete examples: ready-to-use stimulus cards and teacher prompt.\n` +
    `4. Run the activity: student-facing procedure and example reminder.\n` +
    `5. Thinking record: observation, inference, evidence, and confidence.\n` +
    `6. TOK debrief: discussion and knowledge questions.\n` +
    `7. Adapt and extend: sample student output, extensions, and run resources.\n` +
    `8. Exhibition and exit ticket: object idea, reflection stems, and related activities.\n\n` +
    `## Big Idea\n\n` +
    `${markdownWithMath(activity.bigIdea)}\n\n` +
    `## Related Activities\n\n` +
    `${related}\n`;
}

function worksheetHtml(activity, resource) {
  const kit = lessonKitFor(activity);
  return resourceHtmlShell(activity, resource, `
          <section>
            <h2>Learning Focus</h2>
            <p>${htmlWithMath(activity.bigIdea)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Student Prompt</h2>
            <p>${htmlWithMath(kit.studentPrompt)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Concrete Stimulus Packet</h2>
            <div class="print-card-grid">
${htmlStimulusCards(kit)}
            </div>
          </section>
          <section class="lesson-kit-section">
            <h2>Actual Lesson Questions</h2>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question for students</th>
                    <th>Teacher cue</th>
                  </tr>
                </thead>
                <tbody>
${htmlLessonQuestionRows(kit)}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>Before the Activity</h2>
            <ol>
              <li>What do you think this activity will test about knowledge, evidence, or interpretation?</li>
              <li>What assumptions might you bring to this activity?</li>
              <li>How confident are you that your first judgement will be reliable? Explain briefly.</li>
            </ol>
          </section>
          <section>
            <h2>Materials or Stimulus</h2>
            <ul>
${htmlList(activity.materials)}
            </ul>
          </section>
${optionalHtmlSection("ready-examples", "Ready-to-Use Examples", fieldList(activity, "exampleStimuli"))}
${optionalHtmlSection("run-resources", "Run Resources", fieldList(activity, "runResources"))}
          <section>
            <h2>Activity Steps</h2>
            <ol>
${htmlList(activity.procedure)}
            </ol>
          </section>
${optionalHtmlSection("teacher-language", "Teacher Language", fieldList(activity, "sampleTeacherLanguage"))}
          <section class="lesson-kit-section">
            <h2>Student Task</h2>
            <p>${htmlWithMath(kit.studentTask)}</p>
          </section>
          <section>
            <h2>Observation and Evidence Record</h2>
            <p>Use this table to separate what you noticed from what you inferred.</p>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>What I noticed</th>
                    <th>What I inferred</th>
                    <th>Evidence for my inference</th>
                    <th>Confidence level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td><td></td><td></td><td></td></tr>
                  <tr><td></td><td></td><td></td><td></td></tr>
                  <tr><td></td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>TOK Debrief</h2>
            <ul>
${htmlList(activity.debrief)}
            </ul>
          </section>
          <section>
            <h2>Knowledge Questions</h2>
            <ul>
${htmlList(activity.knowledgeQuestions)}
            </ul>
            <p>Choose one question above and write a 5-7 sentence response that uses this activity as evidence.</p>
          </section>
          <section>
            <h2>Exhibition Object Connection</h2>
            <p>${htmlWithMath(activity.exhibitionObject)}</p>
            <p>Object: ________________________________________________________________________________</p>
            <p>How it connects to knowledge: __________________________________________________________</p>
          </section>
${optionalHtmlSection("extension-tasks", "Extension Tasks", fieldList(activity, "extensionTasks"))}
          <section>
            <h2>Exit Ticket</h2>
            <ul>
              <li>Before this activity, I assumed...</li>
              <li>The activity challenged that assumption because...</li>
              <li>A better knowledge question I can now ask is...</li>
            </ul>
          </section>
  `);
}

function teacherNotesHtml(activity, resource) {
  const kit = lessonKitFor(activity);
  const timingRows = activity.procedure
    .map((step, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${htmlWithMath(step)}</td>
                    <td>Watch for student assumptions, confidence shifts, and evidence claims.</td>
                  </tr>`)
    .join("");
  const relatedLinksHtml = activity.related
    .map(id => `              <li><a href="../../activities/${slugById.get(id)}.html">${htmlEscape(titleById.get(id))}</a></li>`)
    .join("\n");

  return resourceHtmlShell(activity, resource, `
          <section>
            <h2>Overview</h2>
            <p>${htmlWithMath(activity.summary)}</p>
          </section>
          <section>
            <h2>TOK Fit</h2>
            <p><strong>Category:</strong> ${htmlEscape(activity.category)}</p>
            <p><strong>Big idea:</strong> ${htmlWithMath(activity.bigIdea)}</p>
            <p>This activity works best when students first experience a small uncertainty, surprise, disagreement, or interpretive tension, then name what the experience reveals about knowledge.</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Student Prompt</h2>
            <p>${htmlWithMath(kit.studentPrompt)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Concrete Stimulus Packet</h2>
            <div class="print-card-grid">
${htmlStimulusCards(kit)}
            </div>
          </section>
          <section class="lesson-kit-section">
            <h2>Actual Lesson Questions and Key</h2>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question for students</th>
                    <th>Teacher key / cue</th>
                  </tr>
                </thead>
                <tbody>
${htmlLessonQuestionRows(kit)}
                </tbody>
              </table>
            </div>
          </section>
          <section class="lesson-kit-section teacher-key">
            <h2>Teacher Reveal</h2>
            <p>${htmlWithMath(kit.teacherReveal)}</p>
            <ul>
${htmlListFrom(kit.answerKey)}
            </ul>
          </section>
          <section>
            <h2>Preparation</h2>
            <ul>
${htmlList(activity.materials)}
            </ul>
          </section>
${optionalHtmlSection("setup-notes", "Setup Notes", fieldList(activity, "setup"))}
${optionalHtmlSection("ready-examples", "Ready-to-Use Examples", fieldList(activity, "exampleStimuli"))}
${optionalHtmlSection("run-resources", "Run Resources", fieldList(activity, "runResources"))}
          <section>
            <h2>Before Class</h2>
            <p>Before class, prepare the stimulus or scenario and decide whether students will work individually, in pairs, or in small groups.</p>
          </section>
          <section>
            <h2>Suggested Timing</h2>
            <p>Total time: ${htmlEscape(activity.time)}</p>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Teacher move</th>
                    <th>Facilitation note</th>
                  </tr>
                </thead>
                <tbody>
${timingRows}
                  <tr>
                    <td>Debrief</td>
                    <td>Use the TOK questions to move from activity outcome to knowledge analysis.</td>
                    <td>Ask students to distinguish evidence, interpretation, confidence, and perspective.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
${optionalHtmlSection("sample-teacher-language", "Sample Teacher Language", fieldList(activity, "sampleTeacherLanguage"))}
          <section>
            <h2>Facilitation Moves</h2>
            <ul>
              <li>Start with private thinking before public discussion so students can notice their own assumptions.</li>
              <li>Ask students to justify claims with evidence from the activity rather than general opinion.</li>
              <li>Press for TOK language: evidence, justification, perspective, method, reliability, interpretation, certainty, and community.</li>
              <li>Keep the tone low-stakes; the goal is reflective noticing, not catching students out.</li>
            </ul>
          </section>
${optionalHtmlSection("sample-student-output", "Sample Student Output", fieldList(activity, "sampleStudentOutput"))}
          <section>
            <h2>Likely Student Responses</h2>
            <ul>
              <li>Students may treat the activity as a trick rather than as evidence about knowing.</li>
              <li>Students may overgeneralise from one classroom demonstration.</li>
              <li>Students may say "it depends" without naming the criteria that matter.</li>
              <li>Students may need help turning a concrete result into an abstract knowledge question.</li>
            </ul>
          </section>
${optionalHtmlSection("activity-adaptations", "Activity-Specific Adaptations", fieldList(activity, "adaptations"))}
${optionalHtmlSection("extension-tasks", "Extension Tasks", fieldList(activity, "extensionTasks"))}
          <section>
            <h2>Assessment Evidence</h2>
            <ul>
              <li>Students distinguish observation from interpretation.</li>
              <li>Students explain how a method, tool, language choice, or perspective shapes knowledge.</li>
              <li>Students formulate a knowledge question rather than a subject-specific factual question.</li>
              <li>Students use the classroom activity as evidence without overclaiming.</li>
            </ul>
          </section>
          <section>
            <h2>Debrief Questions</h2>
            <ul>
${htmlList(activity.debrief)}
            </ul>
          </section>
          <section>
            <h2>Knowledge Questions</h2>
            <ul>
${htmlList(activity.knowledgeQuestions)}
            </ul>
          </section>
          <section>
            <h2>Related Activities</h2>
            <ul>
${relatedLinksHtml}
            </ul>
          </section>
  `);
}

function runKitHtml(activity, resource) {
  const kit = lessonKitFor(activity);
  const setupItems = fieldList(activity, "setup").length ? fieldList(activity, "setup") : activity.materials;
  const relatedLinksHtml = activity.related
    .map(id => `              <li><a href="../../activities/${slugById.get(id)}.html">${htmlEscape(titleById.get(id))}</a></li>`)
    .join("\n");

  return resourceHtmlShell(activity, resource, `
          <section>
            <h2>One-Minute Teacher Brief</h2>
            <p>${htmlWithMath(activity.summary)}</p>
            <p><strong>Big idea:</strong> ${htmlWithMath(activity.bigIdea)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Student Prompt</h2>
            <p>${htmlWithMath(kit.studentPrompt)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Concrete Stimulus Packet</h2>
            <div class="print-card-grid">
${htmlStimulusCards(kit)}
            </div>
          </section>
          <section class="lesson-kit-section">
            <h2>Actual Lesson Questions</h2>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question for students</th>
                    <th>Teacher key / cue</th>
                  </tr>
                </thead>
                <tbody>
${htmlLessonQuestionRows(kit)}
                </tbody>
              </table>
            </div>
          </section>
          <section class="lesson-kit-section">
            <h2>Student Task</h2>
            <p>${htmlWithMath(kit.studentTask)}</p>
          </section>
          <section class="lesson-kit-section teacher-key">
            <h2>Teacher Key / Reveal</h2>
            <p>${htmlWithMath(kit.teacherReveal)}</p>
            <ul>
${htmlListFrom(kit.answerKey)}
            </ul>
          </section>
          <section class="resource-pack-callout">
            <p class="content-label">Classroom materials</p>
            <h2>Printable Pack and Cards</h2>
            <p>Open the classroom resource pack for stimulus cards, CSV card deck, and the activity visual prompt.</p>
            <div class="resource-actions">
              <a class="button button-primary" href="../../${activity.resourcePackPath}">Open resource pack</a>
              <a class="button button-secondary" href="../../${activity.cardDeckPath}" download>Download card CSV</a>
            </div>
          </section>
          <section class="activity-visual-card">
            <h2>Visual Prompt</h2>
            <img src="../../${activity.visualPromptPath}" alt="${htmlEscape(activity.title)} visual prompt">
          </section>
          <section>
            <h2>Setup Checklist</h2>
            <ul>
${htmlListFrom(setupItems)}
            </ul>
          </section>
${optionalHtmlSection("ready-examples", "Ready-to-Use Examples", fieldList(activity, "exampleStimuli"))}
${optionalHtmlSection("run-resources", "Run Resources", fieldList(activity, "runResources"))}
${optionalHtmlSection("teacher-language", "Teacher Language", fieldList(activity, "sampleTeacherLanguage"))}
${optionalHtmlSection("sample-output", "Sample Student Output", fieldList(activity, "sampleStudentOutput"))}
          <section>
            <h2>Procedure</h2>
            <ol>
${htmlList(activity.procedure)}
            </ol>
          </section>
          <section>
            <h2>Debrief Questions</h2>
            <ul>
${htmlList(activity.debrief)}
            </ul>
          </section>
${optionalHtmlSection("adaptations", "Adaptations", fieldList(activity, "adaptations"))}
${optionalHtmlSection("extension-tasks", "Extension Tasks", fieldList(activity, "extensionTasks"))}
          <section>
            <h2>Related Activities</h2>
            <ul>
${relatedLinksHtml}
            </ul>
          </section>
  `);
}

function resourceHtmlFor(activity, resource) {
  if (resource.kind === "worksheet") {
    return worksheetHtml(activity, resource);
  }

  if (resource.kind === "teacher-notes") {
    return teacherNotesHtml(activity, resource);
  }

  if (resource.kind === "run-kit") {
    return runKitHtml(activity, resource);
  }

  return null;
}

function resourceHtmlShell(activity, resource, body) {
  const resourceTitleByKind = {
    worksheet: `${activity.title} Worksheet`,
    "teacher-notes": `${activity.title} Teacher Notes`,
    "run-kit": `${activity.title} Classroom Run Kit`
  };
  const resourceTitle = resourceTitleByKind[resource.kind] || `${activity.title} Resource`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${htmlEscape(resourceTitle)} for IB Theory of Knowledge teachers.">
  <title>${htmlEscape(resourceTitle)} | TOK Cognitive Science Activity Bank</title>
  <link rel="stylesheet" href="../../styles.css">
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="../../index.html" aria-label="TOK Cognitive Science Activity Bank home">
        <span class="brand-mark" aria-hidden="true">TOK</span>
        <span>
          <span class="brand-title">Cognitive Science Activity Bank</span>
          <span class="brand-subtitle">For IB Theory of Knowledge</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="sr-only">Open navigation</span>
      </button>
      <div class="nav-links" id="site-menu">
        <a href="../../index.html">Home</a>
        <a href="../../activities.html">Activities</a>
        <a href="../../pricing.html">Pricing</a>
        <a href="../../about.html">About</a>
      </div>
    </nav>
  </header>

  <main id="main-content">
    <article class="activity-detail premium-resource-page">
      <header class="page-hero activity-detail-hero">
        <div class="container page-hero-inner">
          <p class="eyebrow">Premium draft resource</p>
          <h1>${htmlEscape(resourceTitle)}</h1>
          <div class="activity-detail-meta" aria-label="Resource details">
            <span class="meta-pill">${htmlEscape(activity.category)}</span>
            <span class="meta-pill">${htmlEscape(activity.time)}</span>
            <span class="tier-badge tier-premium">Premium draft</span>
          </div>
          <p>${htmlWithMath(activity.summary)}</p>
        </div>
      </header>

      <div class="section">
        <div class="container resource-document">
          <p><a class="resource-back-link" href="../../activities/${activity.slug}.html">Back to ${htmlEscape(activity.title)}</a></p>
${body}
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand brand-footer" href="../../index.html">
          <span class="brand-mark" aria-hidden="true">TOK</span>
          <span>
            <span class="brand-title">Cognitive Science Activity Bank</span>
            <span class="brand-subtitle">Free resources for TOK teachers</span>
          </span>
        </a>
      </div>
      <p>Made for IB Theory of Knowledge classrooms. All activities are free while the bank is in its starter phase.</p>
      <div class="footer-links" aria-label="Footer navigation">
        <a href="../../index.html">Home</a>
        <a href="../../activities.html">Activities</a>
        <a href="../../pricing.html">Pricing</a>
        <a href="../../about.html">About</a>
      </div>
    </div>
  </footer>

  <script src="../../script.js"></script>
</body>
</html>
`;
}

function markdownFor(activity) {
  const kit = lessonKitFor(activity);
  return `---\n` +
    `title: ${yamlValue(activity.title)}\n` +
    `slug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `difficulty: ${yamlValue(activity.difficulty)}\n` +
    `free: ${activity.free}\n` +
    `premiumResources: ${JSON.stringify(activity.premiumResources)}\n` +
    `summary: ${yamlValue(activity.summary)}\n` +
    `bigIdea: ${yamlValue(activity.bigIdea)}\n` +
    `---\n\n` +
    `## Purpose\n\n${activity.purpose.map(markdownWithMath).join("\n\n")}\n\n` +
    `## Materials\n\n${markdownList(activity.materials)}\n\n` +
    `## Classroom Resource Pack\n\n` +
    `- Printable pack: ${activity.resourcePackPath}\n` +
    `- Editable card deck CSV: ${activity.cardDeckPath}\n` +
    `- Visual prompt image: ${activity.visualPromptPath}\n\n` +
    optionalMarkdownSection("Setup Notes", fieldList(activity, "setup")) +
    optionalMarkdownSection("Ready-to-Use Examples", fieldList(activity, "exampleStimuli")) +
    optionalMarkdownSection("Run Resources", fieldList(activity, "runResources")) +
    `## Student Prompt\n\n${markdownWithMath(kit.studentPrompt)}\n\n` +
    `## Actual Lesson Questions\n\n${markdownLessonQuestions(kit)}\n\n` +
    `## Concrete Stimulus Packet\n\n${markdownStimulusCards(kit)}\n\n` +
    `## Student Task\n\n${markdownWithMath(kit.studentTask)}\n\n` +
    `## Teacher Key / Reveal\n\n${markdownWithMath(kit.teacherReveal)}\n\n${markdownList(kit.answerKey)}\n\n` +
    `## Procedure\n\n${markdownOrderedList(activity.procedure)}\n\n` +
    optionalMarkdownSection("Teacher Language", fieldList(activity, "sampleTeacherLanguage")) +
    `## TOK Debrief\n\n${markdownList(activity.debrief)}\n\n` +
    `## Knowledge Questions\n\n${markdownList(activity.knowledgeQuestions)}\n\n` +
    `## Exhibition Object Idea\n\n${markdownWithMath(activity.exhibitionObject)}\n\n` +
    optionalMarkdownSection("Sample Student Output", fieldList(activity, "sampleStudentOutput")) +
    optionalMarkdownSection("Adaptations", fieldList(activity, "adaptations")) +
    optionalMarkdownSection("Extension Tasks", fieldList(activity, "extensionTasks")) +
    `## Teacher Notes\n\n${activity.teacherNotes.map(markdownWithMath).join("\n\n")}\n\n` +
    `## Future Premium Resources\n\n` +
    `${premiumResourceList(activity)}\n`;
}

function relatedLinks(activity) {
  return activity.related.map(id => {
    const title = titleById.get(id);
    const slug = slugById.get(id);
    return `                <li><a href="${slug}.html">${htmlEscape(title)}</a></li>`;
  }).join("\n");
}

function htmlFor(activity) {
  const kit = lessonKitFor(activity);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Detailed TOK activity plan for ${htmlEscape(activity.title)}, a free cognitive science activity for IB Theory of Knowledge teachers.">
  <title>${htmlEscape(activity.title)} | TOK Cognitive Science Activity Bank</title>
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="../index.html" aria-label="TOK Cognitive Science Activity Bank home">
        <span class="brand-mark" aria-hidden="true">TOK</span>
        <span>
          <span class="brand-title">Cognitive Science Activity Bank</span>
          <span class="brand-subtitle">For IB Theory of Knowledge</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="sr-only">Open navigation</span>
      </button>
      <div class="nav-links" id="site-menu">
        <a href="../index.html">Home</a>
        <a href="../activities.html">Activities</a>
        <a href="../pricing.html">Pricing</a>
        <a href="../about.html">About</a>
      </div>
    </nav>
  </header>

  <main id="main-content">
    <article class="activity-detail">
      <header class="page-hero activity-detail-hero">
        <div class="container page-hero-inner">
          <p class="eyebrow">Detailed activity</p>
          <h1>${htmlEscape(activity.title)}</h1>
          <div class="activity-detail-meta" aria-label="Activity details">
            <span class="meta-pill">${htmlEscape(activity.category)}</span>
            <span class="meta-pill">${htmlEscape(activity.time)}</span>
            <span class="meta-pill">${htmlEscape(activity.difficulty)}</span>
            <span class="tier-badge tier-free">Free lesson content</span>
          </div>
          <p>${htmlWithMath(activity.summary)}</p>
        </div>
      </header>

      <div class="section">
        <div class="container lesson-layout">
          <div class="lesson-main free-content-panel">
            <section aria-labelledby="big-idea">
              <p class="content-label">Free classroom activity</p>
              <h2 id="big-idea">Big Idea</h2>
              <p>${htmlWithMath(activity.bigIdea)}</p>
            </section>

            <section aria-labelledby="teacher-summary">
              <h2 id="teacher-summary">Teacher Summary</h2>
${htmlParagraphs(activity.purpose)}
            </section>

            <section aria-labelledby="materials">
              <h2 id="materials">Materials</h2>
              <ul>
${htmlList(activity.materials)}
              </ul>
            </section>
            <section class="resource-pack-callout" aria-labelledby="classroom-resource-pack">
              <p class="content-label">Ready to run</p>
              <h2 id="classroom-resource-pack">Classroom Resource Pack</h2>
              <p>Use the printable pack for concrete stimulus cards, a student recording sheet, teacher prompts, and a visual prompt image.</p>
              <div class="resource-actions">
                <a class="button button-primary" href="../${activity.resourcePackPath}">Open resource pack</a>
                <a class="button button-secondary" href="../${activity.cardDeckPath}" download>Download card CSV</a>
              </div>
            </section>
            <section class="activity-visual-card" aria-labelledby="visual-prompt">
              <h2 id="visual-prompt">Visual Prompt</h2>
              <img src="../${activity.visualPromptPath}" alt="${htmlEscape(activity.title)} visual prompt">
            </section>
            <section class="lesson-kit-section" aria-labelledby="student-prompt">
              <h2 id="student-prompt">Student Prompt</h2>
              <p>${htmlWithMath(kit.studentPrompt)}</p>
            </section>
            <section class="lesson-kit-section" aria-labelledby="actual-lesson-questions">
              <h2 id="actual-lesson-questions">Actual Lesson Questions</h2>
              <div class="resource-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Question for students</th>
                      <th>Teacher cue</th>
                    </tr>
                  </thead>
                  <tbody>
${htmlLessonQuestionRows(kit)}
                  </tbody>
                </table>
              </div>
            </section>
            <section class="lesson-kit-section" aria-labelledby="concrete-stimulus-packet">
              <h2 id="concrete-stimulus-packet">Concrete Stimulus Packet</h2>
              <div class="print-card-grid">
${htmlStimulusCards(kit)}
              </div>
            </section>
            <section class="lesson-kit-section teacher-key" aria-labelledby="teacher-reveal">
              <h2 id="teacher-reveal">Teacher Key / Reveal</h2>
              <p>${htmlWithMath(kit.teacherReveal)}</p>
            </section>
${optionalHtmlSection("setup-notes", "Setup Notes", fieldList(activity, "setup"))}
${optionalHtmlSection("ready-examples", "Ready-to-Use Examples", fieldList(activity, "exampleStimuli"))}
${optionalHtmlSection("run-resources", "Run Resources", fieldList(activity, "runResources"))}

            <section aria-labelledby="procedure">
              <h2 id="procedure">Procedure</h2>
              <ol>
${htmlList(activity.procedure)}
              </ol>
            </section>
${optionalHtmlSection("teacher-language", "Teacher Language", fieldList(activity, "sampleTeacherLanguage"))}

            <section aria-labelledby="debrief-questions">
              <h2 id="debrief-questions">TOK Debrief Questions</h2>
              <ul>
${htmlList(activity.debrief)}
              </ul>
            </section>

            <section aria-labelledby="knowledge-questions">
              <h2 id="knowledge-questions">Knowledge Questions</h2>
              <ul>
${htmlList(activity.knowledgeQuestions)}
              </ul>
            </section>
${optionalHtmlSection("sample-student-output", "Sample Student Output", fieldList(activity, "sampleStudentOutput"))}

            <section aria-labelledby="exhibition-object">
              <h2 id="exhibition-object">Exhibition Object Idea</h2>
              <p>${htmlWithMath(activity.exhibitionObject)}</p>
            </section>
${optionalHtmlSection("adaptations", "Adaptations", fieldList(activity, "adaptations"))}
${optionalHtmlSection("extension-tasks", "Extension Tasks", fieldList(activity, "extensionTasks"))}

            <section aria-labelledby="teacher-notes">
              <h2 id="teacher-notes">Teacher Notes</h2>
${htmlParagraphs(activity.teacherNotes)}
            </section>
          </div>

          <aside class="lesson-sidebar" aria-label="Downloads and related activities">
            <section class="download-card free-download" aria-labelledby="free-status">
              <p class="content-label">Included now</p>
              <h2 id="free-status">Free Activity Page</h2>
              <p>The lesson plan, procedure, debrief questions, and exhibition object idea on this page are free to use and adapt.</p>
              <a class="button button-primary" href="../${activity.resourcePackPath}">Open classroom resource pack</a>
            </section>

            <section class="download-card premium-download" aria-labelledby="download-placeholder">
              <p class="content-label">Future premium</p>
              <h2 id="download-placeholder">Downloadable Resource Placeholder</h2>
              <div class="activity-resource-grid" aria-label="Premium downloads">
${premiumResourceCards(activity, "../")}
              </div>
            </section>

            <section class="related-card" aria-labelledby="related-activities">
              <h2 id="related-activities">Related Activities</h2>
              <ul class="related-list">
${relatedLinks(activity)}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand brand-footer" href="../index.html">
          <span class="brand-mark" aria-hidden="true">TOK</span>
          <span>
            <span class="brand-title">Cognitive Science Activity Bank</span>
            <span class="brand-subtitle">Free resources for TOK teachers</span>
          </span>
        </a>
      </div>
      <p>Made for IB Theory of Knowledge classrooms. All activities are free while the bank is in its starter phase.</p>
      <div class="footer-links" aria-label="Footer navigation">
        <a href="../index.html">Home</a>
        <a href="../activities.html">Activities</a>
        <a href="../pricing.html">Pricing</a>
        <a href="../about.html">About</a>
      </div>
    </div>
  </footer>

  <script src="../script.js"></script>
</body>
</html>
`;
}

function browserActivityRecord(activity) {
  const kit = lessonKitFor(activity);
  return {
    id: activity.id,
    title: activity.title,
    category: activity.category,
    time: activity.time,
    summary: activity.summary,
    bigIdea: activity.bigIdea,
    setup: fieldList(activity, "setup"),
    exampleStimuli: fieldList(activity, "exampleStimuli"),
    runResources: fieldList(activity, "runResources"),
    sampleTeacherLanguage: fieldList(activity, "sampleTeacherLanguage"),
    sampleStudentOutput: fieldList(activity, "sampleStudentOutput"),
    extensionTasks: fieldList(activity, "extensionTasks"),
    adaptations: fieldList(activity, "adaptations"),
    resourcePackPath: activity.resourcePackPath,
    cardDeckPath: activity.cardDeckPath,
    visualPromptPath: activity.visualPromptPath,
    lessonKit: {
      studentPrompt: kit.studentPrompt,
      lessonQuestions: kit.lessonQuestions,
      stimulusCards: kit.stimulusCards,
      studentTask: kit.studentTask,
      teacherReveal: kit.teacherReveal,
      answerKey: kit.answerKey,
      debriefQuestion: kit.debriefQuestion
    },
    free: activity.free,
    premiumResources: activity.premiumResources
  };
}

async function syncScriptDatabase() {
  const scriptPath = join(root, "script.js");
  const script = await readFile(scriptPath, "utf8");
  const browserActivities = activities.map(browserActivityRecord);
  const detailPages = Object.fromEntries(
    activities.map(activity => [activity.id, `activities/${activity.slug}.html`])
  );
  const activityStart = script.indexOf("const activities = ");
  const detailStart = script.indexOf("\nconst activityDetailPages = ");
  const activeCategoryStart = script.indexOf("\nlet activeCategory = ");

  if (activityStart === -1 || detailStart === -1 || activeCategoryStart === -1) {
    throw new Error("Could not find script.js database blocks to replace.");
  }

  const beforeActivities = script.slice(0, activityStart);
  const afterActiveCategory = script.slice(activeCategoryStart);
  const detailBlock = `const activityDetailPages = ${JSON.stringify(detailPages, null, 2)};\n`;
  const activityBlock = `const activities = ${JSON.stringify(browserActivities, null, 2)};\n\n`;
  const nextScript = `${beforeActivities}${activityBlock}${detailBlock}${afterActiveCategory}`;

  await writeFile(scriptPath, nextScript);
}

await mkdir(join(root, "content"), { recursive: true });
await mkdir(join(root, "activities"), { recursive: true });
await mkdir(join(root, "assets", "activity-visuals"), { recursive: true });
await mkdir(join(root, "premium"), { recursive: true });
await mkdir(join(root, "resources"), { recursive: true });

for (const activity of activities) {
  await writeFile(join(root, "content", `${activity.slug}.md`), markdownFor(activity));
  await writeFile(join(root, "activities", `${activity.slug}.html`), htmlFor(activity));
  await writeFile(join(root, "assets", "activity-visuals", `${activity.slug}.svg`), visualSvgFor(activity));
  const resourceDir = join(root, "resources", activity.slug);
  await mkdir(resourceDir, { recursive: true });
  for (const [filename, content] of resourcePackFiles(activity)) {
    await writeFile(join(resourceDir, filename), content);
  }
  await mkdir(join(root, "premium", activity.slug), { recursive: true });
  for (const resource of activity.premiumResources) {
    await writeFile(
      join(root, "premium", activity.slug, resource.filename),
      premiumResourceMarkdown(activity, resource)
    );
    const resourcePage = resourceHtmlFor(activity, resource);
    if (resource.pageFilename && resourcePage) {
      await writeFile(
        join(root, "premium", activity.slug, resource.pageFilename),
        resourcePage
      );
    }
  }
}

await syncScriptDatabase();

console.log(`Generated ${activities.length} Markdown files, ${activities.length} activity pages, ${activities.length} classroom resource packs, ${activities.length} visual assets, ${activities.length * 4} premium resources, and synced script.js.`);
