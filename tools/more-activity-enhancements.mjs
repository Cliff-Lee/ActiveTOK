export const moreActivityEnhancements = {
  "emotion-snapshot-audit": {
    setup: [
      "Use fictional emotion cards rather than asking students to disclose their actual mood.",
      "Choose an ambiguous image or short scene with several plausible interpretations."
    ],
    exampleStimuli: [
      "Scene: a student sees two friends whispering and laughing near the classroom door.",
      "Emotion frames: anxious, excited, suspicious, calm, embarrassed, proud."
    ],
    runResources: [
      "Emotion frame cards with noticing prompts.",
      "Interpretation grid: detail noticed, inference, emotion frame, evidence strength."
    ],
    sampleTeacherLanguage: [
      "Emotion did not add new visual evidence, but it changed which details mattered.",
      "When might emotion help you notice something important?"
    ],
    sampleStudentOutput: [
      "The suspicious frame made the whispering seem hostile, while the excited frame made it seem like a surprise.",
      "The same detail supported different interpretations because the emotional frame changed."
    ],
    extensionTasks: [
      "Students compare emotion in eyewitness testimony, art interpretation, and ethical judgement.",
      "Create a checking routine for emotionally charged knowledge claims."
    ],
    adaptations: [
      "Support: use two emotion frames only.",
      "Challenge: ask students to identify when emotion provides relevant evidence."
    ]
  },
  "data-dashboard-mirage": {
    setup: [
      "Use the same fictional dataset in both dashboard versions.",
      "Change only visual design choices such as color, order, scale, and highlighted metric."
    ],
    exampleStimuli: [
      "Dashboard A highlights falling late arrivals in green; Dashboard B highlights rising absences in amber using the same school-week dataset.",
      "Dashboard A ranks classes by average score; Dashboard B ranks them by improvement."
    ],
    runResources: [
      "Dashboard audit checklist: title, color, scale, missing context, default ordering, highlighted number.",
      "Redesign template for a more transparent dashboard."
    ],
    sampleTeacherLanguage: [
      "A dashboard answers before we know what question it was built to answer.",
      "Which design choice did the most interpretive work?"
    ],
    sampleStudentOutput: [
      "The green metric made the school look successful even though absences were rising.",
      "Both dashboards were accurate, but each made a different issue feel urgent."
    ],
    extensionTasks: [
      "Students redesign a school dashboard for students, parents, and teachers separately.",
      "Connect dashboard design to public health, climate, or finance communication."
    ],
    adaptations: [
      "Support: compare two dashboards with one obvious design difference.",
      "Challenge: ask students to write a dashboard ethics checklist."
    ]
  },
  "silence-and-implication-lab": {
    setup: [
      "Use brief dialogues with simple social contexts.",
      "Remind students that implication depends on shared norms and can be misread."
    ],
    exampleStimuli: [
      "Dialogue: 'Did you like my presentation?' 'Well, your slides were very colorful.'",
      "Dialogue: 'Are you coming to the meeting?' 'I have a lot of homework tonight.'"
    ],
    runResources: [
      "Explicit/implied meaning chart.",
      "Context cards: close friend, teacher feedback, formal email, sarcastic tone, nervous speaker."
    ],
    sampleTeacherLanguage: [
      "What was said, what was implied, and what did you add?",
      "Which context clues justify your reading?"
    ],
    sampleStudentOutput: [
      "The reply praised the slides but implied the content was weak.",
      "With a formal context, the same indirect answer sounded more polite than evasive."
    ],
    extensionTasks: [
      "Students rewrite an indirect statement as a direct claim and compare effects.",
      "Connect implication to diplomacy, advertising, poetry, or classroom feedback."
    ],
    adaptations: [
      "Support: provide two possible implications.",
      "Challenge: distinguish implication from assumption and inference."
    ]
  },
  "log-scale-surprise": {
    setup: [
      "Use simple doubling data so students can see both the numerical and visual relationship.",
      "Let students describe each graph before teaching the term logarithmic scale."
    ],
    exampleStimuli: [
      "Dataset: 1, 2, 4, 8, 16, 32, 64 over seven days.",
      "Question: does the graph show runaway growth, steady multiplicative growth, or both?",
      "Notation card: [[math:log10(1000) = 3]] shows how a multiplicative change becomes an equal step on a log scale."
    ],
    runResources: [
      "Linear and logarithmic graph templates for the same dataset.",
      "Graph purpose cards: communicate urgency, compare growth rates, inspect proportional change."
    ],
    sampleTeacherLanguage: [
      "Both graphs can be accurate, but they serve different questions.",
      "What does this scale make visually obvious, and what does it hide?"
    ],
    sampleStudentOutput: [
      "The linear graph made the later values dominate the story.",
      "The log graph made equal ratios look like equal steps."
    ],
    extensionTasks: [
      "Students find a real public graph and ask what scale would change the visual story.",
      "Compare scale choice with headline framing and dashboard design."
    ],
    adaptations: [
      "Support: use pre-drawn graphs.",
      "Challenge: ask students to decide which scale is more responsible for a given audience."
    ]
  },
  "mechanism-black-box": {
    setup: [
      "Use a hidden input-output rule that several mechanisms could initially explain.",
      "Prepare at least one test input that separates competing explanations."
    ],
    exampleStimuli: [
      "Rule box: input a number; output is double plus three. Competing mechanisms may fit early examples.",
      "Physical box: different objects go in; the teacher secretly applies a sorting rule before returning an output card."
    ],
    runResources: [
      "Input-output testing sheet.",
      "Mechanism diagram card with spaces for rule, prediction, and disconfirming test."
    ],
    sampleTeacherLanguage: [
      "A pattern that predicts is useful, but a mechanism says why.",
      "What test would make one explanation fail?"
    ],
    sampleStudentOutput: [
      "Two rules fit the first three inputs, so we needed a new test case.",
      "Our explanation became stronger when it predicted an output we had not seen."
    ],
    extensionTasks: [
      "Students compare mechanism in science with interpretation in history or arts.",
      "Ask groups to design a black box for another group to investigate."
    ],
    adaptations: [
      "Support: use number rules with simple arithmetic.",
      "Challenge: include noisy data where one output is unreliable."
    ]
  },
  "interviewer-effect-simulation": {
    setup: [
      "Use safe topics such as homework routines, cafeteria preferences, or study environments.",
      "Assign interviewer styles openly so students can analyze method rather than feel manipulated."
    ],
    exampleStimuli: [
      "Question: 'How useful is homework for learning?' Styles: warm, rushed, leading, skeptical, neutral.",
      "Question: 'What makes a classroom discussion good?' Styles: encouraging, distracted, formal."
    ],
    runResources: [
      "Interview style cards.",
      "Response comparison sheet: length, detail, hesitation, confidence, interviewer influence."
    ],
    sampleTeacherLanguage: [
      "The question is not the only method; the social situation is part of the method.",
      "How did the interviewer change what felt safe or relevant to say?"
    ],
    sampleStudentOutput: [
      "The leading interviewer got shorter answers that agreed more quickly.",
      "The warm interviewer produced more detail, but maybe also more desire to please."
    ],
    extensionTasks: [
      "Students design a better interview protocol with ethics notes.",
      "Compare interviews with surveys, observation, and experiments."
    ],
    adaptations: [
      "Support: use two interviewer styles.",
      "Challenge: add inter-rater coding of response detail."
    ]
  },
  "counterfactual-forks": {
    setup: [
      "Choose a causal story where one small change is plausible.",
      "Keep students close to evidence by requiring a constraint card for every counterfactual."
    ],
    exampleStimuli: [
      "School example: What if the viral incident had not happened, but earlier complaints still existed?",
      "Historical prompt: What if one reform law had failed, while economic and social pressures remained?"
    ],
    runResources: [
      "Counterfactual fork sheet: changed condition, fixed constraints, likely effects, uncertainty.",
      "Plausibility checklist: available actors, resources, beliefs, institutions, timing."
    ],
    sampleTeacherLanguage: [
      "A disciplined counterfactual changes one thing and respects the rest of the evidence.",
      "What does your fork reveal about causal importance?"
    ],
    sampleStudentOutput: [
      "Removing the trigger delayed the policy but did not remove the long-term pressure.",
      "Our counterfactual showed the event was a catalyst rather than the only cause."
    ],
    extensionTasks: [
      "Students add counterfactual notes to an existing cause web.",
      "Compare counterfactual reasoning in history with model testing in science."
    ],
    adaptations: [
      "Support: provide the changed condition.",
      "Challenge: require likely, possible, and unlikely outcomes."
    ]
  },
  "restoration-ethics-studio": {
    setup: [
      "Use a fictional artwork so students can focus on trade-offs rather than external facts.",
      "Give each group a different stakeholder priority."
    ],
    exampleStimuli: [
      "Scenario: a mural has faded paint, later graffiti, and a damaged corner.",
      "Options: clean only, repaint invisibly, preserve damage, add a modern label, commission a visible repair."
    ],
    runResources: [
      "Restoration decision matrix: authenticity, artist intention, public access, historical trace, reversibility.",
      "Stakeholder cards: artist estate, museum, local community, conservator, visitor."
    ],
    sampleTeacherLanguage: [
      "Preservation is not neutral when every option changes what viewers encounter.",
      "What kind of authenticity are you prioritizing?"
    ],
    sampleStudentOutput: [
      "Invisible repair preserved the image but hid the artwork's history.",
      "Leaving the damage visible treated the object as historical evidence, not just aesthetic experience."
    ],
    extensionTasks: [
      "Students write a museum label explaining a restoration decision transparently.",
      "Compare restoration with editing a historical source or cleaning scientific data."
    ],
    adaptations: [
      "Support: use three restoration options.",
      "Challenge: include a budget constraint and public controversy."
    ]
  },
  "certainty-thermometer": {
    setup: [
      "Make the certainty scale physical if possible, using the wall or floor.",
      "Start with intuitive placement before introducing criteria cards."
    ],
    exampleStimuli: [
      "Claim cards: '2+2=4', 'This source is reliable', 'This song is sad', 'The medicine works', 'The policy is fair'.",
      "Criteria cards: proof, replication, consensus, interpretation, usefulness, ethical stakes."
    ],
    runResources: [
      "Certainty thermometer poster from low confidence to high certainty.",
      "Revision log: original placement, criterion added, revised placement, reason."
    ],
    sampleTeacherLanguage: [
      "Certainty is not the only value knowledge can have.",
      "Which claim moved when you changed the criterion?"
    ],
    sampleStudentOutput: [
      "The art claim stayed uncertain but became more meaningful when judged by interpretation rather than proof.",
      "The science claim was less certain than the math claim but still highly reliable."
    ],
    extensionTasks: [
      "Students build separate thermometers for certainty, usefulness, and ethical importance.",
      "Use the activity to plan a TOK essay comparison."
    ],
    adaptations: [
      "Support: use five claim cards.",
      "Challenge: require students to defend two different placements for the same claim."
    ]
  },
  "bayes-update-cards": {
    setup: [
      "Prepare counters in two colours: true positives and false positives.",
      "Hide notation at first; reveal [[math:P(H | +)]] only after students build the frequency table."
    ],
    exampleStimuli: [
      "Fictional case: 10 of 1000 people have Condition X; a positive test catches 9 real cases and falsely flags 99 non-cases.",
      "Notation contrast card: [[math:P(H | +)]] is not the same as [[math:P(+ | H)]]."
    ],
    runResources: [
      "Natural-frequency grid with true positives, false positives, false negatives, and true negatives.",
      "Risk communication comparison card: words, percentage, frequency, visual grid, and notation."
    ],
    sampleTeacherLanguage: [
      "The notation is not decoration; it tells us which direction the probability is asking about.",
      "Point to the numerator and denominator before you calculate."
    ],
    sampleStudentOutput: [
      "I confused test accuracy with the chance the person really had the condition.",
      "The frequency grid made the denominator visible."
    ],
    extensionTasks: [
      "Students write a public-health risk statement in three formats and critique each one.",
      "Compare Bayesian updating with search rankings, eyewitness evidence, or historical source reliability."
    ],
    adaptations: [
      "Support: use 100 people and round numbers.",
      "Challenge: change the base rate and ask students to predict the direction of the update before calculating."
    ]
  },
  "simpsons-paradox-shuffle": {
    setup: [
      "Use small whole-number subgroups so the reversal is visible without calculators.",
      "Ask students for the headline claim before revealing subgroup structure."
    ],
    exampleStimuli: [
      "Method A beats Method B overall, but Method B performs better inside each difficulty subgroup.",
      "Headline card: 'Method A has the higher success rate' beside subgroup table cards."
    ],
    runResources: [
      "Subgroup sorting mat: Group 1, Group 2, overall total.",
      "Responsible headline checklist: sample size, subgroup balance, denominator, and audience."
    ],
    sampleTeacherLanguage: [
      "The calculation is correct; now ask whether the comparison is fair.",
      "What vanished when the data was combined?"
    ],
    sampleStudentOutput: [
      "The overall rate hid that one method was used more often in the easier subgroup.",
      "The same numbers supported a different claim after we grouped them responsibly."
    ],
    extensionTasks: [
      "Students create a simple fictional dataset where aggregation changes the apparent story.",
      "Connect the paradox to admissions, medicine, sport, or school data."
    ],
    adaptations: [
      "Support: provide completed percentages and focus on interpretation.",
      "Challenge: ask students to design the smallest dataset that creates a reversal."
    ]
  },
  "average-trap": {
    setup: [
      "Choose skewed datasets where one large value pulls the mean away from most cases.",
      "Ask students which number they would put in a headline before calculating all averages."
    ],
    exampleStimuli: [
      "Revision hours: 1, 1, 2, 2, 3, 3, 18.",
      "Screen time claim: mean looks high, median looks moderate, mode shows the most common routine."
    ],
    runResources: [
      "Average comparison sheet: mean, median, mode, purpose, audience, and possible misuse.",
      "Headline cards using each average to support a different conclusion."
    ],
    sampleTeacherLanguage: [
      "All three averages can be correct; the TOK question is which one responsibly represents the situation.",
      "What does this number make visible, and what does it hide?"
    ],
    sampleStudentOutput: [
      "The mean was mathematically correct but made most students look unlike the typical case.",
      "The median was better for a typical value, but the mean was useful for total resource planning."
    ],
    extensionTasks: [
      "Students find a public average and ask whether mean, median, or mode would be more responsible.",
      "Compare average choice with graph scale choice."
    ],
    adaptations: [
      "Support: give pre-calculated averages.",
      "Challenge: ask students to design a dataset where the three averages tell three different stories."
    ]
  },
  "infinity-hotel-check-in": {
    setup: [
      "Use numbered cards on desks or around the room to represent hotel rooms.",
      "Make clear when students are reasoning about a formal model rather than a physically possible hotel."
    ],
    exampleStimuli: [
      "One new guest arrives at a full infinite hotel; every current guest moves by [[math:n → n + 1]].",
      "Claim card: [[math:∞ + 1 = ∞]] feels impossible until the rule is specified."
    ],
    runResources: [
      "Room card set and move-rule card.",
      "Reflection sheet: what felt impossible, what the rule showed, and what the model assumes."
    ],
    sampleTeacherLanguage: [
      "Do not ask whether a real hotel could do this; ask whether the formal rule is coherent.",
      "Where did your everyday intuition stop helping?"
    ],
    sampleStudentOutput: [
      "The model was coherent even though I could not picture the whole hotel.",
      "I learned that mathematical possibility can depend on definitions rather than physical imagination."
    ],
    extensionTasks: [
      "Compare countable infinity with a finite hotel and identify exactly where the rule fails.",
      "Ask whether mathematical objects need real-world counterparts to produce knowledge."
    ],
    adaptations: [
      "Support: act out the first ten rooms only.",
      "Challenge: add infinitely many new guests by moving each current guest from room n to room 2n."
    ]
  },
  "pythagorean-proof-gallery": {
    setup: [
      "Prepare three proof formats and do not identify one as best at the start.",
      "Ask students to rank proof cards using different criteria: certainty, explanation, elegance, and accessibility."
    ],
    exampleStimuli: [
      "Visual rearrangement proof of [[math:a^2 + b^2 = c^2]].",
      "Algebraic proof card plus a verbal explanation card of the same theorem."
    ],
    runResources: [
      "Proof evaluation grid: assumptions, conclusion, why it must be true, what it helps you understand.",
      "Criteria cards: rigorous, explanatory, elegant, memorable, generalisable."
    ],
    sampleTeacherLanguage: [
      "A proof does more than persuade; it should show why the result must hold.",
      "Which proof gives certainty, and which proof gives understanding?"
    ],
    sampleStudentOutput: [
      "The visual proof helped me understand area, but the algebraic proof felt easier to generalize.",
      "Elegance made a proof more satisfying, but it was not the same as validity."
    ],
    extensionTasks: [
      "Students compare a proof with many measured right triangles and explain why measurement is insufficient.",
      "Connect mathematical elegance to aesthetic judgement in the arts."
    ],
    adaptations: [
      "Support: focus on two proof cards.",
      "Challenge: students write a fourth proof explanation for younger students."
    ]
  }
};
