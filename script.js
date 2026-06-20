const categories = [
  {
    name: "Knowledge and the Knower",
    accent: "#2d7d78",
    description: "Self-awareness, perspective, memory, confidence, and personal knowledge."
  },
  {
    name: "Knowledge and Technology",
    accent: "#7563b7",
    description: "Algorithms, AI, attention, mediation, and digital ways of knowing."
  },
  {
    name: "Knowledge and Language",
    accent: "#c85d45",
    description: "Framing, metaphor, translation, labels, and the limits of expression."
  },
  {
    name: "Mathematics",
    accent: "#d89b38",
    description: "Proof, abstraction, models, certainty, and quantitative reasoning."
  },
  {
    name: "Natural Sciences",
    accent: "#3f8b57",
    description: "Observation, measurement, theory, replication, and experimental evidence."
  },
  {
    name: "Human Sciences",
    accent: "#596f93",
    description: "Behavior, bias, prediction, social data, and interpretation of people."
  },
  {
    name: "History",
    accent: "#8d6347",
    description: "Memory, archives, testimony, narrative, and evidence from the past."
  },
  {
    name: "The Arts",
    accent: "#b55377",
    description: "Perception, interpretation, audience response, and creative knowledge."
  },
  {
    name: "Cross-AOK",
    accent: "#207c92",
    description: "Activities that bridge several areas of knowledge in one inquiry."
  }
];

const activities = [
  {
    "id": "change-blindness-starter",
    "title": "Change Blindness Starter",
    "category": "Knowledge and the Knower",
    "time": "10-15 min",
    "summary": "Students experience that attention does not record every visible detail.",
    "bigIdea": "Attention selects reality before we report it.",
    "setup": [
      "Prepare a starter stimulus using: Two classroom photos where the clock time, board heading, and one desk object change.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Two classroom photos where the clock time, board heading, and one desk object change.",
      "A slide pair where a key word in a TOK claim changes from 'proves' to 'suggests'.",
      "A live scene where a book, chair, or water bottle is moved while students look away."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Change Blindness Starter: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/change-blindness/index.html",
    "cardDeckPath": "resources/change-blindness/cards.csv",
    "visualPromptPath": "resources/change-blindness/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Change Blindness Starter Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Change Blindness Starter Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Change Blindness Starter Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "If perception is selective, when should observation be trusted?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Change Blindness Starter Stimulus A",
          "body": "Student-facing stimulus 1: Two classroom photos where the clock time, board heading, and one desk object change. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Change Blindness Starter Stimulus B",
          "body": "Student-facing stimulus 2: A slide pair where a key word in a TOK claim changes from 'proves' to 'suggests'. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Change Blindness Starter Reveal / Twist",
          "body": "Student-facing stimulus 3: A live scene where a book, chair, or water bottle is moved while students look away. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Attention selects reality before we report it.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how attention selects reality before we report it.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "If perception is selective, when should observation be trusted?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/change-blindness/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/change-blindness/worksheet.pdf",
        "pagePath": "premium/change-blindness/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/change-blindness/slides.md",
        "pptxPath": "premium/change-blindness/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/change-blindness/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/change-blindness/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/change-blindness/teacher-notes.pdf",
        "pagePath": "premium/change-blindness/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/change-blindness/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/change-blindness/run-kit.pdf",
        "pagePath": "premium/change-blindness/run-kit.html"
      }
    ]
  },
  {
    "id": "confidence-calibration-test",
    "title": "Confidence Calibration Test",
    "category": "Knowledge and the Knower",
    "time": "20-25 min",
    "summary": "Students compare how confident they feel with how accurate they actually are.",
    "bigIdea": "Certainty and accuracy are not the same.",
    "setup": [
      "Prepare a starter stimulus using: Ten general knowledge questions with confidence bands from 50% to 100%.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Ten general knowledge questions with confidence bands from 50% to 100%.",
      "A mini quiz mixing easy, medium, and impossible questions so overconfidence becomes visible.",
      "A class calibration chart comparing confidence level with actual accuracy."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Confidence Calibration Test: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/confidence-calibration-test/index.html",
    "cardDeckPath": "resources/confidence-calibration-test/cards.csv",
    "visualPromptPath": "resources/confidence-calibration-test/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Answer each question, then mark your confidence: 50%, 60%, 70%, 80%, 90%, or 100%.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "Which planet is closest to the Sun?",
          "answer": "Mercury",
          "prompt": "Which planet is closest to the Sun? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 2,
          "question": "What is the capital city of Canada?",
          "answer": "Ottawa",
          "prompt": "What is the capital city of Canada? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 3,
          "question": "Which is heavier: a kilogram of feathers or a kilogram of steel?",
          "answer": "Neither — they weigh the same",
          "prompt": "Which is heavier: a kilogram of feathers or a kilogram of steel? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 4,
          "question": "In which year did the Berlin Wall fall?",
          "answer": "1989",
          "prompt": "In which year did the Berlin Wall fall? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 5,
          "question": "What is the chemical symbol for potassium?",
          "answer": "K",
          "prompt": "What is the chemical symbol for potassium? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 6,
          "question": "Which country has the longest coastline in the world?",
          "answer": "Canada",
          "prompt": "Which country has the longest coastline in the world? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 7,
          "question": "How many bones are in the adult human body?",
          "answer": "206",
          "prompt": "How many bones are in the adult human body? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 8,
          "question": "What is the only mammal capable of true sustained flight?",
          "answer": "Bat",
          "prompt": "What is the only mammal capable of true sustained flight? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 9,
          "question": "Which has more letters: the Greek alphabet or the modern English alphabet?",
          "answer": "English alphabet — 26 vs Greek 24",
          "prompt": "Which has more letters: the Greek alphabet or the modern English alphabet? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        },
        {
          "number": 10,
          "question": "Without looking it up, what is the 19th digit after the decimal point in pi?",
          "answer": "4",
          "prompt": "Without looking it up, what is the 19th digit after the decimal point in pi? Mark confidence: 50%, 60%, 70%, 80%, 90%, or 100%."
        }
      ],
      "stimulusCards": [
        {
          "title": "Student Prompt",
          "body": "Answer each question privately. After marking, calculate accuracy within each confidence band.",
          "meta": "Do not allow lookup; the point is calibration, not trivia mastery.",
          "teacherUse": "Project before the quiz begins."
        },
        {
          "title": "Question 1",
          "body": "Which planet is closest to the Sun?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: Mercury"
        },
        {
          "title": "Question 2",
          "body": "What is the capital city of Canada?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: Ottawa"
        },
        {
          "title": "Question 3",
          "body": "Which is heavier: a kilogram of feathers or a kilogram of steel?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: Neither — they weigh the same"
        },
        {
          "title": "Question 4",
          "body": "In which year did the Berlin Wall fall?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: 1989"
        },
        {
          "title": "Question 5",
          "body": "What is the chemical symbol for potassium?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: K"
        },
        {
          "title": "Question 6",
          "body": "Which country has the longest coastline in the world?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: Canada"
        },
        {
          "title": "Question 7",
          "body": "How many bones are in the adult human body?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: 206"
        },
        {
          "title": "Question 8",
          "body": "What is the only mammal capable of true sustained flight?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: Bat"
        },
        {
          "title": "Question 9",
          "body": "Which has more letters: the Greek alphabet or the modern English alphabet?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: English alphabet — 26 vs Greek 24"
        },
        {
          "title": "Question 10",
          "body": "Without looking it up, what is the 19th digit after the decimal point in pi?",
          "meta": "Confidence: 50% / 60% / 70% / 80% / 90% / 100%",
          "teacherUse": "Answer key: 4"
        }
      ],
      "studentTask": "Complete the quiz, mark confidence for every answer, then compare confidence bands with actual accuracy.",
      "teacherReveal": "Where were we most confident but least accurate, and what does that reveal about certainty as a way of knowing?",
      "answerKey": [
        "Q1: Mercury",
        "Q2: Ottawa",
        "Q3: Neither — they weigh the same",
        "Q4: 1989",
        "Q5: K",
        "Q6: Canada",
        "Q7: 206",
        "Q8: Bat",
        "Q9: English alphabet — 26 vs Greek 24",
        "Q10: 4"
      ],
      "debriefQuestion": "Where were we most confident but least accurate, and what does that reveal about certainty as a way of knowing?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/confidence-calibration-test/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/confidence-calibration-test/worksheet.pdf",
        "pagePath": "premium/confidence-calibration-test/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/confidence-calibration-test/slides.md",
        "pptxPath": "premium/confidence-calibration-test/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/confidence-calibration-test/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/confidence-calibration-test/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/confidence-calibration-test/teacher-notes.pdf",
        "pagePath": "premium/confidence-calibration-test/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/confidence-calibration-test/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/confidence-calibration-test/run-kit.pdf",
        "pagePath": "premium/confidence-calibration-test/run-kit.html"
      }
    ]
  },
  {
    "id": "personal-knowledge-map",
    "title": "Personal Knowledge Map",
    "category": "Knowledge and the Knower",
    "time": "20-30 min",
    "summary": "Students identify the communities and channels that shape what they think they know.",
    "bigIdea": "Knowers inherit knowledge from communities.",
    "setup": [
      "Prepare a starter stimulus using: A knowledge map with branches for family, school, language, algorithms, memory, and experts.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A knowledge map with branches for family, school, language, algorithms, memory, and experts.",
      "A trust colour-code showing automatic trust, earned trust, and contested trust.",
      "A tension line between two sources that disagree about the same claim."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Personal Knowledge Map: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/personal-knowledge-map/index.html",
    "cardDeckPath": "resources/personal-knowledge-map/cards.csv",
    "visualPromptPath": "resources/personal-knowledge-map/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Personal Knowledge Map Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Personal Knowledge Map Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Personal Knowledge Map Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "To what extent is personal knowledge shaped by knowledge communities?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Personal Knowledge Map Stimulus A",
          "body": "Student-facing stimulus 1: A knowledge map with branches for family, school, language, algorithms, memory, and experts. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Personal Knowledge Map Stimulus B",
          "body": "Student-facing stimulus 2: A trust colour-code showing automatic trust, earned trust, and contested trust. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Personal Knowledge Map Reveal / Twist",
          "body": "Student-facing stimulus 3: A tension line between two sources that disagree about the same claim. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Knowers inherit knowledge from communities.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how knowers inherit knowledge from communities.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "To what extent is personal knowledge shaped by knowledge communities?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/personal-knowledge-map/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/personal-knowledge-map/worksheet.pdf",
        "pagePath": "premium/personal-knowledge-map/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/personal-knowledge-map/slides.md",
        "pptxPath": "premium/personal-knowledge-map/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/personal-knowledge-map/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/personal-knowledge-map/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/personal-knowledge-map/teacher-notes.pdf",
        "pagePath": "premium/personal-knowledge-map/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/personal-knowledge-map/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/personal-knowledge-map/run-kit.pdf",
        "pagePath": "premium/personal-knowledge-map/run-kit.html"
      }
    ]
  },
  {
    "id": "blind-spot-autobiography",
    "title": "Blind Spot Autobiography",
    "category": "Knowledge and the Knower",
    "time": "20 min",
    "summary": "Students reflect on the limits of their own knowing without forced disclosure.",
    "bigIdea": "Self-knowledge includes awareness of limits.",
    "setup": [
      "Prepare a starter stimulus using: A private reflection on one belief students changed without sharing sensitive content.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A private reflection on one belief students changed without sharing sensitive content.",
      "A 'known unknowns' box for topics students realise they rarely question.",
      "A perspective inventory naming communities that make some assumptions feel obvious."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Blind Spot Autobiography: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/blind-spot-autobiography/index.html",
    "cardDeckPath": "resources/blind-spot-autobiography/cards.csv",
    "visualPromptPath": "resources/blind-spot-autobiography/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Blind Spot Autobiography Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Blind Spot Autobiography Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Blind Spot Autobiography Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can knowing your bias make you less biased?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Blind Spot Autobiography Stimulus A",
          "body": "Student-facing stimulus 1: A private reflection on one belief students changed without sharing sensitive content. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Blind Spot Autobiography Stimulus B",
          "body": "Student-facing stimulus 2: A 'known unknowns' box for topics students realise they rarely question. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Blind Spot Autobiography Reveal / Twist",
          "body": "Student-facing stimulus 3: A perspective inventory naming communities that make some assumptions feel obvious. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Self-knowledge includes awareness of limits.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how self-knowledge includes awareness of limits.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can knowing your bias make you less biased?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/blind-spot-autobiography/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/blind-spot-autobiography/worksheet.pdf",
        "pagePath": "premium/blind-spot-autobiography/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/blind-spot-autobiography/slides.md",
        "pptxPath": "premium/blind-spot-autobiography/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/blind-spot-autobiography/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/blind-spot-autobiography/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/blind-spot-autobiography/teacher-notes.pdf",
        "pagePath": "premium/blind-spot-autobiography/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/blind-spot-autobiography/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/blind-spot-autobiography/run-kit.pdf",
        "pagePath": "premium/blind-spot-autobiography/run-kit.html"
      }
    ]
  },
  {
    "id": "eyewitness-trap",
    "title": "Eyewitness Trap",
    "category": "Knowledge and the Knower",
    "time": "15-20 min",
    "summary": "Students see that memory is often reconstruction rather than playback.",
    "bigIdea": "Memory is reconstructive, not photographic.",
    "setup": [
      "Prepare a starter stimulus using: A busy classroom image followed by questions about colours, positions, and text.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A busy classroom image followed by questions about colours, positions, and text.",
      "A short silent hallway scene with one misleading follow-up question.",
      "A confidence-versus-accuracy table for memory claims."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Eyewitness Trap: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/eyewitness-trap/index.html",
    "cardDeckPath": "resources/eyewitness-trap/cards.csv",
    "visualPromptPath": "resources/eyewitness-trap/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Eyewitness Trap Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Eyewitness Trap Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Eyewitness Trap Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When should memory be trusted as evidence?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Eyewitness Trap Stimulus A",
          "body": "Student-facing stimulus 1: A busy classroom image followed by questions about colours, positions, and text. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Eyewitness Trap Stimulus B",
          "body": "Student-facing stimulus 2: A short silent hallway scene with one misleading follow-up question. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Eyewitness Trap Reveal / Twist",
          "body": "Student-facing stimulus 3: A confidence-versus-accuracy table for memory claims. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Memory is reconstructive, not photographic.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how memory is reconstructive, not photographic.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When should memory be trusted as evidence?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/eyewitness-trap/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/eyewitness-trap/worksheet.pdf",
        "pagePath": "premium/eyewitness-trap/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/eyewitness-trap/slides.md",
        "pptxPath": "premium/eyewitness-trap/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/eyewitness-trap/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/eyewitness-trap/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/eyewitness-trap/teacher-notes.pdf",
        "pagePath": "premium/eyewitness-trap/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/eyewitness-trap/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/eyewitness-trap/run-kit.pdf",
        "pagePath": "premium/eyewitness-trap/run-kit.html"
      }
    ]
  },
  {
    "id": "false-memory-word-list",
    "title": "False Memory Word List",
    "category": "Knowledge and the Knower",
    "time": "15-20 min",
    "summary": "Students experience how meaning and expectation can create a memory of something that was not presented.",
    "bigIdea": "Coherence can produce confident false memory.",
    "setup": [
      "Prepare a starter stimulus using: A word list around sleep that omits the word 'sleep'.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A word list around sleep that omits the word 'sleep'.",
      "A second list around sweet foods that omits 'candy' or 'sugar'.",
      "A recall sheet separating remembered words from inferred words."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to False Memory Word List: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/false-memory-word-list/index.html",
    "cardDeckPath": "resources/false-memory-word-list/cards.csv",
    "visualPromptPath": "resources/false-memory-word-list/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect False Memory Word List Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting False Memory Word List Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from False Memory Word List Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does a coherent story make a belief feel more true?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "False Memory Word List Stimulus A",
          "body": "Student-facing stimulus 1: A word list around sleep that omits the word 'sleep'. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "False Memory Word List Stimulus B",
          "body": "Student-facing stimulus 2: A second list around sweet foods that omits 'candy' or 'sugar'. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "False Memory Word List Reveal / Twist",
          "body": "Student-facing stimulus 3: A recall sheet separating remembered words from inferred words. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Coherence can produce confident false memory.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how coherence can produce confident false memory.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does a coherent story make a belief feel more true?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/false-memory-word-list/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/false-memory-word-list/worksheet.pdf",
        "pagePath": "premium/false-memory-word-list/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/false-memory-word-list/slides.md",
        "pptxPath": "premium/false-memory-word-list/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/false-memory-word-list/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/false-memory-word-list/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/false-memory-word-list/teacher-notes.pdf",
        "pagePath": "premium/false-memory-word-list/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/false-memory-word-list/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/false-memory-word-list/run-kit.pdf",
        "pagePath": "premium/false-memory-word-list/run-kit.html"
      }
    ]
  },
  {
    "id": "perspective-glasses",
    "title": "Perspective Glasses",
    "category": "Knowledge and the Knower",
    "time": "25-30 min",
    "summary": "Students see that the same event can be known differently by different knowers.",
    "bigIdea": "Perspective can limit and enrich knowledge.",
    "setup": [
      "Prepare a starter stimulus using: Four role cards: scientist, artist, historian, and advertiser looking at one object.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Four role cards: scientist, artist, historian, and advertiser looking at one object.",
      "A classroom photo interpreted through safety, beauty, efficiency, and fairness lenses.",
      "A perspective switch where students must defend a reading they did not choose."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Perspective Glasses: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/perspective-glasses/index.html",
    "cardDeckPath": "resources/perspective-glasses/cards.csv",
    "visualPromptPath": "resources/perspective-glasses/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Perspective Glasses Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Perspective Glasses Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Perspective Glasses Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does perspective limit knowledge or enrich it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Perspective Glasses Stimulus A",
          "body": "Student-facing stimulus 1: Four role cards: scientist, artist, historian, and advertiser looking at one object. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Perspective Glasses Stimulus B",
          "body": "Student-facing stimulus 2: A classroom photo interpreted through safety, beauty, efficiency, and fairness lenses. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Perspective Glasses Reveal / Twist",
          "body": "Student-facing stimulus 3: A perspective switch where students must defend a reading they did not choose. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Perspective can limit and enrich knowledge.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how perspective can limit and enrich knowledge.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does perspective limit knowledge or enrich it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/perspective-glasses/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/perspective-glasses/worksheet.pdf",
        "pagePath": "premium/perspective-glasses/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/perspective-glasses/slides.md",
        "pptxPath": "premium/perspective-glasses/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/perspective-glasses/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/perspective-glasses/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/perspective-glasses/teacher-notes.pdf",
        "pagePath": "premium/perspective-glasses/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/perspective-glasses/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/perspective-glasses/run-kit.pdf",
        "pagePath": "premium/perspective-glasses/run-kit.html"
      }
    ]
  },
  {
    "id": "algorithmic-feed-simulation",
    "title": "Algorithmic Feed Simulation",
    "category": "Knowledge and Technology",
    "time": "30-40 min",
    "summary": "Students experience how personalisation filters knowledge.",
    "bigIdea": "A feed is a knowledge filter.",
    "setup": [
      "Prepare a starter stimulus using: Paper post cards ranked by engagement, recency, outrage, or similarity to past clicks.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Paper post cards ranked by engagement, recency, outrage, or similarity to past clicks.",
      "A feed that changes after each student 'likes' or skips a card.",
      "A comparison between a curiosity-maximising feed and a reliability-maximising feed."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Algorithmic Feed Simulation: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/algorithmic-feed-simulation/index.html",
    "cardDeckPath": "resources/algorithmic-feed-simulation/cards.csv",
    "visualPromptPath": "resources/algorithmic-feed-simulation/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Algorithmic Feed Simulation Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Algorithmic Feed Simulation Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Algorithmic Feed Simulation Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Do algorithms expand knowledge or narrow it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Algorithmic Feed Simulation Stimulus A",
          "body": "Student-facing stimulus 1: Paper post cards ranked by engagement, recency, outrage, or similarity to past clicks. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Algorithmic Feed Simulation Stimulus B",
          "body": "Student-facing stimulus 2: A feed that changes after each student 'likes' or skips a card. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Algorithmic Feed Simulation Reveal / Twist",
          "body": "Student-facing stimulus 3: A comparison between a curiosity-maximising feed and a reliability-maximising feed. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — A feed is a knowledge filter.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how a feed is a knowledge filter.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Do algorithms expand knowledge or narrow it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/algorithmic-feed-simulation/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/algorithmic-feed-simulation/worksheet.pdf",
        "pagePath": "premium/algorithmic-feed-simulation/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/algorithmic-feed-simulation/slides.md",
        "pptxPath": "premium/algorithmic-feed-simulation/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/algorithmic-feed-simulation/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/algorithmic-feed-simulation/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/algorithmic-feed-simulation/teacher-notes.pdf",
        "pagePath": "premium/algorithmic-feed-simulation/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/algorithmic-feed-simulation/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/algorithmic-feed-simulation/run-kit.pdf",
        "pagePath": "premium/algorithmic-feed-simulation/run-kit.html"
      }
    ]
  },
  {
    "id": "search-engine-ranking-game",
    "title": "Search Engine Ranking Game",
    "category": "Knowledge and Technology",
    "time": "25-30 min",
    "summary": "Students investigate how ranking affects what becomes visible as knowledge.",
    "bigIdea": "Visibility is not the same as reliability.",
    "setup": [
      "Prepare a starter stimulus using: Mock search results ranked by popularity, expertise, freshness, sponsorship, or relevance.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Mock search results ranked by popularity, expertise, freshness, sponsorship, or relevance.",
      "A query about a health claim with credible, vague, commercial, and opinion sources.",
      "Two ranking rules that produce different 'top answers' for the same searcher."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Search Engine Ranking Game: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/search-engine-ranking-game/index.html",
    "cardDeckPath": "resources/search-engine-ranking-game/cards.csv",
    "visualPromptPath": "resources/search-engine-ranking-game/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Rank the six search results from most reliable to least reliable. Then identify which ranking signal influenced you most: expertise, popularity, freshness, sponsorship, relevance, or emotional appeal.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "Which result would you click first, and why?",
          "answer": "Look for whether students choose visibility, credibility, relevance, or emotion.",
          "prompt": "Choose one result before discussing."
        },
        {
          "number": 2,
          "question": "Which result is most reliable for the query?",
          "answer": "Likely result 3 or 4; result 6 is credible but indirect.",
          "prompt": "Rank reliability, not attractiveness."
        },
        {
          "number": 3,
          "question": "Which result might a popularity-based ranking put first?",
          "answer": "Result 5: TikTok Clip @CleanBodyGuru.",
          "prompt": "Use the views and emotional hook."
        },
        {
          "number": 4,
          "question": "Which result might a sponsorship-based ranking put first?",
          "answer": "Result 1: PureGreen Cleanse Co. advertisement.",
          "prompt": "Look for the ad label."
        },
        {
          "number": 5,
          "question": "Which result best shows expertise?",
          "answer": "Result 3: National Liver Foundation patient guide.",
          "prompt": "Look for reviewed medical guidance."
        },
        {
          "number": 6,
          "question": "What does this show about visibility and reliability?",
          "answer": "A ranking system can make a weak result visible before a strong one.",
          "prompt": "Turn the activity into a TOK claim."
        }
      ],
      "stimulusCards": [
        {
          "title": "Result 1: Ad · PureGreen Cleanse Co.",
          "body": "“7-Day Celery Juice Liver Detox — feel lighter fast.”",
          "meta": "Sells detox juice packs. No author listed. Ranking signal: Sponsorship.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        },
        {
          "title": "Result 2: WellnessNow Blog",
          "body": "“I drank celery juice every morning. Here’s what changed.”",
          "meta": "Personal story, dramatic before/after claims, no medical sources. Ranking signal: Emotional appeal.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        },
        {
          "title": "Result 3: National Liver Foundation — Patient Guide",
          "body": "“Your liver already removes toxins from your blood.”",
          "meta": "Explains liver function; reviewed by medical advisers. Ranking signal: Expertise.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        },
        {
          "title": "Result 4: HealthLine Daily",
          "body": "“Celery juice: benefits, myths, and what evidence says.”",
          "meta": "Notes hydration/nutrients but says detox claims are unsupported. Ranking signal: Relevance.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        },
        {
          "title": "Result 5: TikTok Clip: @CleanBodyGuru",
          "body": "“Doctors don’t want you to know this detox trick.”",
          "meta": "2.1M views, no evidence provided. Ranking signal: Popularity.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        },
        {
          "title": "Result 6: Research Summary: Journal of Nutrition Education",
          "body": "“Vegetable intake and health outcomes.”",
          "meta": "Peer-reviewed; does not test celery juice detox claims directly. Ranking signal: Academic credibility, indirect relevance.",
          "teacherUse": "Students rank by reliability, then rerank by a different search-engine signal."
        }
      ],
      "studentTask": "Query: Does drinking celery juice detox your liver? Rank all six results from most reliable to least reliable, then explain which signal shaped your ranking.",
      "teacherReveal": "A search engine could rank result 5 highest by popularity, result 1 highest by sponsorship, result 4 highest by relevance, and result 3 highest by expertise. Visibility is not the same as reliability.",
      "answerKey": [
        "Most medically reliable: Result 3, then Result 4.",
        "Most popular-looking: Result 5.",
        "Most commercially promoted: Result 1.",
        "Most academically credible but indirect: Result 6.",
        "Least reliable for knowledge: Result 5 or Result 2, depending on criteria."
      ],
      "debriefQuestion": "How do ranking systems influence what counts as visible, credible, or relevant?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/search-engine-ranking-game/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/search-engine-ranking-game/worksheet.pdf",
        "pagePath": "premium/search-engine-ranking-game/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/search-engine-ranking-game/slides.md",
        "pptxPath": "premium/search-engine-ranking-game/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/search-engine-ranking-game/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/search-engine-ranking-game/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/search-engine-ranking-game/teacher-notes.pdf",
        "pagePath": "premium/search-engine-ranking-game/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/search-engine-ranking-game/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/search-engine-ranking-game/run-kit.pdf",
        "pagePath": "premium/search-engine-ranking-game/run-kit.html"
      }
    ]
  },
  {
    "id": "ai-hallucination-courtroom",
    "title": "AI Hallucination Courtroom",
    "category": "Knowledge and Technology",
    "time": "35-45 min",
    "summary": "Students practise evaluating fluent but unreliable AI-generated claims.",
    "bigIdea": "Fluency can be mistaken for knowledge.",
    "setup": [
      "Prepare a starter stimulus using: An AI-generated paragraph with one fabricated citation and one plausible false detail.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "An AI-generated paragraph with one fabricated citation and one plausible false detail.",
      "Courtroom roles for prosecution, defence, expert witness, judge, and jury.",
      "An evidence table asking which claims are grounded, unsupported, or unverifiable."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to AI Hallucination Courtroom: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/ai-hallucination-courtroom/index.html",
    "cardDeckPath": "resources/ai-hallucination-courtroom/cards.csv",
    "visualPromptPath": "resources/ai-hallucination-courtroom/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Put the AI paragraph on trial. For each claim, decide: grounded, unsupported, false, or needs verification.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "Which claim in the paragraph sounds most authoritative?",
          "answer": "The fabricated 2021 study and percentage often sound authoritative.",
          "prompt": "Underline the most persuasive detail."
        },
        {
          "number": 2,
          "question": "Which claim can be accepted as broadly grounded?",
          "answer": "AI can produce fluent but incorrect answers; language models predict likely word sequences.",
          "prompt": "Mark grounded claims with G."
        },
        {
          "number": 3,
          "question": "Which claim is fabricated?",
          "answer": "The Marsh and Kline citation in the Journal of Digital Reasoning.",
          "prompt": "Mark fabricated claims with F."
        },
        {
          "number": 4,
          "question": "Which claim is plausible but false or overgeneralised?",
          "answer": "AI tools are connected to the live internet by default.",
          "prompt": "Mark false or overgeneralised claims with X."
        },
        {
          "number": 5,
          "question": "What made the paragraph feel trustworthy?",
          "answer": "Fluent tone, specific names, journal title, percentage, and confident explanation.",
          "prompt": "Name the trust cues."
        },
        {
          "number": 6,
          "question": "Can this paragraph count as knowledge? Why or why not?",
          "answer": "Partly; some claims are reasonable, but the fabricated/unsupported claims prevent treating it as reliable knowledge without verification.",
          "prompt": "Write the courtroom verdict."
        }
      ],
      "stimulusCards": [
        {
          "title": "AI Paragraph On Trial",
          "body": "Students should verify AI-generated answers because large language models do not truly understand facts; they predict likely sequences of words based on patterns in training data. This means they can produce answers that sound fluent and authoritative even when details are wrong. For example, a 2021 study by Elena Marsh and David Kline in the Journal of Digital Reasoning found that 68% of AI-generated school summaries contained at least one factual error. AI tools are also connected to the live internet by default, so they usually update themselves instantly when new information appears. Because of this, students should treat AI as a starting point for inquiry, not as a final authority.",
          "meta": "Prompt given to AI: Explain why students should verify AI-generated answers.",
          "teacherUse": "Give this to every group as the core case file."
        },
        {
          "title": "Courtroom Roles",
          "body": "Prosecution: argue the paragraph is unreliable. Defence: argue parts are useful if treated carefully. Expert witness: explain hallucinations. Judge: classify claims. Jury: vote mostly reliable, partly reliable, or misleading.",
          "meta": "Assign roles before students see the hidden issues.",
          "teacherUse": "Use for structured discussion."
        },
        {
          "title": "Hidden Issues",
          "body": "Fabricated citation: Elena Marsh and David Kline, Journal of Digital Reasoning, 2021. Plausible false detail: AI tools are connected to the live internet by default. Grounded claim: AI can produce fluent but incorrect answers. TOK point: fluency can create misplaced trust.",
          "meta": "Teacher reveal after verdicts.",
          "teacherUse": "Use after groups commit to a verdict."
        },
        {
          "title": "Claim Check: AI predicts likely word sequences",
          "body": "Verdict: Grounded",
          "meta": "This broadly describes how language models generate text.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        },
        {
          "title": "Claim Check: AI can sound authoritative while wrong",
          "body": "Verdict: Grounded",
          "meta": "This is a known risk of generative AI.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        },
        {
          "title": "Claim Check: Marsh and Kline study, 2021",
          "body": "Verdict: False/Fabricated",
          "meta": "The citation is invented for this activity.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        },
        {
          "title": "Claim Check: 68% of school summaries had errors",
          "body": "Verdict: Unsupported",
          "meta": "Depends entirely on the fabricated study.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        },
        {
          "title": "Claim Check: AI tools are live online by default",
          "body": "Verdict: False",
          "meta": "Some tools can browse, but many do not by default.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        },
        {
          "title": "Claim Check: AI should be a starting point, not final authority",
          "body": "Verdict: Reasonable conclusion",
          "meta": "Supported by the earlier risks.",
          "teacherUse": "Students fill this table before seeing the teacher key."
        }
      ],
      "studentTask": "For each claim, decide: grounded, unsupported, false, or needs verification. Then write: “Can this paragraph count as knowledge? Why or why not?”",
      "teacherReveal": "The paragraph is partly useful but not reliable as knowledge without verification because it combines grounded claims with fabricated and overgeneralised details.",
      "answerKey": [
        "AI predicts likely word sequences: Grounded — This broadly describes how language models generate text.",
        "AI can sound authoritative while wrong: Grounded — This is a known risk of generative AI.",
        "Marsh and Kline study, 2021: False/Fabricated — The citation is invented for this activity.",
        "68% of school summaries had errors: Unsupported — Depends entirely on the fabricated study.",
        "AI tools are live online by default: False — Some tools can browse, but many do not by default.",
        "AI should be a starting point, not final authority: Reasonable conclusion — Supported by the earlier risks."
      ],
      "debriefQuestion": "How can fluency imitate knowledge while lacking reliable grounding, source accountability, or warranted justification?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/ai-hallucination-courtroom/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/ai-hallucination-courtroom/worksheet.pdf",
        "pagePath": "premium/ai-hallucination-courtroom/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/ai-hallucination-courtroom/slides.md",
        "pptxPath": "premium/ai-hallucination-courtroom/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/ai-hallucination-courtroom/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/ai-hallucination-courtroom/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/ai-hallucination-courtroom/teacher-notes.pdf",
        "pagePath": "premium/ai-hallucination-courtroom/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/ai-hallucination-courtroom/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/ai-hallucination-courtroom/run-kit.pdf",
        "pagePath": "premium/ai-hallucination-courtroom/run-kit.html"
      }
    ]
  },
  {
    "id": "deepfake-detection-challenge",
    "title": "Deepfake Detection Challenge",
    "category": "Knowledge and Technology",
    "time": "25-35 min",
    "summary": "Students consider how synthetic media changes evidence standards.",
    "bigIdea": "Evidence standards change when media is synthetic.",
    "setup": [
      "Prepare a starter stimulus using: Three image descriptions: authentic-looking, edited-looking, and ambiguous.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Three image descriptions: authentic-looking, edited-looking, and ambiguous.",
      "A checklist for source, context, lighting, body geometry, and independent corroboration.",
      "A debrief comparing technical clues with social trust cues."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Deepfake Detection Challenge: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/deepfake-detection-challenge/index.html",
    "cardDeckPath": "resources/deepfake-detection-challenge/cards.csv",
    "visualPromptPath": "resources/deepfake-detection-challenge/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Deepfake Detection Challenge Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Deepfake Detection Challenge Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Deepfake Detection Challenge Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "What happens to knowledge when evidence can be easily fabricated?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Deepfake Detection Challenge Stimulus A",
          "body": "Student-facing stimulus 1: Three image descriptions: authentic-looking, edited-looking, and ambiguous. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Deepfake Detection Challenge Stimulus B",
          "body": "Student-facing stimulus 2: A checklist for source, context, lighting, body geometry, and independent corroboration. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Deepfake Detection Challenge Reveal / Twist",
          "body": "Student-facing stimulus 3: A debrief comparing technical clues with social trust cues. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Evidence standards change when media is synthetic.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how evidence standards change when media is synthetic.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "What happens to knowledge when evidence can be easily fabricated?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/deepfake-detection-challenge/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/deepfake-detection-challenge/worksheet.pdf",
        "pagePath": "premium/deepfake-detection-challenge/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/deepfake-detection-challenge/slides.md",
        "pptxPath": "premium/deepfake-detection-challenge/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/deepfake-detection-challenge/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/deepfake-detection-challenge/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/deepfake-detection-challenge/teacher-notes.pdf",
        "pagePath": "premium/deepfake-detection-challenge/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/deepfake-detection-challenge/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/deepfake-detection-challenge/run-kit.pdf",
        "pagePath": "premium/deepfake-detection-challenge/run-kit.html"
      }
    ]
  },
  {
    "id": "gps-versus-local-knowledge",
    "title": "GPS versus Local Knowledge",
    "category": "Knowledge and Technology",
    "time": "25 min",
    "summary": "Students compare precise digital knowledge with situated local knowledge.",
    "bigIdea": "Data can be precise and incomplete.",
    "setup": [
      "Prepare a starter stimulus using: A route-planning scenario where the map suggests a faster but impractical route.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A route-planning scenario where the map suggests a faster but impractical route.",
      "Local knowledge cards: school gate closed, roadworks, unsafe crossing, steep hill.",
      "A decision table balancing speed, safety, reliability, and lived experience."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to GPS versus Local Knowledge: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/gps-versus-local-knowledge/index.html",
    "cardDeckPath": "resources/gps-versus-local-knowledge/cards.csv",
    "visualPromptPath": "resources/gps-versus-local-knowledge/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect GPS versus Local Knowledge Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting GPS versus Local Knowledge Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from GPS versus Local Knowledge Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When is local knowledge better than technological knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "GPS versus Local Knowledge Stimulus A",
          "body": "Student-facing stimulus 1: A route-planning scenario where the map suggests a faster but impractical route. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "GPS versus Local Knowledge Stimulus B",
          "body": "Student-facing stimulus 2: Local knowledge cards: school gate closed, roadworks, unsafe crossing, steep hill. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "GPS versus Local Knowledge Reveal / Twist",
          "body": "Student-facing stimulus 3: A decision table balancing speed, safety, reliability, and lived experience. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Data can be precise and incomplete.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how data can be precise and incomplete.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When is local knowledge better than technological knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/gps-versus-local-knowledge/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/gps-versus-local-knowledge/worksheet.pdf",
        "pagePath": "premium/gps-versus-local-knowledge/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/gps-versus-local-knowledge/slides.md",
        "pptxPath": "premium/gps-versus-local-knowledge/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/gps-versus-local-knowledge/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/gps-versus-local-knowledge/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/gps-versus-local-knowledge/teacher-notes.pdf",
        "pagePath": "premium/gps-versus-local-knowledge/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/gps-versus-local-knowledge/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/gps-versus-local-knowledge/run-kit.pdf",
        "pagePath": "premium/gps-versus-local-knowledge/run-kit.html"
      }
    ]
  },
  {
    "id": "autocomplete-poetry",
    "title": "Autocomplete Poetry",
    "category": "Knowledge and Technology",
    "time": "20-30 min",
    "summary": "Students explore the difference between prediction, creativity and understanding.",
    "bigIdea": "Prediction can imitate creativity.",
    "setup": [
      "Prepare a starter stimulus using: Students write a poem using only suggested next words from a shared prompt.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Students write a poem using only suggested next words from a shared prompt.",
      "Two poems compared: one written by intention, one guided by autocomplete.",
      "A reflection on whether fluency signals authorship or knowledge."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Autocomplete Poetry: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/autocomplete-poetry/index.html",
    "cardDeckPath": "resources/autocomplete-poetry/cards.csv",
    "visualPromptPath": "resources/autocomplete-poetry/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Autocomplete Poetry Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Autocomplete Poetry Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Autocomplete Poetry Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does pattern prediction count as understanding?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Autocomplete Poetry Stimulus A",
          "body": "Student-facing stimulus 1: Students write a poem using only suggested next words from a shared prompt. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Autocomplete Poetry Stimulus B",
          "body": "Student-facing stimulus 2: Two poems compared: one written by intention, one guided by autocomplete. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Autocomplete Poetry Reveal / Twist",
          "body": "Student-facing stimulus 3: A reflection on whether fluency signals authorship or knowledge. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Prediction can imitate creativity.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how prediction can imitate creativity.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does pattern prediction count as understanding?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/autocomplete-poetry/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/autocomplete-poetry/worksheet.pdf",
        "pagePath": "premium/autocomplete-poetry/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/autocomplete-poetry/slides.md",
        "pptxPath": "premium/autocomplete-poetry/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/autocomplete-poetry/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/autocomplete-poetry/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/autocomplete-poetry/teacher-notes.pdf",
        "pagePath": "premium/autocomplete-poetry/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/autocomplete-poetry/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/autocomplete-poetry/run-kit.pdf",
        "pagePath": "premium/autocomplete-poetry/run-kit.html"
      }
    ]
  },
  {
    "id": "loaded-headline-laboratory",
    "title": "Loaded Headline Laboratory",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "summary": "Students see how word choice frames knowledge claims.",
    "bigIdea": "Wording frames interpretation.",
    "setup": [
      "Prepare a starter stimulus using: A neutral claim rewritten as alarming, heroic, bureaucratic, and sceptical headlines.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A neutral claim rewritten as alarming, heroic, bureaucratic, and sceptical headlines.",
      "Headline cards using verbs such as 'admits', 'claims', 'reveals', and 'warns'.",
      "A trust rating before and after students see the same evidence."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Loaded Headline Laboratory: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/loaded-headline-laboratory/index.html",
    "cardDeckPath": "resources/loaded-headline-laboratory/cards.csv",
    "visualPromptPath": "resources/loaded-headline-laboratory/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Loaded Headline Laboratory Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Loaded Headline Laboratory Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Loaded Headline Laboratory Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can language be neutral?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Loaded Headline Laboratory Stimulus A",
          "body": "Student-facing stimulus 1: A neutral claim rewritten as alarming, heroic, bureaucratic, and sceptical headlines. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Loaded Headline Laboratory Stimulus B",
          "body": "Student-facing stimulus 2: Headline cards using verbs such as 'admits', 'claims', 'reveals', and 'warns'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Loaded Headline Laboratory Reveal / Twist",
          "body": "Student-facing stimulus 3: A trust rating before and after students see the same evidence. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Wording frames interpretation.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how wording frames interpretation.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can language be neutral?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/loaded-headline-laboratory/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/loaded-headline-laboratory/worksheet.pdf",
        "pagePath": "premium/loaded-headline-laboratory/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/loaded-headline-laboratory/slides.md",
        "pptxPath": "premium/loaded-headline-laboratory/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/loaded-headline-laboratory/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/loaded-headline-laboratory/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/loaded-headline-laboratory/teacher-notes.pdf",
        "pagePath": "premium/loaded-headline-laboratory/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/loaded-headline-laboratory/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/loaded-headline-laboratory/run-kit.pdf",
        "pagePath": "premium/loaded-headline-laboratory/run-kit.html"
      }
    ]
  },
  {
    "id": "metaphor-changes-policy",
    "title": "Metaphor Changes Policy",
    "category": "Knowledge and Language",
    "time": "25-30 min",
    "summary": "Students test whether metaphors guide reasoning.",
    "bigIdea": "Metaphors guide reasoning.",
    "setup": [
      "Prepare a starter stimulus using: Crime described as a beast, virus, puzzle, business, or symptom.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Crime described as a beast, virus, puzzle, business, or symptom.",
      "Policy options that feel natural under each metaphor.",
      "A discussion on how metaphors smuggle in causes and solutions."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Metaphor Changes Policy: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/metaphor-changes-policy/index.html",
    "cardDeckPath": "resources/metaphor-changes-policy/cards.csv",
    "visualPromptPath": "resources/metaphor-changes-policy/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Metaphor Changes Policy Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Metaphor Changes Policy Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Metaphor Changes Policy Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Do metaphors reveal truth or create interpretations?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Metaphor Changes Policy Stimulus A",
          "body": "Student-facing stimulus 1: Crime described as a beast, virus, puzzle, business, or symptom. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Metaphor Changes Policy Stimulus B",
          "body": "Student-facing stimulus 2: Policy options that feel natural under each metaphor. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Metaphor Changes Policy Reveal / Twist",
          "body": "Student-facing stimulus 3: A discussion on how metaphors smuggle in causes and solutions. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Metaphors guide reasoning.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how metaphors guide reasoning.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Do metaphors reveal truth or create interpretations?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/metaphor-changes-policy/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/metaphor-changes-policy/worksheet.pdf",
        "pagePath": "premium/metaphor-changes-policy/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/metaphor-changes-policy/slides.md",
        "pptxPath": "premium/metaphor-changes-policy/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/metaphor-changes-policy/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/metaphor-changes-policy/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/metaphor-changes-policy/teacher-notes.pdf",
        "pagePath": "premium/metaphor-changes-policy/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/metaphor-changes-policy/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/metaphor-changes-policy/run-kit.pdf",
        "pagePath": "premium/metaphor-changes-policy/run-kit.html"
      }
    ]
  },
  {
    "id": "translation-loss-game",
    "title": "Translation Loss Game",
    "category": "Knowledge and Language",
    "time": "25-30 min",
    "summary": "Students explore how language carries cultural concepts.",
    "bigIdea": "Language carries cultural categories.",
    "setup": [
      "Prepare a starter stimulus using: A phrase translated literally, idiomatically, and culturally.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A phrase translated literally, idiomatically, and culturally.",
      "Words such as 'fair', 'home', 'respect', 'awkward', and 'saving face'.",
      "A ranking of what survives translation: fact, tone, value, or worldview."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Translation Loss Game: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/translation-loss-game/index.html",
    "cardDeckPath": "resources/translation-loss-game/cards.csv",
    "visualPromptPath": "resources/translation-loss-game/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Translation Loss Game Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Translation Loss Game Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Translation Loss Game Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can all knowledge be translated?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Translation Loss Game Stimulus A",
          "body": "Student-facing stimulus 1: A phrase translated literally, idiomatically, and culturally. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Translation Loss Game Stimulus B",
          "body": "Student-facing stimulus 2: Words such as 'fair', 'home', 'respect', 'awkward', and 'saving face'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Translation Loss Game Reveal / Twist",
          "body": "Student-facing stimulus 3: A ranking of what survives translation: fact, tone, value, or worldview. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Language carries cultural categories.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how language carries cultural categories.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can all knowledge be translated?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/translation-loss-game/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/translation-loss-game/worksheet.pdf",
        "pagePath": "premium/translation-loss-game/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/translation-loss-game/slides.md",
        "pptxPath": "premium/translation-loss-game/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/translation-loss-game/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/translation-loss-game/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/translation-loss-game/teacher-notes.pdf",
        "pagePath": "premium/translation-loss-game/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/translation-loss-game/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/translation-loss-game/run-kit.pdf",
        "pagePath": "premium/translation-loss-game/run-kit.html"
      }
    ]
  },
  {
    "id": "category-boundary-sorting",
    "title": "Category Boundary Sorting",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "summary": "Students investigate how categories depend on criteria and purposes.",
    "bigIdea": "Categories are made for purposes.",
    "setup": [
      "Prepare a starter stimulus using: Cards such as game, sport, art, science, medicine, belief, evidence, and opinion.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Cards such as game, sport, art, science, medicine, belief, evidence, and opinion.",
      "Borderline cases that force students to define category rules.",
      "A rule revision round after students encounter exceptions."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Category Boundary Sorting: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/category-boundary-sorting/index.html",
    "cardDeckPath": "resources/category-boundary-sorting/cards.csv",
    "visualPromptPath": "resources/category-boundary-sorting/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Category Boundary Sorting Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Category Boundary Sorting Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Category Boundary Sorting Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Do categories describe reality or organise it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Category Boundary Sorting Stimulus A",
          "body": "Student-facing stimulus 1: Cards such as game, sport, art, science, medicine, belief, evidence, and opinion. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Category Boundary Sorting Stimulus B",
          "body": "Student-facing stimulus 2: Borderline cases that force students to define category rules. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Category Boundary Sorting Reveal / Twist",
          "body": "Student-facing stimulus 3: A rule revision round after students encounter exceptions. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Categories are made for purposes.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how categories are made for purposes.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Do categories describe reality or organise it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/category-boundary-sorting/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/category-boundary-sorting/worksheet.pdf",
        "pagePath": "premium/category-boundary-sorting/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/category-boundary-sorting/slides.md",
        "pptxPath": "premium/category-boundary-sorting/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/category-boundary-sorting/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/category-boundary-sorting/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/category-boundary-sorting/teacher-notes.pdf",
        "pagePath": "premium/category-boundary-sorting/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/category-boundary-sorting/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/category-boundary-sorting/run-kit.pdf",
        "pagePath": "premium/category-boundary-sorting/run-kit.html"
      }
    ]
  },
  {
    "id": "euphemism-and-moral-distance",
    "title": "Euphemism and Moral Distance",
    "category": "Knowledge and Language",
    "time": "20-25 min",
    "summary": "Students examine how language can hide agency or responsibility.",
    "bigIdea": "Language can hide responsibility.",
    "setup": [
      "Prepare a starter stimulus using: Paired terms such as 'collateral damage' and 'civilian deaths'.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Paired terms such as 'collateral damage' and 'civilian deaths'.",
      "Workplace or political language that softens responsibility.",
      "A moral-distance scale showing how language changes judgement."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Euphemism and Moral Distance: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/euphemism-and-moral-distance/index.html",
    "cardDeckPath": "resources/euphemism-and-moral-distance/cards.csv",
    "visualPromptPath": "resources/euphemism-and-moral-distance/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Euphemism and Moral Distance Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Euphemism and Moral Distance Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Euphemism and Moral Distance Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can language make unethical actions seem acceptable?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Euphemism and Moral Distance Stimulus A",
          "body": "Student-facing stimulus 1: Paired terms such as 'collateral damage' and 'civilian deaths'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Euphemism and Moral Distance Stimulus B",
          "body": "Student-facing stimulus 2: Workplace or political language that softens responsibility. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Euphemism and Moral Distance Reveal / Twist",
          "body": "Student-facing stimulus 3: A moral-distance scale showing how language changes judgement. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Language can hide responsibility.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how language can hide responsibility.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can language make unethical actions seem acceptable?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/euphemism-and-moral-distance/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/euphemism-and-moral-distance/worksheet.pdf",
        "pagePath": "premium/euphemism-and-moral-distance/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/euphemism-and-moral-distance/slides.md",
        "pptxPath": "premium/euphemism-and-moral-distance/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/euphemism-and-moral-distance/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/euphemism-and-moral-distance/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/euphemism-and-moral-distance/teacher-notes.pdf",
        "pagePath": "premium/euphemism-and-moral-distance/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/euphemism-and-moral-distance/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/euphemism-and-moral-distance/run-kit.pdf",
        "pagePath": "premium/euphemism-and-moral-distance/run-kit.html"
      }
    ]
  },
  {
    "id": "proof-versus-pattern",
    "title": "Proof versus Pattern",
    "category": "Mathematics",
    "time": "30-40 min",
    "summary": "Students distinguish empirical pattern spotting from mathematical proof.",
    "bigIdea": "Examples are not proof.",
    "setup": [
      "Prepare a starter stimulus using: A number pattern such as [[math:1 + 2 + ... + n = n(n+1)/2]] that invites both pattern-spotting and proof.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A number pattern such as [[math:1 + 2 + ... + n = n(n+1)/2]] that invites both pattern-spotting and proof.",
      "A visual pattern students extend before testing whether it proves anything.",
      "A comparison between inductive confidence and deductive proof."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Proof versus Pattern: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/proof-versus-pattern/index.html",
    "cardDeckPath": "resources/proof-versus-pattern/cards.csv",
    "visualPromptPath": "resources/proof-versus-pattern/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Proof versus Pattern Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Proof versus Pattern Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Proof versus Pattern Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Why is proof valued more than observation in mathematics?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Proof versus Pattern Stimulus A",
          "body": "Student-facing stimulus 1: A number pattern such as [[math:1 + 2 + ... + n = n(n+1)/2]] that invites both pattern-spotting and proof. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Proof versus Pattern Stimulus B",
          "body": "Student-facing stimulus 2: A visual pattern students extend before testing whether it proves anything. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Proof versus Pattern Reveal / Twist",
          "body": "Student-facing stimulus 3: A comparison between inductive confidence and deductive proof. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Examples are not proof.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how examples are not proof.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Why is proof valued more than observation in mathematics?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/proof-versus-pattern/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/proof-versus-pattern/worksheet.pdf",
        "pagePath": "premium/proof-versus-pattern/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/proof-versus-pattern/slides.md",
        "pptxPath": "premium/proof-versus-pattern/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/proof-versus-pattern/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/proof-versus-pattern/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/proof-versus-pattern/teacher-notes.pdf",
        "pagePath": "premium/proof-versus-pattern/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/proof-versus-pattern/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/proof-versus-pattern/run-kit.pdf",
        "pagePath": "premium/proof-versus-pattern/run-kit.html"
      }
    ]
  },
  {
    "id": "monty-hall-shock",
    "title": "Monty Hall Shock",
    "category": "Mathematics",
    "time": "30-40 min",
    "summary": "Students feel the conflict between intuition and formal probability.",
    "bigIdea": "Formal probability can beat intuition.",
    "setup": [
      "Prepare a starter stimulus using: Three paper doors, one prize card, and repeated rounds with switch/stay tracking.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Three paper doors, one prize card, and repeated rounds with switch/stay tracking.",
      "A class results table showing wins after switching versus staying.",
      "A probability tree showing that the initial choice has probability 1/3 and the two unchosen doors together have probability 2/3."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Monty Hall Shock: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/monty-hall-shock/index.html",
    "cardDeckPath": "resources/monty-hall-shock/cards.csv",
    "visualPromptPath": "resources/monty-hall-shock/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Monty Hall Shock Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Monty Hall Shock Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Monty Hall Shock Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Why does mathematical reasoning often feel wrong at first?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Monty Hall Shock Stimulus A",
          "body": "Student-facing stimulus 1: Three paper doors, one prize card, and repeated rounds with switch/stay tracking. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Monty Hall Shock Stimulus B",
          "body": "Student-facing stimulus 2: A class results table showing wins after switching versus staying. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Monty Hall Shock Reveal / Twist",
          "body": "Student-facing stimulus 3: A probability tree showing that the initial choice has probability 1/3 and the two unchosen doors together have probability 2/3. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Formal probability can beat intuition.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how formal probability can beat intuition.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Why does mathematical reasoning often feel wrong at first?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/monty-hall-shock/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/monty-hall-shock/worksheet.pdf",
        "pagePath": "premium/monty-hall-shock/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/monty-hall-shock/slides.md",
        "pptxPath": "premium/monty-hall-shock/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/monty-hall-shock/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/monty-hall-shock/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/monty-hall-shock/teacher-notes.pdf",
        "pagePath": "premium/monty-hall-shock/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/monty-hall-shock/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/monty-hall-shock/run-kit.pdf",
        "pagePath": "premium/monty-hall-shock/run-kit.html"
      }
    ]
  },
  {
    "id": "axiom-switch-universe",
    "title": "Axiom Switch Universe",
    "category": "Mathematics",
    "time": "35-45 min",
    "summary": "Students explore how changing assumptions changes mathematical truth.",
    "bigIdea": "Axioms create mathematical worlds.",
    "setup": [
      "Prepare a starter stimulus using: A geometry rule change where parallel lines behave differently.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A geometry rule change where parallel lines behave differently.",
      "A made-up arithmetic system with a changed operation rule.",
      "A reflection on whether certainty depends on starting assumptions."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Axiom Switch Universe: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/axiom-switch-universe/index.html",
    "cardDeckPath": "resources/axiom-switch-universe/cards.csv",
    "visualPromptPath": "resources/axiom-switch-universe/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Axiom Switch Universe Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Axiom Switch Universe Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Axiom Switch Universe Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Are mathematical truths absolute?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Axiom Switch Universe Stimulus A",
          "body": "Student-facing stimulus 1: A geometry rule change where parallel lines behave differently. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Axiom Switch Universe Stimulus B",
          "body": "Student-facing stimulus 2: A made-up arithmetic system with a changed operation rule. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Axiom Switch Universe Reveal / Twist",
          "body": "Student-facing stimulus 3: A reflection on whether certainty depends on starting assumptions. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Axioms create mathematical worlds.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how axioms create mathematical worlds.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Are mathematical truths absolute?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/axiom-switch-universe/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/axiom-switch-universe/worksheet.pdf",
        "pagePath": "premium/axiom-switch-universe/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/axiom-switch-universe/slides.md",
        "pptxPath": "premium/axiom-switch-universe/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/axiom-switch-universe/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/axiom-switch-universe/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/axiom-switch-universe/teacher-notes.pdf",
        "pagePath": "premium/axiom-switch-universe/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/axiom-switch-universe/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/axiom-switch-universe/run-kit.pdf",
        "pagePath": "premium/axiom-switch-universe/run-kit.html"
      }
    ]
  },
  {
    "id": "calculator-trust-test",
    "title": "Calculator Trust Test",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students investigate how mathematical technology can both reveal and mislead.",
    "bigIdea": "Tools need interpretation.",
    "setup": [
      "Prepare a starter stimulus using: A calculator output checked against estimation, mental maths, and another tool, such as [[math:log10(1000) = 3]].",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A calculator output checked against estimation, mental maths, and another tool, such as [[math:log10(1000) = 3]].",
      "A deliberately mistyped expression that creates a plausible wrong answer.",
      "A trust checklist for tools: input, process, output, and independent check."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Calculator Trust Test: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/calculator-trust-test/index.html",
    "cardDeckPath": "resources/calculator-trust-test/cards.csv",
    "visualPromptPath": "resources/calculator-trust-test/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Calculator Trust Test Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Calculator Trust Test Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Calculator Trust Test Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does technology make mathematical knowledge more reliable?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Calculator Trust Test Stimulus A",
          "body": "Student-facing stimulus 1: A calculator output checked against estimation, mental maths, and another tool, such as [[math:log10(1000) = 3]]. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Calculator Trust Test Stimulus B",
          "body": "Student-facing stimulus 2: A deliberately mistyped expression that creates a plausible wrong answer. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Calculator Trust Test Reveal / Twist",
          "body": "Student-facing stimulus 3: A trust checklist for tools: input, process, output, and independent check. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Tools need interpretation.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how tools need interpretation.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does technology make mathematical knowledge more reliable?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/calculator-trust-test/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/calculator-trust-test/worksheet.pdf",
        "pagePath": "premium/calculator-trust-test/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/calculator-trust-test/slides.md",
        "pptxPath": "premium/calculator-trust-test/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/calculator-trust-test/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/calculator-trust-test/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/calculator-trust-test/teacher-notes.pdf",
        "pagePath": "premium/calculator-trust-test/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/calculator-trust-test/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/calculator-trust-test/run-kit.pdf",
        "pagePath": "premium/calculator-trust-test/run-kit.html"
      }
    ]
  },
  {
    "id": "observation-is-theory-laden",
    "title": "Observation is Theory-Laden",
    "category": "Natural Sciences",
    "time": "25-35 min",
    "summary": "Students see that observation depends on concepts, training and context.",
    "bigIdea": "Seeing scientifically requires concepts.",
    "setup": [
      "Prepare a starter stimulus using: The same candle flame described by a poet, chemist, safety inspector, and historian.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "The same candle flame described by a poet, chemist, safety inspector, and historian.",
      "A simple phenomenon viewed with different guiding questions.",
      "A notice-and-ignore table showing how theory directs attention."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Observation is Theory-Laden: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/observation-is-theory-laden/index.html",
    "cardDeckPath": "resources/observation-is-theory-laden/cards.csv",
    "visualPromptPath": "resources/observation-is-theory-laden/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Observation is Theory-Laden Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Observation is Theory-Laden Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Observation is Theory-Laden Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can observation be theory-free?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Observation is Theory-Laden Stimulus A",
          "body": "Student-facing stimulus 1: The same candle flame described by a poet, chemist, safety inspector, and historian. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Observation is Theory-Laden Stimulus B",
          "body": "Student-facing stimulus 2: A simple phenomenon viewed with different guiding questions. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Observation is Theory-Laden Reveal / Twist",
          "body": "Student-facing stimulus 3: A notice-and-ignore table showing how theory directs attention. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Seeing scientifically requires concepts.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how seeing scientifically requires concepts.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can observation be theory-free?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/observation-is-theory-laden/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/observation-is-theory-laden/worksheet.pdf",
        "pagePath": "premium/observation-is-theory-laden/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/observation-is-theory-laden/slides.md",
        "pptxPath": "premium/observation-is-theory-laden/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/observation-is-theory-laden/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/observation-is-theory-laden/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/observation-is-theory-laden/teacher-notes.pdf",
        "pagePath": "premium/observation-is-theory-laden/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/observation-is-theory-laden/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/observation-is-theory-laden/run-kit.pdf",
        "pagePath": "premium/observation-is-theory-laden/run-kit.html"
      }
    ]
  },
  {
    "id": "p-hacking-with-random-data",
    "title": "P-hacking with Random Data",
    "category": "Natural Sciences",
    "time": "35-45 min",
    "summary": "Students experience how false patterns can appear when many tests are tried.",
    "bigIdea": "Methods can create false confidence.",
    "setup": [
      "Prepare a starter stimulus using: A random dataset where students hunt for any impressive correlation.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A random dataset where students hunt for any impressive correlation.",
      "Multiple subgroup comparisons that eventually produce a 'significant' pattern.",
      "A publication pitch followed by a methods audit."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to P-hacking with Random Data: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/p-hacking-with-random-data/index.html",
    "cardDeckPath": "resources/p-hacking-with-random-data/cards.csv",
    "visualPromptPath": "resources/p-hacking-with-random-data/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect P-hacking with Random Data Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting P-hacking with Random Data Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from P-hacking with Random Data Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can correct methods lead to false knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "P-hacking with Random Data Stimulus A",
          "body": "Student-facing stimulus 1: A random dataset where students hunt for any impressive correlation. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "P-hacking with Random Data Stimulus B",
          "body": "Student-facing stimulus 2: Multiple subgroup comparisons that eventually produce a 'significant' pattern. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "P-hacking with Random Data Reveal / Twist",
          "body": "Student-facing stimulus 3: A publication pitch followed by a methods audit. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Methods can create false confidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how methods can create false confidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can correct methods lead to false knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/p-hacking-with-random-data/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/p-hacking-with-random-data/worksheet.pdf",
        "pagePath": "premium/p-hacking-with-random-data/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/p-hacking-with-random-data/slides.md",
        "pptxPath": "premium/p-hacking-with-random-data/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/p-hacking-with-random-data/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/p-hacking-with-random-data/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/p-hacking-with-random-data/teacher-notes.pdf",
        "pagePath": "premium/p-hacking-with-random-data/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/p-hacking-with-random-data/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/p-hacking-with-random-data/run-kit.pdf",
        "pagePath": "premium/p-hacking-with-random-data/run-kit.html"
      }
    ]
  },
  {
    "id": "placebo-trial-design",
    "title": "Placebo Trial Design",
    "category": "Natural Sciences",
    "time": "30-40 min",
    "summary": "Students design a method that protects knowledge from expectation and bias.",
    "bigIdea": "Controls protect knowledge from bias.",
    "setup": [
      "Prepare a starter stimulus using: A mock treatment trial with control, placebo, randomisation, and blinding cards.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A mock treatment trial with control, placebo, randomisation, and blinding cards.",
      "A flawed trial students must repair before trusting its conclusion.",
      "A debrief on ethics when belief itself changes outcomes."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Placebo Trial Design: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/placebo-trial-design/index.html",
    "cardDeckPath": "resources/placebo-trial-design/cards.csv",
    "visualPromptPath": "resources/placebo-trial-design/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Placebo Trial Design Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Placebo Trial Design Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Placebo Trial Design Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Why is personal experience not enough in science?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Placebo Trial Design Stimulus A",
          "body": "Student-facing stimulus 1: A mock treatment trial with control, placebo, randomisation, and blinding cards. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Placebo Trial Design Stimulus B",
          "body": "Student-facing stimulus 2: A flawed trial students must repair before trusting its conclusion. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Placebo Trial Design Reveal / Twist",
          "body": "Student-facing stimulus 3: A debrief on ethics when belief itself changes outcomes. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Controls protect knowledge from bias.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how controls protect knowledge from bias.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Why is personal experience not enough in science?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/placebo-trial-design/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/placebo-trial-design/worksheet.pdf",
        "pagePath": "premium/placebo-trial-design/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/placebo-trial-design/slides.md",
        "pptxPath": "premium/placebo-trial-design/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/placebo-trial-design/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/placebo-trial-design/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/placebo-trial-design/teacher-notes.pdf",
        "pagePath": "premium/placebo-trial-design/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/placebo-trial-design/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/placebo-trial-design/run-kit.pdf",
        "pagePath": "premium/placebo-trial-design/run-kit.html"
      }
    ]
  },
  {
    "id": "model-failure-challenge",
    "title": "Model Failure Challenge",
    "category": "Natural Sciences",
    "time": "25-35 min",
    "summary": "Students learn that models are useful simplifications rather than perfect copies of reality.",
    "bigIdea": "Models simplify reality productively.",
    "setup": [
      "Prepare a starter stimulus using: A simple weather, disease, or traffic model that works until one assumption changes.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A simple weather, disease, or traffic model that works until one assumption changes.",
      "An anomaly card that forces students to revise a model.",
      "A model limits table: useful for, weak when, assumptions, and missing variables."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Model Failure Challenge: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/model-failure-challenge/index.html",
    "cardDeckPath": "resources/model-failure-challenge/cards.csv",
    "visualPromptPath": "resources/model-failure-challenge/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Model Failure Challenge Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Model Failure Challenge Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Model Failure Challenge Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Are models useful because they are false?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Model Failure Challenge Stimulus A",
          "body": "Student-facing stimulus 1: A simple weather, disease, or traffic model that works until one assumption changes. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Model Failure Challenge Stimulus B",
          "body": "Student-facing stimulus 2: An anomaly card that forces students to revise a model. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Model Failure Challenge Reveal / Twist",
          "body": "Student-facing stimulus 3: A model limits table: useful for, weak when, assumptions, and missing variables. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Models simplify reality productively.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how models simplify reality productively.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Are models useful because they are false?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/model-failure-challenge/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/model-failure-challenge/worksheet.pdf",
        "pagePath": "premium/model-failure-challenge/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/model-failure-challenge/slides.md",
        "pptxPath": "premium/model-failure-challenge/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/model-failure-challenge/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/model-failure-challenge/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/model-failure-challenge/teacher-notes.pdf",
        "pagePath": "premium/model-failure-challenge/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/model-failure-challenge/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/model-failure-challenge/run-kit.pdf",
        "pagePath": "premium/model-failure-challenge/run-kit.html"
      }
    ]
  },
  {
    "id": "ultimatum-game",
    "title": "Ultimatum Game",
    "category": "Human Sciences",
    "time": "25-35 min",
    "summary": "Students test whether human decisions always match narrow economic rationality.",
    "bigIdea": "Humans do not always maximise narrow utility.",
    "setup": [
      "Prepare a starter stimulus using: Students split ten tokens and record accept/reject decisions.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Students split ten tokens and record accept/reject decisions.",
      "Offer cards showing fair, unfair, strategic, and emotional proposals.",
      "A graph comparing rational-choice prediction with actual class choices."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Ultimatum Game: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/ultimatum-game/index.html",
    "cardDeckPath": "resources/ultimatum-game/cards.csv",
    "visualPromptPath": "resources/ultimatum-game/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Ultimatum Game Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Ultimatum Game Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Ultimatum Game Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can human behaviour be predicted scientifically?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Ultimatum Game Stimulus A",
          "body": "Student-facing stimulus 1: Students split ten tokens and record accept/reject decisions. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Ultimatum Game Stimulus B",
          "body": "Student-facing stimulus 2: Offer cards showing fair, unfair, strategic, and emotional proposals. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Ultimatum Game Reveal / Twist",
          "body": "Student-facing stimulus 3: A graph comparing rational-choice prediction with actual class choices. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Humans do not always maximise narrow utility.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how humans do not always maximise narrow utility.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can human behaviour be predicted scientifically?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/ultimatum-game/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/ultimatum-game/worksheet.pdf",
        "pagePath": "premium/ultimatum-game/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/ultimatum-game/slides.md",
        "pptxPath": "premium/ultimatum-game/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/ultimatum-game/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/ultimatum-game/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/ultimatum-game/teacher-notes.pdf",
        "pagePath": "premium/ultimatum-game/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/ultimatum-game/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/ultimatum-game/run-kit.pdf",
        "pagePath": "premium/ultimatum-game/run-kit.html"
      }
    ]
  },
  {
    "id": "survey-wording-experiment",
    "title": "Survey Wording Experiment",
    "category": "Human Sciences",
    "time": "25-30 min",
    "summary": "Students see how the act of measurement can shape human-science data.",
    "bigIdea": "Measuring beliefs can alter the result.",
    "setup": [
      "Prepare a starter stimulus using: Two versions of the same question using 'support' versus 'allow'.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Two versions of the same question using 'support' versus 'allow'.",
      "A neutral, loaded, and leading survey item on the same issue.",
      "A class comparison chart showing how wording shifts results."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Survey Wording Experiment: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/survey-wording-experiment/index.html",
    "cardDeckPath": "resources/survey-wording-experiment/cards.csv",
    "visualPromptPath": "resources/survey-wording-experiment/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Survey Wording Experiment Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Survey Wording Experiment Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Survey Wording Experiment Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can surveys measure beliefs objectively?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Survey Wording Experiment Stimulus A",
          "body": "Student-facing stimulus 1: Two versions of the same question using 'support' versus 'allow'. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Survey Wording Experiment Stimulus B",
          "body": "Student-facing stimulus 2: A neutral, loaded, and leading survey item on the same issue. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Survey Wording Experiment Reveal / Twist",
          "body": "Student-facing stimulus 3: A class comparison chart showing how wording shifts results. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Measuring beliefs can alter the result.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how measuring beliefs can alter the result.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can surveys measure beliefs objectively?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/survey-wording-experiment/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/survey-wording-experiment/worksheet.pdf",
        "pagePath": "premium/survey-wording-experiment/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/survey-wording-experiment/slides.md",
        "pptxPath": "premium/survey-wording-experiment/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/survey-wording-experiment/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/survey-wording-experiment/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/survey-wording-experiment/teacher-notes.pdf",
        "pagePath": "premium/survey-wording-experiment/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/survey-wording-experiment/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/survey-wording-experiment/run-kit.pdf",
        "pagePath": "premium/survey-wording-experiment/run-kit.html"
      }
    ]
  },
  {
    "id": "conformity-without-humiliation",
    "title": "Conformity without Humiliation",
    "category": "Human Sciences",
    "time": "20-30 min",
    "summary": "Students examine how group information can influence individual judgement.",
    "bigIdea": "Consensus can distort judgement.",
    "setup": [
      "Prepare a starter stimulus using: A low-stakes line-length or preference task with planted majority responses.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A low-stakes line-length or preference task with planted majority responses.",
      "Silent voting before and after seeing a group trend.",
      "A norms debrief focused on method and ethics rather than embarrassment."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Conformity without Humiliation: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/conformity-without-humiliation/index.html",
    "cardDeckPath": "resources/conformity-without-humiliation/cards.csv",
    "visualPromptPath": "resources/conformity-without-humiliation/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Conformity without Humiliation Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Conformity without Humiliation Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Conformity without Humiliation Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Is consensus a reliable guide to truth?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Conformity without Humiliation Stimulus A",
          "body": "Student-facing stimulus 1: A low-stakes line-length or preference task with planted majority responses. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Conformity without Humiliation Stimulus B",
          "body": "Student-facing stimulus 2: Silent voting before and after seeing a group trend. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Conformity without Humiliation Reveal / Twist",
          "body": "Student-facing stimulus 3: A norms debrief focused on method and ethics rather than embarrassment. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Consensus can distort judgement.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how consensus can distort judgement.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Is consensus a reliable guide to truth?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/conformity-without-humiliation/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/conformity-without-humiliation/worksheet.pdf",
        "pagePath": "premium/conformity-without-humiliation/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/conformity-without-humiliation/slides.md",
        "pptxPath": "premium/conformity-without-humiliation/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/conformity-without-humiliation/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/conformity-without-humiliation/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/conformity-without-humiliation/teacher-notes.pdf",
        "pagePath": "premium/conformity-without-humiliation/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/conformity-without-humiliation/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/conformity-without-humiliation/run-kit.pdf",
        "pagePath": "premium/conformity-without-humiliation/run-kit.html"
      }
    ]
  },
  {
    "id": "replication-debate",
    "title": "Replication Debate",
    "category": "Human Sciences",
    "time": "35-45 min",
    "summary": "Students evaluate what it means for a human-science claim to be supported.",
    "bigIdea": "Human science knowledge is context-sensitive.",
    "setup": [
      "Prepare a starter stimulus using: A headline claim, a replication attempt, and a contested interpretation.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A headline claim, a replication attempt, and a contested interpretation.",
      "Role cards for original researcher, replicator, journalist, and funding body.",
      "A reliability scale separating failure, boundary condition, and fraud."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Replication Debate: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/replication-debate/index.html",
    "cardDeckPath": "resources/replication-debate/cards.csv",
    "visualPromptPath": "resources/replication-debate/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Replication Debate Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Replication Debate Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Replication Debate Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does failed replication destroy knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Replication Debate Stimulus A",
          "body": "Student-facing stimulus 1: A headline claim, a replication attempt, and a contested interpretation. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Replication Debate Stimulus B",
          "body": "Student-facing stimulus 2: Role cards for original researcher, replicator, journalist, and funding body. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Replication Debate Reveal / Twist",
          "body": "Student-facing stimulus 3: A reliability scale separating failure, boundary condition, and fraud. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Human science knowledge is context-sensitive.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how human science knowledge is context-sensitive.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does failed replication destroy knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/replication-debate/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/replication-debate/worksheet.pdf",
        "pagePath": "premium/replication-debate/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/replication-debate/slides.md",
        "pptxPath": "premium/replication-debate/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/replication-debate/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/replication-debate/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/replication-debate/teacher-notes.pdf",
        "pagePath": "premium/replication-debate/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/replication-debate/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/replication-debate/run-kit.pdf",
        "pagePath": "premium/replication-debate/run-kit.html"
      }
    ]
  },
  {
    "id": "broken-archive",
    "title": "Broken Archive",
    "category": "History",
    "time": "35-45 min",
    "summary": "Students reconstruct a past event from incomplete and biased sources.",
    "bigIdea": "The past survives as incomplete traces.",
    "setup": [
      "Prepare a starter stimulus using: A partial archive with missing letters, dates, or voices.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A partial archive with missing letters, dates, or voices.",
      "Students reconstruct an event from incomplete evidence cards.",
      "A source silence note asking who is absent and why."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Broken Archive: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/broken-archive/index.html",
    "cardDeckPath": "resources/broken-archive/cards.csv",
    "visualPromptPath": "resources/broken-archive/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Broken Archive Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Broken Archive Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Broken Archive Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can we know the past if we cannot observe it directly?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Broken Archive Stimulus A",
          "body": "Student-facing stimulus 1: A partial archive with missing letters, dates, or voices. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Broken Archive Stimulus B",
          "body": "Student-facing stimulus 2: Students reconstruct an event from incomplete evidence cards. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Broken Archive Reveal / Twist",
          "body": "Student-facing stimulus 3: A source silence note asking who is absent and why. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — The past survives as incomplete traces.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how the past survives as incomplete traces.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can we know the past if we cannot observe it directly?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/broken-archive/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/broken-archive/worksheet.pdf",
        "pagePath": "premium/broken-archive/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/broken-archive/slides.md",
        "pptxPath": "premium/broken-archive/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/broken-archive/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/broken-archive/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/broken-archive/teacher-notes.pdf",
        "pagePath": "premium/broken-archive/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/broken-archive/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/broken-archive/run-kit.pdf",
        "pagePath": "premium/broken-archive/run-kit.html"
      }
    ]
  },
  {
    "id": "same-event-different-historian",
    "title": "Same Event, Different Historian",
    "category": "History",
    "time": "30-40 min",
    "summary": "Students compare how historical lenses shape explanation.",
    "bigIdea": "Interpretation depends on lens and selection.",
    "setup": [
      "Prepare a starter stimulus using: Two historians explaining the same protest, invention, or revolution differently.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Two historians explaining the same protest, invention, or revolution differently.",
      "Source packets that foreground economics, leadership, culture, or ordinary people.",
      "A claim comparison chart: evidence used, emphasis, and implied values."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Same Event, Different Historian: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/same-event-different-historian/index.html",
    "cardDeckPath": "resources/same-event-different-historian/cards.csv",
    "visualPromptPath": "resources/same-event-different-historian/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Same Event, Different Historian Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Same Event, Different Historian Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Same Event, Different Historian Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Are some historical interpretations better than others?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Same Event, Different Historian Stimulus A",
          "body": "Student-facing stimulus 1: Two historians explaining the same protest, invention, or revolution differently. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Same Event, Different Historian Stimulus B",
          "body": "Student-facing stimulus 2: Source packets that foreground economics, leadership, culture, or ordinary people. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Same Event, Different Historian Reveal / Twist",
          "body": "Student-facing stimulus 3: A claim comparison chart: evidence used, emphasis, and implied values. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Interpretation depends on lens and selection.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how interpretation depends on lens and selection.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Are some historical interpretations better than others?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/same-event-different-historian/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/same-event-different-historian/worksheet.pdf",
        "pagePath": "premium/same-event-different-historian/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/same-event-different-historian/slides.md",
        "pptxPath": "premium/same-event-different-historian/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/same-event-different-historian/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/same-event-different-historian/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/same-event-different-historian/teacher-notes.pdf",
        "pagePath": "premium/same-event-different-historian/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/same-event-different-historian/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/same-event-different-historian/run-kit.pdf",
        "pagePath": "premium/same-event-different-historian/run-kit.html"
      }
    ]
  },
  {
    "id": "cause-web",
    "title": "Cause Web",
    "category": "History",
    "time": "30-40 min",
    "summary": "Students investigate complex causation in historical explanation.",
    "bigIdea": "Causation is layered and contestable.",
    "setup": [
      "Prepare a starter stimulus using: A web of causes for a school rule change, historical event, or social movement.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A web of causes for a school rule change, historical event, or social movement.",
      "Cards sorted into trigger, background condition, actor, and consequence.",
      "A debate over whether one cause can be 'the' cause."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Cause Web: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/cause-web/index.html",
    "cardDeckPath": "resources/cause-web/cards.csv",
    "visualPromptPath": "resources/cause-web/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Cause Web Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Cause Web Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Cause Web Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How do historians decide which causes matter most?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Cause Web Stimulus A",
          "body": "Student-facing stimulus 1: A web of causes for a school rule change, historical event, or social movement. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Cause Web Stimulus B",
          "body": "Student-facing stimulus 2: Cards sorted into trigger, background condition, actor, and consequence. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Cause Web Reveal / Twist",
          "body": "Student-facing stimulus 3: A debate over whether one cause can be 'the' cause. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Causation is layered and contestable.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how causation is layered and contestable.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How do historians decide which causes matter most?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/cause-web/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/cause-web/worksheet.pdf",
        "pagePath": "premium/cause-web/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/cause-web/slides.md",
        "pptxPath": "premium/cause-web/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/cause-web/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/cause-web/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/cause-web/teacher-notes.pdf",
        "pagePath": "premium/cause-web/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/cause-web/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/cause-web/run-kit.pdf",
        "pagePath": "premium/cause-web/run-kit.html"
      }
    ]
  },
  {
    "id": "presentism-trial",
    "title": "Presentism Trial",
    "category": "History",
    "time": "35-45 min",
    "summary": "Students explore ethical judgement and contextual understanding in history.",
    "bigIdea": "Historical judgement involves ethical tension.",
    "setup": [
      "Prepare a starter stimulus using: A historical actor put on trial using present-day and period-specific standards.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A historical actor put on trial using present-day and period-specific standards.",
      "Role cards for prosecution, defence, context witness, and judge.",
      "A verdict statement separating explanation from excuse."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Presentism Trial: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/presentism-trial/index.html",
    "cardDeckPath": "resources/presentism-trial/cards.csv",
    "visualPromptPath": "resources/presentism-trial/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Presentism Trial Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Presentism Trial Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Presentism Trial Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Should we judge the past by present standards?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Presentism Trial Stimulus A",
          "body": "Student-facing stimulus 1: A historical actor put on trial using present-day and period-specific standards. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Presentism Trial Stimulus B",
          "body": "Student-facing stimulus 2: Role cards for prosecution, defence, context witness, and judge. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Presentism Trial Reveal / Twist",
          "body": "Student-facing stimulus 3: A verdict statement separating explanation from excuse. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Historical judgement involves ethical tension.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how historical judgement involves ethical tension.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Should we judge the past by present standards?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/presentism-trial/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/presentism-trial/worksheet.pdf",
        "pagePath": "premium/presentism-trial/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/presentism-trial/slides.md",
        "pptxPath": "premium/presentism-trial/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/presentism-trial/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/presentism-trial/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/presentism-trial/teacher-notes.pdf",
        "pagePath": "premium/presentism-trial/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/presentism-trial/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/presentism-trial/run-kit.pdf",
        "pagePath": "premium/presentism-trial/run-kit.html"
      }
    ]
  },
  {
    "id": "title-changes-meaning",
    "title": "Title Changes Meaning",
    "category": "The Arts",
    "time": "20-30 min",
    "summary": "Students experience how context changes artistic interpretation.",
    "bigIdea": "Context changes interpretation.",
    "setup": [
      "Prepare a starter stimulus using: The same image titled 'Waiting', 'Evidence', 'Aftermath', and 'Home'.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "The same image titled 'Waiting', 'Evidence', 'Aftermath', and 'Home'.",
      "Students interpret before and after seeing titles.",
      "A title-writing round where students try to control audience interpretation."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Title Changes Meaning: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/title-changes-meaning/index.html",
    "cardDeckPath": "resources/title-changes-meaning/cards.csv",
    "visualPromptPath": "resources/title-changes-meaning/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Title Changes Meaning Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Title Changes Meaning Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Title Changes Meaning Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does the artist control the meaning of an artwork?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Title Changes Meaning Stimulus A",
          "body": "Student-facing stimulus 1: The same image titled 'Waiting', 'Evidence', 'Aftermath', and 'Home'. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Title Changes Meaning Stimulus B",
          "body": "Student-facing stimulus 2: Students interpret before and after seeing titles. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Title Changes Meaning Reveal / Twist",
          "body": "Student-facing stimulus 3: A title-writing round where students try to control audience interpretation. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Context changes interpretation.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how context changes interpretation.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does the artist control the meaning of an artwork?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/title-changes-meaning/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/title-changes-meaning/worksheet.pdf",
        "pagePath": "premium/title-changes-meaning/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/title-changes-meaning/slides.md",
        "pptxPath": "premium/title-changes-meaning/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/title-changes-meaning/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/title-changes-meaning/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/title-changes-meaning/teacher-notes.pdf",
        "pagePath": "premium/title-changes-meaning/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/title-changes-meaning/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/title-changes-meaning/run-kit.pdf",
        "pagePath": "premium/title-changes-meaning/run-kit.html"
      }
    ]
  },
  {
    "id": "fake-or-masterpiece",
    "title": "Fake or Masterpiece?",
    "category": "The Arts",
    "time": "25-35 min",
    "summary": "Students test how reputation, authorship and context shape aesthetic judgement.",
    "bigIdea": "Reputation affects judgement.",
    "setup": [
      "Prepare a starter stimulus using: Two artworks with different provenance stories but similar visual quality.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Two artworks with different provenance stories but similar visual quality.",
      "A value ranking before and after learning authorship.",
      "A debrief on whether knowledge about origin changes aesthetic knowledge."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Fake or Masterpiece?: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/fake-or-masterpiece/index.html",
    "cardDeckPath": "resources/fake-or-masterpiece/cards.csv",
    "visualPromptPath": "resources/fake-or-masterpiece/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Fake or Masterpiece? Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Fake or Masterpiece? Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Fake or Masterpiece? Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Is artistic value in the object, the viewer or the culture?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Fake or Masterpiece? Stimulus A",
          "body": "Student-facing stimulus 1: Two artworks with different provenance stories but similar visual quality. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Fake or Masterpiece? Stimulus B",
          "body": "Student-facing stimulus 2: A value ranking before and after learning authorship. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Fake or Masterpiece? Reveal / Twist",
          "body": "Student-facing stimulus 3: A debrief on whether knowledge about origin changes aesthetic knowledge. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Reputation affects judgement.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how reputation affects judgement.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Is artistic value in the object, the viewer or the culture?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/fake-or-masterpiece/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/fake-or-masterpiece/worksheet.pdf",
        "pagePath": "premium/fake-or-masterpiece/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/fake-or-masterpiece/slides.md",
        "pptxPath": "premium/fake-or-masterpiece/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/fake-or-masterpiece/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/fake-or-masterpiece/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/fake-or-masterpiece/teacher-notes.pdf",
        "pagePath": "premium/fake-or-masterpiece/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/fake-or-masterpiece/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/fake-or-masterpiece/run-kit.pdf",
        "pagePath": "premium/fake-or-masterpiece/run-kit.html"
      }
    ]
  },
  {
    "id": "one-image-many-readings",
    "title": "One Image, Many Readings",
    "category": "The Arts",
    "time": "30-40 min",
    "summary": "Students practise evidence-based interpretation from multiple lenses.",
    "bigIdea": "Evidence in interpretation is plural.",
    "setup": [
      "Prepare a starter stimulus using: One ambiguous image interpreted through personal, cultural, political, and formal lenses.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "One ambiguous image interpreted through personal, cultural, political, and formal lenses.",
      "A gallery walk where each group leaves a different reading.",
      "A claim-evidence-context triangle for art interpretation."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to One Image, Many Readings: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/one-image-many-readings/index.html",
    "cardDeckPath": "resources/one-image-many-readings/cards.csv",
    "visualPromptPath": "resources/one-image-many-readings/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect One Image, Many Readings Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting One Image, Many Readings Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from One Image, Many Readings Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Is ambiguity a weakness or strength in the arts?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "One Image, Many Readings Stimulus A",
          "body": "Student-facing stimulus 1: One ambiguous image interpreted through personal, cultural, political, and formal lenses. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "One Image, Many Readings Stimulus B",
          "body": "Student-facing stimulus 2: A gallery walk where each group leaves a different reading. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "One Image, Many Readings Reveal / Twist",
          "body": "Student-facing stimulus 3: A claim-evidence-context triangle for art interpretation. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Evidence in interpretation is plural.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how evidence in interpretation is plural.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Is ambiguity a weakness or strength in the arts?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/one-image-many-readings/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/one-image-many-readings/worksheet.pdf",
        "pagePath": "premium/one-image-many-readings/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/one-image-many-readings/slides.md",
        "pptxPath": "premium/one-image-many-readings/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/one-image-many-readings/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/one-image-many-readings/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/one-image-many-readings/teacher-notes.pdf",
        "pagePath": "premium/one-image-many-readings/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/one-image-many-readings/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/one-image-many-readings/run-kit.pdf",
        "pagePath": "premium/one-image-many-readings/run-kit.html"
      }
    ]
  },
  {
    "id": "music-and-emotion-experiment",
    "title": "Music and Emotion Experiment",
    "category": "The Arts",
    "time": "20-30 min",
    "summary": "Students explore how artistic form shapes perception and emotion.",
    "bigIdea": "Form shapes perception and feeling.",
    "setup": [
      "Prepare a starter stimulus using: The same image or scene paired with different soundtracks.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "The same image or scene paired with different soundtracks.",
      "Emotion rating cards before and after the music changes.",
      "A discussion of whether emotion reveals knowledge or distorts it."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Music and Emotion Experiment: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/music-and-emotion-experiment/index.html",
    "cardDeckPath": "resources/music-and-emotion-experiment/cards.csv",
    "visualPromptPath": "resources/music-and-emotion-experiment/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Music and Emotion Experiment Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Music and Emotion Experiment Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Music and Emotion Experiment Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can emotion be a source of knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Music and Emotion Experiment Stimulus A",
          "body": "Student-facing stimulus 1: The same image or scene paired with different soundtracks. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Music and Emotion Experiment Stimulus B",
          "body": "Student-facing stimulus 2: Emotion rating cards before and after the music changes. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Music and Emotion Experiment Reveal / Twist",
          "body": "Student-facing stimulus 3: A discussion of whether emotion reveals knowledge or distorts it. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Form shapes perception and feeling.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how form shapes perception and feeling.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can emotion be a source of knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/music-and-emotion-experiment/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/music-and-emotion-experiment/worksheet.pdf",
        "pagePath": "premium/music-and-emotion-experiment/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/music-and-emotion-experiment/slides.md",
        "pptxPath": "premium/music-and-emotion-experiment/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/music-and-emotion-experiment/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/music-and-emotion-experiment/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/music-and-emotion-experiment/teacher-notes.pdf",
        "pagePath": "premium/music-and-emotion-experiment/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/music-and-emotion-experiment/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/music-and-emotion-experiment/run-kit.pdf",
        "pagePath": "premium/music-and-emotion-experiment/run-kit.html"
      }
    ]
  },
  {
    "id": "what-counts-as-evidence",
    "title": "What Counts as Evidence?",
    "category": "Cross-AOK",
    "time": "35-45 min",
    "summary": "Students compare standards of evidence across AOKs.",
    "bigIdea": "AOKs use different standards of evidence.",
    "setup": [
      "Prepare a starter stimulus using: Claims from mathematics, art, history, science, and ethics sorted by evidence type.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Claims from mathematics, art, history, science, and ethics sorted by evidence type.",
      "A card set with proof, testimony, data, interpretation, and expert judgement.",
      "A comparison of what each AOK accepts and rejects as evidence."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to What Counts as Evidence?: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/what-counts-as-evidence/index.html",
    "cardDeckPath": "resources/what-counts-as-evidence/cards.csv",
    "visualPromptPath": "resources/what-counts-as-evidence/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect What Counts as Evidence? Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting What Counts as Evidence? Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from What Counts as Evidence? Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does evidence mean the same thing in every AOK?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "What Counts as Evidence? Stimulus A",
          "body": "Student-facing stimulus 1: Claims from mathematics, art, history, science, and ethics sorted by evidence type. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "What Counts as Evidence? Stimulus B",
          "body": "Student-facing stimulus 2: A card set with proof, testimony, data, interpretation, and expert judgement. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "What Counts as Evidence? Reveal / Twist",
          "body": "Student-facing stimulus 3: A comparison of what each AOK accepts and rejects as evidence. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — AOKs use different standards of evidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how aoks use different standards of evidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does evidence mean the same thing in every AOK?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/what-counts-as-evidence/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/what-counts-as-evidence/worksheet.pdf",
        "pagePath": "premium/what-counts-as-evidence/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/what-counts-as-evidence/slides.md",
        "pptxPath": "premium/what-counts-as-evidence/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/what-counts-as-evidence/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/what-counts-as-evidence/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/what-counts-as-evidence/teacher-notes.pdf",
        "pagePath": "premium/what-counts-as-evidence/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/what-counts-as-evidence/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/what-counts-as-evidence/run-kit.pdf",
        "pagePath": "premium/what-counts-as-evidence/run-kit.html"
      }
    ]
  },
  {
    "id": "same-object-different-aok",
    "title": "Same Object, Different AOK",
    "category": "Cross-AOK",
    "time": "30-40 min",
    "summary": "Students prepare for exhibition-style thinking by analysing one object through many knowledge lenses.",
    "bigIdea": "One object can carry many kinds of knowledge.",
    "setup": [
      "Prepare a starter stimulus using: A shell, coin, photograph, or medicine bottle examined by multiple AOKs.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "A shell, coin, photograph, or medicine bottle examined by multiple AOKs.",
      "A matrix with rows for AOK and columns for questions, methods, and evidence.",
      "A debrief on whether the object changes or the knower's purpose changes."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Same Object, Different AOK: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/same-object-different-aok/index.html",
    "cardDeckPath": "resources/same-object-different-aok/cards.csv",
    "visualPromptPath": "resources/same-object-different-aok/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Same Object, Different AOK Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Same Object, Different AOK Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Same Object, Different AOK Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does context change what an object helps us know?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Same Object, Different AOK Stimulus A",
          "body": "Student-facing stimulus 1: A shell, coin, photograph, or medicine bottle examined by multiple AOKs. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Same Object, Different AOK Stimulus B",
          "body": "Student-facing stimulus 2: A matrix with rows for AOK and columns for questions, methods, and evidence. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Same Object, Different AOK Reveal / Twist",
          "body": "Student-facing stimulus 3: A debrief on whether the object changes or the knower's purpose changes. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — One object can carry many kinds of knowledge.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how one object can carry many kinds of knowledge.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does context change what an object helps us know?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/same-object-different-aok/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/same-object-different-aok/worksheet.pdf",
        "pagePath": "premium/same-object-different-aok/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/same-object-different-aok/slides.md",
        "pptxPath": "premium/same-object-different-aok/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/same-object-different-aok/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/same-object-different-aok/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/same-object-different-aok/teacher-notes.pdf",
        "pagePath": "premium/same-object-different-aok/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/same-object-different-aok/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/same-object-different-aok/run-kit.pdf",
        "pagePath": "premium/same-object-different-aok/run-kit.html"
      }
    ]
  },
  {
    "id": "reliability-ranking",
    "title": "Reliability Ranking",
    "category": "Cross-AOK",
    "time": "25-35 min",
    "summary": "Students compare certainty, usefulness and interpretation across knowledge claims.",
    "bigIdea": "Certainty varies across kinds of knowledge.",
    "setup": [
      "Prepare a starter stimulus using: Knowledge claims ranked by certainty, usefulness, and risk if wrong.",
      "Print or project the student response grid before the activity begins.",
      "Plan a private first-response moment before any group discussion."
    ],
    "exampleStimuli": [
      "Knowledge claims ranked by certainty, usefulness, and risk if wrong.",
      "A second ranking after students learn the method behind each claim.",
      "A discussion on whether reliability means the same thing in every AOK."
    ],
    "runResources": [
      "Printable student worksheet with observation, inference, evidence, and confidence columns.",
      "Teacher notes with setup checklist, sample facilitation language, misconceptions, and assessment look-fors.",
      "Classroom run kit with prompt cards, example stimuli, and debrief moves.",
      "PowerPoint deck with a student-facing sequence for running the activity."
    ],
    "sampleTeacherLanguage": [
      "Write your first judgement before we discuss it; the first answer is useful evidence.",
      "Separate what you noticed from what you inferred.",
      "What would make this knowledge claim more reliable?"
    ],
    "sampleStudentOutput": [
      "A student claim connected to Reliability Ranking: \"My first judgement felt obvious, but my evidence was thinner than I realised.\"",
      "A revised claim that names a method, perspective, or language choice that changed the result.",
      "A knowledge question that moves beyond the activity example."
    ],
    "extensionTasks": [
      "Design a second version of the activity that tests the same knowledge issue in another AOK.",
      "Find a real-world example where the same knowledge problem matters outside the classroom.",
      "Write a 150-word TOK exhibition-style commentary using the activity as the object context."
    ],
    "adaptations": [
      "Short lesson: use only the first example, one response grid, and one debrief question.",
      "Long lesson: add a second round where students revise the method and compare outcomes.",
      "Low-tech option: run with printed cards, sticky notes, and a board tally."
    ],
    "resourcePackPath": "resources/reliability-ranking/index.html",
    "cardDeckPath": "resources/reliability-ranking/cards.csv",
    "visualPromptPath": "resources/reliability-ranking/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Reliability Ranking Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Reliability Ranking Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Reliability Ranking Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Is certainty the best measure of knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Reliability Ranking Stimulus A",
          "body": "Student-facing stimulus 1: Knowledge claims ranked by certainty, usefulness, and risk if wrong. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Reliability Ranking Stimulus B",
          "body": "Student-facing stimulus 2: A second ranking after students learn the method behind each claim. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Reliability Ranking Reveal / Twist",
          "body": "Student-facing stimulus 3: A discussion on whether reliability means the same thing in every AOK. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Certainty varies across kinds of knowledge.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how certainty varies across kinds of knowledge.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Is certainty the best measure of knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/reliability-ranking/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/reliability-ranking/worksheet.pdf",
        "pagePath": "premium/reliability-ranking/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/reliability-ranking/slides.md",
        "pptxPath": "premium/reliability-ranking/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/reliability-ranking/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/reliability-ranking/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/reliability-ranking/teacher-notes.pdf",
        "pagePath": "premium/reliability-ranking/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/reliability-ranking/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/reliability-ranking/run-kit.pdf",
        "pagePath": "premium/reliability-ranking/run-kit.html"
      }
    ]
  },
  {
    "id": "invisible-gorilla-discussion",
    "title": "Invisible Gorilla Discussion",
    "category": "Knowledge and the Knower",
    "time": "20-25 min",
    "summary": "Students complete a selective-attention counting task and examine why obvious evidence can be missed.",
    "bigIdea": "Attention is not a neutral spotlight; it decides which evidence enters awareness.",
    "setup": [
      "Use a short public-domain-style classroom task, or create your own with students passing a soft object while another visible change occurs.",
      "Tell students to focus on one countable task so the later miss is meaningful rather than random."
    ],
    "exampleStimuli": [
      "Counting task: students count how many times a blue card is passed while a student in a bright scarf crosses the room.",
      "Desk task: students count red objects in a photo while a large background detail changes between views."
    ],
    "runResources": [
      "Private count slip: target count, unexpected details noticed, confidence rating.",
      "Reveal slide with the unexpected element circled and a question about attention."
    ],
    "sampleTeacherLanguage": [
      "You were not careless; your attention was doing what the task asked it to do.",
      "What did the task make available as evidence, and what did it make invisible?"
    ],
    "sampleStudentOutput": [
      "I counted accurately but missed the scarf because it was irrelevant to my task.",
      "The activity showed that focus improves one kind of knowledge while reducing another."
    ],
    "extensionTasks": [
      "Students design a fairer observation protocol for an eyewitness or scientist.",
      "Compare selective attention in sport, medicine, driving, and classroom learning."
    ],
    "adaptations": [
      "Support: use one obvious unexpected feature.",
      "Challenge: add two unexpected features and ask which one different students notice."
    ],
    "resourcePackPath": "resources/invisible-gorilla-discussion/index.html",
    "cardDeckPath": "resources/invisible-gorilla-discussion/cards.csv",
    "visualPromptPath": "resources/invisible-gorilla-discussion/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Invisible Gorilla Discussion Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Invisible Gorilla Discussion Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Invisible Gorilla Discussion Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does attention shape what counts as evidence?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Invisible Gorilla Discussion Stimulus A",
          "body": "Student-facing stimulus 1: Counting task: students count how many times a blue card is passed while a student in a bright scarf crosses the room. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Invisible Gorilla Discussion Stimulus B",
          "body": "Student-facing stimulus 2: Desk task: students count red objects in a photo while a large background detail changes between views. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Invisible Gorilla Discussion Reveal / Twist",
          "body": "Student-facing stimulus 3: Desk task: students count red objects in a photo while a large background detail changes between views. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Attention is not a neutral spotlight; it decides which evidence enters awareness.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how attention is not a neutral spotlight; it decides which evidence enters awareness.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does attention shape what counts as evidence?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/invisible-gorilla-discussion/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/invisible-gorilla-discussion/worksheet.pdf",
        "pagePath": "premium/invisible-gorilla-discussion/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/invisible-gorilla-discussion/slides.md",
        "pptxPath": "premium/invisible-gorilla-discussion/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/invisible-gorilla-discussion/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/invisible-gorilla-discussion/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/invisible-gorilla-discussion/teacher-notes.pdf",
        "pagePath": "premium/invisible-gorilla-discussion/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/invisible-gorilla-discussion/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/invisible-gorilla-discussion/run-kit.pdf",
        "pagePath": "premium/invisible-gorilla-discussion/run-kit.html"
      }
    ]
  },
  {
    "id": "feeling-of-knowing-forecast",
    "title": "Feeling of Knowing Forecast",
    "category": "Knowledge and the Knower",
    "time": "20-30 min",
    "summary": "Students predict which forgotten answers they would recognize later, then test the reliability of that feeling.",
    "bigIdea": "The feeling that knowledge is available is itself a judgement that can be tested.",
    "setup": [
      "Use questions students might plausibly know but may not immediately retrieve.",
      "Make students forecast recognition before seeing options so the metacognitive judgement is visible."
    ],
    "exampleStimuli": [
      "Recall prompt: What is the term for a word that imitates a sound?",
      "Recognition options later: metaphor, onomatopoeia, alliteration, oxymoron."
    ],
    "runResources": [
      "Forecast table with columns: no recall, feeling-of-knowing rating, recognition answer, outcome.",
      "Class tally comparing high forecast items and actual recognition success."
    ],
    "sampleTeacherLanguage": [
      "A feeling of knowing is useful data, but it is not the same as knowing.",
      "What kind of evidence could confirm or challenge your feeling of familiarity?"
    ],
    "sampleStudentOutput": [
      "I was sure I would recognize the answer, but all the options felt familiar.",
      "My forecast was strongest when I could remember the topic area, not just the feeling."
    ],
    "extensionTasks": [
      "Students compare feeling-of-knowing with confidence calibration data.",
      "Ask students to create a revision strategy based on metacognitive evidence."
    ],
    "adaptations": [
      "Support: use fewer questions and simple recognition options.",
      "Challenge: separate feeling-of-knowing, confidence, and source memory ratings."
    ],
    "resourcePackPath": "resources/feeling-of-knowing-forecast/index.html",
    "cardDeckPath": "resources/feeling-of-knowing-forecast/cards.csv",
    "visualPromptPath": "resources/feeling-of-knowing-forecast/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Feeling of Knowing Forecast Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Feeling of Knowing Forecast Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Feeling of Knowing Forecast Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How reliable is introspection as evidence about what we know?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Feeling of Knowing Forecast Stimulus A",
          "body": "Student-facing stimulus 1: Recall prompt: What is the term for a word that imitates a sound?. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Feeling of Knowing Forecast Stimulus B",
          "body": "Student-facing stimulus 2: Recognition options later: metaphor, onomatopoeia, alliteration, oxymoron. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Feeling of Knowing Forecast Reveal / Twist",
          "body": "Student-facing stimulus 3: Recognition options later: metaphor, onomatopoeia, alliteration, oxymoron. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — The feeling that knowledge is available is itself a judgement that can be tested.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how the feeling that knowledge is available is itself a judgement that can be tested.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How reliable is introspection as evidence about what we know?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/feeling-of-knowing-forecast/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/feeling-of-knowing-forecast/worksheet.pdf",
        "pagePath": "premium/feeling-of-knowing-forecast/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/feeling-of-knowing-forecast/slides.md",
        "pptxPath": "premium/feeling-of-knowing-forecast/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/feeling-of-knowing-forecast/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/feeling-of-knowing-forecast/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/feeling-of-knowing-forecast/teacher-notes.pdf",
        "pagePath": "premium/feeling-of-knowing-forecast/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/feeling-of-knowing-forecast/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/feeling-of-knowing-forecast/run-kit.pdf",
        "pagePath": "premium/feeling-of-knowing-forecast/run-kit.html"
      }
    ]
  },
  {
    "id": "recommendation-rabbit-hole",
    "title": "Recommendation Rabbit Hole",
    "category": "Knowledge and Technology",
    "time": "30-40 min",
    "summary": "Students simulate repeated recommendations and observe how small choices can narrow a user's knowledge environment.",
    "bigIdea": "A feed can become a path dependency: early clicks shape later knowledge possibilities.",
    "setup": [
      "Prepare enough cards that each round can narrow without becoming repetitive.",
      "Keep content fictional and school-safe while preserving emotional and credibility differences."
    ],
    "exampleStimuli": [
      "Starting interest: exam stress; feed branches into study tips, productivity hacks, anxiety posts, tutoring adverts, and sleep science.",
      "Starting interest: climate action; feed branches into science explainers, activism, conspiracy claims, policy debate, and lifestyle content."
    ],
    "runResources": [
      "Feed path tracker with rounds, clicked item, new recommendations, and perceived worldview.",
      "Recommendation rule cards: similar topic, stronger emotion, most engaged, highest reliability."
    ],
    "sampleTeacherLanguage": [
      "The user keeps choosing, but the menu of choices keeps changing.",
      "At what point does personalization become a knowledge environment?"
    ],
    "sampleStudentOutput": [
      "My feed made the issue seem more extreme because each round selected stronger emotional content.",
      "The algorithm did not lie, but it changed what I thought was common."
    ],
    "extensionTasks": [
      "Students design an alternative feed rule that balances curiosity, reliability, and wellbeing.",
      "Connect the path map to a TOK exhibition object such as a phone screen."
    ],
    "adaptations": [
      "Support: run two rounds only.",
      "Challenge: add engagement feedback so popular cards become more likely next round."
    ],
    "resourcePackPath": "resources/recommendation-rabbit-hole/index.html",
    "cardDeckPath": "resources/recommendation-rabbit-hole/cards.csv",
    "visualPromptPath": "resources/recommendation-rabbit-hole/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Recommendation Rabbit Hole Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Recommendation Rabbit Hole Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Recommendation Rabbit Hole Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When does personalization become distortion?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Recommendation Rabbit Hole Stimulus A",
          "body": "Student-facing stimulus 1: Starting interest: exam stress; feed branches into study tips, productivity hacks, anxiety posts, tutoring adverts, and sleep science. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Recommendation Rabbit Hole Stimulus B",
          "body": "Student-facing stimulus 2: Starting interest: climate action; feed branches into science explainers, activism, conspiracy claims, policy debate, and lifestyle content. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Recommendation Rabbit Hole Reveal / Twist",
          "body": "Student-facing stimulus 3: Starting interest: climate action; feed branches into science explainers, activism, conspiracy claims, policy debate, and lifestyle content. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — A feed can become a path dependency: early clicks shape later knowledge possibilities.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how a feed can become a path dependency: early clicks shape later knowledge possibilities.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When does personalization become distortion?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/recommendation-rabbit-hole/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/recommendation-rabbit-hole/worksheet.pdf",
        "pagePath": "premium/recommendation-rabbit-hole/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/recommendation-rabbit-hole/slides.md",
        "pptxPath": "premium/recommendation-rabbit-hole/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/recommendation-rabbit-hole/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/recommendation-rabbit-hole/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/recommendation-rabbit-hole/teacher-notes.pdf",
        "pagePath": "premium/recommendation-rabbit-hole/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/recommendation-rabbit-hole/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/recommendation-rabbit-hole/run-kit.pdf",
        "pagePath": "premium/recommendation-rabbit-hole/run-kit.html"
      }
    ]
  },
  {
    "id": "facial-recognition-bias-audit",
    "title": "Facial Recognition Bias Audit",
    "category": "Knowledge and Technology",
    "time": "35-45 min",
    "summary": "Students audit a fictional facial recognition system and decide what evidence would justify trusting or limiting it.",
    "bigIdea": "Automated recognition is a knowledge claim whose reliability can vary across contexts and groups.",
    "setup": [
      "Use fictional data and avoid using real student faces or sensitive biometric tools.",
      "Present the system as a claim-making tool: 'this face matches this identity.'"
    ],
    "exampleStimuli": [
      "Audit row: hallway camera, 94% overall accuracy, but higher false positives in low light.",
      "Stakeholder card: student wrongly flagged, administrator managing safety, developer defending the model."
    ],
    "runResources": [
      "Audit table with context, group, false positives, false negatives, and decision risk.",
      "Deployment verdict sheet: use, restrict, revise, reject, and evidence still needed."
    ],
    "sampleTeacherLanguage": [
      "Overall accuracy is not the whole knowledge claim.",
      "Who bears the cost when a technological knower is wrong?"
    ],
    "sampleStudentOutput": [
      "The system looked reliable until the errors were separated by context.",
      "We restricted use because the risk of false accusation outweighed convenience."
    ],
    "extensionTasks": [
      "Students draft a transparency notice for any automated classification system.",
      "Compare algorithmic recognition with human eyewitness recognition."
    ],
    "adaptations": [
      "Support: use two contexts and one error type.",
      "Challenge: ask groups to set a minimum evidence threshold for deployment."
    ],
    "resourcePackPath": "resources/facial-recognition-bias-audit/index.html",
    "cardDeckPath": "resources/facial-recognition-bias-audit/cards.csv",
    "visualPromptPath": "resources/facial-recognition-bias-audit/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Facial Recognition Bias Audit Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Facial Recognition Bias Audit Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Facial Recognition Bias Audit Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When is a technological classification reliable enough to act on?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Facial Recognition Bias Audit Stimulus A",
          "body": "Student-facing stimulus 1: Audit row: hallway camera, 94% overall accuracy, but higher false positives in low light. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Facial Recognition Bias Audit Stimulus B",
          "body": "Student-facing stimulus 2: Stakeholder card: student wrongly flagged, administrator managing safety, developer defending the model. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Facial Recognition Bias Audit Reveal / Twist",
          "body": "Student-facing stimulus 3: Stakeholder card: student wrongly flagged, administrator managing safety, developer defending the model. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Automated recognition is a knowledge claim whose reliability can vary across contexts and groups.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how automated recognition is a knowledge claim whose reliability can vary across contexts and groups.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When is a technological classification reliable enough to act on?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/facial-recognition-bias-audit/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/facial-recognition-bias-audit/worksheet.pdf",
        "pagePath": "premium/facial-recognition-bias-audit/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/facial-recognition-bias-audit/slides.md",
        "pptxPath": "premium/facial-recognition-bias-audit/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/facial-recognition-bias-audit/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/facial-recognition-bias-audit/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/facial-recognition-bias-audit/teacher-notes.pdf",
        "pagePath": "premium/facial-recognition-bias-audit/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/facial-recognition-bias-audit/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/facial-recognition-bias-audit/run-kit.pdf",
        "pagePath": "premium/facial-recognition-bias-audit/run-kit.html"
      }
    ]
  },
  {
    "id": "definition-drift-debate",
    "title": "Definition Drift Debate",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "summary": "Students trace how a key term changes across contexts and debate whether changing definitions change knowledge.",
    "bigIdea": "Definitions stabilize inquiry, but they can also shift with purpose, power, and context.",
    "setup": [
      "Pick one term with genuine but manageable ambiguity.",
      "Use a specific purpose for the debate, such as school policy, research, classification, or exhibition commentary."
    ],
    "exampleStimuli": [
      "Term: intelligence; definitions from test performance, adaptive behavior, creativity, social understanding, and problem-solving.",
      "Term: art; definitions from intention, institution, skill, audience response, and originality."
    ],
    "runResources": [
      "Definition comparison table: includes, excludes, evidence needed, who benefits.",
      "Borderline case cards that test each definition."
    ],
    "sampleTeacherLanguage": [
      "A definition is doing work. What work is this definition doing?",
      "Which cases become easier or harder to know under this definition?"
    ],
    "sampleStudentOutput": [
      "The test-score definition made measurement easy but excluded creativity.",
      "The definition changed what evidence counted as relevant."
    ],
    "extensionTasks": [
      "Students write a definition with a clear purpose and a named limitation.",
      "Compare definitions across two languages or institutions."
    ],
    "adaptations": [
      "Support: use two definitions and three cases.",
      "Challenge: ask students to identify power effects in definition choices."
    ],
    "resourcePackPath": "resources/definition-drift-debate/index.html",
    "cardDeckPath": "resources/definition-drift-debate/cards.csv",
    "visualPromptPath": "resources/definition-drift-debate/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Definition Drift Debate Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Definition Drift Debate Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Definition Drift Debate Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Do definitions describe reality or help construct it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Definition Drift Debate Stimulus A",
          "body": "Student-facing stimulus 1: Term: intelligence; definitions from test performance, adaptive behavior, creativity, social understanding, and problem-solving. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Definition Drift Debate Stimulus B",
          "body": "Student-facing stimulus 2: Term: art; definitions from intention, institution, skill, audience response, and originality. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Definition Drift Debate Reveal / Twist",
          "body": "Student-facing stimulus 3: Term: art; definitions from intention, institution, skill, audience response, and originality. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Definitions stabilize inquiry, but they can also shift with purpose, power, and context.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how definitions stabilize inquiry, but they can also shift with purpose, power, and context.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Do definitions describe reality or help construct it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/definition-drift-debate/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/definition-drift-debate/worksheet.pdf",
        "pagePath": "premium/definition-drift-debate/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/definition-drift-debate/slides.md",
        "pptxPath": "premium/definition-drift-debate/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/definition-drift-debate/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/definition-drift-debate/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/definition-drift-debate/teacher-notes.pdf",
        "pagePath": "premium/definition-drift-debate/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/definition-drift-debate/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/definition-drift-debate/run-kit.pdf",
        "pagePath": "premium/definition-drift-debate/run-kit.html"
      }
    ]
  },
  {
    "id": "graph-caption-framing",
    "title": "Graph Caption Framing",
    "category": "Knowledge and Language",
    "time": "20-30 min",
    "summary": "Students write different captions for the same graph and analyze how language changes what the data seems to show.",
    "bigIdea": "Data needs language before it becomes a public knowledge claim.",
    "setup": [
      "Use a graph simple enough that students can understand it quickly.",
      "Remove the original title and caption so students experience the framing gap."
    ],
    "exampleStimuli": [
      "Line graph: screen time rises during exam week and falls afterward.",
      "Caption contrast: 'Students lose balance during exams' versus 'Temporary study routines shift during assessment week'."
    ],
    "runResources": [
      "Caption frame cards: cautious, alarming, celebratory, skeptical, policy-focused.",
      "Graph context checklist: sample, scale, missing variables, time period, comparison group."
    ],
    "sampleTeacherLanguage": [
      "The graph is not silent; its labels teach us how to read it.",
      "What does your caption invite the reader to conclude?"
    ],
    "sampleStudentOutput": [
      "Our caption was technically true but made the trend sound more permanent than it was.",
      "Changing the title changed which part of the graph seemed important."
    ],
    "extensionTasks": [
      "Students rewrite a real graph caption to make it more cautious and transparent.",
      "Connect graph captions to headlines and public policy claims."
    ],
    "adaptations": [
      "Support: provide caption sentence starters.",
      "Challenge: include axis-scale manipulation and ask students to detect it."
    ],
    "resourcePackPath": "resources/graph-caption-framing/index.html",
    "cardDeckPath": "resources/graph-caption-framing/cards.csv",
    "visualPromptPath": "resources/graph-caption-framing/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Graph Caption Framing Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Graph Caption Framing Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Graph Caption Framing Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When does language become part of evidence?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Graph Caption Framing Stimulus A",
          "body": "Student-facing stimulus 1: Line graph: screen time rises during exam week and falls afterward. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Graph Caption Framing Stimulus B",
          "body": "Student-facing stimulus 2: Caption contrast: 'Students lose balance during exams' versus 'Temporary study routines shift during assessment week'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Graph Caption Framing Reveal / Twist",
          "body": "Student-facing stimulus 3: Caption contrast: 'Students lose balance during exams' versus 'Temporary study routines shift during assessment week'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Data needs language before it becomes a public knowledge claim.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how data needs language before it becomes a public knowledge claim.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When does language become part of evidence?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/graph-caption-framing/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/graph-caption-framing/worksheet.pdf",
        "pagePath": "premium/graph-caption-framing/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/graph-caption-framing/slides.md",
        "pptxPath": "premium/graph-caption-framing/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/graph-caption-framing/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/graph-caption-framing/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/graph-caption-framing/teacher-notes.pdf",
        "pagePath": "premium/graph-caption-framing/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/graph-caption-framing/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/graph-caption-framing/run-kit.pdf",
        "pagePath": "premium/graph-caption-framing/run-kit.html"
      }
    ]
  },
  {
    "id": "base-rate-neglect-clinic",
    "title": "Base Rate Neglect Clinic",
    "category": "Mathematics",
    "time": "30-40 min",
    "summary": "Students diagnose why a vivid test result can mislead when the underlying base rate is ignored.",
    "bigIdea": "Probability judgements depend on the background rate as well as the new evidence.",
    "setup": [
      "Use natural frequencies rather than formulas at first.",
      "Keep the scenario fictional and low-stakes while preserving the structure of diagnostic reasoning."
    ],
    "exampleStimuli": [
      "In 1000 people, 10 have Condition X. The test catches 9 of them but falsely flags 99 people without it.",
      "Question: if someone tests positive, is it closer to 9%, 50%, or 90% likely they have Condition X?"
    ],
    "runResources": [
      "Thousand-person grid or token set with true positives and false positives in different colors.",
      "Risk communication card: percentage version, frequency version, and visual-grid version."
    ],
    "sampleTeacherLanguage": [
      "The test sounds accurate, but we need to ask: accurate among how many real cases?",
      "The denominator is doing quiet but essential knowledge work."
    ],
    "sampleStudentOutput": [
      "I focused on test accuracy and ignored how rare the condition was.",
      "The grid made the false positives visible in a way the percentage did not."
    ],
    "extensionTasks": [
      "Students rewrite a risk claim in three formats and evaluate which is most responsible.",
      "Compare this with legal evidence, medical testing, and spam filtering."
    ],
    "adaptations": [
      "Support: use 100 people and round numbers.",
      "Challenge: ask students to calculate a second scenario with a higher base rate."
    ],
    "resourcePackPath": "resources/base-rate-neglect-clinic/index.html",
    "cardDeckPath": "resources/base-rate-neglect-clinic/cards.csv",
    "visualPromptPath": "resources/base-rate-neglect-clinic/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Base Rate Neglect Clinic Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Base Rate Neglect Clinic Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Base Rate Neglect Clinic Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does representation affect mathematical knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Base Rate Neglect Clinic Stimulus A",
          "body": "Student-facing stimulus 1: In 1000 people, 10 have Condition X. The test catches 9 of them but falsely flags 99 people without it. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Base Rate Neglect Clinic Stimulus B",
          "body": "Student-facing stimulus 2: Question: if someone tests positive, is it closer to 9%, 50%, or 90% likely they have Condition X?. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Base Rate Neglect Clinic Reveal / Twist",
          "body": "Student-facing stimulus 3: Question: if someone tests positive, is it closer to 9%, 50%, or 90% likely they have Condition X?. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Probability judgements depend on the background rate as well as the new evidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how probability judgements depend on the background rate as well as the new evidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does representation affect mathematical knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/base-rate-neglect-clinic/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/base-rate-neglect-clinic/worksheet.pdf",
        "pagePath": "premium/base-rate-neglect-clinic/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/base-rate-neglect-clinic/slides.md",
        "pptxPath": "premium/base-rate-neglect-clinic/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/base-rate-neglect-clinic/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/base-rate-neglect-clinic/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/base-rate-neglect-clinic/teacher-notes.pdf",
        "pagePath": "premium/base-rate-neglect-clinic/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/base-rate-neglect-clinic/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/base-rate-neglect-clinic/run-kit.pdf",
        "pagePath": "premium/base-rate-neglect-clinic/run-kit.html"
      }
    ]
  },
  {
    "id": "correlation-illusion-cards",
    "title": "Correlation Illusion Cards",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students sort paired-variable cards and discover how small samples and salient cases create illusory correlations.",
    "bigIdea": "Patterns can feel meaningful before they are mathematically justified.",
    "setup": [
      "Build card sets where confirming cases are memorable but not actually dominant.",
      "Ask for a gut judgement before students count the full table."
    ],
    "exampleStimuli": [
      "Cards pair 'used flashcards / did not use flashcards' with 'high quiz score / lower quiz score'.",
      "A few vivid cards show flashcards plus high scores, while the full set is mixed."
    ],
    "runResources": [
      "Four-cell table mat for sorting all pairings.",
      "Salience marker: students star the cards they remembered before counting."
    ],
    "sampleTeacherLanguage": [
      "A memorable case is not automatically representative evidence.",
      "Which cell of the table did your intuition ignore?"
    ],
    "sampleStudentOutput": [
      "I remembered the flashcard success stories and forgot the non-flashcard success stories.",
      "Counting all four cells weakened the pattern I thought I saw."
    ],
    "extensionTasks": [
      "Students collect a harmless class dataset and test for perceived versus counted patterns.",
      "Connect to stereotypes, health claims, or study advice."
    ],
    "adaptations": [
      "Support: color-code the four table cells.",
      "Challenge: ask students to estimate strength of association before and after counting."
    ],
    "resourcePackPath": "resources/correlation-illusion-cards/index.html",
    "cardDeckPath": "resources/correlation-illusion-cards/cards.csv",
    "visualPromptPath": "resources/correlation-illusion-cards/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Correlation Illusion Cards Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Correlation Illusion Cards Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Correlation Illusion Cards Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When does a perceived pattern become evidence?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Correlation Illusion Cards Stimulus A",
          "body": "Student-facing stimulus 1: Cards pair 'used flashcards / did not use flashcards' with 'high quiz score / lower quiz score'. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Correlation Illusion Cards Stimulus B",
          "body": "Student-facing stimulus 2: A few vivid cards show flashcards plus high scores, while the full set is mixed. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Correlation Illusion Cards Reveal / Twist",
          "body": "Student-facing stimulus 3: A few vivid cards show flashcards plus high scores, while the full set is mixed. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Patterns can feel meaningful before they are mathematically justified.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how patterns can feel meaningful before they are mathematically justified.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When does a perceived pattern become evidence?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/correlation-illusion-cards/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/correlation-illusion-cards/worksheet.pdf",
        "pagePath": "premium/correlation-illusion-cards/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/correlation-illusion-cards/slides.md",
        "pptxPath": "premium/correlation-illusion-cards/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/correlation-illusion-cards/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/correlation-illusion-cards/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/correlation-illusion-cards/teacher-notes.pdf",
        "pagePath": "premium/correlation-illusion-cards/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/correlation-illusion-cards/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/correlation-illusion-cards/run-kit.pdf",
        "pagePath": "premium/correlation-illusion-cards/run-kit.html"
      }
    ]
  },
  {
    "id": "peer-review-filter",
    "title": "Peer Review Filter",
    "category": "Natural Sciences",
    "time": "30-40 min",
    "summary": "Students act as reviewers for a fictional study and decide whether flaws require revision, rejection, or cautious acceptance.",
    "bigIdea": "Scientific knowledge is filtered by community criticism, not just produced by individual discovery.",
    "setup": [
      "Write the fictional study so it has strengths as well as flaws.",
      "Give reviewers different priorities to simulate real disagreement."
    ],
    "exampleStimuli": [
      "Study claim: a lavender scent improves memory scores by 18% in one class of 18 students.",
      "Flaws: no random assignment, small sample, unclear scoring, but transparent method and plausible follow-up."
    ],
    "runResources": [
      "Reviewer checklist: sample, control, measurement, claim size, alternative explanation, ethical issue.",
      "Decision card: accept, minor revision, major revision, reject, or invite replication."
    ],
    "sampleTeacherLanguage": [
      "Peer review is not a truth machine; it is organized criticism.",
      "Which flaw changes the conclusion, and which flaw can be repaired?"
    ],
    "sampleStudentOutput": [
      "We recommended major revision because the claim was larger than the method justified.",
      "The study was interesting but not yet reliable enough for a strong headline."
    ],
    "extensionTasks": [
      "Students rewrite the study conclusion to match the evidence more responsibly.",
      "Compare peer review with fact-checking, editing, or legal cross-examination."
    ],
    "adaptations": [
      "Support: provide three marked flaws.",
      "Challenge: include conflicting reviewer recommendations and require an editor decision."
    ],
    "resourcePackPath": "resources/peer-review-filter/index.html",
    "cardDeckPath": "resources/peer-review-filter/cards.csv",
    "visualPromptPath": "resources/peer-review-filter/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Peer Review Filter Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Peer Review Filter Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Peer Review Filter Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does criticism strengthen knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Peer Review Filter Stimulus A",
          "body": "Student-facing stimulus 1: Study claim: a lavender scent improves memory scores by 18% in one class of 18 students. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Peer Review Filter Stimulus B",
          "body": "Student-facing stimulus 2: Flaws: no random assignment, small sample, unclear scoring, but transparent method and plausible follow-up. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Peer Review Filter Reveal / Twist",
          "body": "Student-facing stimulus 3: Flaws: no random assignment, small sample, unclear scoring, but transparent method and plausible follow-up. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Scientific knowledge is filtered by community criticism, not just produced by individual discovery.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how scientific knowledge is filtered by community criticism, not just produced by individual discovery.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does criticism strengthen knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/peer-review-filter/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/peer-review-filter/worksheet.pdf",
        "pagePath": "premium/peer-review-filter/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/peer-review-filter/slides.md",
        "pptxPath": "premium/peer-review-filter/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/peer-review-filter/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/peer-review-filter/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/peer-review-filter/teacher-notes.pdf",
        "pagePath": "premium/peer-review-filter/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/peer-review-filter/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/peer-review-filter/run-kit.pdf",
        "pagePath": "premium/peer-review-filter/run-kit.html"
      }
    ]
  },
  {
    "id": "measurement-changes-phenomenon",
    "title": "Measurement Changes Phenomenon",
    "category": "Natural Sciences",
    "time": "25-35 min",
    "summary": "Students compare different ways of measuring the same phenomenon and see how instruments shape the result.",
    "bigIdea": "Measurement does not merely capture phenomena; it operationalizes them.",
    "setup": [
      "Choose a phenomenon that can be measured quickly in several plausible ways.",
      "Make each group use a different operational definition before comparing results."
    ],
    "exampleStimuli": [
      "Measure classroom attention by eyes on speaker, notes taken, response accuracy, or self-reported focus.",
      "Measure noise by peak loudness, average loudness, teacher annoyance, or number of interruptions."
    ],
    "runResources": [
      "Measurement design card: concept, operational definition, tool, weakness.",
      "Comparison table for results from different measures."
    ],
    "sampleTeacherLanguage": [
      "Before we ask what the data says, ask what the data is a measure of.",
      "Did your method measure the phenomenon or one convenient version of it?"
    ],
    "sampleStudentOutput": [
      "Our attention measure rewarded quiet students even if they were not understanding.",
      "Different tools produced different data because they defined the target differently."
    ],
    "extensionTasks": [
      "Students improve one weak measure and explain the trade-off.",
      "Connect to intelligence tests, wellbeing surveys, or environmental measurements."
    ],
    "adaptations": [
      "Support: compare two measurement methods only.",
      "Challenge: ask students to evaluate validity and reliability separately."
    ],
    "resourcePackPath": "resources/measurement-changes-phenomenon/index.html",
    "cardDeckPath": "resources/measurement-changes-phenomenon/cards.csv",
    "visualPromptPath": "resources/measurement-changes-phenomenon/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Measurement Changes Phenomenon Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Measurement Changes Phenomenon Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Measurement Changes Phenomenon Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does measurement reveal or define what is being studied?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Measurement Changes Phenomenon Stimulus A",
          "body": "Student-facing stimulus 1: Measure classroom attention by eyes on speaker, notes taken, response accuracy, or self-reported focus. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Measurement Changes Phenomenon Stimulus B",
          "body": "Student-facing stimulus 2: Measure noise by peak loudness, average loudness, teacher annoyance, or number of interruptions. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Measurement Changes Phenomenon Reveal / Twist",
          "body": "Student-facing stimulus 3: Measure noise by peak loudness, average loudness, teacher annoyance, or number of interruptions. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Measurement does not merely capture phenomena; it operationalizes them.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how measurement does not merely capture phenomena; it operationalizes them.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does measurement reveal or define what is being studied?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/measurement-changes-phenomenon/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/measurement-changes-phenomenon/worksheet.pdf",
        "pagePath": "premium/measurement-changes-phenomenon/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/measurement-changes-phenomenon/slides.md",
        "pptxPath": "premium/measurement-changes-phenomenon/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/measurement-changes-phenomenon/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/measurement-changes-phenomenon/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/measurement-changes-phenomenon/teacher-notes.pdf",
        "pagePath": "premium/measurement-changes-phenomenon/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/measurement-changes-phenomenon/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/measurement-changes-phenomenon/run-kit.pdf",
        "pagePath": "premium/measurement-changes-phenomenon/run-kit.html"
      }
    ]
  },
  {
    "id": "anchoring-price-experiment",
    "title": "Anchoring Price Experiment",
    "category": "Human Sciences",
    "time": "20-30 min",
    "summary": "Students estimate values after seeing different anchors and evaluate how irrelevant numbers shape judgement.",
    "bigIdea": "Human judgement can be pulled by context even when the context is not valid evidence.",
    "setup": [
      "Randomly distribute high-anchor and low-anchor sheets without announcing the difference.",
      "Use estimates where students are unlikely to know the exact answer."
    ],
    "exampleStimuli": [
      "High anchor: Is this backpack worth more or less than $180? Estimate its value.",
      "Low anchor: Is this backpack worth more or less than $25? Estimate its value."
    ],
    "runResources": [
      "Two estimate sheet versions with anchor prompts.",
      "Class results table comparing group averages and spread."
    ],
    "sampleTeacherLanguage": [
      "The anchor was not evidence, but it still entered the judgement.",
      "How could a human scientist show that the context caused a difference?"
    ],
    "sampleStudentOutput": [
      "The high-anchor group gave higher estimates even though we saw the same object.",
      "I did not think the anchor affected me until the class averages were compared."
    ],
    "extensionTasks": [
      "Students design a follow-up experiment with random assignment and a control group.",
      "Connect anchoring to pricing, negotiation, sentencing, or predicted grades."
    ],
    "adaptations": [
      "Support: use one object and two anchor sheets.",
      "Challenge: add a no-anchor control group."
    ],
    "resourcePackPath": "resources/anchoring-price-experiment/index.html",
    "cardDeckPath": "resources/anchoring-price-experiment/cards.csv",
    "visualPromptPath": "resources/anchoring-price-experiment/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Anchoring Price Experiment Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Anchoring Price Experiment Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Anchoring Price Experiment Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can knowers fully explain their own judgements?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Anchoring Price Experiment Stimulus A",
          "body": "Student-facing stimulus 1: High anchor: Is this backpack worth more or less than $180? Estimate its value. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Anchoring Price Experiment Stimulus B",
          "body": "Student-facing stimulus 2: Low anchor: Is this backpack worth more or less than $25? Estimate its value. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Anchoring Price Experiment Reveal / Twist",
          "body": "Student-facing stimulus 3: Low anchor: Is this backpack worth more or less than $25? Estimate its value. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Human judgement can be pulled by context even when the context is not valid evidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how human judgement can be pulled by context even when the context is not valid evidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can knowers fully explain their own judgements?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/anchoring-price-experiment/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/anchoring-price-experiment/worksheet.pdf",
        "pagePath": "premium/anchoring-price-experiment/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/anchoring-price-experiment/slides.md",
        "pptxPath": "premium/anchoring-price-experiment/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/anchoring-price-experiment/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/anchoring-price-experiment/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/anchoring-price-experiment/teacher-notes.pdf",
        "pagePath": "premium/anchoring-price-experiment/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/anchoring-price-experiment/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/anchoring-price-experiment/run-kit.pdf",
        "pagePath": "premium/anchoring-price-experiment/run-kit.html"
      }
    ]
  },
  {
    "id": "observer-effect-roleplay",
    "title": "Observer Effect Roleplay",
    "category": "Human Sciences",
    "time": "30-40 min",
    "summary": "Students roleplay a classroom observation study and examine how being observed changes behavior and evidence.",
    "bigIdea": "In human sciences, observation can become part of the situation being observed.",
    "setup": [
      "Make the observation visible and ethical; students should know the activity studies observation effects.",
      "Use a harmless group task where behavior can naturally vary."
    ],
    "exampleStimuli": [
      "Task: build the tallest paper tower in five minutes while observers visibly tally leadership, interruptions, and suggestions.",
      "Second round: observers sit farther away and use a simpler tally scheme."
    ],
    "runResources": [
      "Behavior coding sheet with three visible behaviors.",
      "Participant reflection card: what changed because you knew you were observed?"
    ],
    "sampleTeacherLanguage": [
      "In human sciences, the method can enter the behavior it measures.",
      "Which version gave cleaner data, and which version was more natural?"
    ],
    "sampleStudentOutput": [
      "I spoke more carefully because I saw someone tallying interruptions.",
      "The visible observation made the data easier to collect but less natural."
    ],
    "extensionTasks": [
      "Students redesign the observation to improve validity while preserving consent.",
      "Connect to classroom observations, workplace studies, and ethnography."
    ],
    "adaptations": [
      "Support: use two coded behaviors.",
      "Challenge: compare observer agreement between two coders."
    ],
    "resourcePackPath": "resources/observer-effect-roleplay/index.html",
    "cardDeckPath": "resources/observer-effect-roleplay/cards.csv",
    "visualPromptPath": "resources/observer-effect-roleplay/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Observer Effect Roleplay Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Observer Effect Roleplay Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Observer Effect Roleplay Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can observation alter what is known?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Observer Effect Roleplay Stimulus A",
          "body": "Student-facing stimulus 1: Task: build the tallest paper tower in five minutes while observers visibly tally leadership, interruptions, and suggestions. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Observer Effect Roleplay Stimulus B",
          "body": "Student-facing stimulus 2: Second round: observers sit farther away and use a simpler tally scheme. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Observer Effect Roleplay Reveal / Twist",
          "body": "Student-facing stimulus 3: Second round: observers sit farther away and use a simpler tally scheme. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — In human sciences, observation can become part of the situation being observed.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how in human sciences, observation can become part of the situation being observed.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can observation alter what is known?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/observer-effect-roleplay/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/observer-effect-roleplay/worksheet.pdf",
        "pagePath": "premium/observer-effect-roleplay/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/observer-effect-roleplay/slides.md",
        "pptxPath": "premium/observer-effect-roleplay/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/observer-effect-roleplay/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/observer-effect-roleplay/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/observer-effect-roleplay/teacher-notes.pdf",
        "pagePath": "premium/observer-effect-roleplay/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/observer-effect-roleplay/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/observer-effect-roleplay/run-kit.pdf",
        "pagePath": "premium/observer-effect-roleplay/run-kit.html"
      }
    ]
  },
  {
    "id": "memory-versus-monument",
    "title": "Memory versus Monument",
    "category": "History",
    "time": "30-45 min",
    "summary": "Students compare personal memory, public memorials, and archival evidence as different ways of knowing the past.",
    "bigIdea": "Public memory and historical knowledge overlap, but they are not the same practice.",
    "setup": [
      "Use a local or familiar memorial only if the class context is suitable; otherwise use a fictional school memorial.",
      "Prepare three sources with clearly different purposes."
    ],
    "exampleStimuli": [
      "Fictional memorial: a plaque celebrating a former headteacher beside a diary extract from a student and a board meeting note.",
      "Comparison prompt: What does each source ask the public to remember?"
    ],
    "runResources": [
      "Source comparison chart: purpose, evidence, emotion, omission, reliability.",
      "Memory/history Venn diagram."
    ],
    "sampleTeacherLanguage": [
      "A memorial is not a textbook page; it is a public act of selection.",
      "What kind of truth is the memorial trying to preserve?"
    ],
    "sampleStudentOutput": [
      "The plaque communicated gratitude, while the archive showed conflict and compromise.",
      "The memorial was evidence of values as much as evidence of the event."
    ],
    "extensionTasks": [
      "Students design a revised plaque with a short note about what it includes and excludes.",
      "Connect to debates about museums, statues, and national memory."
    ],
    "adaptations": [
      "Support: use a fictional school example.",
      "Challenge: include two public audiences with competing needs."
    ],
    "resourcePackPath": "resources/memory-versus-monument/index.html",
    "cardDeckPath": "resources/memory-versus-monument/cards.csv",
    "visualPromptPath": "resources/memory-versus-monument/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Memory versus Monument Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Memory versus Monument Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Memory versus Monument Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How is public memory different from historical knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Memory versus Monument Stimulus A",
          "body": "Student-facing stimulus 1: Fictional memorial: a plaque celebrating a former headteacher beside a diary extract from a student and a board meeting note. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Memory versus Monument Stimulus B",
          "body": "Student-facing stimulus 2: Comparison prompt: What does each source ask the public to remember?. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Memory versus Monument Reveal / Twist",
          "body": "Student-facing stimulus 3: Comparison prompt: What does each source ask the public to remember?. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Public memory and historical knowledge overlap, but they are not the same practice.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how public memory and historical knowledge overlap, but they are not the same practice.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How is public memory different from historical knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/memory-versus-monument/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/memory-versus-monument/worksheet.pdf",
        "pagePath": "premium/memory-versus-monument/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/memory-versus-monument/slides.md",
        "pptxPath": "premium/memory-versus-monument/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/memory-versus-monument/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/memory-versus-monument/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/memory-versus-monument/teacher-notes.pdf",
        "pagePath": "premium/memory-versus-monument/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/memory-versus-monument/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/memory-versus-monument/run-kit.pdf",
        "pagePath": "premium/memory-versus-monument/run-kit.html"
      }
    ]
  },
  {
    "id": "timeline-compression-trap",
    "title": "Timeline Compression Trap",
    "category": "History",
    "time": "25-35 min",
    "summary": "Students build compressed timelines and see how scale choices make historical change appear sudden or gradual.",
    "bigIdea": "The scale of a timeline shapes historical interpretation.",
    "setup": [
      "Use an event sequence with both long-term causes and sudden triggers.",
      "Give groups different physical lengths of timeline paper."
    ],
    "exampleStimuli": [
      "School example: policy change develops over two years, but a viral incident makes it look sudden.",
      "History example: reform movement builds slowly before one visible law or protest."
    ],
    "runResources": [
      "Event cards with dates, descriptions, and category labels.",
      "Two timeline strips: compressed overview and expanded close-up."
    ],
    "sampleTeacherLanguage": [
      "Your timeline is making an argument about pace and importance.",
      "What disappears when the scale changes?"
    ],
    "sampleStudentOutput": [
      "The compressed version made the change look sudden and inevitable.",
      "The expanded version showed earlier warnings and failed attempts."
    ],
    "extensionTasks": [
      "Students add a third timeline focused on one actor's perspective.",
      "Connect timeline scale to causation essays in history."
    ],
    "adaptations": [
      "Support: use six event cards.",
      "Challenge: require students to mark continuity, change, and turning points separately."
    ],
    "resourcePackPath": "resources/timeline-compression-trap/index.html",
    "cardDeckPath": "resources/timeline-compression-trap/cards.csv",
    "visualPromptPath": "resources/timeline-compression-trap/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Timeline Compression Trap Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Timeline Compression Trap Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Timeline Compression Trap Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How do historical representations shape interpretation?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Timeline Compression Trap Stimulus A",
          "body": "Student-facing stimulus 1: School example: policy change develops over two years, but a viral incident makes it look sudden. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Timeline Compression Trap Stimulus B",
          "body": "Student-facing stimulus 2: History example: reform movement builds slowly before one visible law or protest. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Timeline Compression Trap Reveal / Twist",
          "body": "Student-facing stimulus 3: History example: reform movement builds slowly before one visible law or protest. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — The scale of a timeline shapes historical interpretation.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how the scale of a timeline shapes historical interpretation.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How do historical representations shape interpretation?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/timeline-compression-trap/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/timeline-compression-trap/worksheet.pdf",
        "pagePath": "premium/timeline-compression-trap/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/timeline-compression-trap/slides.md",
        "pptxPath": "premium/timeline-compression-trap/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/timeline-compression-trap/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/timeline-compression-trap/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/timeline-compression-trap/teacher-notes.pdf",
        "pagePath": "premium/timeline-compression-trap/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/timeline-compression-trap/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/timeline-compression-trap/run-kit.pdf",
        "pagePath": "premium/timeline-compression-trap/run-kit.html"
      }
    ]
  },
  {
    "id": "context-collapse-gallery",
    "title": "Context Collapse Gallery",
    "category": "The Arts",
    "time": "25-35 min",
    "summary": "Students interpret an artwork with missing, false, and restored context to see how context changes meaning.",
    "bigIdea": "Artistic meaning is shaped by the context viewers bring and the context institutions provide.",
    "setup": [
      "Choose an image that students can interpret without specialized knowledge but that changes with context.",
      "Prepare the misleading label carefully so it is plausible but later correctable."
    ],
    "exampleStimuli": [
      "Image: a staged-looking photograph of an empty room; label one says 'after evacuation', fuller context says it is a theatre set.",
      "Image: abstract painting; label one gives a false title, fuller context reveals artist intention and exhibition setting."
    ],
    "runResources": [
      "Three interpretation slips: no context, partial context, fuller context.",
      "Stability/change table: visual evidence that stayed, meaning that changed."
    ],
    "sampleTeacherLanguage": [
      "Notice what changed in your interpretation even though the image stayed still.",
      "Which claims were in the artwork, and which claims came from the label?"
    ],
    "sampleStudentOutput": [
      "I treated the room as documentary evidence until the context revealed it was staged.",
      "The visual details stayed the same but their meaning changed."
    ],
    "extensionTasks": [
      "Students write two wall labels that make the same image support different interpretations.",
      "Connect to museum authority and audience knowledge."
    ],
    "adaptations": [
      "Support: use two labels only.",
      "Challenge: ask students to defend a reasonable interpretation formed from incomplete context."
    ],
    "resourcePackPath": "resources/context-collapse-gallery/index.html",
    "cardDeckPath": "resources/context-collapse-gallery/cards.csv",
    "visualPromptPath": "resources/context-collapse-gallery/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Context Collapse Gallery Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Context Collapse Gallery Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Context Collapse Gallery Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does context reveal meaning or create it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Context Collapse Gallery Stimulus A",
          "body": "Student-facing stimulus 1: Image: a staged-looking photograph of an empty room; label one says 'after evacuation', fuller context says it is a theatre set. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Context Collapse Gallery Stimulus B",
          "body": "Student-facing stimulus 2: Image: abstract painting; label one gives a false title, fuller context reveals artist intention and exhibition setting. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Context Collapse Gallery Reveal / Twist",
          "body": "Student-facing stimulus 3: Image: abstract painting; label one gives a false title, fuller context reveals artist intention and exhibition setting. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Artistic meaning is shaped by the context viewers bring and the context institutions provide.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how artistic meaning is shaped by the context viewers bring and the context institutions provide.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does context reveal meaning or create it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/context-collapse-gallery/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/context-collapse-gallery/worksheet.pdf",
        "pagePath": "premium/context-collapse-gallery/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/context-collapse-gallery/slides.md",
        "pptxPath": "premium/context-collapse-gallery/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/context-collapse-gallery/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/context-collapse-gallery/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/context-collapse-gallery/teacher-notes.pdf",
        "pagePath": "premium/context-collapse-gallery/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/context-collapse-gallery/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/context-collapse-gallery/run-kit.pdf",
        "pagePath": "premium/context-collapse-gallery/run-kit.html"
      }
    ]
  },
  {
    "id": "soundtrack-changes-scene",
    "title": "Soundtrack Changes Scene",
    "category": "The Arts",
    "time": "20-30 min",
    "summary": "Students pair the same silent scene with different soundtracks and analyze how music changes interpretation.",
    "bigIdea": "Artistic elements can guide emotion and interpretation before explicit evidence is considered.",
    "setup": [
      "Use a simple silent scene with ambiguous emotion or intention.",
      "If audio playback is awkward, use written soundtrack cards instead of actual music."
    ],
    "exampleStimuli": [
      "Scene: a person walks quickly down an empty corridor and opens a door.",
      "Soundtrack cards: playful pizzicato, tense low strings, nostalgic piano, triumphant brass."
    ],
    "runResources": [
      "Scene interpretation chart: soundtrack, mood, story, evidence, confidence.",
      "Music feature cards: tempo, pitch, volume, rhythm, harmony, cultural association."
    ],
    "sampleTeacherLanguage": [
      "The visual evidence stayed constant; the emotional frame changed.",
      "What did the music make you expect before anything happened?"
    ],
    "sampleStudentOutput": [
      "With tense music, the door felt dangerous; with playful music, it felt comic.",
      "The soundtrack changed my prediction more than the image did."
    ],
    "extensionTasks": [
      "Students storyboard the same scene for two genres and identify evidence for each reading.",
      "Connect to film, advertising, and political campaign videos."
    ],
    "adaptations": [
      "Support: use two contrasting soundtrack cards.",
      "Challenge: ask students to identify which musical feature caused the meaning shift."
    ],
    "resourcePackPath": "resources/soundtrack-changes-scene/index.html",
    "cardDeckPath": "resources/soundtrack-changes-scene/cards.csv",
    "visualPromptPath": "resources/soundtrack-changes-scene/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Soundtrack Changes Scene Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Soundtrack Changes Scene Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Soundtrack Changes Scene Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does emotion shape interpretation in the arts?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Soundtrack Changes Scene Stimulus A",
          "body": "Student-facing stimulus 1: Scene: a person walks quickly down an empty corridor and opens a door. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Soundtrack Changes Scene Stimulus B",
          "body": "Student-facing stimulus 2: Soundtrack cards: playful pizzicato, tense low strings, nostalgic piano, triumphant brass. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Soundtrack Changes Scene Reveal / Twist",
          "body": "Student-facing stimulus 3: Soundtrack cards: playful pizzicato, tense low strings, nostalgic piano, triumphant brass. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Artistic elements can guide emotion and interpretation before explicit evidence is considered.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how artistic elements can guide emotion and interpretation before explicit evidence is considered.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does emotion shape interpretation in the arts?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/soundtrack-changes-scene/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/soundtrack-changes-scene/worksheet.pdf",
        "pagePath": "premium/soundtrack-changes-scene/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/soundtrack-changes-scene/slides.md",
        "pptxPath": "premium/soundtrack-changes-scene/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/soundtrack-changes-scene/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/soundtrack-changes-scene/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/soundtrack-changes-scene/teacher-notes.pdf",
        "pagePath": "premium/soundtrack-changes-scene/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/soundtrack-changes-scene/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/soundtrack-changes-scene/run-kit.pdf",
        "pagePath": "premium/soundtrack-changes-scene/run-kit.html"
      }
    ]
  },
  {
    "id": "method-swap-challenge",
    "title": "Method Swap Challenge",
    "category": "Cross-AOK",
    "time": "35-45 min",
    "summary": "Students apply one AOK's method to another AOK's question and evaluate what breaks, transfers, or improves.",
    "bigIdea": "Methods carry assumptions about what can be known and how it should be justified.",
    "setup": [
      "Prepare intentionally awkward pairings, such as proving a poem or interpreting a chemical reaction as art.",
      "Frame the first round as playful so students can see method assumptions clearly."
    ],
    "exampleStimuli": [
      "Question: Is this policy fair? Method card: mathematical proof.",
      "Question: What caused this revolution? Method card: controlled experiment."
    ],
    "runResources": [
      "Question cards, method cards, and mismatch reflection sheet.",
      "Evaluation grid: reveals, distorts, cannot answer, better method."
    ],
    "sampleTeacherLanguage": [
      "A method is not just a tool; it carries a picture of what knowledge should look like.",
      "What did your method make impossible to see?"
    ],
    "sampleStudentOutput": [
      "The proof method forced us to define fairness too narrowly.",
      "The archive method gave context but could not produce experimental control."
    ],
    "extensionTasks": [
      "Students create their own method-swap card set for another class.",
      "Connect to interdisciplinary research and TOK essay comparisons."
    ],
    "adaptations": [
      "Support: provide obvious method matches after the mismatch round.",
      "Challenge: ask students to combine two methods and justify the combination."
    ],
    "resourcePackPath": "resources/method-swap-challenge/index.html",
    "cardDeckPath": "resources/method-swap-challenge/cards.csv",
    "visualPromptPath": "resources/method-swap-challenge/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Method Swap Challenge Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Method Swap Challenge Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Method Swap Challenge Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How do methods shape what can be known?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Method Swap Challenge Stimulus A",
          "body": "Student-facing stimulus 1: Question: Is this policy fair? Method card: mathematical proof. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Method Swap Challenge Stimulus B",
          "body": "Student-facing stimulus 2: Question: What caused this revolution? Method card: controlled experiment. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Method Swap Challenge Reveal / Twist",
          "body": "Student-facing stimulus 3: Question: What caused this revolution? Method card: controlled experiment. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Methods carry assumptions about what can be known and how it should be justified.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how methods carry assumptions about what can be known and how it should be justified.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How do methods shape what can be known?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/method-swap-challenge/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/method-swap-challenge/worksheet.pdf",
        "pagePath": "premium/method-swap-challenge/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/method-swap-challenge/slides.md",
        "pptxPath": "premium/method-swap-challenge/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/method-swap-challenge/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/method-swap-challenge/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/method-swap-challenge/teacher-notes.pdf",
        "pagePath": "premium/method-swap-challenge/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/method-swap-challenge/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/method-swap-challenge/run-kit.pdf",
        "pagePath": "premium/method-swap-challenge/run-kit.html"
      }
    ]
  },
  {
    "id": "expertise-boundary-clinic",
    "title": "Expertise Boundary Clinic",
    "category": "Cross-AOK",
    "time": "30-40 min",
    "summary": "Students decide when expert authority should be trusted, challenged, or limited across different knowledge claims.",
    "bigIdea": "Expertise is powerful evidence within boundaries, but those boundaries must be identified.",
    "setup": [
      "Create expert cards that include real strengths and clear limits.",
      "Include claims that are inside, adjacent to, and outside the expert's domain."
    ],
    "exampleStimuli": [
      "Expert: climate scientist; claims about atmospheric data, energy policy, election strategy, and personal lifestyle choices.",
      "Expert: novelist; claims about narrative technique, historical fact, psychology, and moral value."
    ],
    "runResources": [
      "Boundary checklist: domain, evidence, consensus, conflict of interest, uncertainty.",
      "Claim sorting mat: inside expertise, adjacent, outside, needs more evidence."
    ],
    "sampleTeacherLanguage": [
      "Respecting expertise includes knowing its boundaries.",
      "What would make this expert's claim stronger or weaker evidence?"
    ],
    "sampleStudentOutput": [
      "The expert had strong authority on data interpretation but less on policy trade-offs.",
      "We trusted the expert more when they stated uncertainty and evidence limits."
    ],
    "extensionTasks": [
      "Students evaluate an expert source they might use for a TOK exhibition commentary.",
      "Compare expert authority in medicine, art criticism, law, and mathematics."
    ],
    "adaptations": [
      "Support: use one expert and four claim cards.",
      "Challenge: include a conflict of interest or expert disagreement."
    ],
    "resourcePackPath": "resources/expertise-boundary-clinic/index.html",
    "cardDeckPath": "resources/expertise-boundary-clinic/cards.csv",
    "visualPromptPath": "resources/expertise-boundary-clinic/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Expertise Boundary Clinic Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Expertise Boundary Clinic Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Expertise Boundary Clinic Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When is expert authority a good reason to believe?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Expertise Boundary Clinic Stimulus A",
          "body": "Student-facing stimulus 1: Expert: climate scientist; claims about atmospheric data, energy policy, election strategy, and personal lifestyle choices. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Expertise Boundary Clinic Stimulus B",
          "body": "Student-facing stimulus 2: Expert: novelist; claims about narrative technique, historical fact, psychology, and moral value. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Expertise Boundary Clinic Reveal / Twist",
          "body": "Student-facing stimulus 3: Expert: novelist; claims about narrative technique, historical fact, psychology, and moral value. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Expertise is powerful evidence within boundaries, but those boundaries must be identified.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how expertise is powerful evidence within boundaries, but those boundaries must be identified.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When is expert authority a good reason to believe?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/expertise-boundary-clinic/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/expertise-boundary-clinic/worksheet.pdf",
        "pagePath": "premium/expertise-boundary-clinic/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/expertise-boundary-clinic/slides.md",
        "pptxPath": "premium/expertise-boundary-clinic/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/expertise-boundary-clinic/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/expertise-boundary-clinic/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/expertise-boundary-clinic/teacher-notes.pdf",
        "pagePath": "premium/expertise-boundary-clinic/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/expertise-boundary-clinic/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/expertise-boundary-clinic/run-kit.pdf",
        "pagePath": "premium/expertise-boundary-clinic/run-kit.html"
      }
    ]
  },
  {
    "id": "source-amnesia-trace",
    "title": "Source Amnesia Trace",
    "category": "Knowledge and the Knower",
    "time": "20-30 min",
    "summary": "Students hear claims from different sources, then later test whether they remember the claim, the source, or both.",
    "bigIdea": "Remembering a claim is not the same as remembering why it deserved trust.",
    "setup": [
      "Pair each claim with a visibly different source label, then remove the labels for the recall phase.",
      "Use a short distractor task between exposure and recall so source memory has time to fade."
    ],
    "exampleStimuli": [
      "Claim: 'Spacing revision improves long-term memory' paired first with 'cognitive scientist', then later shown without source.",
      "Claim: 'Blue light glasses double focus' paired first with 'online advert', then later shown without source."
    ],
    "runResources": [
      "Source-trace answer sheet with columns: remembered claim, remembered source, confidence, revised trust.",
      "Source label cards: expert, textbook, friend, advert, anonymous post, personal experience."
    ],
    "sampleTeacherLanguage": [
      "A claim can feel familiar even when its original justification has disappeared.",
      "What should happen to trust when source memory is weak?"
    ],
    "sampleStudentOutput": [
      "I remembered the claim but not that it came from an advert, so I trusted it too quickly.",
      "The source changed whether the same sentence counted as good evidence."
    ],
    "extensionTasks": [
      "Students audit one belief they hold and trace where it probably came from.",
      "Connect source amnesia to citation, rumours, and social media reposting."
    ],
    "adaptations": [
      "Support: use six claims and three source types.",
      "Challenge: include two claims that are true but from weak sources and false but from confident sources."
    ],
    "resourcePackPath": "resources/source-amnesia-trace/index.html",
    "cardDeckPath": "resources/source-amnesia-trace/cards.csv",
    "visualPromptPath": "resources/source-amnesia-trace/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Source Amnesia Trace Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Source Amnesia Trace Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Source Amnesia Trace Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "What happens to justification when we forget the source of a belief?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Source Amnesia Trace Stimulus A",
          "body": "Student-facing stimulus 1: Claim: 'Spacing revision improves long-term memory' paired first with 'cognitive scientist', then later shown without source. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Source Amnesia Trace Stimulus B",
          "body": "Student-facing stimulus 2: Claim: 'Blue light glasses double focus' paired first with 'online advert', then later shown without source. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Source Amnesia Trace Reveal / Twist",
          "body": "Student-facing stimulus 3: Claim: 'Blue light glasses double focus' paired first with 'online advert', then later shown without source. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Remembering a claim is not the same as remembering why it deserved trust.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how remembering a claim is not the same as remembering why it deserved trust.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "What happens to justification when we forget the source of a belief?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/source-amnesia-trace/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/source-amnesia-trace/worksheet.pdf",
        "pagePath": "premium/source-amnesia-trace/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/source-amnesia-trace/slides.md",
        "pptxPath": "premium/source-amnesia-trace/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/source-amnesia-trace/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/source-amnesia-trace/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/source-amnesia-trace/teacher-notes.pdf",
        "pagePath": "premium/source-amnesia-trace/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/source-amnesia-trace/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/source-amnesia-trace/run-kit.pdf",
        "pagePath": "premium/source-amnesia-trace/run-kit.html"
      }
    ]
  },
  {
    "id": "prompt-framing-lab",
    "title": "Prompt Framing Lab",
    "category": "Knowledge and Technology",
    "time": "30-40 min",
    "summary": "Students compare how different prompts can make the same AI-style task produce different answers and assumptions.",
    "bigIdea": "A prompt is not just a request; it frames what kind of knowledge output is likely.",
    "setup": [
      "Use teacher-written mock outputs if live AI access is not appropriate.",
      "Keep the task constant while changing only the prompt wording."
    ],
    "exampleStimuli": [
      "Neutral prompt: 'Explain whether homework improves learning.'",
      "Leading prompt: 'Explain why homework clearly improves learning and list supporting evidence.'"
    ],
    "runResources": [
      "Prompt comparison grid: assumption, evidence requested, uncertainty shown, missing perspective.",
      "Prompt revision checklist: define task, request sources, ask for uncertainty, include counterarguments."
    ],
    "sampleTeacherLanguage": [
      "The output begins before the machine answers; it begins with the frame we give it.",
      "What did your prompt make easy for the system to say?"
    ],
    "sampleStudentOutput": [
      "The leading prompt produced a more confident answer even though the evidence was not stronger.",
      "Our revised prompt asked for uncertainty, so the answer became less fluent but more responsible."
    ],
    "extensionTasks": [
      "Students write a prompt policy for using AI in TOK research.",
      "Compare prompt framing with survey wording and loaded headlines."
    ],
    "adaptations": [
      "Support: compare two prompts only.",
      "Challenge: add a source-checking phase where students verify one output claim."
    ],
    "resourcePackPath": "resources/prompt-framing-lab/index.html",
    "cardDeckPath": "resources/prompt-framing-lab/cards.csv",
    "visualPromptPath": "resources/prompt-framing-lab/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Prompt Framing Lab Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Prompt Framing Lab Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Prompt Framing Lab Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Who is responsible for knowledge produced through a prompt?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Prompt Framing Lab Stimulus A",
          "body": "Student-facing stimulus 1: Neutral prompt: 'Explain whether homework improves learning.'. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Prompt Framing Lab Stimulus B",
          "body": "Student-facing stimulus 2: Leading prompt: 'Explain why homework clearly improves learning and list supporting evidence.'. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Prompt Framing Lab Reveal / Twist",
          "body": "Student-facing stimulus 3: Leading prompt: 'Explain why homework clearly improves learning and list supporting evidence.'. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — A prompt is not just a request; it frames what kind of knowledge output is likely.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how a prompt is not just a request; it frames what kind of knowledge output is likely.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Who is responsible for knowledge produced through a prompt?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/prompt-framing-lab/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/prompt-framing-lab/worksheet.pdf",
        "pagePath": "premium/prompt-framing-lab/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/prompt-framing-lab/slides.md",
        "pptxPath": "premium/prompt-framing-lab/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/prompt-framing-lab/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/prompt-framing-lab/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/prompt-framing-lab/teacher-notes.pdf",
        "pagePath": "premium/prompt-framing-lab/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/prompt-framing-lab/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/prompt-framing-lab/run-kit.pdf",
        "pagePath": "premium/prompt-framing-lab/run-kit.html"
      }
    ]
  },
  {
    "id": "ambiguity-court",
    "title": "Ambiguity Court",
    "category": "Knowledge and Language",
    "time": "25-35 min",
    "summary": "Students put ambiguous statements on trial and decide which interpretations are reasonable, strained, or unsupported.",
    "bigIdea": "Ambiguity is not just confusion; it reveals how context and assumptions complete meaning.",
    "setup": [
      "Choose sentences that are genuinely ambiguous but not socially risky.",
      "Add context gradually so students can see interpretation change in stages."
    ],
    "exampleStimuli": [
      "Sentence: 'I saw her duck.' Context A: a birdwatching trip. Context B: a football flying across the room.",
      "Sentence: 'The teacher said the student was brilliant with a smile.'"
    ],
    "runResources": [
      "Ambiguity verdict sheet: interpretation, supporting evidence, context needed, verdict.",
      "Context cards that add speaker, setting, tone, and purpose."
    ],
    "sampleTeacherLanguage": [
      "Possible does not mean equally justified.",
      "What evidence moved an interpretation from possible to reasonable?"
    ],
    "sampleStudentOutput": [
      "The words allowed both meanings, but the context made one much better supported.",
      "I realized I was adding tone that was not actually in the sentence."
    ],
    "extensionTasks": [
      "Students find ambiguity in a headline, policy, poem, or translated phrase.",
      "Connect ambiguity to legal interpretation or literary criticism."
    ],
    "adaptations": [
      "Support: start with visual puns or simple ambiguous sentences.",
      "Challenge: distinguish semantic ambiguity, syntactic ambiguity, and pragmatic ambiguity."
    ],
    "resourcePackPath": "resources/ambiguity-court/index.html",
    "cardDeckPath": "resources/ambiguity-court/cards.csv",
    "visualPromptPath": "resources/ambiguity-court/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Ambiguity Court Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Ambiguity Court Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Ambiguity Court Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How much meaning is in words and how much is in context?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Ambiguity Court Stimulus A",
          "body": "Student-facing stimulus 1: Sentence: 'I saw her duck.' Context A: a birdwatching trip. Context B: a football flying across the room. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Ambiguity Court Stimulus B",
          "body": "Student-facing stimulus 2: Sentence: 'The teacher said the student was brilliant with a smile.'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Ambiguity Court Reveal / Twist",
          "body": "Student-facing stimulus 3: Sentence: 'The teacher said the student was brilliant with a smile.'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Ambiguity is not just confusion; it reveals how context and assumptions complete meaning.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how ambiguity is not just confusion; it reveals how context and assumptions complete meaning.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How much meaning is in words and how much is in context?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/ambiguity-court/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/ambiguity-court/worksheet.pdf",
        "pagePath": "premium/ambiguity-court/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/ambiguity-court/slides.md",
        "pptxPath": "premium/ambiguity-court/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/ambiguity-court/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/ambiguity-court/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/ambiguity-court/teacher-notes.pdf",
        "pagePath": "premium/ambiguity-court/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/ambiguity-court/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/ambiguity-court/run-kit.pdf",
        "pagePath": "premium/ambiguity-court/run-kit.html"
      }
    ]
  },
  {
    "id": "randomness-pattern-hunt",
    "title": "Randomness Pattern Hunt",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students compare real and invented random sequences to see why randomness often looks less neat than expected.",
    "bigIdea": "Human expectations about randomness can mistake clusters for causes and neatness for chance.",
    "setup": [
      "Prepare human-made sequences that avoid long streaks and real random sequences that include clusters.",
      "Ask students to commit to a judgement before revealing the source."
    ],
    "exampleStimuli": [
      "Sequence A: H T H T T H T H H T H T; Sequence B: H H H T T H H T T T H H.",
      "Ask: which sequence looks more random, and what makes it feel that way?"
    ],
    "runResources": [
      "Sequence annotation sheet for streaks, alternations, clusters, and gut judgement.",
      "Reveal card explaining why random sequences often contain clumps."
    ],
    "sampleTeacherLanguage": [
      "Random does not mean evenly mixed.",
      "Which pattern made you want to invent a cause?"
    ],
    "sampleStudentOutput": [
      "I chose the alternating sequence because it looked balanced, but that was too neat.",
      "The real random sequence had clusters that felt suspicious."
    ],
    "extensionTasks": [
      "Students generate 20 coin flips and compare them with an invented sequence.",
      "Connect randomness expectations to gambling, sports streaks, and data interpretation."
    ],
    "adaptations": [
      "Support: use short sequences and visual color blocks.",
      "Challenge: introduce expected streak length in longer random sequences."
    ],
    "resourcePackPath": "resources/randomness-pattern-hunt/index.html",
    "cardDeckPath": "resources/randomness-pattern-hunt/cards.csv",
    "visualPromptPath": "resources/randomness-pattern-hunt/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Randomness Pattern Hunt Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Randomness Pattern Hunt Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Randomness Pattern Hunt Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Why do humans see meaning in random patterns?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Randomness Pattern Hunt Stimulus A",
          "body": "Student-facing stimulus 1: Sequence A: H T H T T H T H H T H T; Sequence B: H H H T T H H T T T H H. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Randomness Pattern Hunt Stimulus B",
          "body": "Student-facing stimulus 2: Ask: which sequence looks more random, and what makes it feel that way?. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Randomness Pattern Hunt Reveal / Twist",
          "body": "Student-facing stimulus 3: Ask: which sequence looks more random, and what makes it feel that way?. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Human expectations about randomness can mistake clusters for causes and neatness for chance.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how human expectations about randomness can mistake clusters for causes and neatness for chance.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Why do humans see meaning in random patterns?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/randomness-pattern-hunt/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/randomness-pattern-hunt/worksheet.pdf",
        "pagePath": "premium/randomness-pattern-hunt/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/randomness-pattern-hunt/slides.md",
        "pptxPath": "premium/randomness-pattern-hunt/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/randomness-pattern-hunt/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/randomness-pattern-hunt/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/randomness-pattern-hunt/teacher-notes.pdf",
        "pagePath": "premium/randomness-pattern-hunt/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/randomness-pattern-hunt/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/randomness-pattern-hunt/run-kit.pdf",
        "pagePath": "premium/randomness-pattern-hunt/run-kit.html"
      }
    ]
  },
  {
    "id": "anomaly-rescue-mission",
    "title": "Anomaly Rescue Mission",
    "category": "Natural Sciences",
    "time": "30-40 min",
    "summary": "Students receive a dataset with one anomalous result and decide whether to reject, explain, repeat, or revise the model.",
    "bigIdea": "Anomalies are not automatically errors; they are tests of method, theory, and judgement.",
    "setup": [
      "Use a dataset simple enough for students to understand quickly but ambiguous enough to support different responses.",
      "Make the anomaly plausible as either error or discovery."
    ],
    "exampleStimuli": [
      "Plant growth mostly increases with light exposure, except one low-light plant grows unusually tall.",
      "Reaction time improves with practice, except one trial suddenly becomes much slower."
    ],
    "runResources": [
      "Anomaly decision board: discard, repeat, investigate, revise model.",
      "Evidence-needed cards: check instrument, repeat measurement, inspect conditions, compare theory."
    ],
    "sampleTeacherLanguage": [
      "An anomaly is a question mark, not automatically a mistake or a breakthrough.",
      "What evidence would justify your next move?"
    ],
    "sampleStudentOutput": [
      "We repeated the measurement before revising the model because one point was not enough.",
      "The anomaly mattered because it appeared under a condition the model had ignored."
    ],
    "extensionTasks": [
      "Students write a cautious lab-note response to an unexpected result.",
      "Compare famous scientific anomalies with everyday data cleaning."
    ],
    "adaptations": [
      "Support: give three possible explanations to choose from.",
      "Challenge: include two anomalies with different likely causes."
    ],
    "resourcePackPath": "resources/anomaly-rescue-mission/index.html",
    "cardDeckPath": "resources/anomaly-rescue-mission/cards.csv",
    "visualPromptPath": "resources/anomaly-rescue-mission/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Anomaly Rescue Mission Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Anomaly Rescue Mission Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Anomaly Rescue Mission Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When should anomalous evidence change a theory?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Anomaly Rescue Mission Stimulus A",
          "body": "Student-facing stimulus 1: Plant growth mostly increases with light exposure, except one low-light plant grows unusually tall. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Anomaly Rescue Mission Stimulus B",
          "body": "Student-facing stimulus 2: Reaction time improves with practice, except one trial suddenly becomes much slower. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Anomaly Rescue Mission Reveal / Twist",
          "body": "Student-facing stimulus 3: Reaction time improves with practice, except one trial suddenly becomes much slower. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Anomalies are not automatically errors; they are tests of method, theory, and judgement.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how anomalies are not automatically errors; they are tests of method, theory, and judgement.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When should anomalous evidence change a theory?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/anomaly-rescue-mission/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/anomaly-rescue-mission/worksheet.pdf",
        "pagePath": "premium/anomaly-rescue-mission/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/anomaly-rescue-mission/slides.md",
        "pptxPath": "premium/anomaly-rescue-mission/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/anomaly-rescue-mission/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/anomaly-rescue-mission/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/anomaly-rescue-mission/teacher-notes.pdf",
        "pagePath": "premium/anomaly-rescue-mission/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/anomaly-rescue-mission/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/anomaly-rescue-mission/run-kit.pdf",
        "pagePath": "premium/anomaly-rescue-mission/run-kit.html"
      }
    ]
  },
  {
    "id": "framing-risk-choice",
    "title": "Framing Risk Choice",
    "category": "Human Sciences",
    "time": "20-30 min",
    "summary": "Students make choices under gain and loss frames, then compare how wording changes apparently rational decisions.",
    "bigIdea": "The same evidence can lead to different choices when framed as gain or loss.",
    "setup": [
      "Prepare mathematically equivalent gain-frame and loss-frame versions.",
      "Collect anonymous choices so students examine patterns, not individual judgement."
    ],
    "exampleStimuli": [
      "Gain frame: 200 of 600 people will be saved for sure, or a one-third chance all 600 are saved.",
      "Loss frame: 400 of 600 people will die for sure, or a one-third chance nobody dies."
    ],
    "runResources": [
      "Two scenario sheets with equivalent outcomes and different wording.",
      "Class tally table comparing safe/risky choices under each frame."
    ],
    "sampleTeacherLanguage": [
      "The numbers did not change; the frame did.",
      "If wording changes choices, what does that reveal about evidence and emotion?"
    ],
    "sampleStudentOutput": [
      "I chose the safe option when it was framed as saving people but risked more when it was framed as deaths.",
      "The same data felt different because the loss frame made inaction feel worse."
    ],
    "extensionTasks": [
      "Students identify gain/loss framing in public health, climate, or school policy messages.",
      "Design a more transparent risk communication statement."
    ],
    "adaptations": [
      "Support: use smaller numbers and draw the outcomes.",
      "Challenge: include a third neutral-frame condition."
    ],
    "resourcePackPath": "resources/framing-risk-choice/index.html",
    "cardDeckPath": "resources/framing-risk-choice/cards.csv",
    "visualPromptPath": "resources/framing-risk-choice/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Framing Risk Choice Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Framing Risk Choice Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Framing Risk Choice Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Are decisions based on evidence, framing, or both?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Framing Risk Choice Stimulus A",
          "body": "Student-facing stimulus 1: Gain frame: 200 of 600 people will be saved for sure, or a one-third chance all 600 are saved. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Framing Risk Choice Stimulus B",
          "body": "Student-facing stimulus 2: Loss frame: 400 of 600 people will die for sure, or a one-third chance nobody dies. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Framing Risk Choice Reveal / Twist",
          "body": "Student-facing stimulus 3: Loss frame: 400 of 600 people will die for sure, or a one-third chance nobody dies. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — The same evidence can lead to different choices when framed as gain or loss.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how the same evidence can lead to different choices when framed as gain or loss.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Are decisions based on evidence, framing, or both?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/framing-risk-choice/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/framing-risk-choice/worksheet.pdf",
        "pagePath": "premium/framing-risk-choice/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/framing-risk-choice/slides.md",
        "pptxPath": "premium/framing-risk-choice/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/framing-risk-choice/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/framing-risk-choice/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/framing-risk-choice/teacher-notes.pdf",
        "pagePath": "premium/framing-risk-choice/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/framing-risk-choice/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/framing-risk-choice/run-kit.pdf",
        "pagePath": "premium/framing-risk-choice/run-kit.html"
      }
    ]
  },
  {
    "id": "source-silence-investigation",
    "title": "Source Silence Investigation",
    "category": "History",
    "time": "30-40 min",
    "summary": "Students investigate a historical source packet by asking whose voices are missing and how silence shapes conclusions.",
    "bigIdea": "Historical knowledge depends not only on surviving sources, but also on recognizing what did not survive.",
    "setup": [
      "Prepare a packet where the missing perspective is inferable but not recoverable.",
      "Make students mark uncertainty rather than inventing missing testimony."
    ],
    "exampleStimuli": [
      "Packet: official school notice, newspaper paragraph, teacher diary, but no student voices.",
      "Packet: merchant account, travel diary, law code, but no record from workers affected by the policy."
    ],
    "runResources": [
      "Silence audit sheet: present voices, missing voices, possible reasons, impact on conclusion.",
      "Uncertainty language bank: possibly, likely, cannot establish, source packet suggests."
    ],
    "sampleTeacherLanguage": [
      "Naming a silence is not the same as filling it with imagination.",
      "How does the missing voice change the strength of your conclusion?"
    ],
    "sampleStudentOutput": [
      "The archive lets us know the policy existed but not how students experienced it.",
      "We revised our claim from 'students accepted it' to 'the available sources do not show student opposition'."
    ],
    "extensionTasks": [
      "Students add a missing-source request: what source would most improve the account?",
      "Connect source silence to museums, family histories, and national archives."
    ],
    "adaptations": [
      "Support: provide a checklist of possible missing voices.",
      "Challenge: ask students to distinguish accidental absence from deliberate exclusion."
    ],
    "resourcePackPath": "resources/source-silence-investigation/index.html",
    "cardDeckPath": "resources/source-silence-investigation/cards.csv",
    "visualPromptPath": "resources/source-silence-investigation/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Source Silence Investigation Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Source Silence Investigation Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Source Silence Investigation Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How can we know responsibly when evidence is missing?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Source Silence Investigation Stimulus A",
          "body": "Student-facing stimulus 1: Packet: official school notice, newspaper paragraph, teacher diary, but no student voices. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Source Silence Investigation Stimulus B",
          "body": "Student-facing stimulus 2: Packet: merchant account, travel diary, law code, but no record from workers affected by the policy. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Source Silence Investigation Reveal / Twist",
          "body": "Student-facing stimulus 3: Packet: merchant account, travel diary, law code, but no record from workers affected by the policy. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Historical knowledge depends not only on surviving sources, but also on recognizing what did not survive.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how historical knowledge depends not only on surviving sources, but also on recognizing what did not survive.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How can we know responsibly when evidence is missing?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/source-silence-investigation/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/source-silence-investigation/worksheet.pdf",
        "pagePath": "premium/source-silence-investigation/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/source-silence-investigation/slides.md",
        "pptxPath": "premium/source-silence-investigation/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/source-silence-investigation/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/source-silence-investigation/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/source-silence-investigation/teacher-notes.pdf",
        "pagePath": "premium/source-silence-investigation/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/source-silence-investigation/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/source-silence-investigation/run-kit.pdf",
        "pagePath": "premium/source-silence-investigation/run-kit.html"
      }
    ]
  },
  {
    "id": "curator-choice-gallery",
    "title": "Curator Choice Gallery",
    "category": "The Arts",
    "time": "30-40 min",
    "summary": "Students arrange the same artworks in different gallery sequences and analyze how curation creates meaning.",
    "bigIdea": "Curators do not only display knowledge in the arts; they help organize and produce it.",
    "setup": [
      "Use image cards or brief descriptions; the activity does not require famous artworks.",
      "Give each group a different curatorial theme so the same works become different arguments."
    ],
    "exampleStimuli": [
      "Artwork set: empty chair, crowded street, broken cup, bright abstract pattern, family photo, dark landscape.",
      "Curatorial themes: loss, modern life, beauty in ordinary objects, uncertainty, memory."
    ],
    "runResources": [
      "Gallery floor-plan template with numbered artwork spaces.",
      "Wall-label card: title, placement reason, connection to previous work."
    ],
    "sampleTeacherLanguage": [
      "A gallery sequence is an argument the viewer walks through.",
      "What did your arrangement make the audience notice first?"
    ],
    "sampleStudentOutput": [
      "Putting the family photo after the broken cup made the sequence feel like memory and loss.",
      "The same image felt comic in one gallery and serious in another."
    ],
    "extensionTasks": [
      "Students curate a mini TOK exhibition around one prompt.",
      "Compare gallery curation with playlist order, textbook chapters, or museum labels."
    ],
    "adaptations": [
      "Support: use four image cards and one wall label.",
      "Challenge: require groups to justify one excluded artwork."
    ],
    "resourcePackPath": "resources/curator-choice-gallery/index.html",
    "cardDeckPath": "resources/curator-choice-gallery/cards.csv",
    "visualPromptPath": "resources/curator-choice-gallery/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Curator Choice Gallery Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Curator Choice Gallery Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Curator Choice Gallery Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How do institutions shape knowledge in the arts?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Curator Choice Gallery Stimulus A",
          "body": "Student-facing stimulus 1: Artwork set: empty chair, crowded street, broken cup, bright abstract pattern, family photo, dark landscape. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Curator Choice Gallery Stimulus B",
          "body": "Student-facing stimulus 2: Curatorial themes: loss, modern life, beauty in ordinary objects, uncertainty, memory. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Curator Choice Gallery Reveal / Twist",
          "body": "Student-facing stimulus 3: Curatorial themes: loss, modern life, beauty in ordinary objects, uncertainty, memory. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Curators do not only display knowledge in the arts; they help organize and produce it.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how curators do not only display knowledge in the arts; they help organize and produce it.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How do institutions shape knowledge in the arts?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/curator-choice-gallery/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/curator-choice-gallery/worksheet.pdf",
        "pagePath": "premium/curator-choice-gallery/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/curator-choice-gallery/slides.md",
        "pptxPath": "premium/curator-choice-gallery/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/curator-choice-gallery/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/curator-choice-gallery/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/curator-choice-gallery/teacher-notes.pdf",
        "pagePath": "premium/curator-choice-gallery/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/curator-choice-gallery/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/curator-choice-gallery/run-kit.pdf",
        "pagePath": "premium/curator-choice-gallery/run-kit.html"
      }
    ]
  },
  {
    "id": "claim-migration-lab",
    "title": "Claim Migration Lab",
    "category": "Cross-AOK",
    "time": "35-45 min",
    "summary": "Students move one knowledge claim across several AOKs and watch how evidence standards and language must change.",
    "bigIdea": "A claim can change meaning and justification when it migrates between knowledge contexts.",
    "setup": [
      "Choose claims with flexible wording so they can plausibly move between AOKs.",
      "Make students revise the claim, not just relabel the evidence."
    ],
    "exampleStimuli": [
      "Claim: 'This pattern is meaningful' in mathematics, natural sciences, arts, and history.",
      "Claim: 'This explanation is reliable' in human sciences, history, and technology."
    ],
    "runResources": [
      "AOK migration grid: claim wording, evidence standard, method, uncertainty, revised claim.",
      "AOK cards listing typical evidence and caution points."
    ],
    "sampleTeacherLanguage": [
      "The same sentence may not make the same knowledge claim in a new AOK.",
      "What has to change so the claim becomes responsible in this context?"
    ],
    "sampleStudentOutput": [
      "In mathematics, meaningful meant provable structure; in the arts, it meant interpretive significance.",
      "We had to change 'reliable' into 'well-supported by archival evidence' for history."
    ],
    "extensionTasks": [
      "Students use one TOK essay claim and migrate it across two AOKs.",
      "Build a class glossary of terms that shift across knowledge contexts."
    ],
    "adaptations": [
      "Support: use two AOKs and one claim.",
      "Challenge: require students to identify a term that cannot migrate safely."
    ],
    "resourcePackPath": "resources/claim-migration-lab/index.html",
    "cardDeckPath": "resources/claim-migration-lab/cards.csv",
    "visualPromptPath": "resources/claim-migration-lab/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Claim Migration Lab Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Claim Migration Lab Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Claim Migration Lab Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "What changes when a claim moves between AOKs?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Claim Migration Lab Stimulus A",
          "body": "Student-facing stimulus 1: Claim: 'This pattern is meaningful' in mathematics, natural sciences, arts, and history. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Claim Migration Lab Stimulus B",
          "body": "Student-facing stimulus 2: Claim: 'This explanation is reliable' in human sciences, history, and technology. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Claim Migration Lab Reveal / Twist",
          "body": "Student-facing stimulus 3: Claim: 'This explanation is reliable' in human sciences, history, and technology. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — A claim can change meaning and justification when it migrates between knowledge contexts.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how a claim can change meaning and justification when it migrates between knowledge contexts.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "What changes when a claim moves between AOKs?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/claim-migration-lab/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/claim-migration-lab/worksheet.pdf",
        "pagePath": "premium/claim-migration-lab/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/claim-migration-lab/slides.md",
        "pptxPath": "premium/claim-migration-lab/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/claim-migration-lab/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/claim-migration-lab/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/claim-migration-lab/teacher-notes.pdf",
        "pagePath": "premium/claim-migration-lab/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/claim-migration-lab/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/claim-migration-lab/run-kit.pdf",
        "pagePath": "premium/claim-migration-lab/run-kit.html"
      }
    ]
  },
  {
    "id": "emotion-snapshot-audit",
    "title": "Emotion Snapshot Audit",
    "category": "Knowledge and the Knower",
    "time": "20-30 min",
    "summary": "Students interpret the same ambiguous scene under different emotional states and compare how feeling directs attention.",
    "bigIdea": "Emotion is not merely noise in knowing; it can focus, filter, and frame evidence.",
    "setup": [
      "Use fictional emotion cards rather than asking students to disclose their actual mood.",
      "Choose an ambiguous image or short scene with several plausible interpretations."
    ],
    "exampleStimuli": [
      "Scene: a student sees two friends whispering and laughing near the classroom door.",
      "Emotion frames: anxious, excited, suspicious, calm, embarrassed, proud."
    ],
    "runResources": [
      "Emotion frame cards with noticing prompts.",
      "Interpretation grid: detail noticed, inference, emotion frame, evidence strength."
    ],
    "sampleTeacherLanguage": [
      "Emotion did not add new visual evidence, but it changed which details mattered.",
      "When might emotion help you notice something important?"
    ],
    "sampleStudentOutput": [
      "The suspicious frame made the whispering seem hostile, while the excited frame made it seem like a surprise.",
      "The same detail supported different interpretations because the emotional frame changed."
    ],
    "extensionTasks": [
      "Students compare emotion in eyewitness testimony, art interpretation, and ethical judgement.",
      "Create a checking routine for emotionally charged knowledge claims."
    ],
    "adaptations": [
      "Support: use two emotion frames only.",
      "Challenge: ask students to identify when emotion provides relevant evidence."
    ],
    "resourcePackPath": "resources/emotion-snapshot-audit/index.html",
    "cardDeckPath": "resources/emotion-snapshot-audit/cards.csv",
    "visualPromptPath": "resources/emotion-snapshot-audit/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Emotion Snapshot Audit Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Emotion Snapshot Audit Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Emotion Snapshot Audit Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does emotion shape what knowers notice?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Emotion Snapshot Audit Stimulus A",
          "body": "Student-facing stimulus 1: Scene: a student sees two friends whispering and laughing near the classroom door. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Emotion Snapshot Audit Stimulus B",
          "body": "Student-facing stimulus 2: Emotion frames: anxious, excited, suspicious, calm, embarrassed, proud. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Emotion Snapshot Audit Reveal / Twist",
          "body": "Student-facing stimulus 3: Emotion frames: anxious, excited, suspicious, calm, embarrassed, proud. Before discussing, write what you noticed, what you inferred, and how confident you are.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Emotion is not merely noise in knowing; it can focus, filter, and frame evidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and the Knower.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how emotion is not merely noise in knowing; it can focus, filter, and frame evidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does emotion shape what knowers notice?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/emotion-snapshot-audit/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/emotion-snapshot-audit/worksheet.pdf",
        "pagePath": "premium/emotion-snapshot-audit/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/emotion-snapshot-audit/slides.md",
        "pptxPath": "premium/emotion-snapshot-audit/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/emotion-snapshot-audit/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/emotion-snapshot-audit/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/emotion-snapshot-audit/teacher-notes.pdf",
        "pagePath": "premium/emotion-snapshot-audit/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/emotion-snapshot-audit/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/emotion-snapshot-audit/run-kit.pdf",
        "pagePath": "premium/emotion-snapshot-audit/run-kit.html"
      }
    ]
  },
  {
    "id": "data-dashboard-mirage",
    "title": "Data Dashboard Mirage",
    "category": "Knowledge and Technology",
    "time": "30-40 min",
    "summary": "Students compare two dashboards built from the same data and evaluate how interface design shapes conclusions.",
    "bigIdea": "Dashboards do not simply show data; they prioritize, compress, and narrate it.",
    "setup": [
      "Use the same fictional dataset in both dashboard versions.",
      "Change only visual design choices such as color, order, scale, and highlighted metric."
    ],
    "exampleStimuli": [
      "Dashboard A highlights falling late arrivals in green; Dashboard B highlights rising absences in amber using the same school-week dataset.",
      "Dashboard A ranks classes by average score; Dashboard B ranks them by improvement."
    ],
    "runResources": [
      "Dashboard audit checklist: title, color, scale, missing context, default ordering, highlighted number.",
      "Redesign template for a more transparent dashboard."
    ],
    "sampleTeacherLanguage": [
      "A dashboard answers before we know what question it was built to answer.",
      "Which design choice did the most interpretive work?"
    ],
    "sampleStudentOutput": [
      "The green metric made the school look successful even though absences were rising.",
      "Both dashboards were accurate, but each made a different issue feel urgent."
    ],
    "extensionTasks": [
      "Students redesign a school dashboard for students, parents, and teachers separately.",
      "Connect dashboard design to public health, climate, or finance communication."
    ],
    "adaptations": [
      "Support: compare two dashboards with one obvious design difference.",
      "Challenge: ask students to write a dashboard ethics checklist."
    ],
    "resourcePackPath": "resources/data-dashboard-mirage/index.html",
    "cardDeckPath": "resources/data-dashboard-mirage/cards.csv",
    "visualPromptPath": "resources/data-dashboard-mirage/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Data Dashboard Mirage Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Data Dashboard Mirage Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Data Dashboard Mirage Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "When does data visualization become argument?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Data Dashboard Mirage Stimulus A",
          "body": "Student-facing stimulus 1: Dashboard A highlights falling late arrivals in green; Dashboard B highlights rising absences in amber using the same school-week dataset. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Data Dashboard Mirage Stimulus B",
          "body": "Student-facing stimulus 2: Dashboard A ranks classes by average score; Dashboard B ranks them by improvement. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Data Dashboard Mirage Reveal / Twist",
          "body": "Student-facing stimulus 3: Dashboard A ranks classes by average score; Dashboard B ranks them by improvement. Rank, sort, or audit this output. Identify which rule, ranking signal, or interface choice shaped your judgement.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Dashboards do not simply show data; they prioritize, compress, and narrate it.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Technology.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how dashboards do not simply show data; they prioritize, compress, and narrate it.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "When does data visualization become argument?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/data-dashboard-mirage/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/data-dashboard-mirage/worksheet.pdf",
        "pagePath": "premium/data-dashboard-mirage/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/data-dashboard-mirage/slides.md",
        "pptxPath": "premium/data-dashboard-mirage/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/data-dashboard-mirage/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/data-dashboard-mirage/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/data-dashboard-mirage/teacher-notes.pdf",
        "pagePath": "premium/data-dashboard-mirage/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/data-dashboard-mirage/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/data-dashboard-mirage/run-kit.pdf",
        "pagePath": "premium/data-dashboard-mirage/run-kit.html"
      }
    ]
  },
  {
    "id": "silence-and-implication-lab",
    "title": "Silence and Implication Lab",
    "category": "Knowledge and Language",
    "time": "20-30 min",
    "summary": "Students analyze how what is left unsaid can communicate assumptions, politeness, doubt, or power.",
    "bigIdea": "Meaning often depends on implication; silence can communicate without explicitly claiming.",
    "setup": [
      "Use brief dialogues with simple social contexts.",
      "Remind students that implication depends on shared norms and can be misread."
    ],
    "exampleStimuli": [
      "Dialogue: 'Did you like my presentation?' 'Well, your slides were very colorful.'",
      "Dialogue: 'Are you coming to the meeting?' 'I have a lot of homework tonight.'"
    ],
    "runResources": [
      "Explicit/implied meaning chart.",
      "Context cards: close friend, teacher feedback, formal email, sarcastic tone, nervous speaker."
    ],
    "sampleTeacherLanguage": [
      "What was said, what was implied, and what did you add?",
      "Which context clues justify your reading?"
    ],
    "sampleStudentOutput": [
      "The reply praised the slides but implied the content was weak.",
      "With a formal context, the same indirect answer sounded more polite than evasive."
    ],
    "extensionTasks": [
      "Students rewrite an indirect statement as a direct claim and compare effects.",
      "Connect implication to diplomacy, advertising, poetry, or classroom feedback."
    ],
    "adaptations": [
      "Support: provide two possible implications.",
      "Challenge: distinguish implication from assumption and inference."
    ],
    "resourcePackPath": "resources/silence-and-implication-lab/index.html",
    "cardDeckPath": "resources/silence-and-implication-lab/cards.csv",
    "visualPromptPath": "resources/silence-and-implication-lab/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Silence and Implication Lab Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Silence and Implication Lab Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Silence and Implication Lab Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can silence be evidence?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Silence and Implication Lab Stimulus A",
          "body": "Student-facing stimulus 1: Dialogue: 'Did you like my presentation?' 'Well, your slides were very colorful.'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Silence and Implication Lab Stimulus B",
          "body": "Student-facing stimulus 2: Dialogue: 'Are you coming to the meeting?' 'I have a lot of homework tonight.'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Silence and Implication Lab Reveal / Twist",
          "body": "Student-facing stimulus 3: Dialogue: 'Are you coming to the meeting?' 'I have a lot of homework tonight.'. Annotate the wording. Circle the words that change tone, emotion, implication, or trust.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Meaning often depends on implication; silence can communicate without explicitly claiming.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Knowledge and Language.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how meaning often depends on implication; silence can communicate without explicitly claiming.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can silence be evidence?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/silence-and-implication-lab/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/silence-and-implication-lab/worksheet.pdf",
        "pagePath": "premium/silence-and-implication-lab/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/silence-and-implication-lab/slides.md",
        "pptxPath": "premium/silence-and-implication-lab/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/silence-and-implication-lab/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/silence-and-implication-lab/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/silence-and-implication-lab/teacher-notes.pdf",
        "pagePath": "premium/silence-and-implication-lab/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/silence-and-implication-lab/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/silence-and-implication-lab/run-kit.pdf",
        "pagePath": "premium/silence-and-implication-lab/run-kit.html"
      }
    ]
  },
  {
    "id": "log-scale-surprise",
    "title": "Log Scale Surprise",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students compare linear and logarithmic graphs and see how scale choice changes visual interpretation.",
    "bigIdea": "Mathematical representations can make the same relationship look explosive, steady, or manageable.",
    "setup": [
      "Use simple doubling data so students can see both the numerical and visual relationship.",
      "Let students describe each graph before teaching the term logarithmic scale."
    ],
    "exampleStimuli": [
      "Dataset: 1, 2, 4, 8, 16, 32, 64 over seven days.",
      "Question: does the graph show runaway growth, steady multiplicative growth, or both?",
      "Notation card: [[math:log10(1000) = 3]] shows how a multiplicative change becomes an equal step on a log scale."
    ],
    "runResources": [
      "Linear and logarithmic graph templates for the same dataset.",
      "Graph purpose cards: communicate urgency, compare growth rates, inspect proportional change."
    ],
    "sampleTeacherLanguage": [
      "Both graphs can be accurate, but they serve different questions.",
      "What does this scale make visually obvious, and what does it hide?"
    ],
    "sampleStudentOutput": [
      "The linear graph made the later values dominate the story.",
      "The log graph made equal ratios look like equal steps."
    ],
    "extensionTasks": [
      "Students find a real public graph and ask what scale would change the visual story.",
      "Compare scale choice with headline framing and dashboard design."
    ],
    "adaptations": [
      "Support: use pre-drawn graphs.",
      "Challenge: ask students to decide which scale is more responsible for a given audience."
    ],
    "resourcePackPath": "resources/log-scale-surprise/index.html",
    "cardDeckPath": "resources/log-scale-surprise/cards.csv",
    "visualPromptPath": "resources/log-scale-surprise/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Log Scale Surprise Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Log Scale Surprise Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Log Scale Surprise Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does mathematical representation shape understanding?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Log Scale Surprise Stimulus A",
          "body": "Student-facing stimulus 1: Dataset: 1, 2, 4, 8, 16, 32, 64 over seven days. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Log Scale Surprise Stimulus B",
          "body": "Student-facing stimulus 2: Question: does the graph show runaway growth, steady multiplicative growth, or both?. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Log Scale Surprise Reveal / Twist",
          "body": "Student-facing stimulus 3: Notation card: [[math:log10(1000) = 3]] shows how a multiplicative change becomes an equal step on a log scale. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Mathematical representations can make the same relationship look explosive, steady, or manageable.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how mathematical representations can make the same relationship look explosive, steady, or manageable.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does mathematical representation shape understanding?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/log-scale-surprise/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/log-scale-surprise/worksheet.pdf",
        "pagePath": "premium/log-scale-surprise/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/log-scale-surprise/slides.md",
        "pptxPath": "premium/log-scale-surprise/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/log-scale-surprise/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/log-scale-surprise/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/log-scale-surprise/teacher-notes.pdf",
        "pagePath": "premium/log-scale-surprise/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/log-scale-surprise/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/log-scale-surprise/run-kit.pdf",
        "pagePath": "premium/log-scale-surprise/run-kit.html"
      }
    ]
  },
  {
    "id": "mechanism-black-box",
    "title": "Mechanism Black Box",
    "category": "Natural Sciences",
    "time": "30-40 min",
    "summary": "Students infer the mechanism inside a sealed system by testing inputs and outputs, then compare competing explanations.",
    "bigIdea": "Scientific explanation often goes beyond prediction by proposing mechanisms.",
    "setup": [
      "Use a hidden input-output rule that several mechanisms could initially explain.",
      "Prepare at least one test input that separates competing explanations."
    ],
    "exampleStimuli": [
      "Rule box: input a number; output is double plus three. Competing mechanisms may fit early examples.",
      "Physical box: different objects go in; the teacher secretly applies a sorting rule before returning an output card."
    ],
    "runResources": [
      "Input-output testing sheet.",
      "Mechanism diagram card with spaces for rule, prediction, and disconfirming test."
    ],
    "sampleTeacherLanguage": [
      "A pattern that predicts is useful, but a mechanism says why.",
      "What test would make one explanation fail?"
    ],
    "sampleStudentOutput": [
      "Two rules fit the first three inputs, so we needed a new test case.",
      "Our explanation became stronger when it predicted an output we had not seen."
    ],
    "extensionTasks": [
      "Students compare mechanism in science with interpretation in history or arts.",
      "Ask groups to design a black box for another group to investigate."
    ],
    "adaptations": [
      "Support: use number rules with simple arithmetic.",
      "Challenge: include noisy data where one output is unreliable."
    ],
    "resourcePackPath": "resources/mechanism-black-box/index.html",
    "cardDeckPath": "resources/mechanism-black-box/cards.csv",
    "visualPromptPath": "resources/mechanism-black-box/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Mechanism Black Box Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Mechanism Black Box Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Mechanism Black Box Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "What is added by knowing a mechanism?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Mechanism Black Box Stimulus A",
          "body": "Student-facing stimulus 1: Rule box: input a number; output is double plus three. Competing mechanisms may fit early examples. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Mechanism Black Box Stimulus B",
          "body": "Student-facing stimulus 2: Physical box: different objects go in; the teacher secretly applies a sorting rule before returning an output card. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Mechanism Black Box Reveal / Twist",
          "body": "Student-facing stimulus 3: Physical box: different objects go in; the teacher secretly applies a sorting rule before returning an output card. Identify the observation, variable, control, anomaly, or missing method detail before making a claim.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Scientific explanation often goes beyond prediction by proposing mechanisms.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Natural Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how scientific explanation often goes beyond prediction by proposing mechanisms.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "What is added by knowing a mechanism?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/mechanism-black-box/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/mechanism-black-box/worksheet.pdf",
        "pagePath": "premium/mechanism-black-box/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/mechanism-black-box/slides.md",
        "pptxPath": "premium/mechanism-black-box/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/mechanism-black-box/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/mechanism-black-box/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/mechanism-black-box/teacher-notes.pdf",
        "pagePath": "premium/mechanism-black-box/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/mechanism-black-box/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/mechanism-black-box/run-kit.pdf",
        "pagePath": "premium/mechanism-black-box/run-kit.html"
      }
    ]
  },
  {
    "id": "interviewer-effect-simulation",
    "title": "Interviewer Effect Simulation",
    "category": "Human Sciences",
    "time": "30-40 min",
    "summary": "Students conduct mini-interviews with different interviewer styles and compare how method shapes responses.",
    "bigIdea": "In human sciences, the person asking can become part of the evidence produced.",
    "setup": [
      "Use safe topics such as homework routines, cafeteria preferences, or study environments.",
      "Assign interviewer styles openly so students can analyze method rather than feel manipulated."
    ],
    "exampleStimuli": [
      "Question: 'How useful is homework for learning?' Styles: warm, rushed, leading, skeptical, neutral.",
      "Question: 'What makes a classroom discussion good?' Styles: encouraging, distracted, formal."
    ],
    "runResources": [
      "Interview style cards.",
      "Response comparison sheet: length, detail, hesitation, confidence, interviewer influence."
    ],
    "sampleTeacherLanguage": [
      "The question is not the only method; the social situation is part of the method.",
      "How did the interviewer change what felt safe or relevant to say?"
    ],
    "sampleStudentOutput": [
      "The leading interviewer got shorter answers that agreed more quickly.",
      "The warm interviewer produced more detail, but maybe also more desire to please."
    ],
    "extensionTasks": [
      "Students design a better interview protocol with ethics notes.",
      "Compare interviews with surveys, observation, and experiments."
    ],
    "adaptations": [
      "Support: use two interviewer styles.",
      "Challenge: add inter-rater coding of response detail."
    ],
    "resourcePackPath": "resources/interviewer-effect-simulation/index.html",
    "cardDeckPath": "resources/interviewer-effect-simulation/cards.csv",
    "visualPromptPath": "resources/interviewer-effect-simulation/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Interviewer Effect Simulation Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Interviewer Effect Simulation Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Interviewer Effect Simulation Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How can data be shaped by the method used to collect it?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Interviewer Effect Simulation Stimulus A",
          "body": "Student-facing stimulus 1: Question: 'How useful is homework for learning?' Styles: warm, rushed, leading, skeptical, neutral. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Interviewer Effect Simulation Stimulus B",
          "body": "Student-facing stimulus 2: Question: 'What makes a classroom discussion good?' Styles: encouraging, distracted, formal. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Interviewer Effect Simulation Reveal / Twist",
          "body": "Student-facing stimulus 3: Question: 'What makes a classroom discussion good?' Styles: encouraging, distracted, formal. Predict how people will respond, then identify the wording, context, incentive, or role that could change the result.",
          "meta": "Teacher reveal: connect the changed response to the big idea — In human sciences, the person asking can become part of the evidence produced.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Human Sciences.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how in human sciences, the person asking can become part of the evidence produced.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How can data be shaped by the method used to collect it?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/interviewer-effect-simulation/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/interviewer-effect-simulation/worksheet.pdf",
        "pagePath": "premium/interviewer-effect-simulation/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/interviewer-effect-simulation/slides.md",
        "pptxPath": "premium/interviewer-effect-simulation/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/interviewer-effect-simulation/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/interviewer-effect-simulation/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/interviewer-effect-simulation/teacher-notes.pdf",
        "pagePath": "premium/interviewer-effect-simulation/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/interviewer-effect-simulation/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/interviewer-effect-simulation/run-kit.pdf",
        "pagePath": "premium/interviewer-effect-simulation/run-kit.html"
      }
    ]
  },
  {
    "id": "counterfactual-forks",
    "title": "Counterfactual Forks",
    "category": "History",
    "time": "30-40 min",
    "summary": "Students build careful counterfactuals to test causal claims without turning history into fantasy.",
    "bigIdea": "Counterfactual thinking can clarify causation when it is disciplined by evidence.",
    "setup": [
      "Choose a causal story where one small change is plausible.",
      "Keep students close to evidence by requiring a constraint card for every counterfactual."
    ],
    "exampleStimuli": [
      "School example: What if the viral incident had not happened, but earlier complaints still existed?",
      "Historical prompt: What if one reform law had failed, while economic and social pressures remained?"
    ],
    "runResources": [
      "Counterfactual fork sheet: changed condition, fixed constraints, likely effects, uncertainty.",
      "Plausibility checklist: available actors, resources, beliefs, institutions, timing."
    ],
    "sampleTeacherLanguage": [
      "A disciplined counterfactual changes one thing and respects the rest of the evidence.",
      "What does your fork reveal about causal importance?"
    ],
    "sampleStudentOutput": [
      "Removing the trigger delayed the policy but did not remove the long-term pressure.",
      "Our counterfactual showed the event was a catalyst rather than the only cause."
    ],
    "extensionTasks": [
      "Students add counterfactual notes to an existing cause web.",
      "Compare counterfactual reasoning in history with model testing in science."
    ],
    "adaptations": [
      "Support: provide the changed condition.",
      "Challenge: require likely, possible, and unlikely outcomes."
    ],
    "resourcePackPath": "resources/counterfactual-forks/index.html",
    "cardDeckPath": "resources/counterfactual-forks/cards.csv",
    "visualPromptPath": "resources/counterfactual-forks/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Counterfactual Forks Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Counterfactual Forks Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Counterfactual Forks Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can historians know what did not happen?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Counterfactual Forks Stimulus A",
          "body": "Student-facing stimulus 1: School example: What if the viral incident had not happened, but earlier complaints still existed?. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Counterfactual Forks Stimulus B",
          "body": "Student-facing stimulus 2: Historical prompt: What if one reform law had failed, while economic and social pressures remained?. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Counterfactual Forks Reveal / Twist",
          "body": "Student-facing stimulus 3: Historical prompt: What if one reform law had failed, while economic and social pressures remained?. Mark what the source shows, what it omits, whose perspective appears, and what claim it can responsibly support.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Counterfactual thinking can clarify causation when it is disciplined by evidence.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to History.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how counterfactual thinking can clarify causation when it is disciplined by evidence.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can historians know what did not happen?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/counterfactual-forks/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/counterfactual-forks/worksheet.pdf",
        "pagePath": "premium/counterfactual-forks/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/counterfactual-forks/slides.md",
        "pptxPath": "premium/counterfactual-forks/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/counterfactual-forks/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/counterfactual-forks/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/counterfactual-forks/teacher-notes.pdf",
        "pagePath": "premium/counterfactual-forks/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/counterfactual-forks/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/counterfactual-forks/run-kit.pdf",
        "pagePath": "premium/counterfactual-forks/run-kit.html"
      }
    ]
  },
  {
    "id": "restoration-ethics-studio",
    "title": "Restoration Ethics Studio",
    "category": "The Arts",
    "time": "30-40 min",
    "summary": "Students decide how to restore a damaged artwork and analyze how restoration choices affect authenticity and knowledge.",
    "bigIdea": "Preserving an artwork can also alter what future viewers know through it.",
    "setup": [
      "Use a fictional artwork so students can focus on trade-offs rather than external facts.",
      "Give each group a different stakeholder priority."
    ],
    "exampleStimuli": [
      "Scenario: a mural has faded paint, later graffiti, and a damaged corner.",
      "Options: clean only, repaint invisibly, preserve damage, add a modern label, commission a visible repair."
    ],
    "runResources": [
      "Restoration decision matrix: authenticity, artist intention, public access, historical trace, reversibility.",
      "Stakeholder cards: artist estate, museum, local community, conservator, visitor."
    ],
    "sampleTeacherLanguage": [
      "Preservation is not neutral when every option changes what viewers encounter.",
      "What kind of authenticity are you prioritizing?"
    ],
    "sampleStudentOutput": [
      "Invisible repair preserved the image but hid the artwork's history.",
      "Leaving the damage visible treated the object as historical evidence, not just aesthetic experience."
    ],
    "extensionTasks": [
      "Students write a museum label explaining a restoration decision transparently.",
      "Compare restoration with editing a historical source or cleaning scientific data."
    ],
    "adaptations": [
      "Support: use three restoration options.",
      "Challenge: include a budget constraint and public controversy."
    ],
    "resourcePackPath": "resources/restoration-ethics-studio/index.html",
    "cardDeckPath": "resources/restoration-ethics-studio/cards.csv",
    "visualPromptPath": "resources/restoration-ethics-studio/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Restoration Ethics Studio Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Restoration Ethics Studio Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Restoration Ethics Studio Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Does restoration preserve knowledge or create new meaning?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Restoration Ethics Studio Stimulus A",
          "body": "Student-facing stimulus 1: Scenario: a mural has faded paint, later graffiti, and a damaged corner. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Restoration Ethics Studio Stimulus B",
          "body": "Student-facing stimulus 2: Options: clean only, repaint invisibly, preserve damage, add a modern label, commission a visible repair. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Restoration Ethics Studio Reveal / Twist",
          "body": "Student-facing stimulus 3: Options: clean only, repaint invisibly, preserve damage, add a modern label, commission a visible repair. Describe what you see or hear first, then add title/context and revise the interpretation.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Preserving an artwork can also alter what future viewers know through it.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to The Arts.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how preserving an artwork can also alter what future viewers know through it.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Does restoration preserve knowledge or create new meaning?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/restoration-ethics-studio/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/restoration-ethics-studio/worksheet.pdf",
        "pagePath": "premium/restoration-ethics-studio/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/restoration-ethics-studio/slides.md",
        "pptxPath": "premium/restoration-ethics-studio/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/restoration-ethics-studio/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/restoration-ethics-studio/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/restoration-ethics-studio/teacher-notes.pdf",
        "pagePath": "premium/restoration-ethics-studio/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/restoration-ethics-studio/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/restoration-ethics-studio/run-kit.pdf",
        "pagePath": "premium/restoration-ethics-studio/run-kit.html"
      }
    ]
  },
  {
    "id": "certainty-thermometer",
    "title": "Certainty Thermometer",
    "category": "Cross-AOK",
    "time": "25-35 min",
    "summary": "Students place claims from different AOKs on a certainty scale, then revise the scale after adding criteria.",
    "bigIdea": "Certainty is not one simple measure; it depends on evidence, method, context, and purpose.",
    "setup": [
      "Make the certainty scale physical if possible, using the wall or floor.",
      "Start with intuitive placement before introducing criteria cards."
    ],
    "exampleStimuli": [
      "Claim cards: '2+2=4', 'This source is reliable', 'This song is sad', 'The medicine works', 'The policy is fair'.",
      "Criteria cards: proof, replication, consensus, interpretation, usefulness, ethical stakes."
    ],
    "runResources": [
      "Certainty thermometer poster from low confidence to high certainty.",
      "Revision log: original placement, criterion added, revised placement, reason."
    ],
    "sampleTeacherLanguage": [
      "Certainty is not the only value knowledge can have.",
      "Which claim moved when you changed the criterion?"
    ],
    "sampleStudentOutput": [
      "The art claim stayed uncertain but became more meaningful when judged by interpretation rather than proof.",
      "The science claim was less certain than the math claim but still highly reliable."
    ],
    "extensionTasks": [
      "Students build separate thermometers for certainty, usefulness, and ethical importance.",
      "Use the activity to plan a TOK essay comparison."
    ],
    "adaptations": [
      "Support: use five claim cards.",
      "Challenge: require students to defend two different placements for the same claim."
    ],
    "resourcePackPath": "resources/certainty-thermometer/index.html",
    "cardDeckPath": "resources/certainty-thermometer/cards.csv",
    "visualPromptPath": "resources/certainty-thermometer/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Certainty Thermometer Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Certainty Thermometer Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Certainty Thermometer Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Is certainty the best measure of knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Certainty Thermometer Stimulus A",
          "body": "Student-facing stimulus 1: Claim cards: '2+2=4', 'This source is reliable', 'This song is sad', 'The medicine works', 'The policy is fair'. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Certainty Thermometer Stimulus B",
          "body": "Student-facing stimulus 2: Criteria cards: proof, replication, consensus, interpretation, usefulness, ethical stakes. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Certainty Thermometer Reveal / Twist",
          "body": "Student-facing stimulus 3: Criteria cards: proof, replication, consensus, interpretation, usefulness, ethical stakes. Name the AOK, the method being used, and the standard of evidence you would apply.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Certainty is not one simple measure; it depends on evidence, method, context, and purpose.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Cross-AOK.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how certainty is not one simple measure; it depends on evidence, method, context, and purpose.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Is certainty the best measure of knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/certainty-thermometer/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/certainty-thermometer/worksheet.pdf",
        "pagePath": "premium/certainty-thermometer/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/certainty-thermometer/slides.md",
        "pptxPath": "premium/certainty-thermometer/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/certainty-thermometer/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/certainty-thermometer/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/certainty-thermometer/teacher-notes.pdf",
        "pagePath": "premium/certainty-thermometer/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/certainty-thermometer/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/certainty-thermometer/run-kit.pdf",
        "pagePath": "premium/certainty-thermometer/run-kit.html"
      }
    ]
  },
  {
    "id": "bayes-update-cards",
    "title": "Bayes Update Cards",
    "category": "Mathematics",
    "time": "35-45 min",
    "summary": "Students use natural-frequency cards to see how prior probability and new evidence combine in Bayesian updating.",
    "bigIdea": "New evidence updates prior probability; it does not replace the background rate.",
    "setup": [
      "Prepare counters in two colours: true positives and false positives.",
      "Hide notation at first; reveal [[math:P(H | +)]] only after students build the frequency table."
    ],
    "exampleStimuli": [
      "Fictional case: 10 of 1000 people have Condition X; a positive test catches 9 real cases and falsely flags 99 non-cases.",
      "Notation contrast card: [[math:P(H | +)]] is not the same as [[math:P(+ | H)]]."
    ],
    "runResources": [
      "Natural-frequency grid with true positives, false positives, false negatives, and true negatives.",
      "Risk communication comparison card: words, percentage, frequency, visual grid, and notation."
    ],
    "sampleTeacherLanguage": [
      "The notation is not decoration; it tells us which direction the probability is asking about.",
      "Point to the numerator and denominator before you calculate."
    ],
    "sampleStudentOutput": [
      "I confused test accuracy with the chance the person really had the condition.",
      "The frequency grid made the denominator visible."
    ],
    "extensionTasks": [
      "Students write a public-health risk statement in three formats and critique each one.",
      "Compare Bayesian updating with search rankings, eyewitness evidence, or historical source reliability."
    ],
    "adaptations": [
      "Support: use 100 people and round numbers.",
      "Challenge: change the base rate and ask students to predict the direction of the update before calculating."
    ],
    "resourcePackPath": "resources/bayes-update-cards/index.html",
    "cardDeckPath": "resources/bayes-update-cards/cards.csv",
    "visualPromptPath": "resources/bayes-update-cards/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Bayes Update Cards Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Bayes Update Cards Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Bayes Update Cards Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does notation shape mathematical knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Bayes Update Cards Stimulus A",
          "body": "Student-facing stimulus 1: Fictional case: 10 of 1000 people have Condition X; a positive test catches 9 real cases and falsely flags 99 non-cases. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Bayes Update Cards Stimulus B",
          "body": "Student-facing stimulus 2: Notation contrast card: [[math:P(H | +)]] is not the same as [[math:P(+ | H)]]. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Bayes Update Cards Reveal / Twist",
          "body": "Student-facing stimulus 3: Notation contrast card: [[math:P(H | +)]] is not the same as [[math:P(+ | H)]]. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — New evidence updates prior probability; it does not replace the background rate.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how new evidence updates prior probability; it does not replace the background rate.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does notation shape mathematical knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/bayes-update-cards/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/bayes-update-cards/worksheet.pdf",
        "pagePath": "premium/bayes-update-cards/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/bayes-update-cards/slides.md",
        "pptxPath": "premium/bayes-update-cards/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/bayes-update-cards/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/bayes-update-cards/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/bayes-update-cards/teacher-notes.pdf",
        "pagePath": "premium/bayes-update-cards/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/bayes-update-cards/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/bayes-update-cards/run-kit.pdf",
        "pagePath": "premium/bayes-update-cards/run-kit.html"
      }
    ]
  },
  {
    "id": "simpsons-paradox-shuffle",
    "title": "Simpson's Paradox Shuffle",
    "category": "Mathematics",
    "time": "35-45 min",
    "summary": "Students sort subgroup data cards and discover that an overall trend can reverse when data is grouped differently.",
    "bigIdea": "Aggregated data can hide subgroup structure; mathematical knowledge depends on how cases are grouped.",
    "setup": [
      "Use small whole-number subgroups so the reversal is visible without calculators.",
      "Ask students for the headline claim before revealing subgroup structure."
    ],
    "exampleStimuli": [
      "Method A beats Method B overall, but Method B performs better inside each difficulty subgroup.",
      "Headline card: 'Method A has the higher success rate' beside subgroup table cards."
    ],
    "runResources": [
      "Subgroup sorting mat: Group 1, Group 2, overall total.",
      "Responsible headline checklist: sample size, subgroup balance, denominator, and audience."
    ],
    "sampleTeacherLanguage": [
      "The calculation is correct; now ask whether the comparison is fair.",
      "What vanished when the data was combined?"
    ],
    "sampleStudentOutput": [
      "The overall rate hid that one method was used more often in the easier subgroup.",
      "The same numbers supported a different claim after we grouped them responsibly."
    ],
    "extensionTasks": [
      "Students create a simple fictional dataset where aggregation changes the apparent story.",
      "Connect the paradox to admissions, medicine, sport, or school data."
    ],
    "adaptations": [
      "Support: provide completed percentages and focus on interpretation.",
      "Challenge: ask students to design the smallest dataset that creates a reversal."
    ],
    "resourcePackPath": "resources/simpsons-paradox-shuffle/index.html",
    "cardDeckPath": "resources/simpsons-paradox-shuffle/cards.csv",
    "visualPromptPath": "resources/simpsons-paradox-shuffle/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Simpson's Paradox Shuffle Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Simpson's Paradox Shuffle Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Simpson's Paradox Shuffle Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How do grouping choices shape statistical knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Simpson's Paradox Shuffle Stimulus A",
          "body": "Student-facing stimulus 1: Method A beats Method B overall, but Method B performs better inside each difficulty subgroup. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Simpson's Paradox Shuffle Stimulus B",
          "body": "Student-facing stimulus 2: Headline card: 'Method A has the higher success rate' beside subgroup table cards. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Simpson's Paradox Shuffle Reveal / Twist",
          "body": "Student-facing stimulus 3: Headline card: 'Method A has the higher success rate' beside subgroup table cards. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Aggregated data can hide subgroup structure; mathematical knowledge depends on how cases are grouped.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how aggregated data can hide subgroup structure; mathematical knowledge depends on how cases are grouped.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How do grouping choices shape statistical knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/simpsons-paradox-shuffle/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/simpsons-paradox-shuffle/worksheet.pdf",
        "pagePath": "premium/simpsons-paradox-shuffle/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/simpsons-paradox-shuffle/slides.md",
        "pptxPath": "premium/simpsons-paradox-shuffle/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/simpsons-paradox-shuffle/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/simpsons-paradox-shuffle/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/simpsons-paradox-shuffle/teacher-notes.pdf",
        "pagePath": "premium/simpsons-paradox-shuffle/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/simpsons-paradox-shuffle/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/simpsons-paradox-shuffle/run-kit.pdf",
        "pagePath": "premium/simpsons-paradox-shuffle/run-kit.html"
      }
    ]
  },
  {
    "id": "average-trap",
    "title": "Average Trap",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students compare mean, median, and mode for skewed datasets and evaluate which average supports the most responsible claim.",
    "bigIdea": "An average is a choice of representation, not a neutral summary of reality.",
    "setup": [
      "Choose skewed datasets where one large value pulls the mean away from most cases.",
      "Ask students which number they would put in a headline before calculating all averages."
    ],
    "exampleStimuli": [
      "Revision hours: 1, 1, 2, 2, 3, 3, 18.",
      "Screen time claim: mean looks high, median looks moderate, mode shows the most common routine."
    ],
    "runResources": [
      "Average comparison sheet: mean, median, mode, purpose, audience, and possible misuse.",
      "Headline cards using each average to support a different conclusion."
    ],
    "sampleTeacherLanguage": [
      "All three averages can be correct; the TOK question is which one responsibly represents the situation.",
      "What does this number make visible, and what does it hide?"
    ],
    "sampleStudentOutput": [
      "The mean was mathematically correct but made most students look unlike the typical case.",
      "The median was better for a typical value, but the mean was useful for total resource planning."
    ],
    "extensionTasks": [
      "Students find a public average and ask whether mean, median, or mode would be more responsible.",
      "Compare average choice with graph scale choice."
    ],
    "adaptations": [
      "Support: give pre-calculated averages.",
      "Challenge: ask students to design a dataset where the three averages tell three different stories."
    ],
    "resourcePackPath": "resources/average-trap/index.html",
    "cardDeckPath": "resources/average-trap/cards.csv",
    "visualPromptPath": "resources/average-trap/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Average Trap Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Average Trap Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Average Trap Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "How does choosing a summary statistic shape knowledge?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Average Trap Stimulus A",
          "body": "Student-facing stimulus 1: Revision hours: 1, 1, 2, 2, 3, 3, 18. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Average Trap Stimulus B",
          "body": "Student-facing stimulus 2: Screen time claim: mean looks high, median looks moderate, mode shows the most common routine. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Average Trap Reveal / Twist",
          "body": "Student-facing stimulus 3: Screen time claim: mean looks high, median looks moderate, mode shows the most common routine. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — An average is a choice of representation, not a neutral summary of reality.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how an average is a choice of representation, not a neutral summary of reality.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "How does choosing a summary statistic shape knowledge?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/average-trap/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/average-trap/worksheet.pdf",
        "pagePath": "premium/average-trap/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/average-trap/slides.md",
        "pptxPath": "premium/average-trap/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/average-trap/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/average-trap/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/average-trap/teacher-notes.pdf",
        "pagePath": "premium/average-trap/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/average-trap/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/average-trap/run-kit.pdf",
        "pagePath": "premium/average-trap/run-kit.html"
      }
    ]
  },
  {
    "id": "infinity-hotel-check-in",
    "title": "Infinity Hotel Check-In",
    "category": "Mathematics",
    "time": "25-35 min",
    "summary": "Students act out Hilbert's Hotel to examine why mathematical infinity resists everyday intuition.",
    "bigIdea": "Mathematical concepts can be coherent even when they violate ordinary experience.",
    "setup": [
      "Use numbered cards on desks or around the room to represent hotel rooms.",
      "Make clear when students are reasoning about a formal model rather than a physically possible hotel."
    ],
    "exampleStimuli": [
      "One new guest arrives at a full infinite hotel; every current guest moves by [[math:n → n + 1]].",
      "Claim card: [[math:∞ + 1 = ∞]] feels impossible until the rule is specified."
    ],
    "runResources": [
      "Room card set and move-rule card.",
      "Reflection sheet: what felt impossible, what the rule showed, and what the model assumes."
    ],
    "sampleTeacherLanguage": [
      "Do not ask whether a real hotel could do this; ask whether the formal rule is coherent.",
      "Where did your everyday intuition stop helping?"
    ],
    "sampleStudentOutput": [
      "The model was coherent even though I could not picture the whole hotel.",
      "I learned that mathematical possibility can depend on definitions rather than physical imagination."
    ],
    "extensionTasks": [
      "Compare countable infinity with a finite hotel and identify exactly where the rule fails.",
      "Ask whether mathematical objects need real-world counterparts to produce knowledge."
    ],
    "adaptations": [
      "Support: act out the first ten rooms only.",
      "Challenge: add infinitely many new guests by moving each current guest from room n to room 2n."
    ],
    "resourcePackPath": "resources/infinity-hotel-check-in/index.html",
    "cardDeckPath": "resources/infinity-hotel-check-in/cards.csv",
    "visualPromptPath": "resources/infinity-hotel-check-in/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Infinity Hotel Check-In Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Infinity Hotel Check-In Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Infinity Hotel Check-In Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "Can mathematics know beyond intuition?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Infinity Hotel Check-In Stimulus A",
          "body": "Student-facing stimulus 1: One new guest arrives at a full infinite hotel; every current guest moves by [[math:n → n + 1]]. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Infinity Hotel Check-In Stimulus B",
          "body": "Student-facing stimulus 2: Claim card: [[math:∞ + 1 = ∞]] feels impossible until the rule is specified. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Infinity Hotel Check-In Reveal / Twist",
          "body": "Student-facing stimulus 3: Claim card: [[math:∞ + 1 = ∞]] feels impossible until the rule is specified. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Mathematical concepts can be coherent even when they violate ordinary experience.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how mathematical concepts can be coherent even when they violate ordinary experience.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "Can mathematics know beyond intuition?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/infinity-hotel-check-in/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/infinity-hotel-check-in/worksheet.pdf",
        "pagePath": "premium/infinity-hotel-check-in/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/infinity-hotel-check-in/slides.md",
        "pptxPath": "premium/infinity-hotel-check-in/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/infinity-hotel-check-in/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/infinity-hotel-check-in/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/infinity-hotel-check-in/teacher-notes.pdf",
        "pagePath": "premium/infinity-hotel-check-in/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/infinity-hotel-check-in/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/infinity-hotel-check-in/run-kit.pdf",
        "pagePath": "premium/infinity-hotel-check-in/run-kit.html"
      }
    ]
  },
  {
    "id": "pythagorean-proof-gallery",
    "title": "Pythagorean Proof Gallery",
    "category": "Mathematics",
    "time": "30-40 min",
    "summary": "Students compare visual, algebraic, and verbal proofs of the Pythagorean theorem and decide what makes each convincing.",
    "bigIdea": "Mathematical proof is not just a result; it is a standard for why a result must be true.",
    "setup": [
      "Prepare three proof formats and do not identify one as best at the start.",
      "Ask students to rank proof cards using different criteria: certainty, explanation, elegance, and accessibility."
    ],
    "exampleStimuli": [
      "Visual rearrangement proof of [[math:a^2 + b^2 = c^2]].",
      "Algebraic proof card plus a verbal explanation card of the same theorem."
    ],
    "runResources": [
      "Proof evaluation grid: assumptions, conclusion, why it must be true, what it helps you understand.",
      "Criteria cards: rigorous, explanatory, elegant, memorable, generalisable."
    ],
    "sampleTeacherLanguage": [
      "A proof does more than persuade; it should show why the result must hold.",
      "Which proof gives certainty, and which proof gives understanding?"
    ],
    "sampleStudentOutput": [
      "The visual proof helped me understand area, but the algebraic proof felt easier to generalize.",
      "Elegance made a proof more satisfying, but it was not the same as validity."
    ],
    "extensionTasks": [
      "Students compare a proof with many measured right triangles and explain why measurement is insufficient.",
      "Connect mathematical elegance to aesthetic judgement in the arts."
    ],
    "adaptations": [
      "Support: focus on two proof cards.",
      "Challenge: students write a fourth proof explanation for younger students."
    ],
    "resourcePackPath": "resources/pythagorean-proof-gallery/index.html",
    "cardDeckPath": "resources/pythagorean-proof-gallery/cards.csv",
    "visualPromptPath": "resources/pythagorean-proof-gallery/visual-prompt.svg",
    "lessonKit": {
      "studentPrompt": "Inspect Pythagorean Proof Gallery Stimulus A. Record one first claim, the evidence you used, your confidence, and what would make you revise.",
      "lessonQuestions": [
        {
          "number": 1,
          "question": "After inspecting Pythagorean Proof Gallery Stimulus A, what is your first knowledge claim?",
          "answer": "Teacher cue: look for a clear claim, not just a description.",
          "prompt": "Write one claim in a complete sentence."
        },
        {
          "number": 2,
          "question": "Which exact detail from Pythagorean Proof Gallery Stimulus A did you use as evidence?",
          "answer": "Teacher cue: students should name visible words, data, source features, method features, or contextual clues.",
          "prompt": "List two pieces of evidence."
        },
        {
          "number": 3,
          "question": "What did you infer beyond the evidence?",
          "answer": "Teacher cue: this is where assumptions, framing, models, or perspective usually appear.",
          "prompt": "Separate observation from interpretation."
        },
        {
          "number": 4,
          "question": "How confident are you: 50%, 60%, 70%, 80%, 90%, or 100%?",
          "answer": "Teacher cue: confidence is data for the debrief, not a grade.",
          "prompt": "Circle one confidence level and justify it."
        },
        {
          "number": 5,
          "question": "What missing information would most improve the knowledge claim?",
          "answer": "Teacher cue: push for method, source, context, comparison, or definitions.",
          "prompt": "Name one piece of missing information."
        },
        {
          "number": 6,
          "question": "What makes mathematical proof different from empirical confirmation?",
          "answer": "Teacher cue: students should move from the classroom example to a general TOK issue.",
          "prompt": "Answer using the activity as evidence."
        }
      ],
      "stimulusCards": [
        {
          "title": "Pythagorean Proof Gallery Stimulus A",
          "body": "Student-facing stimulus 1: Visual rearrangement proof of [[math:a^2 + b^2 = c^2]]. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Students inspect this exact card first and commit to a claim before hearing anyone else.",
          "teacherUse": "Print or project as the first shared stimulus."
        },
        {
          "title": "Pythagorean Proof Gallery Stimulus B",
          "body": "Student-facing stimulus 2: Algebraic proof card plus a verbal explanation card of the same theorem. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Use this for comparison, a second round, or a partner challenge.",
          "teacherUse": "Reveal after the first response so students can revise."
        },
        {
          "title": "Pythagorean Proof Gallery Reveal / Twist",
          "body": "Student-facing stimulus 3: Algebraic proof card plus a verbal explanation card of the same theorem. Work the example, then decide whether it gives a pattern, a model, a calculation, or a proof.",
          "meta": "Teacher reveal: connect the changed response to the big idea — Mathematical proof is not just a result; it is a standard for why a result must be true.",
          "teacherUse": "Use to create the revision moment."
        }
      ],
      "studentTask": "Use the stimulus cards to complete the observation/inference/evidence/confidence grid, then answer one TOK knowledge question connected to Mathematics.",
      "teacherReveal": "The key move is not the “right answer”; it is the moment students see how mathematical proof is not just a result; it is a standard for why a result must be true.",
      "answerKey": [
        "Strong response: separates observation from inference.",
        "Strong response: names a method, source, model, language choice, context, or perspective.",
        "Strong response: revises confidence when new evidence or a new criterion appears.",
        "Weak response: gives only opinion or says “it depends” without criteria."
      ],
      "debriefQuestion": "What makes mathematical proof different from empirical confirmation?"
    },
    "free": true,
    "premiumResources": [
      {
        "kind": "worksheet",
        "title": "Premium worksheet",
        "filename": "worksheet.md",
        "pageFilename": "worksheet.html",
        "pdfFilename": "worksheet.pdf",
        "status": "draft-ready",
        "message": "Worksheet and PDF handout ready.",
        "path": "premium/pythagorean-proof-gallery/worksheet.md",
        "pptxPath": null,
        "pdfPath": "premium/pythagorean-proof-gallery/worksheet.pdf",
        "pagePath": "premium/pythagorean-proof-gallery/worksheet.html"
      },
      {
        "kind": "slides",
        "title": "Premium slides",
        "filename": "slides.md",
        "pageFilename": null,
        "pptxFilename": "slides.pptx",
        "status": "draft-ready",
        "message": "Premium slides deck ready.",
        "path": "premium/pythagorean-proof-gallery/slides.md",
        "pptxPath": "premium/pythagorean-proof-gallery/slides.pptx",
        "pdfPath": null,
        "pagePath": "premium/pythagorean-proof-gallery/slides.pptx"
      },
      {
        "kind": "teacher-notes",
        "title": "Premium teacher notes",
        "filename": "teacher-notes.md",
        "pageFilename": "teacher-notes.html",
        "pdfFilename": "teacher-notes.pdf",
        "status": "draft-ready",
        "message": "Teacher notes and PDF guide ready.",
        "path": "premium/pythagorean-proof-gallery/teacher-notes.md",
        "pptxPath": null,
        "pdfPath": "premium/pythagorean-proof-gallery/teacher-notes.pdf",
        "pagePath": "premium/pythagorean-proof-gallery/teacher-notes.html"
      },
      {
        "kind": "run-kit",
        "title": "Classroom run kit",
        "filename": "run-kit.md",
        "pageFilename": "run-kit.html",
        "pdfFilename": "run-kit.pdf",
        "status": "draft-ready",
        "message": "Run kit with examples, prompts, and setup steps ready.",
        "path": "premium/pythagorean-proof-gallery/run-kit.md",
        "pptxPath": null,
        "pdfPath": "premium/pythagorean-proof-gallery/run-kit.pdf",
        "pagePath": "premium/pythagorean-proof-gallery/run-kit.html"
      }
    ]
  }
];

const activityDetailPages = {
  "change-blindness-starter": "activities/change-blindness.html",
  "confidence-calibration-test": "activities/confidence-calibration-test.html",
  "personal-knowledge-map": "activities/personal-knowledge-map.html",
  "blind-spot-autobiography": "activities/blind-spot-autobiography.html",
  "eyewitness-trap": "activities/eyewitness-trap.html",
  "false-memory-word-list": "activities/false-memory-word-list.html",
  "perspective-glasses": "activities/perspective-glasses.html",
  "algorithmic-feed-simulation": "activities/algorithmic-feed-simulation.html",
  "search-engine-ranking-game": "activities/search-engine-ranking-game.html",
  "ai-hallucination-courtroom": "activities/ai-hallucination-courtroom.html",
  "deepfake-detection-challenge": "activities/deepfake-detection-challenge.html",
  "gps-versus-local-knowledge": "activities/gps-versus-local-knowledge.html",
  "autocomplete-poetry": "activities/autocomplete-poetry.html",
  "loaded-headline-laboratory": "activities/loaded-headline-laboratory.html",
  "metaphor-changes-policy": "activities/metaphor-changes-policy.html",
  "translation-loss-game": "activities/translation-loss-game.html",
  "category-boundary-sorting": "activities/category-boundary-sorting.html",
  "euphemism-and-moral-distance": "activities/euphemism-and-moral-distance.html",
  "proof-versus-pattern": "activities/proof-versus-pattern.html",
  "monty-hall-shock": "activities/monty-hall-shock.html",
  "axiom-switch-universe": "activities/axiom-switch-universe.html",
  "calculator-trust-test": "activities/calculator-trust-test.html",
  "observation-is-theory-laden": "activities/observation-is-theory-laden.html",
  "p-hacking-with-random-data": "activities/p-hacking-with-random-data.html",
  "placebo-trial-design": "activities/placebo-trial-design.html",
  "model-failure-challenge": "activities/model-failure-challenge.html",
  "ultimatum-game": "activities/ultimatum-game.html",
  "survey-wording-experiment": "activities/survey-wording-experiment.html",
  "conformity-without-humiliation": "activities/conformity-without-humiliation.html",
  "replication-debate": "activities/replication-debate.html",
  "broken-archive": "activities/broken-archive.html",
  "same-event-different-historian": "activities/same-event-different-historian.html",
  "cause-web": "activities/cause-web.html",
  "presentism-trial": "activities/presentism-trial.html",
  "title-changes-meaning": "activities/title-changes-meaning.html",
  "fake-or-masterpiece": "activities/fake-or-masterpiece.html",
  "one-image-many-readings": "activities/one-image-many-readings.html",
  "music-and-emotion-experiment": "activities/music-and-emotion-experiment.html",
  "what-counts-as-evidence": "activities/what-counts-as-evidence.html",
  "same-object-different-aok": "activities/same-object-different-aok.html",
  "reliability-ranking": "activities/reliability-ranking.html",
  "invisible-gorilla-discussion": "activities/invisible-gorilla-discussion.html",
  "feeling-of-knowing-forecast": "activities/feeling-of-knowing-forecast.html",
  "recommendation-rabbit-hole": "activities/recommendation-rabbit-hole.html",
  "facial-recognition-bias-audit": "activities/facial-recognition-bias-audit.html",
  "definition-drift-debate": "activities/definition-drift-debate.html",
  "graph-caption-framing": "activities/graph-caption-framing.html",
  "base-rate-neglect-clinic": "activities/base-rate-neglect-clinic.html",
  "correlation-illusion-cards": "activities/correlation-illusion-cards.html",
  "peer-review-filter": "activities/peer-review-filter.html",
  "measurement-changes-phenomenon": "activities/measurement-changes-phenomenon.html",
  "anchoring-price-experiment": "activities/anchoring-price-experiment.html",
  "observer-effect-roleplay": "activities/observer-effect-roleplay.html",
  "memory-versus-monument": "activities/memory-versus-monument.html",
  "timeline-compression-trap": "activities/timeline-compression-trap.html",
  "context-collapse-gallery": "activities/context-collapse-gallery.html",
  "soundtrack-changes-scene": "activities/soundtrack-changes-scene.html",
  "method-swap-challenge": "activities/method-swap-challenge.html",
  "expertise-boundary-clinic": "activities/expertise-boundary-clinic.html",
  "source-amnesia-trace": "activities/source-amnesia-trace.html",
  "prompt-framing-lab": "activities/prompt-framing-lab.html",
  "ambiguity-court": "activities/ambiguity-court.html",
  "randomness-pattern-hunt": "activities/randomness-pattern-hunt.html",
  "anomaly-rescue-mission": "activities/anomaly-rescue-mission.html",
  "framing-risk-choice": "activities/framing-risk-choice.html",
  "source-silence-investigation": "activities/source-silence-investigation.html",
  "curator-choice-gallery": "activities/curator-choice-gallery.html",
  "claim-migration-lab": "activities/claim-migration-lab.html",
  "emotion-snapshot-audit": "activities/emotion-snapshot-audit.html",
  "data-dashboard-mirage": "activities/data-dashboard-mirage.html",
  "silence-and-implication-lab": "activities/silence-and-implication-lab.html",
  "log-scale-surprise": "activities/log-scale-surprise.html",
  "mechanism-black-box": "activities/mechanism-black-box.html",
  "interviewer-effect-simulation": "activities/interviewer-effect-simulation.html",
  "counterfactual-forks": "activities/counterfactual-forks.html",
  "restoration-ethics-studio": "activities/restoration-ethics-studio.html",
  "certainty-thermometer": "activities/certainty-thermometer.html",
  "bayes-update-cards": "activities/bayes-update-cards.html",
  "simpsons-paradox-shuffle": "activities/simpsons-paradox-shuffle.html",
  "average-trap": "activities/average-trap.html",
  "infinity-hotel-check-in": "activities/infinity-hotel-check-in.html",
  "pythagorean-proof-gallery": "activities/pythagorean-proof-gallery.html"
};

let activeCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderCategories();
  renderFeaturedActivities();
  setupActivityLibrary();
});

function setupNavigation() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();
    const isActivityDetail = currentPath.includes("/activities/") && linkPage === "activities.html";
    if (href === currentPage || linkPage === currentPage || isActivityDetail) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", event => {
    if (event.target.matches("a")) {
      menu.classList.remove("open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function renderCategories() {
  const grid = document.querySelector("#category-grid");
  if (!grid) return;

  grid.innerHTML = categories.map(category => {
    const count = activities.filter(activity => activity.category === category.name).length;
    return `
      <a class="category-card" href="activities.html?category=${encodeURIComponent(category.name)}" style="--accent: ${category.accent}">
        <span class="category-accent" aria-hidden="true"></span>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <span class="category-count">${count} ${count === 1 ? "activity" : "activities"}</span>
      </a>
    `;
  }).join("");
}

function renderFeaturedActivities() {
  const grid = document.querySelector("#featured-activities");
  if (!grid) return;

  grid.innerHTML = activities.slice(0, 3).map(renderActivityCard).join("");
}

function setupActivityLibrary() {
  const library = document.querySelector("#activity-library");
  if (!library) return;

  const searchInput = document.querySelector("#activity-search");
  const resetButton = document.querySelector("#reset-filters");
  const categoryFilter = document.querySelector("#category-filter");

  renderCategoryFilters(categoryFilter);
  applyInitialCategoryFromUrl();

  searchInput.addEventListener("input", renderFilteredActivities);

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "all";
    updateCategoryChips();
    renderFilteredActivities();
    searchInput.focus();
  });

  renderFilteredActivities();
}

function renderCategoryFilters(container) {
  const chips = [
    `<button class="category-chip active" type="button" data-category="all" aria-pressed="true">All categories</button>`,
    ...categories.map(category => `<button class="category-chip" type="button" data-category="${category.name}" aria-pressed="false">${category.name}</button>`)
  ];

  container.innerHTML = chips.join("");
  container.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    updateCategoryChips();
    renderFilteredActivities();
  });
}

function applyInitialCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  if (category && categories.some(item => item.name === category)) {
    activeCategory = category;
    updateCategoryChips();
  }
}

function updateCategoryChips() {
  document.querySelectorAll("[data-category]").forEach(button => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderFilteredActivities() {
  const library = document.querySelector("#activity-library");
  const emptyState = document.querySelector("#empty-state");
  const resultCount = document.querySelector("#result-count");
  const searchInput = document.querySelector("#activity-search");
  const query = searchInput.value.trim().toLowerCase();

  const matches = activities.filter(activity => {
    const searchableText = [
      activity.id,
      activity.title,
      activity.category,
      activity.time,
      activity.summary,
      activity.bigIdea,
      ...(activity.setup || []),
      ...(activity.exampleStimuli || []),
      ...(activity.runResources || []),
      ...(activity.sampleTeacherLanguage || []),
      ...(activity.sampleStudentOutput || []),
      ...(activity.extensionTasks || []),
      ...(activity.adaptations || []),
      activity.lessonKit?.studentPrompt,
      activity.lessonKit?.studentTask,
      activity.lessonKit?.teacherReveal,
      activity.lessonKit?.debriefQuestion,
      ...(activity.lessonKit?.answerKey || []),
      ...(activity.lessonKit?.lessonQuestions || []).flatMap(question => [
        question.question,
        question.answer,
        question.prompt
      ]),
      ...(activity.lessonKit?.stimulusCards || []).flatMap(card => [
        card.title,
        card.body,
        card.meta,
        card.teacherUse
      ]),
      ...activity.premiumResources.flatMap(resource => [
        resource.title,
        resource.message,
        resource.status,
        resource.path,
        resource.pagePath,
        resource.pptxPath,
        resource.pdfPath
      ])
    ].join(" ").toLowerCase();

    const matchesQuery = !query || searchableText.includes(query);
    const matchesCategory = activeCategory === "all" || activity.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  library.innerHTML = matches.map(renderActivityCard).join("");
  emptyState.hidden = matches.length > 0;
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "activity" : "activities"} shown`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInlineMath(value) {
  const mathMap = {
    "a^2 + b^2 = c^2": '<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></math>',
    "P(H | +) = 9 / (9 + 99) = 1 / 12 ≈ 8.3%": '<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>P</mi><mo stretchy="false">(</mo><mi>H</mi><mo>|</mo><mo>+</mo><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>9</mn><mrow><mn>9</mn><mo>+</mo><mn>99</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>≈</mo><mn>8.3</mn><mo>%</mo></math>',
    "mean = Σx / n": '<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mtext>mean</mtext><mo>=</mo><mfrac><mrow><mo>Σ</mo><mi>x</mi></mrow><mi>n</mi></mfrac></math>',
    "∞ + 1 = ∞": '<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mi>∞</mi><mo>+</mo><mn>1</mn><mo>=</mo><mi>∞</mi></math>'
  };

  return String(value ?? "")
    .split(/(\[\[math:[\s\S]*?\]\])/g)
    .map(part => {
      const match = part.match(/^\[\[math:([\s\S]*?)\]\]$/);
      if (!match) return escapeHtml(part);
      const expression = match[1].trim();
      return mathMap[expression] || `<math class="math-inline" xmlns="http://www.w3.org/1998/Math/MathML"><mtext>${escapeHtml(expression)}</mtext></math>`;
    })
    .join("");
}

function renderActivityCard(activity) {
  const accessLabel = activity.free ? "Free" : "Premium";
  const accessClass = activity.free ? "tier-free" : "tier-premium";
  const detailPage = activityDetailPages[activity.id];
  const freeActivityPage = detailPage
    ? `<a href="${detailPage}">Open free activity page</a>`
    : "<span>Free activity page planned.</span>";
  const premiumResourceCards = activity.premiumResources.map(resource => `
        <div class="activity-resource-card ${resource.pagePath ? "resource-card-ready" : "resource-card-locked"}">
          <span>${resource.title}</span>
          <p>${formatInlineMath(resource.message)}</p>
          <div class="resource-actions">
            ${resource.pagePath ? `<a class="resource-link" href="${resource.pagePath}"${resource.kind === "slides" ? " download" : ""}>${resource.kind === "slides" ? "Download" : "Open"} ${resource.kind === "run-kit" ? "run kit" : resource.title.replace(/^Premium /, "")}</a>` : ""}
            ${resource.pdfPath ? `<a class="resource-link" href="${resource.pdfPath}" download>Download PDF</a>` : ""}
          </div>
        </div>
  `).join("");

  return `
    <article class="activity-card" id="${activity.id}">
      <div class="activity-meta">
        <span class="meta-pill">${activity.category}</span>
        <span class="tier-badge ${accessClass}">${accessLabel}</span>
      </div>
      <h3>${activity.title}</h3>
      <p>${formatInlineMath(activity.summary)}</p>
      <div class="activity-meta" aria-label="Activity details">
        <span class="meta-pill">${activity.time}</span>
        <span class="meta-pill">ID: ${activity.id}</span>
      </div>
      <div class="big-idea">
        <span>Big idea</span>
        <p>${formatInlineMath(activity.bigIdea)}</p>
      </div>
      <div class="activity-resource-grid" aria-label="Activity resources">
        <div class="activity-resource-card resource-card-free">
          <span>Free activity page</span>
          ${freeActivityPage}
        </div>
        <div class="activity-resource-card resource-card-free">
          <span>Classroom resource pack</span>
          <a href="${activity.resourcePackPath}">Open printable resources</a>
        </div>
        ${premiumResourceCards}
      </div>
    </article>
  `;
}
