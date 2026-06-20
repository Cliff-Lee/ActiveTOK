import { activityEnhancements as baseActivityEnhancements } from "./activity-enhancements.mjs";
import { additionalActivities } from "./additional-activities.mjs";
import { additionalActivityEnhancements } from "./additional-activity-enhancements.mjs";
import { moreActivities } from "./more-activities.mjs";
import { moreActivityEnhancements } from "./more-activity-enhancements.mjs";

const baseActivities = [
  {
    "id": "change-blindness-starter",
    "slug": "change-blindness",
    "title": "Change Blindness Starter",
    "category": "Knowledge and the Knower",
    "time": "10-15 min",
    "difficulty": "Easy",
    "summary": "Students experience that attention does not record every visible detail.",
    "bigIdea": "Attention selects reality before we report it.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students experience that attention does not record every visible detail.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Two similar images, a slide with a hidden change, or the included example image."
    ],
    "procedure": [
      "Show Image A for 10 seconds.",
      "Switch to Image B for 10 seconds, or alternate quickly between the two.",
      "Ask students to write down the change privately before discussing.",
      "Reveal the change and ask students what they assumed they had noticed."
    ],
    "debrief": [
      "Knowledge question: If perception is selective, when should observation be trusted?",
      "What do we mean when we say, \"I saw it with my own eyes\"?",
      "Link to eyewitness testimony, scientific observation, journalism and memory."
    ],
    "knowledgeQuestions": [
      "If perception is selective, when should observation be trusted?",
      "What do we mean when we say, \"I saw it with my own eyes\"?"
    ],
    "exhibitionObject": "A pair of classroom photos with one altered detail.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "confidence-calibration-test",
      "personal-knowledge-map",
      "blind-spot-autobiography"
    ]
  },
  {
    "id": "confidence-calibration-test",
    "slug": "confidence-calibration-test",
    "title": "Confidence Calibration Test",
    "category": "Knowledge and the Knower",
    "time": "20-25 min",
    "difficulty": "Easy",
    "summary": "Students compare how confident they feel with how accurate they actually are.",
    "bigIdea": "Certainty and accuracy are not the same.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students compare how confident they feel with how accurate they actually are.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A set of 12-15 factual questions, answer sheet, calculator or spreadsheet."
    ],
    "procedure": [
      "Give students general knowledge questions. For each answer they also write a confidence level: 50%, 60%, 70%, 80%, 90% or 100%.",
      "Mark the answers.",
      "For each confidence band, calculate actual percentage correct.",
      "Ask students whether they were overconfident, underconfident or well calibrated."
    ],
    "debrief": [
      "Knowledge question: Is certainty a reliable indicator of knowledge?",
      "What is the difference between confidence, belief and justification?",
      "Why might experts sometimes be better calibrated than beginners?"
    ],
    "knowledgeQuestions": [
      "Is certainty a reliable indicator of knowledge?",
      "What is the difference between confidence, belief and justification?",
      "Why might experts sometimes be better calibrated than beginners?"
    ],
    "exhibitionObject": "A completed calibration chart showing confidence against accuracy.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "personal-knowledge-map",
      "blind-spot-autobiography"
    ]
  },
  {
    "id": "personal-knowledge-map",
    "slug": "personal-knowledge-map",
    "title": "Personal Knowledge Map",
    "category": "Knowledge and the Knower",
    "time": "20-30 min",
    "difficulty": "Medium",
    "summary": "Students identify the communities and channels that shape what they think they know.",
    "bigIdea": "Knowers inherit knowledge from communities.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students identify the communities and channels that shape what they think they know.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Blank paper or digital mind-map template."
    ],
    "procedure": [
      "Students put \"my knowledge\" in the centre of a page.",
      "They add branches: family, school, friends, social media, culture, language, religion, books, experts, algorithms and personal experience.",
      "They colour-code sources they trust most, least and automatically.",
      "Pairs compare one similarity and one difference."
    ],
    "debrief": [
      "Knowledge question: To what extent is personal knowledge shaped by knowledge communities?",
      "Are we responsible for checking inherited beliefs?",
      "Can a knower ever be fully independent?"
    ],
    "knowledgeQuestions": [
      "To what extent is personal knowledge shaped by knowledge communities?",
      "Are we responsible for checking inherited beliefs?",
      "Can a knower ever be fully independent?"
    ],
    "exhibitionObject": "A personal knowledge map with trust ratings.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "confidence-calibration-test",
      "blind-spot-autobiography"
    ]
  },
  {
    "id": "blind-spot-autobiography",
    "slug": "blind-spot-autobiography",
    "title": "Blind Spot Autobiography",
    "category": "Knowledge and the Knower",
    "time": "20 min",
    "difficulty": "Easy",
    "summary": "Students reflect on the limits of their own knowing without forced disclosure.",
    "bigIdea": "Self-knowledge includes awareness of limits.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students reflect on the limits of their own knowing without forced disclosure.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Private reflection sheet. Optional blind-spot diagram."
    ],
    "procedure": [
      "Students privately complete three prompts: \"Something I used to believe\", \"Something I strongly believe but cannot fully prove\", and \"Something I may be biased about\".",
      "Students choose one safe example to discuss with a partner, or keep all examples private.",
      "The class builds a list of causes of blind spots: identity, language, friendship group, schooling, emotion, incentives and media.",
      "Finish with a one-sentence reflection: \"A good knower should...\""
    ],
    "debrief": [
      "Knowledge question: Can knowing your bias make you less biased?",
      "Is self-knowledge necessary for reliable knowledge?",
      "When does perspective become distortion?"
    ],
    "knowledgeQuestions": [
      "Can knowing your bias make you less biased?",
      "Is self-knowledge necessary for reliable knowledge?",
      "When does perspective become distortion?"
    ],
    "exhibitionObject": "An anonymised reflection sheet or a literal blind-spot diagram.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "confidence-calibration-test",
      "personal-knowledge-map"
    ]
  },
  {
    "id": "eyewitness-trap",
    "slug": "eyewitness-trap",
    "title": "Eyewitness Trap",
    "category": "Knowledge and the Knower",
    "time": "15-20 min",
    "difficulty": "Easy",
    "summary": "Students see that memory is often reconstruction rather than playback.",
    "bigIdea": "Memory is reconstructive, not photographic.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students see that memory is often reconstruction rather than playback.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A busy classroom image or short silent video."
    ],
    "procedure": [
      "Show a busy image for 10 seconds.",
      "Remove it and ask factual questions: colours, objects, positions, text, number of people.",
      "Ask students to rate their confidence in each answer.",
      "Reveal the image and compare accuracy with confidence."
    ],
    "debrief": [
      "Knowledge question: When should memory be trusted as evidence?",
      "Why can sincere testimony still be unreliable?",
      "How might leading questions change remembered knowledge?"
    ],
    "knowledgeQuestions": [
      "When should memory be trusted as evidence?",
      "Why can sincere testimony still be unreliable?",
      "How might leading questions change remembered knowledge?"
    ],
    "exhibitionObject": "A witness questionnaire and the original image.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "confidence-calibration-test",
      "personal-knowledge-map"
    ]
  },
  {
    "id": "false-memory-word-list",
    "slug": "false-memory-word-list",
    "title": "False Memory Word List",
    "category": "Knowledge and the Knower",
    "time": "15-20 min",
    "difficulty": "Easy",
    "summary": "Students experience how meaning and expectation can create a memory of something that was not presented.",
    "bigIdea": "Coherence can produce confident false memory.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students experience how meaning and expectation can create a memory of something that was not presented.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Prepared word list. Example: bed, rest, tired, dream, pillow, blanket, nap, yawn, night. Do not include the word \"sleep\"."
    ],
    "procedure": [
      "Read the word list aloud once.",
      "Students complete a distractor task for one minute.",
      "Ask which words they remember. Include the lure word \"sleep\" on a recognition list.",
      "Count how many students confidently remember the lure."
    ],
    "debrief": [
      "Knowledge question: Does a coherent story make a belief feel more true?",
      "What is the difference between remembering and inferring?",
      "What does this suggest about legal testimony, history and personal identity?"
    ],
    "knowledgeQuestions": [
      "Does a coherent story make a belief feel more true?",
      "What is the difference between remembering and inferring?",
      "What does this suggest about legal testimony, history and personal identity?"
    ],
    "exhibitionObject": "A recognition list with confidence marks.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "confidence-calibration-test",
      "personal-knowledge-map"
    ]
  },
  {
    "id": "perspective-glasses",
    "slug": "perspective-glasses",
    "title": "Perspective Glasses",
    "category": "Knowledge and the Knower",
    "time": "25-30 min",
    "difficulty": "Medium",
    "summary": "Students see that the same event can be known differently by different knowers.",
    "bigIdea": "Perspective can limit and enrich knowledge.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students see that the same event can be known differently by different knowers.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and the knower, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Scenario cards. Example: \"A student used AI to help write an assignment.\""
    ],
    "procedure": [
      "Assign groups different perspectives: student, teacher, parent, university admissions officer, AI company, another student.",
      "Each group lists what they know, what they care about and what evidence they would request.",
      "Groups present their interpretation.",
      "The class separates factual disagreement from value disagreement."
    ],
    "debrief": [
      "Knowledge question: Does perspective limit knowledge or enrich it?",
      "Are some perspectives more legitimate than others?",
      "Can objectivity include multiple perspectives?"
    ],
    "knowledgeQuestions": [
      "Does perspective limit knowledge or enrich it?",
      "Are some perspectives more legitimate than others?",
      "Can objectivity include multiple perspectives?"
    ],
    "exhibitionObject": "A perspective card annotated by a group. Optional theme: Knowledge and Technology",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "change-blindness-starter",
      "confidence-calibration-test",
      "personal-knowledge-map"
    ]
  },
  {
    "id": "algorithmic-feed-simulation",
    "slug": "algorithmic-feed-simulation",
    "title": "Algorithmic Feed Simulation",
    "category": "Knowledge and Technology",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students experience how personalisation filters knowledge.",
    "bigIdea": "A feed is a knowledge filter.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students experience how personalisation filters knowledge.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "30-40 content cards: science, news, memes, sport, celebrity, adverts, revision tips, conspiracy claims, local events."
    ],
    "procedure": [
      "Students secretly choose five cards they would click.",
      "The teacher acts as the algorithm and gives each student more cards similar to their choices.",
      "Repeat for three rounds.",
      "Students compare how different feeds became over time."
    ],
    "debrief": [
      "Knowledge question: Do algorithms expand knowledge or narrow it?",
      "Is a personalised feed a window, a mirror or a cage?",
      "Who is responsible for algorithmic bias: user, designer, company or society?"
    ],
    "knowledgeQuestions": [
      "Do algorithms expand knowledge or narrow it?",
      "Is a personalised feed a window, a mirror or a cage?",
      "Who is responsible for algorithmic bias: user, designer, company or society?"
    ],
    "exhibitionObject": "A simulated feed showing repeated recommendations.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "search-engine-ranking-game",
      "ai-hallucination-courtroom",
      "deepfake-detection-challenge"
    ]
  },
  {
    "id": "search-engine-ranking-game",
    "slug": "search-engine-ranking-game",
    "title": "Search Engine Ranking Game",
    "category": "Knowledge and Technology",
    "time": "25-30 min",
    "difficulty": "Medium",
    "summary": "Students investigate how ranking affects what becomes visible as knowledge.",
    "bigIdea": "Visibility is not the same as reliability.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students investigate how ranking affects what becomes visible as knowledge.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A fake search results page with eight results of mixed reliability."
    ],
    "procedure": [
      "Present a question such as \"Is homework effective?\"",
      "Students rank which results they would click first.",
      "Reveal hidden information: sponsored result, old source, expert review, blog post, advocacy group and research article.",
      "Students redesign the search page to make reliability easier to judge."
    ],
    "debrief": [
      "Knowledge question: Does visibility affect what people accept as true?",
      "Is the first answer usually the best answer?",
      "How should search engines balance relevance, profit and public knowledge?"
    ],
    "knowledgeQuestions": [
      "Does visibility affect what people accept as true?",
      "Is the first answer usually the best answer?",
      "How should search engines balance relevance, profit and public knowledge?"
    ],
    "exhibitionObject": "An annotated search results page.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "algorithmic-feed-simulation",
      "ai-hallucination-courtroom",
      "deepfake-detection-challenge"
    ]
  },
  {
    "id": "ai-hallucination-courtroom",
    "slug": "ai-hallucination-courtroom",
    "title": "AI Hallucination Courtroom",
    "category": "Knowledge and Technology",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students practise evaluating fluent but unreliable AI-generated claims.",
    "bigIdea": "Fluency can be mistaken for knowledge.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students practise evaluating fluent but unreliable AI-generated claims.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "An AI-generated paragraph containing true, vague and false claims."
    ],
    "procedure": [
      "Give all groups the same paragraph.",
      "Assign roles: prosecution, defence and judge.",
      "Prosecution identifies unsupported or false claims. Defence argues how the tool could still be useful. Judges decide what evidence is required.",
      "Finish by writing class rules for responsible AI use."
    ],
    "debrief": [
      "Knowledge question: Can fluency be mistaken for knowledge?",
      "Can a machine be a knower, or only a producer of outputs?",
      "Who is responsible for AI misinformation?"
    ],
    "knowledgeQuestions": [
      "Can fluency be mistaken for knowledge?",
      "Can a machine be a knower, or only a producer of outputs?",
      "Who is responsible for AI misinformation?"
    ],
    "exhibitionObject": "An annotated AI response with evidence notes.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "algorithmic-feed-simulation",
      "search-engine-ranking-game",
      "deepfake-detection-challenge"
    ]
  },
  {
    "id": "deepfake-detection-challenge",
    "slug": "deepfake-detection-challenge",
    "title": "Deepfake Detection Challenge",
    "category": "Knowledge and Technology",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students consider how synthetic media changes evidence standards.",
    "bigIdea": "Evidence standards change when media is synthetic.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students consider how synthetic media changes evidence standards.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Teacher-made image examples, screenshots, or a curated set of real and manipulated media."
    ],
    "procedure": [
      "Show several media examples without revealing which are manipulated.",
      "Students create a checklist: source, metadata, shadows, hands, audio mismatch, reverse image search, corroboration.",
      "Reveal answers or uncertainty.",
      "Students discuss how much trust should change in a synthetic media environment."
    ],
    "debrief": [
      "Knowledge question: What happens to knowledge when evidence can be easily fabricated?",
      "Do new technologies require new standards of proof?",
      "Is \"seeing is believing\" still defensible?"
    ],
    "knowledgeQuestions": [
      "What happens to knowledge when evidence can be easily fabricated?",
      "Do new technologies require new standards of proof?",
      "Is \"seeing is believing\" still defensible?"
    ],
    "exhibitionObject": "A deepfake detection checklist.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "algorithmic-feed-simulation",
      "search-engine-ranking-game",
      "ai-hallucination-courtroom"
    ]
  },
  {
    "id": "gps-versus-local-knowledge",
    "slug": "gps-versus-local-knowledge",
    "title": "GPS versus Local Knowledge",
    "category": "Knowledge and Technology",
    "time": "25 min",
    "difficulty": "Easy",
    "summary": "Students compare precise digital knowledge with situated local knowledge.",
    "bigIdea": "Data can be precise and incomplete.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students compare precise digital knowledge with situated local knowledge.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A school map, city map or fictional island route map."
    ],
    "procedure": [
      "Give students a route recommended by an app.",
      "Add local knowledge: roadworks, locked gate, dangerous crossing, staircase, informal shortcut, crowding at certain times.",
      "Groups design the best route for different users.",
      "Compare algorithmic optimisation with human judgement."
    ],
    "debrief": [
      "Knowledge question: When is local knowledge better than technological knowledge?",
      "Does data capture everything relevant?",
      "Can technology make us less attentive knowers?"
    ],
    "knowledgeQuestions": [
      "When is local knowledge better than technological knowledge?",
      "Does data capture everything relevant?",
      "Can technology make us less attentive knowers?"
    ],
    "exhibitionObject": "A map with app route and local annotations.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "algorithmic-feed-simulation",
      "search-engine-ranking-game",
      "ai-hallucination-courtroom"
    ]
  },
  {
    "id": "autocomplete-poetry",
    "slug": "autocomplete-poetry",
    "title": "Autocomplete Poetry",
    "category": "Knowledge and Technology",
    "time": "20-30 min",
    "difficulty": "Medium",
    "summary": "Students explore the difference between prediction, creativity and understanding.",
    "bigIdea": "Prediction can imitate creativity.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students explore the difference between prediction, creativity and understanding.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and technology, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Phones/tablets with predictive text enabled, or a teacher-prepared predictive text chain."
    ],
    "procedure": [
      "Students write the first line of a poem or reflection.",
      "They use autocomplete to continue it for six to ten lines.",
      "Compare the result with a human-written continuation.",
      "Students annotate where the machine is patterned, surprising, empty or meaningful."
    ],
    "debrief": [
      "Knowledge question: Does pattern prediction count as understanding?",
      "Can creativity exist without intention?",
      "How does technology change authorship?"
    ],
    "knowledgeQuestions": [
      "Does pattern prediction count as understanding?",
      "Can creativity exist without intention?",
      "How does technology change authorship?"
    ],
    "exhibitionObject": "A human-machine poem with annotations. Optional theme: Knowledge and Language",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "algorithmic-feed-simulation",
      "search-engine-ranking-game",
      "ai-hallucination-courtroom"
    ]
  },
  {
    "id": "loaded-headline-laboratory",
    "slug": "loaded-headline-laboratory",
    "title": "Loaded Headline Laboratory",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students see how word choice frames knowledge claims.",
    "bigIdea": "Wording frames interpretation.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students see how word choice frames knowledge claims.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and language, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A neutral event description. Example: \"A group of students left class to protest a school rule.\""
    ],
    "procedure": [
      "Groups rewrite the event as a school announcement, tabloid headline, human rights report, police report, student activist post and parent message.",
      "The class identifies loaded words, omitted details and implied blame.",
      "Students reconstruct the most neutral version possible.",
      "Discuss whether complete neutrality is possible."
    ],
    "debrief": [
      "Knowledge question: Can language be neutral?",
      "How does word choice affect what we think we know?",
      "Is objective description possible?"
    ],
    "knowledgeQuestions": [
      "Can language be neutral?",
      "How does word choice affect what we think we know?",
      "Is objective description possible?"
    ],
    "exhibitionObject": "A set of contrasting headlines about the same event.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "metaphor-changes-policy",
      "translation-loss-game",
      "category-boundary-sorting"
    ]
  },
  {
    "id": "metaphor-changes-policy",
    "slug": "metaphor-changes-policy",
    "title": "Metaphor Changes Policy",
    "category": "Knowledge and Language",
    "time": "25-30 min",
    "difficulty": "Medium",
    "summary": "Students test whether metaphors guide reasoning.",
    "bigIdea": "Metaphors guide reasoning.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students test whether metaphors guide reasoning.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and language, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Two versions of the same problem. Version A: \"Crime is a virus spreading through the city.\" Version B: \"Crime is a beast attacking the city.\""
    ],
    "procedure": [
      "Give half the class Version A and half Version B.",
      "Groups propose three policies.",
      "Compare whether solutions are more preventive, diagnostic, punitive or forceful.",
      "Reveal that only the metaphor changed."
    ],
    "debrief": [
      "Knowledge question: Do metaphors reveal truth or create interpretations?",
      "Are some metaphors more ethical than others?",
      "How do metaphors shape public policy and science communication?"
    ],
    "knowledgeQuestions": [
      "Do metaphors reveal truth or create interpretations?",
      "Are some metaphors more ethical than others?",
      "How do metaphors shape public policy and science communication?"
    ],
    "exhibitionObject": "Two policy lists created from different metaphors.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "loaded-headline-laboratory",
      "translation-loss-game",
      "category-boundary-sorting"
    ]
  },
  {
    "id": "translation-loss-game",
    "slug": "translation-loss-game",
    "title": "Translation Loss Game",
    "category": "Knowledge and Language",
    "time": "25-30 min",
    "difficulty": "Medium",
    "summary": "Students explore how language carries cultural concepts.",
    "bigIdea": "Language carries cultural categories.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students explore how language carries cultural concepts.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and language, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Word cards: schadenfreude, awkward, saving face, home, fair, respect, freedom, wabi-sabi, gezellig."
    ],
    "procedure": [
      "Groups attempt literal translations or definitions.",
      "They then write a cultural explanation or example situation.",
      "Groups identify what cannot be captured in one word.",
      "Discuss whether translation transfers knowledge or recreates it."
    ],
    "debrief": [
      "Knowledge question: Can all knowledge be translated?",
      "Does language limit thought or simply influence it?",
      "What is lost when knowledge moves between languages?"
    ],
    "knowledgeQuestions": [
      "Can all knowledge be translated?",
      "Does language limit thought or simply influence it?",
      "What is lost when knowledge moves between languages?"
    ],
    "exhibitionObject": "A word card with failed literal translations and a richer explanation.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "loaded-headline-laboratory",
      "metaphor-changes-policy",
      "category-boundary-sorting"
    ]
  },
  {
    "id": "category-boundary-sorting",
    "slug": "category-boundary-sorting",
    "title": "Category Boundary Sorting",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students investigate how categories depend on criteria and purposes.",
    "bigIdea": "Categories are made for purposes.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students investigate how categories depend on criteria and purposes.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and language, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Prompt cards: Is a hot dog a sandwich? Is chess a sport? Is photography art? Is a tomato a fruit? Is zero a number? Is AI-generated writing authored?"
    ],
    "procedure": [
      "Groups sort prompts into yes, no and depends.",
      "For each \"depends\", they must state the criterion.",
      "Groups trade criteria and test them on borderline cases.",
      "Discuss why different communities define the same term differently."
    ],
    "debrief": [
      "Knowledge question: Do categories describe reality or organise it?",
      "Who has authority to define terms?",
      "When does disagreement about words become disagreement about reality?"
    ],
    "knowledgeQuestions": [
      "Do categories describe reality or organise it?",
      "Who has authority to define terms?",
      "When does disagreement about words become disagreement about reality?"
    ],
    "exhibitionObject": "A category card with several competing criteria.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "loaded-headline-laboratory",
      "metaphor-changes-policy",
      "translation-loss-game"
    ]
  },
  {
    "id": "euphemism-and-moral-distance",
    "slug": "euphemism-and-moral-distance",
    "title": "Euphemism and Moral Distance",
    "category": "Knowledge and Language",
    "time": "20-25 min",
    "difficulty": "Easy",
    "summary": "Students examine how language can hide agency or responsibility.",
    "bigIdea": "Language can hide responsibility.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students examine how language can hide agency or responsibility.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about knowledge and language, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Phrase pairs: civilian deaths/collateral damage, fired/let go, torture/enhanced interrogation, cheating/academic misconduct, propaganda/public communication."
    ],
    "procedure": [
      "Students rank each phrase pair from most direct to most distancing.",
      "They identify who benefits from the softer phrase.",
      "Groups rewrite each phrase in clearer language.",
      "Discuss when tact becomes distortion."
    ],
    "debrief": [
      "Knowledge question: Can language make unethical actions seem acceptable?",
      "Is precise language an ethical responsibility?",
      "How do institutions control knowledge through vocabulary?"
    ],
    "knowledgeQuestions": [
      "Can language make unethical actions seem acceptable?",
      "Is precise language an ethical responsibility?",
      "How do institutions control knowledge through vocabulary?"
    ],
    "exhibitionObject": "A before-and-after euphemism rewrite. Area of Knowledge: Mathematics",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "loaded-headline-laboratory",
      "metaphor-changes-policy",
      "translation-loss-game"
    ]
  },
  {
    "id": "proof-versus-pattern",
    "slug": "proof-versus-pattern",
    "title": "Proof versus Pattern",
    "category": "Mathematics",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students distinguish empirical pattern spotting from mathematical proof.",
    "bigIdea": "Examples are not proof.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students distinguish empirical pattern spotting from mathematical proof.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about mathematics, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Calculators or spreadsheet. Prompt: n2 + n + 41."
    ],
    "procedure": [
      "Students calculate n2 + n + 41 for n = 0, 1, 2, . . . and record whether each output is prime.",
      "They predict whether the expression always gives primes.",
      "Reveal a counterexample, such as n = 40.",
      "Students write the difference between many examples and proof."
    ],
    "debrief": [
      "Knowledge question: Why is proof valued more than observation in mathematics?",
      "Can something be obvious but still require proof?",
      "Is mathematics discovered or invented?"
    ],
    "knowledgeQuestions": [
      "Why is proof valued more than observation in mathematics?",
      "Can something be obvious but still require proof?",
      "Is mathematics discovered or invented?"
    ],
    "exhibitionObject": "A table of values that supports a false conjecture.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "monty-hall-shock",
      "axiom-switch-universe",
      "calculator-trust-test"
    ]
  },
  {
    "id": "monty-hall-shock",
    "slug": "monty-hall-shock",
    "title": "Monty Hall Shock",
    "category": "Mathematics",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students feel the conflict between intuition and formal probability.",
    "bigIdea": "Formal probability can beat intuition.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students feel the conflict between intuition and formal probability.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about mathematics, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Three cups or doors, one hidden object, results table."
    ],
    "procedure": [
      "Play the Monty Hall game physically. A student chooses a door.",
      "The host opens an empty door.",
      "The student chooses whether to stay or switch.",
      "Repeat many times and compare win rates for stay and switch."
    ],
    "debrief": [
      "Knowledge question: Why does mathematical reasoning often feel wrong at first?",
      "Should we trust intuition or formal proof?",
      "What makes a mathematical explanation convincing?"
    ],
    "knowledgeQuestions": [
      "Why does mathematical reasoning often feel wrong at first?",
      "Should we trust intuition or formal proof?",
      "What makes a mathematical explanation convincing?"
    ],
    "exhibitionObject": "A class trial table comparing stay and switch.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "proof-versus-pattern",
      "axiom-switch-universe",
      "calculator-trust-test"
    ]
  },
  {
    "id": "axiom-switch-universe",
    "slug": "axiom-switch-universe",
    "title": "Axiom Switch Universe",
    "category": "Mathematics",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students explore how changing assumptions changes mathematical truth.",
    "bigIdea": "Axioms create mathematical worlds.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students explore how changing assumptions changes mathematical truth.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about mathematics, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Three rule cards describing different parallel postulates."
    ],
    "procedure": [
      "Give groups different geometry worlds: exactly one parallel line, no parallel lines, or many parallel lines through a point not on a line.",
      "Students draw what triangles, lines and maps might be like in their world.",
      "Each group states one theorem that may change.",
      "Discuss usefulness, consistency and truth."
    ],
    "debrief": [
      "Knowledge question: Are mathematical truths absolute?",
      "If different axiom systems are possible, what makes one useful?",
      "Is consistency enough for mathematical knowledge?"
    ],
    "knowledgeQuestions": [
      "Are mathematical truths absolute?",
      "If different axiom systems are possible, what makes one useful?",
      "Is consistency enough for mathematical knowledge?"
    ],
    "exhibitionObject": "A student diagram of an alternative geometry world.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "proof-versus-pattern",
      "monty-hall-shock",
      "calculator-trust-test"
    ]
  },
  {
    "id": "calculator-trust-test",
    "slug": "calculator-trust-test",
    "title": "Calculator Trust Test",
    "category": "Mathematics",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students investigate how mathematical technology can both reveal and mislead.",
    "bigIdea": "Tools need interpretation.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students investigate how mathematical technology can both reveal and mislead.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about mathematics, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Graphing calculator, spreadsheet or computer algebra system."
    ],
    "procedure": [
      "Give examples where technology can mislead: restricted graph window, rounded decimals, regression on inappropriate data, or a graph that hides an asymptote.",
      "Students explain what the tool displays and what it does not display.",
      "They write a warning label for the tool.",
      "Discuss responsibility for interpretation."
    ],
    "debrief": [
      "Knowledge question: Does technology make mathematical knowledge more reliable?",
      "When can mathematical tools mislead us?",
      "Who is responsible for interpreting a result: tool or knower?"
    ],
    "knowledgeQuestions": [
      "Does technology make mathematical knowledge more reliable?",
      "When can mathematical tools mislead us?",
      "Who is responsible for interpreting a result: tool or knower?"
    ],
    "exhibitionObject": "A graphing calculator screenshot with an explanatory warning. Area of Knowledge: Natural Sciences",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "proof-versus-pattern",
      "monty-hall-shock",
      "axiom-switch-universe"
    ]
  },
  {
    "id": "observation-is-theory-laden",
    "slug": "observation-is-theory-laden",
    "title": "Observation is Theory-Laden",
    "category": "Natural Sciences",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students see that observation depends on concepts, training and context.",
    "bigIdea": "Seeing scientifically requires concepts.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students see that observation depends on concepts, training and context.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about natural sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "An ambiguous image or strange graph."
    ],
    "procedure": [
      "Show an image without context and ask students what they observe.",
      "Now label it as a microscope image, satellite image, medical scan, particle trace or climate graph.",
      "Ask what new things they notice.",
      "Discuss whether the image changed, or the knower changed."
    ],
    "debrief": [
      "Knowledge question: Can observation be theory-free?",
      "Does training help scientists see more, or see differently?",
      "What role do models play in scientific knowledge?"
    ],
    "knowledgeQuestions": [
      "Can observation be theory-free?",
      "Does training help scientists see more, or see differently?",
      "What role do models play in scientific knowledge?"
    ],
    "exhibitionObject": "The same image with different scientific captions.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "p-hacking-with-random-data",
      "placebo-trial-design",
      "model-failure-challenge"
    ]
  },
  {
    "id": "p-hacking-with-random-data",
    "slug": "p-hacking-with-random-data",
    "title": "P-hacking with Random Data",
    "category": "Natural Sciences",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students experience how false patterns can appear when many tests are tried.",
    "bigIdea": "Methods can create false confidence.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students experience how false patterns can appear when many tests are tried.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about natural sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Random class-style data: shoe size, screen time, favourite colour, sleep hours, star sign, score, pet ownership."
    ],
    "procedure": [
      "Give groups a random data table.",
      "Let them test as many relationships as possible.",
      "Reward groups for finding an apparently interesting pattern.",
      "Reveal that, with enough searches, chance findings become likely."
    ],
    "debrief": [
      "Knowledge question: Can correct methods lead to false knowledge?",
      "Why are preregistration, replication and transparency important?",
      "How can a result be statistically impressive but epistemically weak?"
    ],
    "knowledgeQuestions": [
      "Can correct methods lead to false knowledge?",
      "Why are preregistration, replication and transparency important?",
      "How can a result be statistically impressive but epistemically weak?"
    ],
    "exhibitionObject": "A random scatterplot with an apparent pattern.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "observation-is-theory-laden",
      "placebo-trial-design",
      "model-failure-challenge"
    ]
  },
  {
    "id": "placebo-trial-design",
    "slug": "placebo-trial-design",
    "title": "Placebo Trial Design",
    "category": "Natural Sciences",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students design a method that protects knowledge from expectation and bias.",
    "bigIdea": "Controls protect knowledge from bias.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students design a method that protects knowledge from expectation and bias.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about natural sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Fake product brief: \"FocusWater improves exam performance.\""
    ],
    "procedure": [
      "Groups design a fair test of the product.",
      "They must include a control group, placebo, blinding, outcome measure, sample size and ethics note.",
      "Groups exchange designs and find weaknesses.",
      "The class agrees minimum standards for a trustworthy test."
    ],
    "debrief": [
      "Knowledge question: Why is personal experience not enough in science?",
      "How do controls improve knowledge?",
      "Can scientific methods remove all bias?"
    ],
    "knowledgeQuestions": [
      "Why is personal experience not enough in science?",
      "How do controls improve knowledge?",
      "Can scientific methods remove all bias?"
    ],
    "exhibitionObject": "A trial design diagram for FocusWater.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "observation-is-theory-laden",
      "p-hacking-with-random-data",
      "model-failure-challenge"
    ]
  },
  {
    "id": "model-failure-challenge",
    "slug": "model-failure-challenge",
    "title": "Model Failure Challenge",
    "category": "Natural Sciences",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students learn that models are useful simplifications rather than perfect copies of reality.",
    "bigIdea": "Models simplify reality productively.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students learn that models are useful simplifications rather than perfect copies of reality.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about natural sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Simple model statement. Example: \"More revision hours means higher test score.\""
    ],
    "procedure": [
      "Groups identify variables missing from the model: prior knowledge, sleep, stress, revision quality, teaching, test difficulty.",
      "They draw a revised model with extra variables.",
      "They decide whether the original model is useless, useful or dangerous.",
      "Discuss when a model should be rejected."
    ],
    "debrief": [
      "Knowledge question: Are models useful because they are false?",
      "How much simplification is acceptable?",
      "What is the difference between a model, a law and an explanation?"
    ],
    "knowledgeQuestions": [
      "Are models useful because they are false?",
      "How much simplification is acceptable?",
      "What is the difference between a model, a law and an explanation?"
    ],
    "exhibitionObject": "A revised causal model diagram. Area of Knowledge: Human Sciences",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "observation-is-theory-laden",
      "p-hacking-with-random-data",
      "placebo-trial-design"
    ]
  },
  {
    "id": "ultimatum-game",
    "slug": "ultimatum-game",
    "title": "Ultimatum Game",
    "category": "Human Sciences",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students test whether human decisions always match narrow economic rationality.",
    "bigIdea": "Humans do not always maximise narrow utility.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students test whether human decisions always match narrow economic rationality.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about human sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Tokens, slips of paper, or a digital form."
    ],
    "procedure": [
      "Pair students. Player A divides 10 tokens between A and B.",
      "Player B accepts or rejects. If rejected, both get nothing.",
      "Collect anonymous results.",
      "Discuss why people reject unfair offers."
    ],
    "debrief": [
      "Knowledge question: Can human behaviour be predicted scientifically?",
      "Are humans rational knowers?",
      "How do fairness, emotion and culture affect decision-making?"
    ],
    "knowledgeQuestions": [
      "Can human behaviour be predicted scientifically?",
      "Are humans rational knowers?",
      "How do fairness, emotion and culture affect decision-making?"
    ],
    "exhibitionObject": "A class distribution of accepted and rejected offers.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "survey-wording-experiment",
      "conformity-without-humiliation",
      "replication-debate"
    ]
  },
  {
    "id": "survey-wording-experiment",
    "slug": "survey-wording-experiment",
    "title": "Survey Wording Experiment",
    "category": "Human Sciences",
    "time": "25-30 min",
    "difficulty": "Medium",
    "summary": "Students see how the act of measurement can shape human-science data.",
    "bigIdea": "Measuring beliefs can alter the result.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students see how the act of measurement can shape human-science data.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about human sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Two versions of a survey question."
    ],
    "procedure": [
      "Half the class receives: \"Should students be allowed to use AI to support learning?\"",
      "The other half receives: \"Should students be allowed to use AI to complete schoolwork?\"",
      "Compare results.",
      "Students redesign the question to reduce bias."
    ],
    "debrief": [
      "Knowledge question: Can surveys measure beliefs objectively?",
      "How does wording shape data?",
      "Are human sciences less certain, or differently certain?"
    ],
    "knowledgeQuestions": [
      "Can surveys measure beliefs objectively?",
      "How does wording shape data?",
      "Are human sciences less certain, or differently certain?"
    ],
    "exhibitionObject": "Two survey forms with different results.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "ultimatum-game",
      "conformity-without-humiliation",
      "replication-debate"
    ]
  },
  {
    "id": "conformity-without-humiliation",
    "slug": "conformity-without-humiliation",
    "title": "Conformity without Humiliation",
    "category": "Human Sciences",
    "time": "20-30 min",
    "difficulty": "Medium",
    "summary": "Students examine how group information can influence individual judgement.",
    "bigIdea": "Consensus can distort judgement.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students examine how group information can influence individual judgement.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about human sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A dot-estimation slide or jar-estimation task."
    ],
    "procedure": [
      "Students first make a private estimate.",
      "Show a fake or real class average that is clearly high or low.",
      "Students make a second estimate.",
      "Compare how many shifted towards the group. Debrief immediately."
    ],
    "debrief": [
      "Knowledge question: Is consensus a reliable guide to truth?",
      "When does shared knowledge become groupthink?",
      "How can communities improve or distort individual knowledge?"
    ],
    "knowledgeQuestions": [
      "Is consensus a reliable guide to truth?",
      "When does shared knowledge become groupthink?",
      "How can communities improve or distort individual knowledge?"
    ],
    "exhibitionObject": "Before-and-after estimates showing social influence.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "ultimatum-game",
      "survey-wording-experiment",
      "replication-debate"
    ]
  },
  {
    "id": "replication-debate",
    "slug": "replication-debate",
    "title": "Replication Debate",
    "category": "Human Sciences",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students evaluate what it means for a human-science claim to be supported.",
    "bigIdea": "Human science knowledge is context-sensitive.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students evaluate what it means for a human-science claim to be supported.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about human sciences, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "One famous claim: power posing, ego depletion, stereotype threat or growth mindset."
    ],
    "procedure": [
      "Give students a short description of the claim.",
      "Groups design a replication study.",
      "They must state sample, procedure, outcome measure, possible confounds and what would count as a failure.",
      "Debate whether one failed replication should change belief."
    ],
    "debrief": [
      "Knowledge question: Does failed replication destroy knowledge?",
      "Why are humans difficult to study?",
      "What makes evidence strong in psychology or economics?"
    ],
    "knowledgeQuestions": [
      "Does failed replication destroy knowledge?",
      "Why are humans difficult to study?",
      "What makes evidence strong in psychology or economics?"
    ],
    "exhibitionObject": "A replication design sheet. Area of Knowledge: History",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "ultimatum-game",
      "survey-wording-experiment",
      "conformity-without-humiliation"
    ]
  },
  {
    "id": "broken-archive",
    "slug": "broken-archive",
    "title": "Broken Archive",
    "category": "History",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students reconstruct a past event from incomplete and biased sources.",
    "bigIdea": "The past survives as incomplete traces.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students reconstruct a past event from incomplete and biased sources.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about history, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Source pack: diary, report, photograph, newspaper headline, propaganda poster, oral testimony, damaged letter, map."
    ],
    "procedure": [
      "Give each group a different combination of sources.",
      "Groups reconstruct what happened.",
      "Groups compare narratives and identify what evidence they lacked.",
      "The class ranks which sources were most useful and most dangerous."
    ],
    "debrief": [
      "Knowledge question: Can we know the past if we cannot observe it directly?",
      "How do historians deal with missing evidence?",
      "Is history discovered, constructed or both?"
    ],
    "knowledgeQuestions": [
      "Can we know the past if we cannot observe it directly?",
      "How do historians deal with missing evidence?",
      "Is history discovered, constructed or both?"
    ],
    "exhibitionObject": "A damaged source pack with a group reconstruction.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "same-event-different-historian",
      "cause-web",
      "presentism-trial"
    ]
  },
  {
    "id": "same-event-different-historian",
    "slug": "same-event-different-historian",
    "title": "Same Event, Different Historian",
    "category": "History",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students compare how historical lenses shape explanation.",
    "bigIdea": "Interpretation depends on lens and selection.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students compare how historical lenses shape explanation.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about history, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A common event description. Lenses: economic, political, feminist, nationalist, environmental, technological, great-person."
    ],
    "procedure": [
      "Assign each group a different lens.",
      "Groups write a three-sentence explanation of the event.",
      "Groups present and underline what they selected as important.",
      "Students identify which facts were shared and which interpretations differed."
    ],
    "debrief": [
      "Knowledge question: Are some historical interpretations better than others?",
      "Does perspective make history biased or meaningful?",
      "Can there be one true history?"
    ],
    "knowledgeQuestions": [
      "Are some historical interpretations better than others?",
      "Does perspective make history biased or meaningful?",
      "Can there be one true history?"
    ],
    "exhibitionObject": "Parallel explanations of one event from different lenses.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "broken-archive",
      "cause-web",
      "presentism-trial"
    ]
  },
  {
    "id": "cause-web",
    "slug": "cause-web",
    "title": "Cause Web",
    "category": "History",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students investigate complex causation in historical explanation.",
    "bigIdea": "Causation is layered and contestable.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students investigate complex causation in historical explanation.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about history, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Large paper or digital whiteboard. Event prompt: outbreak of war, collapse of a company, spread of a disease, invention becoming popular."
    ],
    "procedure": [
      "Students create a web of causes.",
      "They label causes as long-term, short-term, structural, individual, accidental or ideological.",
      "They choose the three most important causes and justify their ranking.",
      "Groups compare rankings."
    ],
    "debrief": [
      "Knowledge question: How do historians decide which causes matter most?",
      "Are historical events inevitable?",
      "What is the role of chance in historical knowledge?"
    ],
    "knowledgeQuestions": [
      "How do historians decide which causes matter most?",
      "Are historical events inevitable?",
      "What is the role of chance in historical knowledge?"
    ],
    "exhibitionObject": "A cause web with ranked causes.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "broken-archive",
      "same-event-different-historian",
      "presentism-trial"
    ]
  },
  {
    "id": "presentism-trial",
    "slug": "presentism-trial",
    "title": "Presentism Trial",
    "category": "History",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students explore ethical judgement and contextual understanding in history.",
    "bigIdea": "Historical judgement involves ethical tension.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students explore ethical judgement and contextual understanding in history.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about history, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A fictionalised historical figure, law or practice; role cards for prosecution, defence, contextual historian and judge."
    ],
    "procedure": [
      "Put the historical case \"on trial\".",
      "Half the class uses present-day values. Half uses values and constraints of the period.",
      "The judge panel decides what each side understood and ignored.",
      "Debrief the difference between explanation, justification and excuse."
    ],
    "debrief": [
      "Knowledge question: Should we judge the past by present standards?",
      "Can understanding become excuse-making?",
      "What responsibilities do historians have when interpreting morally troubling evidence?"
    ],
    "knowledgeQuestions": [
      "Should we judge the past by present standards?",
      "Can understanding become excuse-making?",
      "What responsibilities do historians have when interpreting morally troubling evidence?"
    ],
    "exhibitionObject": "A trial brief with presentist and contextual arguments. Area of Knowledge: The Arts",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "broken-archive",
      "same-event-different-historian",
      "cause-web"
    ]
  },
  {
    "id": "title-changes-meaning",
    "slug": "title-changes-meaning",
    "title": "Title Changes Meaning",
    "category": "The Arts",
    "time": "20-30 min",
    "difficulty": "Medium",
    "summary": "Students experience how context changes artistic interpretation.",
    "bigIdea": "Context changes interpretation.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students experience how context changes artistic interpretation.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about the arts, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "An abstract image, film still or short instrumental clip with three different titles."
    ],
    "procedure": [
      "Show the same image with Title A. Students write a one-sentence interpretation.",
      "Repeat with Title B and Title C.",
      "Students compare how their interpretation changed.",
      "Discuss whether the title revealed meaning or created it."
    ],
    "debrief": [
      "Knowledge question: Does the artist control the meaning of an artwork?",
      "Can interpretation be wrong?",
      "What kind of knowledge can art provide?"
    ],
    "knowledgeQuestions": [
      "Does the artist control the meaning of an artwork?",
      "Can interpretation be wrong?",
      "What kind of knowledge can art provide?"
    ],
    "exhibitionObject": "The same artwork displayed with three different titles.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "fake-or-masterpiece",
      "one-image-many-readings",
      "music-and-emotion-experiment"
    ]
  },
  {
    "id": "fake-or-masterpiece",
    "slug": "fake-or-masterpiece",
    "title": "Fake or Masterpiece?",
    "category": "The Arts",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students test how reputation, authorship and context shape aesthetic judgement.",
    "bigIdea": "Reputation affects judgement.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students test how reputation, authorship and context shape aesthetic judgement.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about the arts, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "A slide with artworks: famous pieces, student work, AI-generated images and lesser-known artists. Remove names and prices."
    ],
    "procedure": [
      "Students rank artworks by artistic value without context.",
      "Reveal partial context: artist, date, price, AI-generated or not, museum status.",
      "Students revise rankings and explain why.",
      "Discuss whether context is part of the artwork."
    ],
    "debrief": [
      "Knowledge question: Is artistic value in the object, the viewer or the culture?",
      "Does knowing the artist change the artwork?",
      "Can AI produce art, or only images?"
    ],
    "knowledgeQuestions": [
      "Is artistic value in the object, the viewer or the culture?",
      "Does knowing the artist change the artwork?",
      "Can AI produce art, or only images?"
    ],
    "exhibitionObject": "A ranking sheet before and after context is revealed.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "title-changes-meaning",
      "one-image-many-readings",
      "music-and-emotion-experiment"
    ]
  },
  {
    "id": "one-image-many-readings",
    "slug": "one-image-many-readings",
    "title": "One Image, Many Readings",
    "category": "The Arts",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students practise evidence-based interpretation from multiple lenses.",
    "bigIdea": "Evidence in interpretation is plural.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students practise evidence-based interpretation from multiple lenses.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about the arts, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "One painting, photograph, poem, film still or performance clip."
    ],
    "procedure": [
      "Assign lenses: emotional, political, historical, technical, feminist, religious, personal, formal composition.",
      "Groups produce a reading using at least three pieces of evidence from the work.",
      "Groups compare compatible and incompatible interpretations.",
      "Create class criteria for a strong interpretation."
    ],
    "debrief": [
      "Knowledge question: Is ambiguity a weakness or strength in the arts?",
      "What counts as evidence in artistic interpretation?",
      "Can art reveal truths that cannot be stated directly?"
    ],
    "knowledgeQuestions": [
      "Is ambiguity a weakness or strength in the arts?",
      "What counts as evidence in artistic interpretation?",
      "Can art reveal truths that cannot be stated directly?"
    ],
    "exhibitionObject": "An annotated image with multiple interpretive lenses.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "title-changes-meaning",
      "fake-or-masterpiece",
      "music-and-emotion-experiment"
    ]
  },
  {
    "id": "music-and-emotion-experiment",
    "slug": "music-and-emotion-experiment",
    "title": "Music and Emotion Experiment",
    "category": "The Arts",
    "time": "20-30 min",
    "difficulty": "Medium",
    "summary": "Students explore how artistic form shapes perception and emotion.",
    "bigIdea": "Form shapes perception and feeling.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students explore how artistic form shapes perception and emotion.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about the arts, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "One silent video clip and three soundtracks: sad, comic, tense."
    ],
    "procedure": [
      "Play the silent clip with Soundtrack A. Students write what they think is happening.",
      "Repeat with Soundtracks B and C.",
      "Students compare changes in perceived story, character and mood.",
      "Discuss whether music reveals or manipulates meaning."
    ],
    "debrief": [
      "Knowledge question: Can emotion be a source of knowledge?",
      "Does art manipulate or reveal?",
      "How does form affect meaning?"
    ],
    "knowledgeQuestions": [
      "Can emotion be a source of knowledge?",
      "Does art manipulate or reveal?",
      "How does form affect meaning?"
    ],
    "exhibitionObject": "Three interpretations of one clip under different soundtracks. Cross-AOK comparison activities",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "title-changes-meaning",
      "fake-or-masterpiece",
      "one-image-many-readings"
    ]
  },
  {
    "id": "what-counts-as-evidence",
    "slug": "what-counts-as-evidence",
    "title": "What Counts as Evidence?",
    "category": "Cross-AOK",
    "time": "35-45 min",
    "difficulty": "Extended",
    "summary": "Students compare standards of evidence across AOKs.",
    "bigIdea": "AOKs use different standards of evidence.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students compare standards of evidence across AOKs.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about cross-aok, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "One shared claim. Example: \"Humans are naturally cooperative.\""
    ],
    "procedure": [
      "Assign each group an AOK: mathematics, natural sciences, human sciences, history or arts.",
      "Each group decides what evidence would support the claim in that AOK.",
      "Groups present their evidence standard.",
      "The class discusses whether the same claim means the same thing in every AOK."
    ],
    "debrief": [
      "Knowledge question: Does evidence mean the same thing in every AOK?",
      "Are some AOKs more reliable, or just differently reliable?",
      "Can different AOKs answer the same question validly but differently?"
    ],
    "knowledgeQuestions": [
      "Does evidence mean the same thing in every AOK?",
      "Are some AOKs more reliable, or just differently reliable?",
      "Can different AOKs answer the same question validly but differently?"
    ],
    "exhibitionObject": "An evidence comparison chart.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "same-object-different-aok",
      "reliability-ranking",
      "music-and-emotion-experiment"
    ]
  },
  {
    "id": "same-object-different-aok",
    "slug": "same-object-different-aok",
    "title": "Same Object, Different AOK",
    "category": "Cross-AOK",
    "time": "30-40 min",
    "difficulty": "Medium",
    "summary": "Students prepare for exhibition-style thinking by analysing one object through many knowledge lenses.",
    "bigIdea": "One object can carry many kinds of knowledge.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students prepare for exhibition-style thinking by analysing one object through many knowledge lenses.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about cross-aok, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "One object: smartphone, mask, coin, map, photograph, textbook, poem, calculator, family recipe or AI chatbot response."
    ],
    "procedure": [
      "Place the object in the centre of the room or slide.",
      "Groups rotate through AOK stations and add one insight at each station.",
      "After the rotation, groups identify which AOK produced the most surprising knowledge.",
      "Students formulate a TOK exhibition-style commentary."
    ],
    "debrief": [
      "Knowledge question: How does context change what an object helps us know?",
      "Can one object belong to many knowledge communities?",
      "What makes an object suitable for the TOK exhibition?"
    ],
    "knowledgeQuestions": [
      "How does context change what an object helps us know?",
      "Can one object belong to many knowledge communities?",
      "What makes an object suitable for the TOK exhibition?"
    ],
    "exhibitionObject": "The actual object with annotated AOK cards.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "what-counts-as-evidence",
      "reliability-ranking",
      "music-and-emotion-experiment"
    ]
  },
  {
    "id": "reliability-ranking",
    "slug": "reliability-ranking",
    "title": "Reliability Ranking",
    "category": "Cross-AOK",
    "time": "25-35 min",
    "difficulty": "Medium",
    "summary": "Students compare certainty, usefulness and interpretation across knowledge claims.",
    "bigIdea": "Certainty varies across kinds of knowledge.",
    "free": true,
    "premiumResources": [],
    "purpose": [
      "Students compare certainty, usefulness and interpretation across knowledge claims.",
      "Use this activity to help students connect a concrete classroom experience to TOK questions about cross-aok, evidence, interpretation, and responsible knowing."
    ],
    "materials": [
      "Claim cards from different AOKs."
    ],
    "procedure": [
      "Give cards such as: \"The angles in a Euclidean triangle sum to 180 degrees\", \"Smoking increases lung cancer risk\", \"This poem expresses grief\", \"Most people conform under group pressure\", \"This painting is beautiful\".",
      "Students rank claims from most to least certain.",
      "They then rank from most to least useful.",
      "Compare the two rankings."
    ],
    "debrief": [
      "Knowledge question: Is certainty the best measure of knowledge?",
      "Can uncertain knowledge still be valuable?",
      "Are mathematical truths more valuable because they are more certain?"
    ],
    "knowledgeQuestions": [
      "Is certainty the best measure of knowledge?",
      "Can uncertain knowledge still be valuable?",
      "Are mathematical truths more valuable because they are more certain?"
    ],
    "exhibitionObject": "Two rankings of the same claims: certainty and usefulness.",
    "teacherNotes": [
      "Keep the activity low-stakes and debrief quickly so students focus on knowledge rather than performance.",
      "Invite students to move from the classroom experience to a broader knowledge question before evaluating examples from real knowledge practices."
    ],
    "related": [
      "what-counts-as-evidence",
      "same-object-different-aok"
    ]
  }
];

const rawActivities = [...baseActivities, ...additionalActivities, ...moreActivities];
const activityEnhancements = {
  ...baseActivityEnhancements,
  ...additionalActivityEnhancements,
  ...moreActivityEnhancements
};

export const premiumResourceTemplates = [
  {
    kind: "worksheet",
    title: "Premium worksheet",
    filename: "worksheet.md",
    pageFilename: "worksheet.html",
    pdfFilename: "worksheet.pdf",
    status: "draft-ready",
    message: "Worksheet and PDF handout ready."
  },
  {
    kind: "slides",
    title: "Premium slides",
    filename: "slides.md",
    pageFilename: null,
    pptxFilename: "slides.pptx",
    status: "draft-ready",
    message: "Premium slides deck ready."
  },
  {
    kind: "teacher-notes",
    title: "Premium teacher notes",
    filename: "teacher-notes.md",
    pageFilename: "teacher-notes.html",
    pdfFilename: "teacher-notes.pdf",
    status: "draft-ready",
    message: "Teacher notes and PDF guide ready."
  },
  {
    kind: "run-kit",
    title: "Classroom run kit",
    filename: "run-kit.md",
    pageFilename: "run-kit.html",
    pdfFilename: "run-kit.pdf",
    status: "draft-ready",
    message: "Run kit with examples, prompts, and setup steps ready."
  }
];

export const activities = rawActivities.map(activity => {
  const enhancement = activityEnhancements[activity.id] ?? {};

  return {
    ...activity,
    ...enhancement,
    free: true,
    resourcePackPath: `resources/${activity.slug}/index.html`,
    resourcePackMarkdownPath: `resources/${activity.slug}/resource-pack.md`,
    cardDeckPath: `resources/${activity.slug}/cards.csv`,
    visualPromptPath: `resources/${activity.slug}/visual-prompt.svg`,
    premiumResources: premiumResourceTemplates.map(resource => ({
    ...resource,
    path: `premium/${activity.slug}/${resource.filename}`,
    pptxPath: resource.pptxFilename ? `premium/${activity.slug}/${resource.pptxFilename}` : null,
    pdfPath: resource.pdfFilename ? `premium/${activity.slug}/${resource.pdfFilename}` : null,
    pagePath: resource.pageFilename
      ? `premium/${activity.slug}/${resource.pageFilename}`
        : resource.pptxFilename
          ? `premium/${activity.slug}/${resource.pptxFilename}`
          : null
    }))
  };
});
