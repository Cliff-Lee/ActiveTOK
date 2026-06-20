const confidenceQuestions = [
  ["Which planet is closest to the Sun?", "Mercury"],
  ["What is the capital city of Canada?", "Ottawa"],
  ["Which is heavier: a kilogram of feathers or a kilogram of steel?", "Neither — they weigh the same"],
  ["In which year did the Berlin Wall fall?", "1989"],
  ["What is the chemical symbol for potassium?", "K"],
  ["Which country has the longest coastline in the world?", "Canada"],
  ["How many bones are in the adult human body?", "206"],
  ["What is the only mammal capable of true sustained flight?", "Bat"],
  ["Which has more letters: the Greek alphabet or the modern English alphabet?", "English alphabet — 26 vs Greek 24"],
  ["Without looking it up, what is the 19th digit after the decimal point in pi?", "4"]
];

const searchResults = [
  {
    title: "Ad · PureGreen Cleanse Co.",
    body: "“7-Day Celery Juice Liver Detox — feel lighter fast.”",
    meta: "Sells detox juice packs. No author listed.",
    rankingSignal: "Sponsorship"
  },
  {
    title: "WellnessNow Blog",
    body: "“I drank celery juice every morning. Here’s what changed.”",
    meta: "Personal story, dramatic before/after claims, no medical sources.",
    rankingSignal: "Emotional appeal"
  },
  {
    title: "National Liver Foundation — Patient Guide",
    body: "“Your liver already removes toxins from your blood.”",
    meta: "Explains liver function; reviewed by medical advisers.",
    rankingSignal: "Expertise"
  },
  {
    title: "HealthLine Daily",
    body: "“Celery juice: benefits, myths, and what evidence says.”",
    meta: "Notes hydration/nutrients but says detox claims are unsupported.",
    rankingSignal: "Relevance"
  },
  {
    title: "TikTok Clip: @CleanBodyGuru",
    body: "“Doctors don’t want you to know this detox trick.”",
    meta: "2.1M views, no evidence provided.",
    rankingSignal: "Popularity"
  },
  {
    title: "Research Summary: Journal of Nutrition Education",
    body: "“Vegetable intake and health outcomes.”",
    meta: "Peer-reviewed; does not test celery juice detox claims directly.",
    rankingSignal: "Academic credibility, indirect relevance"
  }
];

const aiClaimChecks = [
  ["AI predicts likely word sequences", "Grounded", "This broadly describes how language models generate text."],
  ["AI can sound authoritative while wrong", "Grounded", "This is a known risk of generative AI."],
  ["Marsh and Kline study, 2021", "False/Fabricated", "The citation is invented for this activity."],
  ["68% of school summaries had errors", "Unsupported", "Depends entirely on the fabricated study."],
  ["AI tools are live online by default", "False", "Some tools can browse, but many do not by default."],
  ["AI should be a starting point, not final authority", "Reasonable conclusion", "Supported by the earlier risks."]
];

const categoryStimuli = {
  "Knowledge and the Knower": {
    title: "Classroom Observation Scene",
    body: "A blue notebook sits beside a cracked phone screen. The board says “Evidence ≠ Certainty”. The clock reads 10:42. A red water bottle is half hidden behind a laptop. After 20 seconds, students write what they saw without looking back.",
    meta: "Use this when you need a concrete perception, memory, or confidence stimulus."
  },
  "Knowledge and Technology": {
    title: "Platform Ranking Snapshot",
    body: "Three posts appear in this order: 1) sponsored revision app, 2) viral rumour about exam patterns, 3) teacher guide to retrieval practice. Engagement scores are 91, 88, and 34; reliability ratings are low, very low, and high.",
    meta: "Use this to ask how ranking rules shape what feels important or credible."
  },
  "Knowledge and Language": {
    title: "Framing Card",
    body: "Neutral: “The school changed the assessment policy.” Loaded A: “The school quietly weakened standards.” Loaded B: “The school modernised assessment.” Loaded C: “The school admitted the old policy was unfair.”",
    meta: "Use this to make wording, implication, and emotional framing visible."
  },
  Mathematics: {
    title: "Pattern or Proof Card",
    body: "Sequence A: 2, 4, 8, 16, 32. Student claim: “The next number must be 64.” Alternative rule: double until 32, then subtract 10. Both fit the visible pattern so far.",
    meta: "Use this to separate pattern confidence from proof or model choice."
  },
  "Natural Sciences": {
    title: "Mini Investigation Data",
    body: "Plant A grew 2 cm with water only. Plant B grew 5 cm with fertiliser. Plant C grew 1 cm but was kept by a colder window. Student claim: “Fertiliser causes faster growth.”",
    meta: "Use this to discuss variables, controls, anomalies, and limits."
  },
  "Human Sciences": {
    title: "Survey Wording Snapshot",
    body: "Version A: “Should students be allowed to use phones for learning?” Version B: “Should students be allowed to distract themselves with phones?” Same issue, different wording, different likely responses.",
    meta: "Use this to discuss method effects, incentives, and context."
  },
  History: {
    title: "Partial Source Packet",
    body: "Source A: a newspaper says the protest was disorderly. Source B: a student diary says it was peaceful. Source C: a police report lists arrests but not reasons. Missing: organiser voices.",
    meta: "Use this to discuss source selection, silence, and interpretation."
  },
  "The Arts": {
    title: "Artwork Context Card",
    body: "Image description: a single chair under a bright window. Title 1: “Waiting”. Title 2: “Evidence”. Title 3: “After the Evacuation”. Students interpret before and after the titles.",
    meta: "Use this to discuss context, title, audience, and evidence for interpretation."
  },
  "Cross-AOK": {
    title: "Same Claim, Different Standards",
    body: "Claim: “This is reliable knowledge.” A mathematician asks for proof; a historian asks for source context; a scientist asks for method and replication; an artist asks for interpretation and form.",
    meta: "Use this to compare evidence standards across AOKs."
  }
};

function fieldList(activity, key) {
  return Array.isArray(activity[key]) ? activity[key] : [];
}

function numberedQuestions(questions) {
  return questions.map(([question, answer], index) => ({
    number: index + 1,
    question,
    answer,
    prompt: `${question} Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%.`
  }));
}

function genericLessonQuestions(activity, stimulusTitle = `${activity.title} Stimulus A`) {
  const firstKq = activity.knowledgeQuestions?.[0] || "What makes this claim reliable?";
  return [
    {
      number: 1,
      question: `After inspecting ${stimulusTitle}, what is your first knowledge claim?`,
      answer: "Teacher cue: look for a clear claim, not just a description.",
      prompt: "Write one claim in a complete sentence."
    },
    {
      number: 2,
      question: `Which exact detail from ${stimulusTitle} did you use as evidence?`,
      answer: "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
      prompt: "List two pieces of evidence."
    },
    {
      number: 3,
      question: "What did you infer beyond the evidence?",
      answer: "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
      prompt: "Separate observation from interpretation."
    },
    {
      number: 4,
      question: "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
      answer: "Teacher cue: confidence is data for the debrief, not a grade.",
      prompt: "Circle one confidence level and justify it."
    },
    {
      number: 5,
      question: "What missing information would most improve the knowledge claim?",
      answer: "Teacher cue: push for method, source, context, comparison, or definitions.",
      prompt: "Name one piece of missing information."
    },
    {
      number: 6,
      question: firstKq,
      answer: "Teacher cue: students should move from the classroom example to a general TOK issue.",
      prompt: "Answer using the activity as evidence."
    }
  ];
}

function genericStimulusCards(activity) {
  const examples = fieldList(activity, "exampleStimuli");
  const [firstExample, secondExample, thirdExample] = examples;
  const firstTitle = `${activity.title} Stimulus A`;
  const secondTitle = `${activity.title} Stimulus B`;
  const thirdTitle = `${activity.title} Reveal / Twist`;

  return [
    {
      title: firstTitle,
      body: studentFacingStimulus(activity, firstExample, 1),
      meta: "Students inspect this exact card first and commit to a claim before hearing anyone else.",
      teacherUse: "Print or project as the first shared stimulus."
    },
    {
      title: secondTitle,
      body: studentFacingStimulus(activity, secondExample || firstExample, 2),
      meta: "Use this for comparison, a second round, or a partner challenge.",
      teacherUse: "Reveal after the first response so students can revise."
    },
    {
      title: thirdTitle,
      body: studentFacingStimulus(activity, thirdExample || secondExample || firstExample, 3),
      meta: `Teacher reveal: connect the changed response to the big idea — ${activity.bigIdea}`,
      teacherUse: "Use to create the revision moment."
    }
  ];
}

function studentFacingStimulus(activity, example, index) {
  const cleanExample = String(example || activity.summary).replace(/\.$/, "");
  const categoryCue = {
    "Knowledge and the Knower": "Before discussing, write what you noticed, what you inferred, and how confident you are.",
    "Knowledge and Technology": "Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
    "Knowledge and Language": "Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
    Mathematics: "Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
    "Natural Sciences": "Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
    "Human Sciences": "Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
    History: "Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
    "The Arts": "Describe what you see or hear first, then add title/context and revise the interpretation.",
    "Cross-AOK": "Name the AOK, the method being used, and the standard of evidence you would apply."
  };
  return `Student-facing stimulus ${index}: ${cleanExample}. ${categoryCue[activity.category] || categoryCue["Cross-AOK"]}`;
}

function confidenceKit(activity) {
  const questions = numberedQuestions(confidenceQuestions);
  return {
    studentPrompt: "Answer each question, then mark your confidence: 50%, 60%, 70%, 80%, 90%, or 100%.",
    lessonQuestions: questions,
    stimulusCards: [
      {
        title: "Student Prompt",
        body: "Answer each question privately. After marking, calculate accuracy within each confidence band.",
        meta: "Do not allow lookup; the point is calibration, not trivia mastery.",
        teacherUse: "Project before the quiz begins."
      },
      ...questions.map(question => ({
        title: `Question ${question.number}`,
        body: question.question,
        meta: "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
        teacherUse: `Answer key: ${question.answer}`
      }))
    ],
    studentTask: "Complete the quiz, mark confidence for every answer, then compare confidence bands with actual accuracy.",
    teacherReveal: "Where were we most confident but least accurate, and what does that reveal about certainty as a way of knowing?",
    answerKey: questions.map(question => `Q${question.number}: ${question.answer}`),
    debriefQuestion: "Where were we most confident but least accurate, and what does that reveal about certainty as a way of knowing?"
  };
}

function searchEngineKit() {
  return {
    studentPrompt: "Rank the six search results from most reliable to least reliable. Then identify which ranking signal influenced you most: expertise, popularity, freshness, sponsorship, relevance, or emotional appeal.",
    lessonQuestions: [
      { number: 1, question: "Which result would you click first, and why?", answer: "Look for whether students choose visibility, credibility, relevance, or emotion.", prompt: "Choose one result before discussing." },
      { number: 2, question: "Which result is most reliable for the query?", answer: "Likely result 3 or 4; result 6 is credible but indirect.", prompt: "Rank reliability, not attractiveness." },
      { number: 3, question: "Which result might a popularity-based ranking put first?", answer: "Result 5: TikTok Clip @CleanBodyGuru.", prompt: "Use the views and emotional hook." },
      { number: 4, question: "Which result might a sponsorship-based ranking put first?", answer: "Result 1: PureGreen Cleanse Co. advertisement.", prompt: "Look for the ad label." },
      { number: 5, question: "Which result best shows expertise?", answer: "Result 3: National Liver Foundation patient guide.", prompt: "Look for reviewed medical guidance." },
      { number: 6, question: "What does this show about visibility and reliability?", answer: "A ranking system can make a weak result visible before a strong one.", prompt: "Turn the activity into a TOK claim." }
    ],
    stimulusCards: searchResults.map((result, index) => ({
      title: `Result ${index + 1}: ${result.title}`,
      body: result.body,
      meta: `${result.meta} Ranking signal: ${result.rankingSignal}.`,
      teacherUse: "Students rank by reliability, then rerank by a different search-engine signal."
    })),
    studentTask: "Query: Does drinking celery juice detox your liver? Rank all six results from most reliable to least reliable, then explain which signal shaped your ranking.",
    teacherReveal: "A search engine could rank result 5 highest by popularity, result 1 highest by sponsorship, result 4 highest by relevance, and result 3 highest by expertise. Visibility is not the same as reliability.",
    answerKey: [
      "Most medically reliable: Result 3, then Result 4.",
      "Most popular-looking: Result 5.",
      "Most commercially promoted: Result 1.",
      "Most academically credible but indirect: Result 6.",
      "Least reliable for knowledge: Result 5 or Result 2, depending on criteria."
    ],
    debriefQuestion: "How do ranking systems influence what counts as visible, credible, or relevant?"
  };
}

function aiCourtroomKit() {
  const aiParagraph = "Students should verify AI-generated answers because large language models do not truly understand facts; they predict likely sequences of words based on patterns in training data. This means they can produce answers that sound fluent and authoritative even when details are wrong. For example, a 2021 study by Elena Marsh and David Kline in the Journal of Digital Reasoning found that 68% of AI-generated school summaries contained at least one factual error. AI tools are also connected to the live internet by default, so they usually update themselves instantly when new information appears. Because of this, students should treat AI as a starting point for inquiry, not as a final authority.";
  return {
    studentPrompt: "Put the AI paragraph on trial. For each claim, decide: grounded, unsupported, false, or needs verification.",
    lessonQuestions: [
      { number: 1, question: "Which claim in the paragraph sounds most authoritative?", answer: "The fabricated 2021 study and percentage often sound authoritative.", prompt: "Underline the most persuasive detail." },
      { number: 2, question: "Which claim can be accepted as broadly grounded?", answer: "AI can produce fluent but incorrect answers; language models predict likely word sequences.", prompt: "Mark grounded claims with G." },
      { number: 3, question: "Which claim is fabricated?", answer: "The Marsh and Kline citation in the Journal of Digital Reasoning.", prompt: "Mark fabricated claims with F." },
      { number: 4, question: "Which claim is plausible but false or overgeneralised?", answer: "AI tools are connected to the live internet by default.", prompt: "Mark false or overgeneralised claims with X." },
      { number: 5, question: "What made the paragraph feel trustworthy?", answer: "Fluent tone, specific names, journal title, percentage, and confident explanation.", prompt: "Name the trust cues." },
      { number: 6, question: "Can this paragraph count as knowledge? Why or why not?", answer: "Partly; some claims are reasonable, but the fabricated/unsupported claims prevent treating it as reliable knowledge without verification.", prompt: "Write the courtroom verdict." }
    ],
    stimulusCards: [
      {
        title: "AI Paragraph On Trial",
        body: aiParagraph,
        meta: "Prompt given to AI: Explain why students should verify AI-generated answers.",
        teacherUse: "Give this to every group as the core case file."
      },
      {
        title: "Courtroom Roles",
        body: "Prosecution: argue the paragraph is unreliable. Defence: argue parts are useful if treated carefully. Expert witness: explain hallucinations. Judge: classify claims. Jury: vote mostly reliable, partly reliable, or misleading.",
        meta: "Assign roles before students see the hidden issues.",
        teacherUse: "Use for structured discussion."
      },
      {
        title: "Hidden Issues",
        body: "Fabricated citation: Elena Marsh and David Kline, Journal of Digital Reasoning, 2021. Plausible false detail: AI tools are connected to the live internet by default. Grounded claim: AI can produce fluent but incorrect answers. TOK point: fluency can create misplaced trust.",
        meta: "Teacher reveal after verdicts.",
        teacherUse: "Use after groups commit to a verdict."
      },
      ...aiClaimChecks.map(([claim, verdict, reason]) => ({
        title: `Claim Check: ${claim}`,
        body: `Verdict: ${verdict}`,
        meta: reason,
        teacherUse: "Students fill this table before seeing the teacher key."
      }))
    ],
    studentTask: "For each claim, decide: grounded, unsupported, false, or needs verification. Then write: “Can this paragraph count as knowledge? Why or why not?”",
    teacherReveal: "The paragraph is partly useful but not reliable as knowledge without verification because it combines grounded claims with fabricated and overgeneralised details.",
    answerKey: aiClaimChecks.map(([claim, verdict, reason]) => `${claim}: ${verdict} — ${reason}`),
    debriefQuestion: "How can fluency imitate knowledge while lacking reliable grounding, source accountability, or warranted justification?"
  };
}

function defaultKit(activity) {
  const stimulusCards = genericStimulusCards(activity);
  const stimulusTitle = stimulusCards[0]?.title || `${activity.title} Stimulus A`;
  return {
    studentPrompt: `Inspect ${stimulusTitle}. Record one first claim, the evidence you used, your confidence, and what would make you revise.`,
    lessonQuestions: genericLessonQuestions(activity, stimulusTitle),
    stimulusCards,
    studentTask: `Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to ${activity.category}.`,
    teacherReveal: `The key move is not the “right answer”; it is the moment students see how ${activity.bigIdea.toLowerCase()}`,
    answerKey: [
      "Strong response: separates observation from inference.",
      "Strong response: names a method, source, model, language choice, context, or perspective.",
      "Strong response: revises confidence when new evidence or a new criterion appears.",
      "Weak response: gives only opinion or says “it depends” without criteria."
    ],
    debriefQuestion: activity.knowledgeQuestions?.[0] || "What makes this knowledge claim reliable?"
  };
}

export function lessonKitFor(activity) {
  if (activity.id === "confidence-calibration-test") return confidenceKit(activity);
  if (activity.id === "search-engine-ranking-game") return searchEngineKit(activity);
  if (activity.id === "ai-hallucination-courtroom") return aiCourtroomKit(activity);
  return defaultKit(activity);
}

export function lessonKitCards(activity) {
  const kit = lessonKitFor(activity);
  const cards = [
    ...kit.stimulusCards.map((card, index) => ({
      id: `${activity.id}-stimulus-${String(index + 1).padStart(2, "0")}`,
      type: "Stimulus",
      title: card.title,
      front: card.body,
      back: card.meta || kit.studentTask,
      teacherUse: card.teacherUse || "Use as a concrete student stimulus."
    })),
    ...kit.lessonQuestions.map(question => ({
      id: `${activity.id}-question-${String(question.number).padStart(2, "0")}`,
      type: "Lesson question",
      title: `Question ${question.number}`,
      front: question.prompt || question.question,
      back: question.answer || "Use to prompt evidence-based discussion.",
      teacherUse: "Students answer before the teacher reveal."
    })),
    {
      id: `${activity.id}-task-01`,
      type: "Student task",
      title: "Student Task",
      front: kit.studentTask,
      back: kit.debriefQuestion,
      teacherUse: "Use as the main activity instruction."
    },
    {
      id: `${activity.id}-reveal-01`,
      type: "Teacher reveal",
      title: "Teacher Reveal",
      front: kit.teacherReveal,
      back: kit.answerKey.join(" | "),
      teacherUse: "Use after students commit to an answer."
    }
  ];

  return cards.slice(0, 18);
}
