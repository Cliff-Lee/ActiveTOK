const categoryLens = {
  "Knowledge and the Knower": {
    process: "attention, memory, confidence, and perspective",
    method: "private reflection before discussion",
    evidence: "first judgments, confidence ratings, and revised explanations"
  },
  "Knowledge and Technology": {
    process: "technological mediation, ranking, automation, and interface design",
    method: "a low-tech simulation of a digital system",
    evidence: "visible rule changes, ranking choices, outputs, and user reactions"
  },
  "Knowledge and Language": {
    process: "word choice, framing, metaphor, translation, and category boundaries",
    method: "rewriting or reclassifying the same claim",
    evidence: "changed interpretations, emotional responses, and implied assumptions"
  },
  Mathematics: {
    process: "proof, probability, model choice, and formal representation",
    method: "a quick puzzle, simulation, or comparison of reasoning methods",
    evidence: "worked examples, repeated trials, diagrams, and justification steps"
  },
  "Natural Sciences": {
    process: "observation, method, measurement, models, and theory choice",
    method: "a simplified inquiry or model-testing task",
    evidence: "observations, variables, anomalies, controls, and limits of inference"
  },
  "Human Sciences": {
    process: "social behaviour, incentives, wording, context, and interpretation",
    method: "a classroom simulation or mini-experiment",
    evidence: "choice patterns, response differences, role effects, and ethical limits"
  },
  History: {
    process: "source selection, interpretation, causation, and historical perspective",
    method: "source comparison or reconstruction from partial evidence",
    evidence: "archives, timelines, silences, claims, and competing explanations"
  },
  "The Arts": {
    process: "context, interpretation, title, emotion, value, and audience response",
    method: "viewing, listening, or curating under changed conditions",
    evidence: "interpretations, formal features, contextual cues, and audience claims"
  },
  "Cross-AOK": {
    process: "how standards of evidence move across areas of knowledge",
    method: "comparison across AOKs",
    evidence: "criteria, rankings, object interpretations, and shifts in certainty"
  }
};

const specificExamples = {
  "Change Blindness Starter": [
    "Two classroom photos where the clock time, board heading, and one desk object change.",
    "A slide pair where a key word in a TOK claim changes from 'proves' to 'suggests'.",
    "A live scene where a book, chair, or water bottle is moved while students look away."
  ],
  "Confidence Calibration Test": [
    "Ten general knowledge questions with confidence bands from 50% to 100%.",
    "A mini quiz mixing easy, medium, and impossible questions so overconfidence becomes visible.",
    "A class calibration chart comparing confidence level with actual accuracy."
  ],
  "Personal Knowledge Map": [
    "A knowledge map with branches for family, school, language, algorithms, memory, and experts.",
    "A trust colour-code showing automatic trust, earned trust, and contested trust.",
    "A tension line between two sources that disagree about the same claim."
  ],
  "Blind Spot Autobiography": [
    "A private reflection on one belief students changed without sharing sensitive content.",
    "A 'known unknowns' box for topics students realise they rarely question.",
    "A perspective inventory naming communities that make some assumptions feel obvious."
  ],
  "Eyewitness Trap": [
    "A busy classroom image followed by questions about colours, positions, and text.",
    "A short silent hallway scene with one misleading follow-up question.",
    "A confidence-versus-accuracy table for memory claims."
  ],
  "False Memory Word List": [
    "A word list around sleep that omits the word 'sleep'.",
    "A second list around sweet foods that omits 'candy' or 'sugar'.",
    "A recall sheet separating remembered words from inferred words."
  ],
  "Perspective Glasses": [
    "Four role cards: scientist, artist, historian, and advertiser looking at one object.",
    "A classroom photo interpreted through safety, beauty, efficiency, and fairness lenses.",
    "A perspective switch where students must defend a reading they did not choose."
  ],
  "Algorithmic Feed Simulation": [
    "Paper post cards ranked by engagement, recency, outrage, or similarity to past clicks.",
    "A feed that changes after each student 'likes' or skips a card.",
    "A comparison between a curiosity-maximising feed and a reliability-maximising feed."
  ],
  "Search Engine Ranking Game": [
    "Mock search results ranked by popularity, expertise, freshness, sponsorship, or relevance.",
    "A query about a health claim with credible, vague, commercial, and opinion sources.",
    "Two ranking rules that produce different 'top answers' for the same searcher."
  ],
  "AI Hallucination Courtroom": [
    "An AI-generated paragraph with one fabricated citation and one plausible false detail.",
    "Courtroom roles for prosecution, defence, expert witness, judge, and jury.",
    "An evidence table asking which claims are grounded, unsupported, or unverifiable."
  ],
  "Deepfake Detection Challenge": [
    "Three image descriptions: authentic-looking, edited-looking, and ambiguous.",
    "A checklist for source, context, lighting, body geometry, and independent corroboration.",
    "A debrief comparing technical clues with social trust cues."
  ],
  "GPS versus Local Knowledge": [
    "A route-planning scenario where the map suggests a faster but impractical route.",
    "Local knowledge cards: school gate closed, roadworks, unsafe crossing, steep hill.",
    "A decision table balancing speed, safety, reliability, and lived experience."
  ],
  "Autocomplete Poetry": [
    "Students write a poem using only suggested next words from a shared prompt.",
    "Two poems compared: one written by intention, one guided by autocomplete.",
    "A reflection on whether fluency signals authorship or knowledge."
  ],
  "Loaded Headline Laboratory": [
    "A neutral claim rewritten as alarming, heroic, bureaucratic, and sceptical headlines.",
    "Headline cards using verbs such as 'admits', 'claims', 'reveals', and 'warns'.",
    "A trust rating before and after students see the same evidence."
  ],
  "Metaphor Changes Policy": [
    "Crime described as a beast, virus, puzzle, business, or symptom.",
    "Policy options that feel natural under each metaphor.",
    "A discussion on how metaphors smuggle in causes and solutions."
  ],
  "Translation Loss Game": [
    "A phrase translated literally, idiomatically, and culturally.",
    "Words such as 'fair', 'home', 'respect', 'awkward', and 'saving face'.",
    "A ranking of what survives translation: fact, tone, value, or worldview."
  ],
  "Category Boundary Sorting": [
    "Cards such as game, sport, art, science, medicine, belief, evidence, and opinion.",
    "Borderline cases that force students to define category rules.",
    "A rule revision round after students encounter exceptions."
  ],
  "Euphemism and Moral Distance": [
    "Paired terms such as 'collateral damage' and 'civilian deaths'.",
    "Workplace or political language that softens responsibility.",
    "A moral-distance scale showing how language changes judgement."
  ],
  "Proof versus Pattern": [
    "A number pattern such as [[math:1 + 2 + ... + n = n(n+1)/2]] that invites both pattern-spotting and proof.",
    "A visual pattern students extend before testing whether it proves anything.",
    "A comparison between inductive confidence and deductive proof."
  ],
  "Monty Hall Shock": [
    "Three paper doors, one prize card, and repeated rounds with switch/stay tracking.",
    "A class results table showing wins after switching versus staying.",
    "A probability tree showing that the initial choice has probability 1/3 and the two unchosen doors together have probability 2/3."
  ],
  "Axiom Switch Universe": [
    "A geometry rule change where parallel lines behave differently.",
    "A made-up arithmetic system with a changed operation rule.",
    "A reflection on whether certainty depends on starting assumptions."
  ],
  "Calculator Trust Test": [
    "A calculator output checked against estimation, mental maths, and another tool, such as [[math:log10(1000) = 3]].",
    "A deliberately mistyped expression that creates a plausible wrong answer.",
    "A trust checklist for tools: input, process, output, and independent check."
  ],
  "Observation is Theory-Laden": [
    "The same candle flame described by a poet, chemist, safety inspector, and historian.",
    "A simple phenomenon viewed with different guiding questions.",
    "A notice-and-ignore table showing how theory directs attention."
  ],
  "P-hacking with Random Data": [
    "A random dataset where students hunt for any impressive correlation.",
    "Multiple subgroup comparisons that eventually produce a 'significant' pattern.",
    "A publication pitch followed by a methods audit."
  ],
  "Placebo Trial Design": [
    "A mock treatment trial with control, placebo, randomisation, and blinding cards.",
    "A flawed trial students must repair before trusting its conclusion.",
    "A debrief on ethics when belief itself changes outcomes."
  ],
  "Model Failure Challenge": [
    "A simple weather, disease, or traffic model that works until one assumption changes.",
    "An anomaly card that forces students to revise a model.",
    "A model limits table: useful for, weak when, assumptions, and missing variables."
  ],
  "Ultimatum Game": [
    "Students split ten tokens and record accept/reject decisions.",
    "Offer cards showing fair, unfair, strategic, and emotional proposals.",
    "A graph comparing rational-choice prediction with actual class choices."
  ],
  "Survey Wording Experiment": [
    "Two versions of the same question using 'support' versus 'allow'.",
    "A neutral, loaded, and leading survey item on the same issue.",
    "A class comparison chart showing how wording shifts results."
  ],
  "Conformity without Humiliation": [
    "A low-stakes line-length or preference task with planted majority responses.",
    "Silent voting before and after seeing a group trend.",
    "A norms debrief focused on method and ethics rather than embarrassment."
  ],
  "Replication Debate": [
    "A headline claim, a replication attempt, and a contested interpretation.",
    "Role cards for original researcher, replicator, journalist, and funding body.",
    "A reliability scale separating failure, boundary condition, and fraud."
  ],
  "Broken Archive": [
    "A partial archive with missing letters, dates, or voices.",
    "Students reconstruct an event from incomplete evidence cards.",
    "A source silence note asking who is absent and why."
  ],
  "Same Event, Different Historian": [
    "Two historians explaining the same protest, invention, or revolution differently.",
    "Source packets that foreground economics, leadership, culture, or ordinary people.",
    "A claim comparison chart: evidence used, emphasis, and implied values."
  ],
  "Cause Web": [
    "A web of causes for a school rule change, historical event, or social movement.",
    "Cards sorted into trigger, background condition, actor, and consequence.",
    "A debate over whether one cause can be 'the' cause."
  ],
  "Presentism Trial": [
    "A historical actor put on trial using present-day and period-specific standards.",
    "Role cards for prosecution, defence, context witness, and judge.",
    "A verdict statement separating explanation from excuse."
  ],
  "Title Changes Meaning": [
    "The same image titled 'Waiting', 'Evidence', 'Aftermath', and 'Home'.",
    "Students interpret before and after seeing titles.",
    "A title-writing round where students try to control audience interpretation."
  ],
  "Fake or Masterpiece?": [
    "Two artworks with different provenance stories but similar visual quality.",
    "A value ranking before and after learning authorship.",
    "A debrief on whether knowledge about origin changes aesthetic knowledge."
  ],
  "One Image, Many Readings": [
    "One ambiguous image interpreted through personal, cultural, political, and formal lenses.",
    "A gallery walk where each group leaves a different reading.",
    "A claim-evidence-context triangle for art interpretation."
  ],
  "Music and Emotion Experiment": [
    "The same image or scene paired with different soundtracks.",
    "Emotion rating cards before and after the music changes.",
    "A discussion of whether emotion reveals knowledge or distorts it."
  ],
  "What Counts as Evidence?": [
    "Claims from mathematics, art, history, science, and ethics sorted by evidence type.",
    "A card set with proof, testimony, data, interpretation, and expert judgement.",
    "A comparison of what each AOK accepts and rejects as evidence."
  ],
  "Same Object, Different AOK": [
    "A shell, coin, photograph, or medicine bottle examined by multiple AOKs.",
    "A matrix with rows for AOK and columns for questions, methods, and evidence.",
    "A debrief on whether the object changes or the knower's purpose changes."
  ],
  "Reliability Ranking": [
    "Knowledge claims ranked by certainty, usefulness, and risk if wrong.",
    "A second ranking after students learn the method behind each claim.",
    "A discussion on whether reliability means the same thing in every AOK."
  ],
  "Invisible Gorilla Discussion": [
    "A selective attention video or teacher-made counting task.",
    "Students track a target while a surprising event occurs.",
    "A debrief on task demands, attention, and claims based on observation."
  ],
  "Feeling of Knowing Forecast": [
    "Students predict whether they will recognise answers later before seeing options.",
    "A recognition round that separates familiarity from recall.",
    "A graph of forecasted knowing versus actual knowing."
  ],
  "Recommendation Rabbit Hole": [
    "A chain of recommended videos or posts simulated with paper cards.",
    "Rule cards that reward watch time, outrage, novelty, or similarity.",
    "A belief map showing how repeated exposure changes perceived importance."
  ],
  "Facial Recognition Bias Audit": [
    "Mock recognition results with different error rates across groups.",
    "A deployment decision scenario for school entry, policing, or phones.",
    "An audit table for accuracy, fairness, stakes, and accountability."
  ],
  "Definition Drift Debate": [
    "A term such as 'intelligence', 'health', 'art', or 'expert' across contexts.",
    "Students track how definitions change between everyday, legal, and academic use.",
    "A debate over whether changing definitions clarify or manipulate knowledge."
  ],
  "Graph Caption Framing": [
    "The same graph captioned as crisis, progress, uncertainty, or manipulation.",
    "Students write captions before and after seeing the axis labels.",
    "A framing audit separating data from narrative."
  ],
  "Base Rate Neglect Clinic": [
    "A medical test scenario with prevalence, sensitivity, and false positives using [[math:P(H | +)]].",
    "A 100-person grid showing how rare events change interpretation.",
    "A correction round where students revise intuitive probability claims."
  ],
  "Correlation Illusion Cards": [
    "Cards with random pairings that appear patterned after selective attention.",
    "A scatterplot where students first guess relationships, then compare with a correlation such as [[math:r = 0.82]].",
    "A discussion of why humans find patterns too quickly."
  ],
  "Peer Review Filter": [
    "A mock paper evaluated by reviewers with different priorities.",
    "Reviewer cards for method, novelty, ethics, clarity, and replication.",
    "A debrief on how communities filter claims before they become knowledge."
  ],
  "Measurement Changes Phenomenon": [
    "A behaviour that changes when students know it is being measured.",
    "A comparison of ruler, survey, timer, and rating scale as measurement tools.",
    "A method audit asking what the instrument makes visible or invisible."
  ],
  "Anchoring Price Experiment": [
    "Students estimate a fair price after seeing high or low anchor numbers.",
    "A silent first estimate followed by group discussion.",
    "A debrief on whether numerical anchors act like evidence."
  ],
  "Observer Effect Roleplay": [
    "Participants change behaviour when a researcher, teacher, or peer observer is present.",
    "Role cards for subject, observer, recorder, and method critic.",
    "A discussion of whether studying people changes the knowledge produced."
  ],
  "Memory versus Monument": [
    "A monument plaque compared with personal memory accounts.",
    "Students identify what is commemorated, simplified, or omitted.",
    "A debrief on public memory as evidence and interpretation."
  ],
  "Timeline Compression Trap": [
    "A timeline where long periods are visually compressed and short events expanded.",
    "Students infer importance from spacing, then audit the scale.",
    "A redrawn timeline showing how visual form changes historical understanding."
  ],
  "Context Collapse Gallery": [
    "Artwork shown with no context, wrong context, and rich context.",
    "A social-media screenshot where audience and setting are collapsed.",
    "A gallery note asking which context changes interpretation most."
  ],
  "Soundtrack Changes Scene": [
    "One silent scene paired with suspenseful, comic, and sad soundtracks.",
    "Emotion and meaning ratings after each version.",
    "A debrief on whether sound supplies evidence or interpretation."
  ],
  "Method Swap Challenge": [
    "A claim examined using scientific experiment, historical source analysis, and artistic interpretation.",
    "Students swap methods and note what each method reveals or misses.",
    "A criteria card for matching method to question."
  ],
  "Expertise Boundary Clinic": [
    "Experts make claims inside and outside their field.",
    "Students classify expertise as direct, adjacent, borrowed, or irrelevant.",
    "A trust decision matrix for credentials, method, consensus, and conflict of interest."
  ],
  "Source Amnesia Trace": [
    "Students remember a claim but lose track of whether it came from expert, friend, ad, or rumour.",
    "A delayed source-matching round.",
    "A discussion on why source memory matters for justification."
  ],
  "Prompt Framing Lab": [
    "Two AI prompts that ask for confident advice versus cautious analysis.",
    "Students compare output tone, caveats, and evidence use.",
    "A prompt audit asking how the question shapes the answer."
  ],
  "Ambiguity Court": [
    "An ambiguous sentence or image put on trial for its most defensible interpretation.",
    "Role cards for claimant, challenger, context expert, and judge.",
    "A verdict that must name evidence and uncertainty."
  ],
  "Randomness Pattern Hunt": [
    "A random dot or coin-flip sequence where students hunt for meaningful patterns.",
    "A comparison of human-made and random sequences.",
    "A debrief on randomness, expectation, and mathematical evidence."
  ],
  "Anomaly Rescue Mission": [
    "A surprising data point that students can explain, ignore, or use to revise theory.",
    "Rescue cards: measurement error, new variable, fraud, boundary condition, new theory.",
    "A decision tree for when anomalies matter."
  ],
  "Framing Risk Choice": [
    "The same option framed as lives saved versus lives lost.",
    "Students choose before and after numerical equivalence is revealed.",
    "A debrief on whether rational choice can be separated from framing."
  ],
  "Source Silence Investigation": [
    "A source packet where one group's voice is missing.",
    "Students write hypotheses for why the silence exists.",
    "A responsible claim statement naming limits of the archive."
  ],
  "Curator Choice Gallery": [
    "Groups curate the same artworks under themes such as rebellion, beauty, identity, or power.",
    "A wall label that justifies inclusion and exclusion.",
    "A debrief on how curation creates knowledge rather than merely displaying it."
  ],
  "Claim Migration Lab": [
    "A claim moves from lab report to headline to social post to classroom discussion.",
    "Students track what becomes stronger, weaker, or missing at each step.",
    "A reliability passport for claims travelling between contexts."
  ],
  "Emotion Snapshot Audit": [
    "Students make a judgement under an emotion prompt, then re-evaluate after a pause.",
    "A feeling-versus-evidence grid.",
    "A debrief on when emotion is evidence and when it is noise."
  ],
  "Data Dashboard Mirage": [
    "A dashboard with clean metrics but missing definitions and context.",
    "Students decide too quickly, then receive hidden caveat cards.",
    "A dashboard audit for what is measured, omitted, aggregated, and incentivised."
  ],
  "Silence and Implication Lab": [
    "Statements where what is unsaid changes the implied meaning.",
    "Students rewrite a claim to make assumptions explicit.",
    "A debrief on whether silence can communicate knowledge claims."
  ],
  "Log Scale Surprise": [
    "The same growth data plotted on linear and logarithmic scales.",
    "Students describe the trend before seeing the scale type, then annotate [[math:log10(1000) = 3]].",
    "A graph literacy audit asking what the representation makes easy to see."
  ],
  "Mechanism Black Box": [
    "A system with inputs and outputs but hidden mechanism.",
    "Students propose competing mechanisms that fit the same results.",
    "A debrief on prediction, explanation, and black-box knowledge."
  ],
  "Interviewer Effect Simulation": [
    "Students answer the same question to a peer, teacher, stranger, or anonymous form.",
    "A response comparison showing how context changes data.",
    "A method note on social desirability and researcher influence."
  ],
  "Counterfactual Forks": [
    "Students build branches from a historical decision point.",
    "Fork cards labelled plausible, possible, and fantasy.",
    "A debrief on whether counterfactuals explain causes or invent stories."
  ],
  "Restoration Ethics Studio": [
    "A damaged artwork with choices to preserve, restore, reinterpret, or leave visible.",
    "Stakeholder cards for artist, museum, audience, owner, and community.",
    "A debate over whether restoration produces truth or a new object."
  ],
  "Certainty Thermometer": [
    "Claims placed on a scale from guess to justified certainty.",
    "Students add evidence tags explaining each placement.",
    "A second round after changing the AOK or stakes."
  ]
};

const visualTypes = {
  "Knowledge and the Knower": "attention",
  "Knowledge and Technology": "interface",
  "Knowledge and Language": "language",
  Mathematics: "math",
  "Natural Sciences": "science",
  "Human Sciences": "human",
  History: "history",
  "The Arts": "arts",
  "Cross-AOK": "cross"
};

const misconceptionByCategory = {
  "Knowledge and the Knower": [
    "Students may treat perception or memory as a recording device.",
    "Students may assume confidence is evidence rather than a feeling about evidence."
  ],
  "Knowledge and Technology": [
    "Students may treat a tool's output as neutral because it feels automatic.",
    "Students may focus only on user error and miss design incentives or hidden rules."
  ],
  "Knowledge and Language": [
    "Students may say language merely expresses thought rather than shaping interpretation.",
    "Students may identify bias in extreme examples but miss subtle framing."
  ],
  Mathematics: [
    "Students may treat a persuasive pattern as equivalent to proof.",
    "Students may trust intuition when the formal model uses a different structure."
  ],
  "Natural Sciences": [
    "Students may think observation happens before theory in a simple linear order.",
    "Students may overclaim from a classroom model without naming its limits."
  ],
  "Human Sciences": [
    "Students may treat class behaviour as universal human nature.",
    "Students may ignore ethical limits or context effects in human-subject inquiry."
  ],
  History: [
    "Students may treat sources as transparent windows rather than selected traces.",
    "Students may confuse explaining context with excusing actions."
  ],
  "The Arts": [
    "Students may treat interpretation as purely subjective and therefore beyond evidence.",
    "Students may ignore how context, form, and audience knowledge constrain readings."
  ],
  "Cross-AOK": [
    "Students may apply one AOK's standard of evidence to all knowledge claims.",
    "Students may equate certainty with value or usefulness."
  ]
};

const assessmentByCategory = {
  "Knowledge and the Knower": [
    "Separates perception, memory, belief, confidence, and justification.",
    "Uses the activity result to make a cautious claim about knowers."
  ],
  "Knowledge and Technology": [
    "Identifies the rule, design choice, or incentive shaping knowledge.",
    "Distinguishes access to information from justified knowledge."
  ],
  "Knowledge and Language": [
    "Explains how wording changes interpretation before evidence is judged.",
    "Uses concrete language choices as evidence for a TOK claim."
  ],
  Mathematics: [
    "Distinguishes intuition, empirical pattern, model, and proof.",
    "Explains why formal reasoning can conflict with first impressions."
  ],
  "Natural Sciences": [
    "Names variables, assumptions, controls, anomalies, and limits.",
    "Explains how methods shape what can count as scientific knowledge."
  ],
  "Human Sciences": [
    "Connects behaviour to method, context, incentives, and ethical constraints.",
    "Avoids overgeneralising from one small sample."
  ],
  History: [
    "Uses source evidence while naming selection, silence, and perspective.",
    "Distinguishes historical claim, interpretation, and judgement."
  ],
  "The Arts": [
    "Supports interpretation with formal features, context, and audience response.",
    "Explains why multiple readings are not automatically equal."
  ],
  "Cross-AOK": [
    "Compares standards of evidence across at least two AOKs.",
    "Explains how a claim changes when method, context, or audience changes."
  ]
};

function fallbackExamples(activity) {
  const lens = categoryLens[activity.category];
  return [
    `A simple classroom version using ${activity.materials[0] || "prepared cards or a projected prompt"}.`,
    `A second round where students change one rule and compare how the knowledge claim changes.`,
    `A reflection card asking students to connect the activity to ${lens.process}.`
  ];
}

function categorySetup(activity) {
  const lens = categoryLens[activity.category];
  return [
    `Prepare the stimulus: ${activity.materials[0] || "use a short prompt, card set, image, or projected slide"}.`,
    `Decide whether students respond individually, in pairs, or in groups before class discussion.`,
    `Ask students to record first judgments privately before hearing others.`,
    `Create a visible class record of ${lens.evidence}.`,
    `Save three minutes for a TOK debrief rather than only explaining the trick or result.`
  ];
}

function facilitatorScript(activity) {
  const lens = categoryLens[activity.category];
  return [
    `Opening: "This is not a test of intelligence; it is a test of how ${lens.process} can shape what seems obvious."`,
    `During: "Write your first answer and confidence before you hear anyone else."`,
    `Press: "What exactly counted as evidence for that claim?"`,
    `Bridge: "How would a different method, language choice, or perspective change what we think we know?"`,
    `Close: "Turn this into one knowledge question that goes beyond today's example."`
  ];
}

function differentiation(activity) {
  return [
    `Support: give sentence stems such as "The evidence suggests..." and "My confidence changed because...".`,
    `Challenge: ask students to redesign the activity to make the knowledge claim more reliable.`,
    `Extension: compare this activity with a real example from ${activity.category}.`
  ];
}

export function enhanceActivity(activity) {
  const lens = categoryLens[activity.category] || categoryLens["Cross-AOK"];
  const exampleMaterials = specificExamples[activity.title] || fallbackExamples(activity);
  const firstQuestion = activity.knowledgeQuestions?.[0] || "What makes this knowledge claim reliable?";

  return {
    lens,
    visualType: visualTypes[activity.category] || "cross",
    visualPath: `assets/activity-visuals/${activity.slug}.svg`,
    visualAlt: `${activity.title} classroom visual showing how ${lens.process} shapes knowledge.`,
    classroomExample: `For example, run this activity with ${exampleMaterials[0].replace(/\.$/, "").toLowerCase()}. Have students commit to an initial claim, then reveal the change, hidden rule, alternative context, or comparison that makes the knowledge problem visible.`,
    readyPrompt: `Today we are using ${lens.method} to test this TOK idea: ${activity.bigIdea} Your job is to record what you think you know, what evidence you used, and what would make you revise your claim.`,
    setupChecklist: categorySetup(activity),
    exampleMaterials,
    facilitatorScript: facilitatorScript(activity),
    studentInstructions: [
      "Work silently for the first response so you can notice your own starting point.",
      "Record one knowledge claim, the evidence behind it, and your confidence level.",
      "After the reveal or comparison, update your claim in a different colour or column.",
      `Use the debrief to answer: ${firstQuestion}`
    ],
    commonMisconceptions: misconceptionByCategory[activity.category] || misconceptionByCategory["Cross-AOK"],
    assessmentLookFors: assessmentByCategory[activity.category] || assessmentByCategory["Cross-AOK"],
    differentiation: differentiation(activity),
    extension: `Ask students to create a parallel example from another AOK, then explain which parts of the method transfer and which do not.`,
    exitTicket: [
      "One thing I first treated as evidence was...",
      "My confidence changed because...",
      "A better knowledge question I can now ask is..."
    ]
  };
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapSvgText(value, max = 42) {
  const words = String(value).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function textLines(lines, x, y, options = {}) {
  const { size = 24, color = "#172033", weight = 500, gap = 32, anchor = "start" } = options;
  return lines
    .map((line, index) => `<text x="${x}" y="${y + index * gap}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeXml(line)}</text>`)
    .join("");
}

function visualCore(type) {
  const cores = {
    attention: `
      <circle cx="325" cy="300" r="92" fill="#EAF5EF" stroke="#2F865F" stroke-width="8"/>
      <path d="M210 300 C260 210 390 210 440 300 C390 390 260 390 210 300Z" fill="none" stroke="#172033" stroke-width="10"/>
      <circle cx="325" cy="300" r="30" fill="#D89B38"/>
      <rect x="520" y="218" width="180" height="164" rx="18" fill="#FFF3DA" stroke="#D89B38" stroke-width="6"/>
      <path d="M460 300 L520 300" stroke="#385E7F" stroke-width="8" stroke-linecap="round" stroke-dasharray="16 16"/>`,
    interface: `
      <rect x="175" y="160" width="540" height="300" rx="28" fill="#EAF0F7" stroke="#385E7F" stroke-width="8"/>
      <rect x="220" y="215" width="250" height="52" rx="12" fill="#FFFDF7"/>
      <rect x="220" y="292" width="350" height="52" rx="12" fill="#FFFDF7"/>
      <rect x="220" y="369" width="200" height="52" rx="12" fill="#FFFDF7"/>
      <path d="M620 215 L700 190 L675 275Z" fill="#D89B38"/>
      <path d="M630 400 C720 360 735 255 690 205" fill="none" stroke="#2F865F" stroke-width="8" stroke-linecap="round"/>`,
    language: `
      <rect x="160" y="170" width="570" height="110" rx="18" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>
      <rect x="210" y="340" width="470" height="95" rx="18" fill="#FFF3DA" stroke="#D89B38" stroke-width="6"/>
      <path d="M290 280 L360 340 M520 280 L465 340" stroke="#2F865F" stroke-width="8" stroke-linecap="round"/>
      <text x="445" y="238" text-anchor="middle" font-size="42" font-weight="800" fill="#172033">WORDS</text>
      <text x="445" y="402" text-anchor="middle" font-size="34" font-weight="800" fill="#8A5D14">MEANING</text>`,
    math: `
      <rect x="170" y="160" width="520" height="320" rx="24" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>
      <path d="M220 405 L330 275 L445 345 L610 210" fill="none" stroke="#2F865F" stroke-width="10" stroke-linecap="round"/>
      <circle cx="330" cy="275" r="18" fill="#D89B38"/>
      <circle cx="445" cy="345" r="18" fill="#D89B38"/>
      <text x="220" y="235" font-size="48" font-weight="800" fill="#385E7F">?</text>
      <text x="550" y="430" font-size="42" font-weight="800" fill="#172033">∴</text>`,
    science: `
      <path d="M275 155 L145 450 H405Z" fill="#EAF5EF" stroke="#2F865F" stroke-width="8"/>
      <circle cx="275" cy="248" r="42" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>
      <rect x="500" y="190" width="210" height="220" rx="18" fill="#EAF0F7" stroke="#385E7F" stroke-width="6"/>
      <path d="M405 300 L500 300" stroke="#D89B38" stroke-width="8" stroke-linecap="round"/>
      <text x="605" y="318" text-anchor="middle" font-size="34" font-weight="800" fill="#172033">MODEL</text>`,
    human: `
      <circle cx="240" cy="220" r="48" fill="#EAF5EF" stroke="#2F865F" stroke-width="6"/>
      <circle cx="430" cy="220" r="48" fill="#FFF3DA" stroke="#D89B38" stroke-width="6"/>
      <circle cx="620" cy="220" r="48" fill="#EAF0F7" stroke="#385E7F" stroke-width="6"/>
      <path d="M240 275 V410 M430 275 V410 M620 275 V410 M240 340 H620" stroke="#172033" stroke-width="8" stroke-linecap="round"/>
      <rect x="220" y="430" width="420" height="58" rx="14" fill="#FFFDF7" stroke="#DED8CB" stroke-width="4"/>`,
    history: `
      <rect x="170" y="155" width="520" height="340" rx="22" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>
      <path d="M235 220 H625 M235 300 H560 M235 380 H610" stroke="#385E7F" stroke-width="8" stroke-linecap="round"/>
      <rect x="505" y="205" width="115" height="80" fill="#FFF3DA" stroke="#D89B38" stroke-width="5"/>
      <path d="M190 470 C315 410 490 540 670 440" fill="none" stroke="#2F865F" stroke-width="8" stroke-dasharray="18 14"/>`,
    arts: `
      <rect x="150" y="155" width="190" height="235" rx="18" fill="#EAF0F7" stroke="#385E7F" stroke-width="8"/>
      <rect x="385" y="205" width="190" height="235" rx="18" fill="#FFF3DA" stroke="#D89B38" stroke-width="8"/>
      <rect x="620" y="155" width="110" height="285" rx="18" fill="#EAF5EF" stroke="#2F865F" stroke-width="8"/>
      <path d="M190 335 C235 260 270 300 310 225" fill="none" stroke="#172033" stroke-width="8" stroke-linecap="round"/>
      <circle cx="480" cy="315" r="52" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>`,
    cross: `
      <rect x="165" y="165" width="520" height="320" rx="24" fill="#FFFDF7" stroke="#172033" stroke-width="6"/>
      <path d="M165 272 H685 M165 378 H685 M338 165 V485 M512 165 V485" stroke="#DED8CB" stroke-width="6"/>
      <circle cx="252" cy="220" r="28" fill="#2F865F"/>
      <circle cx="425" cy="326" r="28" fill="#D89B38"/>
      <circle cx="598" cy="432" r="28" fill="#385E7F"/>
      <path d="M252 220 L425 326 L598 432" fill="none" stroke="#172033" stroke-width="6" stroke-linecap="round"/>`
  };
  return cores[type] || cores.cross;
}

export function visualSvgFor(activity) {
  const enhancement = enhanceActivity(activity);
  const titleLines = wrapSvgText(activity.title, 34);
  const ideaLines = wrapSvgText(activity.bigIdea, 46);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(activity.title)}</title>
  <desc id="desc">${escapeXml(enhancement.visualAlt)}</desc>
  <rect width="960" height="540" rx="34" fill="#F7F3EA"/>
  <rect x="0" y="0" width="18" height="540" fill="#2F865F"/>
  <rect x="18" y="0" width="10" height="540" fill="#D89B38"/>
  <text x="62" y="58" font-size="18" font-weight="800" fill="#1F6448">${escapeXml(activity.category)}</text>
  ${visualCore(enhancement.visualType)}
  ${textLines(titleLines, 62, 120, { size: titleLines.length > 1 ? 36 : 42, weight: 900, gap: 42 })}
  <rect x="62" y="408" width="835" height="82" rx="18" fill="#FFFDF7" stroke="#DED8CB" stroke-width="3"/>
  ${textLines(ideaLines, 86, 444, { size: 22, color: "#4A5872", weight: 600, gap: 28 })}
</svg>
`;
}

function idFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function baseEnhancementFor(title, examples) {
  return {
    setup: [
      `Prepare a starter stimulus using: ${examples[0]}`,
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    exampleStimuli: examples,
    runResources: [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    sampleTeacherLanguage: [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    sampleStudentOutput: [
      `A student claim connected to ${title}: "My first judgement felt obvious, but my evidence was thinner than I realised."`,
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    extensionTasks: [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    adaptations: [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ]
  };
}

export const activityEnhancements = Object.fromEntries(
  Object.entries(specificExamples).map(([title, examples]) => [
    idFromTitle(title),
    baseEnhancementFor(title, examples)
  ])
);
