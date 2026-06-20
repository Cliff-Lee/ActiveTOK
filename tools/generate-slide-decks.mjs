import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { activities } from "./activity-data.mjs";
import { lessonKitFor } from "./practical-lesson-kits.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const slideSize = { width: 1280, height: 720 };
const totalSlides = 8;

const colors = {
  bg: "#F7F3EA",
  panel: "#FFFDF7",
  ink: "#172033",
  muted: "#4A5872",
  line: "#DED8CB",
  teal: "#2F865F",
  tealDark: "#1F6448",
  tealPale: "#EAF5EF",
  gold: "#D89B38",
  goldPale: "#FFF3DA",
  blue: "#385E7F",
  bluePale: "#EAF0F7",
  rosePale: "#F7E9E3"
};

const fonts = {
  title: "Aptos Display",
  body: "Aptos",
  mono: "Aptos Mono"
};

const titleById = new Map(activities.map(activity => [activity.id, activity.title]));

function activityItems(activity, key) {
  return Array.isArray(activity[key]) ? activity[key] : [];
}

function svgEscape(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function runtimeArtifactEntrypoint() {
  const runtimeNodeModules = process.env.CODEX_RUNTIME_NODE_MODULES
    || process.env.NODE_REPL_NODE_MODULE_DIRS?.split(":")[0]
    || join(process.env.HOME || "", ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "node", "node_modules");

  const candidates = [
    join(runtimeNodeModules, "@oai", "artifact-tool", "dist", "node", "artifact_tool.mjs"),
    join(runtimeNodeModules, "@oai", "artifact-tool", "dist", "artifact_tool.mjs")
  ];

  const entrypoint = candidates.find(candidate => existsSync(candidate));
  if (!entrypoint) {
    throw new Error("Could not find bundled @oai/artifact-tool. Run this generator from Codex with the bundled presentation runtime available.");
  }

  return entrypoint;
}

function line(fill = "#00000000", width = 0, style = "solid") {
  return { style, fill, width };
}

function addShape(slide, options) {
  const {
    geometry = "rect",
    fill = "#00000000",
    outline = line(),
    x,
    y,
    w,
    h,
    name
  } = options;

  return slide.shapes.add({
    geometry,
    name,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: outline
  });
}

function addText(slide, options) {
  const {
    text,
    x,
    y,
    w,
    h,
    size = 24,
    color = colors.ink,
    bold = false,
    typeface = fonts.body,
    align = "left",
    valign = "top",
    fill = "#00000000",
    outline = line(),
    insets = { left: 0, right: 0, top: 0, bottom: 0 },
    name
  } = options;

  const shape = addShape(slide, { x, y, w, h, fill, outline, name });
  shape.text = String(text || "");
  shape.text.fontSize = size;
  shape.text.color = color;
  shape.text.bold = Boolean(bold);
  shape.text.typeface = typeface;
  shape.text.alignment = align;
  shape.text.verticalAlignment = valign;
  shape.text.insets = insets;
  return shape;
}

function addSvgImage(slide, options) {
  const {
    svg,
    x,
    y,
    w,
    h,
    alt = "Illustrative activity visual",
    fit = "contain",
    name
  } = options;

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg, "utf8").toString("base64")}`;
  const image = slide.images.add({ dataUrl, fit, alt, name });
  image.position = { left: x, top: y, width: w, height: h };
  return image;
}

function plainText(value) {
  return String(value || "")
    .replace(/\[\[math:([\s\S]*?)\]\]/g, (_, expression) => expression.trim())
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function wrapText(value, maxChars = 58, maxLines = 5) {
  const words = plainText(value).split(" ").filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
    if (lines.length === maxLines) break;
  }

  if (lines.length < maxLines && current) {
    lines.push(current);
  }

  if (lines.length > maxLines) {
    return `${lines.slice(0, maxLines).join("\n")}...`;
  }

  const consumed = lines.join(" ").replace(/\s+/g, " ").trim();
  const original = plainText(value);
  return consumed.length < original.length ? `${lines.join("\n")}...` : lines.join("\n");
}

function truncateText(value, maxChars = 150) {
  const text = plainText(value);
  return text.length > maxChars ? `${text.slice(0, maxChars - 3).trim()}...` : text;
}

function textLines(value, maxChars = 42, maxLines = 3) {
  return wrapText(value, maxChars, maxLines)
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);
}

function listText(items, options = {}) {
  const {
    numbered = false,
    maxItems = 5,
    maxChars = 70,
    maxLinesPerItem = 2
  } = options;

  const visibleItems = items.slice(0, maxItems);
  const lines = visibleItems.map((item, index) => {
    const prefix = numbered ? `${index + 1}. ` : "• ";
    return `${prefix}${wrapText(item, maxChars, maxLinesPerItem).replace(/\n/g, `\n${" ".repeat(prefix.length)}`)}`;
  });

  if (items.length > visibleItems.length) {
    lines.push(numbered ? `${visibleItems.length + 1}. Continue with teacher guidance.` : "• Continue with teacher guidance.");
  }

  return lines.join("\n");
}

function svgTextBlock(lines, x, y, options = {}) {
  const {
    size = 18,
    color = colors.ink,
    weight = 500,
    lineHeight = 24,
    anchor = "start"
  } = options;

  return lines.map((line, index) =>
    `<text x="${x}" y="${y + index * lineHeight}" text-anchor="${anchor}" font-family="Aptos, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${svgEscape(line)}</text>`
  ).join("");
}

function visualTheme(activity) {
  const themes = {
    "Knowledge and the Knower": { accent: colors.teal, pale: colors.tealPale, label: "Attention" },
    "Knowledge and Technology": { accent: colors.blue, pale: colors.bluePale, label: "System" },
    "Knowledge and Language": { accent: colors.gold, pale: colors.goldPale, label: "Frame" },
    "Mathematics": { accent: colors.blue, pale: colors.bluePale, label: "Model" },
    "Natural Sciences": { accent: colors.teal, pale: colors.tealPale, label: "Evidence" },
    "Human Sciences": { accent: colors.gold, pale: colors.goldPale, label: "Behaviour" },
    "History": { accent: colors.blue, pale: colors.bluePale, label: "Archive" },
    "The Arts": { accent: colors.gold, pale: colors.goldPale, label: "Meaning" },
    "Cross-AOK": { accent: colors.teal, pale: colors.tealPale, label: "Compare" }
  };

  return themes[activity.category] ?? themes["Cross-AOK"];
}

function categoryIllustration(activity, width = 420, height = 260) {
  const theme = visualTheme(activity);
  const common = `
    <rect x="0" y="0" width="${width}" height="${height}" rx="26" fill="${theme.pale}" stroke="${theme.accent}" stroke-width="3"/>
    <circle cx="${width - 58}" cy="54" r="28" fill="${theme.accent}" opacity="0.16"/>
    <text x="26" y="40" font-family="Aptos, Arial, sans-serif" font-size="18" font-weight="800" fill="${theme.accent}">${svgEscape(theme.label)}</text>
  `;

  const category = activity.category;

  if (category === "Knowledge and Technology") {
    return `${common}
      <rect x="80" y="58" width="150" height="178" rx="22" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="4"/>
      <rect x="106" y="86" width="98" height="18" rx="9" fill="${colors.bluePale}"/>
      <rect x="106" y="118" width="98" height="18" rx="9" fill="${colors.goldPale}"/>
      <rect x="106" y="150" width="98" height="18" rx="9" fill="${colors.tealPale}"/>
      <path d="M260 90 C300 70, 328 90, 346 125 C365 162, 343 202, 300 212" fill="none" stroke="${colors.blue}" stroke-width="8" stroke-linecap="round"/>
      <circle cx="292" cy="96" r="10" fill="${colors.gold}"/><circle cx="345" cy="130" r="10" fill="${colors.teal}"/><circle cx="300" cy="210" r="10" fill="${colors.blue}"/>
    `;
  }

  if (category === "Knowledge and Language") {
    return `${common}
      <rect x="52" y="74" width="300" height="42" rx="10" fill="#FFFDF7" stroke="${colors.gold}" stroke-width="3"/>
      <rect x="52" y="132" width="244" height="42" rx="10" fill="#FFFDF7" stroke="${colors.teal}" stroke-width="3"/>
      <rect x="52" y="190" width="274" height="42" rx="10" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="3"/>
      <text x="76" y="101" font-family="Aptos, Arial, sans-serif" font-size="18" font-weight="800" fill="${colors.ink}">Word choice shifts trust</text>
      <path d="M322 122 L350 142 L318 148" fill="${colors.goldPale}" stroke="${colors.gold}" stroke-width="3"/>
    `;
  }

  if (category === "Mathematics") {
    return `${common}
      <rect x="54" y="92" width="76" height="112" rx="8" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="4"/>
      <rect x="160" y="92" width="76" height="112" rx="8" fill="#FFFDF7" stroke="${colors.gold}" stroke-width="4"/>
      <rect x="266" y="92" width="76" height="112" rx="8" fill="#FFFDF7" stroke="${colors.teal}" stroke-width="4"/>
      <text x="92" y="156" text-anchor="middle" font-family="Aptos, Arial, sans-serif" font-size="36" font-weight="900" fill="${colors.blue}">?</text>
      <text x="198" y="156" text-anchor="middle" font-family="Aptos, Arial, sans-serif" font-size="36" font-weight="900" fill="${colors.gold}">✓</text>
      <text x="304" y="156" text-anchor="middle" font-family="Aptos, Arial, sans-serif" font-size="36" font-weight="900" fill="${colors.teal}">?</text>
      <path d="M70 224 C130 250, 248 250, 320 224" fill="none" stroke="${colors.ink}" stroke-width="4" stroke-dasharray="8 8" opacity="0.55"/>
    `;
  }

  if (category === "Natural Sciences") {
    return `${common}
      <path d="M118 74 L186 142" stroke="${colors.teal}" stroke-width="12" stroke-linecap="round"/>
      <rect x="82" y="62" width="80" height="30" rx="10" fill="#FFFDF7" stroke="${colors.teal}" stroke-width="4"/>
      <rect x="174" y="132" width="42" height="72" rx="10" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="4"/>
      <path d="M130 214 H260" stroke="${colors.ink}" stroke-width="8" stroke-linecap="round"/>
      <polyline points="244,188 274,154 304,172 334,112" fill="none" stroke="${colors.gold}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="274" cy="154" r="8" fill="${colors.gold}"/><circle cx="334" cy="112" r="8" fill="${colors.gold}"/>
    `;
  }

  if (category === "Human Sciences") {
    return `${common}
      <circle cx="116" cy="112" r="30" fill="#FFFDF7" stroke="${colors.gold}" stroke-width="4"/>
      <circle cx="210" cy="112" r="30" fill="#FFFDF7" stroke="${colors.teal}" stroke-width="4"/>
      <circle cx="304" cy="112" r="30" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="4"/>
      <path d="M82 198 C104 160, 132 160, 154 198" fill="none" stroke="${colors.gold}" stroke-width="8" stroke-linecap="round"/>
      <path d="M176 198 C198 160, 226 160, 248 198" fill="none" stroke="${colors.teal}" stroke-width="8" stroke-linecap="round"/>
      <path d="M270 198 C292 160, 320 160, 342 198" fill="none" stroke="${colors.blue}" stroke-width="8" stroke-linecap="round"/>
      <rect x="88" y="218" width="250" height="12" rx="6" fill="${colors.ink}" opacity="0.22"/>
    `;
  }

  if (category === "History") {
    return `${common}
      <path d="M62 92 H178 L198 118 H348 V220 H62 Z" fill="#FFFDF7" stroke="${colors.blue}" stroke-width="4"/>
      <rect x="92" y="132" width="220" height="14" rx="7" fill="${colors.bluePale}"/>
      <rect x="92" y="162" width="178" height="14" rx="7" fill="${colors.goldPale}"/>
      <rect x="92" y="192" width="244" height="14" rx="7" fill="${colors.tealPale}"/>
      <circle cx="84" cy="118" r="10" fill="${colors.gold}"/>
      <circle cx="330" cy="88" r="18" fill="${colors.blue}" opacity="0.22"/>
    `;
  }

  if (category === "The Arts") {
    return `${common}
      <rect x="72" y="74" width="260" height="150" rx="16" fill="#FFFDF7" stroke="${colors.gold}" stroke-width="5"/>
      <circle cx="136" cy="132" r="28" fill="${colors.tealPale}" stroke="${colors.teal}" stroke-width="4"/>
      <path d="M98 202 L174 152 L222 188 L260 134 L318 202 Z" fill="${colors.goldPale}" stroke="${colors.gold}" stroke-width="4"/>
      <path d="M282 76 V130 C282 146, 264 146, 264 132 C264 120, 276 116, 282 120" fill="none" stroke="${colors.blue}" stroke-width="6" stroke-linecap="round"/>
    `;
  }

  if (category === "Cross-AOK") {
    return `${common}
      <circle cx="156" cy="145" r="76" fill="${colors.tealPale}" stroke="${colors.teal}" stroke-width="4" opacity="0.86"/>
      <circle cx="244" cy="145" r="76" fill="${colors.goldPale}" stroke="${colors.gold}" stroke-width="4" opacity="0.86"/>
      <circle cx="200" cy="96" r="76" fill="${colors.bluePale}" stroke="${colors.blue}" stroke-width="4" opacity="0.82"/>
      <text x="200" y="155" text-anchor="middle" font-family="Aptos, Arial, sans-serif" font-size="30" font-weight="900" fill="${colors.ink}">?</text>
    `;
  }

  return `${common}
    <ellipse cx="202" cy="142" rx="118" ry="62" fill="#FFFDF7" stroke="${colors.teal}" stroke-width="5"/>
    <circle cx="202" cy="142" r="32" fill="${colors.tealPale}" stroke="${colors.teal}" stroke-width="5"/>
    <circle cx="202" cy="142" r="14" fill="${colors.teal}"/>
    <path d="M82 142 C124 72, 280 72, 322 142 C280 212, 124 212, 82 142 Z" fill="none" stroke="${colors.gold}" stroke-width="5" opacity="0.9"/>
    <path d="M260 76 C296 96, 316 118, 324 150" fill="none" stroke="${colors.blue}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  `;
}

function heroVisualSvg(activity) {
  const theme = visualTheme(activity);
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="420" height="260" viewBox="0 0 420 260">
      ${categoryIllustration(activity, 420, 260)}
      <rect x="26" y="206" width="180" height="28" rx="14" fill="#FFFDF7" stroke="${theme.accent}" stroke-width="2"/>
      <text x="116" y="225" text-anchor="middle" font-family="Aptos, Arial, sans-serif" font-size="13" font-weight="800" fill="${theme.accent}">${svgEscape(activity.category)}</text>
    </svg>
  `;
}

function exampleVisualSvg(activity) {
  const theme = visualTheme(activity);
  const kit = lessonKitFor(activity);
  const firstLines = textLines(kit.stimulusCards[0]?.title || activity.summary, 34, 2);
  const secondLines = textLines(kit.lessonQuestions[0]?.question || activity.bigIdea, 34, 2);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="560" height="390" viewBox="0 0 560 390">
      <rect x="0" y="0" width="560" height="390" rx="30" fill="${theme.pale}" stroke="${theme.accent}" stroke-width="4"/>
      <rect x="32" y="34" width="210" height="116" rx="18" fill="#FFFDF7" stroke="${colors.line}" stroke-width="2"/>
      <rect x="58" y="68" width="158" height="12" rx="6" fill="${theme.accent}" opacity="0.24"/>
      <rect x="58" y="96" width="112" height="12" rx="6" fill="${colors.gold}" opacity="0.24"/>
      <rect x="318" y="34" width="192" height="116" rx="18" fill="#FFFDF7" stroke="${colors.line}" stroke-width="2"/>
      <circle cx="366" cy="88" r="30" fill="${colors.tealPale}" stroke="${colors.teal}" stroke-width="4"/>
      <circle cx="432" cy="88" r="30" fill="${colors.goldPale}" stroke="${colors.gold}" stroke-width="4"/>
      <path d="M246 92 C278 70, 302 70, 334 92" fill="none" stroke="${theme.accent}" stroke-width="6" stroke-linecap="round" stroke-dasharray="9 9"/>
      <rect x="36" y="190" width="488" height="70" rx="16" fill="#FFFDF7" stroke="${theme.accent}" stroke-width="3"/>
      <text x="60" y="222" font-family="Aptos, Arial, sans-serif" font-size="18" font-weight="900" fill="${theme.accent}">Stimulus</text>
      ${svgTextBlock(firstLines, 174, 216, { size: 15, color: colors.muted, lineHeight: 18 })}
      <rect x="36" y="282" width="488" height="70" rx="16" fill="#FFFDF7" stroke="${colors.gold}" stroke-width="3"/>
      <text x="60" y="314" font-family="Aptos, Arial, sans-serif" font-size="18" font-weight="900" fill="${colors.gold}">Question</text>
      ${svgTextBlock(secondLines, 174, 308, { size: 15, color: colors.muted, lineHeight: 18 })}
    </svg>
  `;
}

function runKitVisualSvg(activity) {
  const theme = visualTheme(activity);
  const resources = activityItems(activity, "runResources").slice(0, 3);
  const labels = resources.length ? resources : ["Prompt cards", "Evidence log", "Exit ticket"];
  const blocks = labels.map((label, index) => {
    const y = 74 + index * 78;
    return `
      <rect x="62" y="${y}" width="326" height="54" rx="14" fill="#FFFDF7" stroke="${index === 1 ? colors.gold : theme.accent}" stroke-width="3"/>
      <circle cx="92" cy="${y + 27}" r="14" fill="${index === 1 ? colors.goldPale : theme.pale}" stroke="${index === 1 ? colors.gold : theme.accent}" stroke-width="3"/>
      ${svgTextBlock(textLines(label, 32, 2), 122, y + 24, { size: 15, color: colors.muted, lineHeight: 18 })}
    `;
  }).join("");

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="330" viewBox="0 0 450 330">
      <rect x="0" y="0" width="450" height="330" rx="28" fill="${theme.pale}" stroke="${theme.accent}" stroke-width="4"/>
      <text x="62" y="44" font-family="Aptos, Arial, sans-serif" font-size="20" font-weight="900" fill="${theme.accent}">Resource pack</text>
      ${blocks}
      <path d="M372 46 C408 78, 414 128, 386 164 C360 198, 364 238, 404 276" fill="none" stroke="${colors.ink}" stroke-width="5" stroke-linecap="round" opacity="0.18"/>
    </svg>
  `;
}

function addDeckBackground(slide, activity, slideNumber) {
  addShape(slide, { x: 0, y: 0, w: slideSize.width, h: slideSize.height, fill: colors.bg });
  addShape(slide, { x: 0, y: 0, w: 18, h: slideSize.height, fill: colors.teal });
  addShape(slide, { x: 18, y: 0, w: 10, h: slideSize.height, fill: colors.gold });
  addText(slide, {
    x: 72,
    y: 648,
    w: 620,
    h: 24,
    text: "TOK Cognitive Science Activity Bank",
    size: 15,
    color: colors.muted,
    bold: true
  });
  addText(slide, {
    x: 1015,
    y: 648,
    w: 185,
    h: 24,
    text: `${slideNumber}/${totalSlides}`,
    size: 15,
    color: colors.muted,
    bold: true,
    align: "right"
  });
  addText(slide, {
    x: 72,
    y: 40,
    w: 830,
    h: 28,
    text: `${activity.category}  |  ${activity.time}`,
    size: 15,
    color: colors.tealDark,
    bold: true
  });
}

function addCard(slide, options) {
  const {
    x,
    y,
    w,
    h,
    title,
    body,
    fill = colors.panel,
    accent = colors.teal,
    titleColor = colors.ink,
    bodySize = 23
  } = options;

  addShape(slide, { x, y, w, h, fill, outline: line(colors.line, 1) });
  addShape(slide, { x, y, w: 8, h, fill: accent });
  addText(slide, {
    x: x + 26,
    y: y + 22,
    w: w - 48,
    h: 32,
    text: title,
    size: 18,
    color: titleColor,
    bold: true
  });
  addText(slide, {
    x: x + 26,
    y: y + 64,
    w: w - 52,
    h: h - 86,
    text: body,
    size: bodySize,
    color: colors.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 }
  });
}

function addSectionTitle(slide, title, subtitle = "") {
  addText(slide, {
    x: 72,
    y: 78,
    w: 880,
    h: 54,
    text: title,
    size: 38,
    color: colors.ink,
    bold: true,
    typeface: fonts.title
  });

  if (subtitle) {
    addText(slide, {
      x: 72,
      y: 134,
      w: 900,
      h: 36,
      text: subtitle,
      size: 20,
      color: colors.muted
    });
  }
}

function addTitleSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 1);

  addText(slide, {
    x: 72,
    y: 110,
    w: 720,
    h: 120,
    text: activity.title,
    size: activity.title.length > 34 ? 48 : 58,
    color: colors.ink,
    bold: true,
    typeface: fonts.title
  });

  addText(slide, {
    x: 72,
    y: 250,
    w: 880,
    h: 46,
    text: "Student-facing slide deck draft",
    size: 24,
    color: colors.tealDark,
    bold: true
  });

  addSvgImage(slide, {
    svg: heroVisualSvg(activity),
    x: 835,
    y: 108,
    w: 330,
    h: 205,
    alt: `${activity.title} visual prompt`
  });

  addCard(slide, {
    x: 72,
    y: 330,
    w: 650,
    h: 190,
    title: "Big Idea",
    body: wrapText(activity.bigIdea, 58, 4),
    fill: colors.panel,
    accent: colors.teal,
    bodySize: 26
  });

  addCard(slide, {
    x: 765,
    y: 330,
    w: 400,
    h: 190,
    title: "Use In Class",
    body: `Time: ${activity.time}\nDifficulty: ${activity.difficulty}\nResource: free now`,
    fill: colors.goldPale,
    accent: colors.gold,
    bodySize: 24
  });
}

function addPurposeSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 2);
  addSectionTitle(slide, "Purpose & Setup", "Use this before students move into TOK analysis.");
  const learningFocusItems = [activity.purpose[0], activity.bigIdea].filter(Boolean);
  const setupKitItems = [
    ...activity.materials.slice(0, 2),
    ...activityItems(activity, "runResources").slice(0, 2)
  ];

  addCard(slide, {
    x: 72,
    y: 205,
    w: 540,
    h: 320,
    title: "Learning Focus",
    body: listText(learningFocusItems, { maxItems: 2, maxChars: 58, maxLinesPerItem: 3 }),
    fill: colors.panel,
    accent: colors.teal,
    bodySize: 22
  });

  addCard(slide, {
    x: 650,
    y: 205,
    w: 515,
    h: 320,
    title: "Materials & Run Kit",
    body: listText(setupKitItems, { maxItems: 4, maxChars: 54, maxLinesPerItem: 2 }),
    fill: colors.bluePale,
    accent: colors.blue,
    bodySize: 22
  });

  addText(slide, {
    x: 72,
    y: 548,
    w: 1090,
    h: 64,
    text: "Teacher move: ask for a private first judgement before discussion so students can notice how knowledge is formed, revised, and justified.",
    size: 20,
    color: colors.ink,
    fill: colors.tealPale,
    outline: line(colors.teal, 1),
    insets: { left: 18, right: 18, top: 10, bottom: 8 }
  });
}

function addProcedureSlide(presentation, activity) {
  const kit = lessonKitFor(activity);
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 4);
  addSectionTitle(slide, "Run The Activity", "Keep the experience concrete before naming the TOK issue.");

  addCard(slide, {
    x: 72,
    y: 190,
    w: 1093,
    h: 385,
    title: "Student-Facing Procedure",
    body: listText(activity.procedure, { numbered: true, maxItems: 6, maxChars: 86, maxLinesPerItem: 2 }),
    fill: colors.panel,
    accent: colors.gold,
    bodySize: activity.procedure.length > 5 ? 22 : 25
  });

  addText(slide, {
    x: 72,
    y: 590,
    w: 1090,
    h: 36,
    text: kit.studentTask
      ? `Student task: ${truncateText(kit.studentTask, 150)}`
      : "Pause after the first result. Ask: what counted as evidence, and what did we assume?",
    size: 17,
    color: colors.tealDark,
    bold: true
  });
}

function addExampleSlide(presentation, activity) {
  const kit = lessonKitFor(activity);
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 3);
  addSectionTitle(slide, "Use The Actual Stimulus", "Students inspect this before abstract TOK language.");

  addSvgImage(slide, {
    svg: exampleVisualSvg(activity),
    x: 72,
    y: 185,
    w: 540,
    h: 376,
    alt: `${activity.title} example stimulus cards`
  });

  addCard(slide, {
    x: 650,
    y: 188,
    w: 515,
    h: 178,
    title: "Stimulus Packet",
    body: listText(kit.stimulusCards.map(card => `${card.title}: ${card.body}`), { maxItems: 2, maxChars: 58, maxLinesPerItem: 2 }),
    fill: colors.panel,
    accent: colors.teal,
    bodySize: 16
  });

  addCard(slide, {
    x: 650,
    y: 392,
    w: 515,
    h: 200,
    title: "Lesson Questions",
    body: listText(kit.lessonQuestions.map(question => question.question), { maxItems: 3, maxChars: 58, maxLinesPerItem: 2 }),
    fill: colors.goldPale,
    accent: colors.gold,
    bodySize: 17
  });
}

function addThinkingRecordSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 5);
  addSectionTitle(slide, "Thinking Record", "Separate what students noticed from what they inferred.");

  const columns = [
    ["What I noticed", "Observable details, data, words, actions, or results."],
    ["What I inferred", "The meaning or explanation I added."],
    ["Evidence", "What supports my inference? What is missing?"],
    ["Confidence", "How sure am I, and why?"]
  ];

  columns.forEach(([heading, body], index) => {
    const x = 72 + index * 278;
    addCard(slide, {
      x,
      y: 205,
      w: 250,
      h: 225,
      title: heading,
      body: body,
      fill: index % 2 === 0 ? colors.panel : colors.tealPale,
      accent: index % 2 === 0 ? colors.teal : colors.gold,
      bodySize: 23
    });
  });

  addCard(slide, {
    x: 72,
    y: 468,
    w: 1093,
    h: 108,
    title: "Pair Share Prompt",
    body: `Compare one place where your first judgement changed. What caused the change: new evidence, another perspective, better language, or a revised method?`,
    fill: colors.rosePale,
    accent: colors.blue,
    bodySize: 24
  });
}

function addDebriefSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 6);
  addSectionTitle(slide, "TOK Debrief", "Move from the activity result to a knowledge question.");

  addCard(slide, {
    x: 72,
    y: 195,
    w: 530,
    h: 350,
    title: "Debrief Questions",
    body: listText(activity.debrief, { maxItems: 4, maxChars: 58, maxLinesPerItem: 3 }),
    fill: colors.panel,
    accent: colors.teal,
    bodySize: 23
  });

  addCard(slide, {
    x: 635,
    y: 195,
    w: 530,
    h: 350,
    title: "Knowledge Questions",
    body: listText(activity.knowledgeQuestions, { maxItems: 4, maxChars: 58, maxLinesPerItem: 3 }),
    fill: colors.goldPale,
    accent: colors.gold,
    bodySize: 23
  });

  addText(slide, {
    x: 72,
    y: 575,
    w: 1090,
    h: 36,
    text: "Best discussion move: ask students to name a criterion for reliability, not just say “it depends.”",
    size: 21,
    color: colors.ink,
    bold: true
  });
}

function addAdaptExtendSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 7);
  addSectionTitle(slide, "Adapt & Extend", "Use the same core activity with different support levels.");

  addCard(slide, {
    x: 72,
    y: 188,
    w: 515,
    h: 160,
    title: "Sample Student Output",
    body: listText(activityItems(activity, "sampleStudentOutput"), { maxItems: 2, maxChars: 58, maxLinesPerItem: 3 }),
    fill: colors.panel,
    accent: colors.teal,
    bodySize: 22
  });

  addCard(slide, {
    x: 72,
    y: 382,
    w: 515,
    h: 160,
    title: "Extensions",
    body: listText(activityItems(activity, "extensionTasks"), { maxItems: 2, maxChars: 58, maxLinesPerItem: 3 }),
    fill: colors.goldPale,
    accent: colors.gold,
    bodySize: 22
  });

  addSvgImage(slide, {
    svg: runKitVisualSvg(activity),
    x: 665,
    y: 188,
    w: 490,
    h: 360,
    alt: `${activity.title} run resources visual`
  });
}

function addExhibitionSlide(presentation, activity) {
  const slide = presentation.slides.add();
  addDeckBackground(slide, activity, 8);
  addSectionTitle(slide, "Exhibition & Exit Ticket", "Turn the classroom moment into transferable TOK thinking.");

  const relatedTitles = activity.related
    .map(id => titleById.get(id))
    .filter(Boolean)
    .slice(0, 3);

  addCard(slide, {
    x: 72,
    y: 195,
    w: 540,
    h: 185,
    title: "Exhibition Object Idea",
    body: wrapText(activity.exhibitionObject, 60, 4),
    fill: colors.panel,
    accent: colors.blue,
    bodySize: 25
  });

  addCard(slide, {
    x: 650,
    y: 195,
    w: 515,
    h: 185,
    title: "Exit Ticket",
    body: "• Before this activity, I assumed...\n• The activity challenged that because...\n• A better knowledge question is...",
    fill: colors.tealPale,
    accent: colors.teal,
    bodySize: 24
  });

  addCard(slide, {
    x: 72,
    y: 420,
    w: 1093,
    h: 118,
    title: "Related Activities",
    body: relatedTitles.length ? listText(relatedTitles, { maxItems: 3, maxChars: 78, maxLinesPerItem: 1 }) : "Use this as a bridge into another Area of Knowledge.",
    fill: colors.goldPale,
    accent: colors.gold,
    bodySize: 24
  });

  addText(slide, {
    x: 72,
    y: 580,
    w: 1090,
    h: 34,
    text: "Free while the library is being built. Designed for future premium teacher packs.",
    size: 18,
    color: colors.muted,
    bold: true
  });
}

async function createDeck(artifact, activity) {
  const { Presentation, PresentationFile } = artifact;
  const presentation = Presentation.create({ slideSize });

  addTitleSlide(presentation, activity);
  addPurposeSlide(presentation, activity);
  addExampleSlide(presentation, activity);
  addProcedureSlide(presentation, activity);
  addThinkingRecordSlide(presentation, activity);
  addDebriefSlide(presentation, activity);
  addAdaptExtendSlide(presentation, activity);
  addExhibitionSlide(presentation, activity);

  const outputPath = join(root, "premium", activity.slug, "slides.pptx");
  await mkdir(dirname(outputPath), { recursive: true });
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(outputPath);
  return outputPath;
}

const artifact = await import(pathToFileURL(runtimeArtifactEntrypoint()).href);
const outputs = [];

for (const activity of activities) {
  outputs.push(await createDeck(artifact, activity));
}

console.log(`Generated ${outputs.length} PowerPoint slide decks.`);
