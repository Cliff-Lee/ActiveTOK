import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { activities } from "./activity-data.mjs";
import { enhanceActivity } from "./activity-enhancements.mjs";
import { lessonKitFor } from "./practical-lesson-kits.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputsDir = join(root, "outputs");
const manifestPath = join(outputsDir, "activity-pdf-manifest.json");

const titleById = new Map(activities.map(activity => [activity.id, activity.title]));

function bundledPythonPath() {
  const candidate = join(
    process.env.HOME || "",
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "python",
    "bin",
    "python3"
  );
  return existsSync(candidate) ? candidate : "python3";
}

function resourceByKind(activity, kind) {
  return activity.premiumResources.find(resource => resource.kind === kind) || {};
}

function fieldList(activity, key) {
  return Array.isArray(activity[key]) ? activity[key] : [];
}

function manifestActivity(activity) {
  const enhancement = enhanceActivity(activity);
  const lessonKit = lessonKitFor(activity);
  return {
    id: activity.id,
    slug: activity.slug,
    title: activity.title,
    category: activity.category,
    time: activity.time,
    difficulty: activity.difficulty,
    summary: activity.summary,
    bigIdea: activity.bigIdea,
    purpose: activity.purpose,
    materials: activity.materials,
    procedure: activity.procedure,
    debrief: activity.debrief,
    knowledgeQuestions: activity.knowledgeQuestions,
    exhibitionObject: activity.exhibitionObject,
    teacherNotes: activity.teacherNotes,
    setup: fieldList(activity, "setup").length ? fieldList(activity, "setup") : enhancement.setupChecklist,
    exampleStimuli: fieldList(activity, "exampleStimuli").length ? fieldList(activity, "exampleStimuli") : enhancement.exampleMaterials,
    runResources: fieldList(activity, "runResources"),
    sampleTeacherLanguage: fieldList(activity, "sampleTeacherLanguage").length ? fieldList(activity, "sampleTeacherLanguage") : enhancement.facilitatorScript,
    sampleStudentOutput: fieldList(activity, "sampleStudentOutput"),
    extensionTasks: fieldList(activity, "extensionTasks").length ? fieldList(activity, "extensionTasks") : [enhancement.extension],
    adaptations: fieldList(activity, "adaptations").length ? fieldList(activity, "adaptations") : enhancement.differentiation,
    readyPrompt: enhancement.readyPrompt,
    classroomExample: enhancement.classroomExample,
    studentInstructions: enhancement.studentInstructions,
    commonMisconceptions: enhancement.commonMisconceptions,
    assessmentLookFors: enhancement.assessmentLookFors,
    exitTicket: enhancement.exitTicket,
    lessonKit,
    resourcePackPath: activity.resourcePackPath,
    cardDeckPath: activity.cardDeckPath,
    visualPromptPath: activity.visualPromptPath,
    relatedTitles: activity.related.map(id => titleById.get(id)).filter(Boolean),
    pdfOutputs: {
      worksheet: join(root, resourceByKind(activity, "worksheet").pdfPath || `premium/${activity.slug}/worksheet.pdf`),
      teacherNotes: join(root, resourceByKind(activity, "teacher-notes").pdfPath || `premium/${activity.slug}/teacher-notes.pdf`),
      runKit: join(root, resourceByKind(activity, "run-kit").pdfPath || `premium/${activity.slug}/run-kit.pdf`)
    }
  };
}

await mkdir(outputsDir, { recursive: true });
await writeFile(
  manifestPath,
  `${JSON.stringify({ root, activities: activities.map(manifestActivity) }, null, 2)}\n`,
  "utf8"
);

const python = process.env.PYTHON || bundledPythonPath();
const result = spawnSync(
  python,
  [join(root, "tools", "pdf-resource-builder.py"), manifestPath],
  { cwd: root, stdio: "inherit" }
);

if (result.error) {
  throw result.error;
}

if (result.status !== 0) {
  throw new Error(`PDF generation failed with status ${result.status}`);
}
