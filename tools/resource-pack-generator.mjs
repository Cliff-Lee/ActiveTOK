import { htmlEscape, htmlWithMath, markdownWithMath, plainMath } from "./math-formatting.mjs";
import { lessonKitFor, lessonKitCards } from "./practical-lesson-kits.mjs";

const yamlValue = value => JSON.stringify(value);
const fieldList = (activity, key) => Array.isArray(activity[key]) ? activity[key] : [];
const htmlList = items => items.map(item => `                <li>${htmlWithMath(item)}</li>`).join("\n");
const markdownList = items => items.map(item => `- ${markdownWithMath(item)}`).join("\n");
const csvEscape = value => `"${plainMath(value).replace(/"/g, '""')}"`;
const csvRows = rows => rows.map(row => row.map(csvEscape).join(",")).join("\n");
const cardId = (activity, index) => `${activity.id}-card-${String(index + 1).padStart(2, "0")}`;

export function resourcePackFiles(activity) {
  const cards = resourceCardDeck(activity);
  const datasetRows = datasetRowsFor(activity);
  const files = [
    ["index.html", resourcePackHtml(activity, cards, datasetRows.length > 0)],
    ["resource-pack.md", resourcePackMarkdown(activity, cards, datasetRows.length > 0)],
    ["cards.csv", `${csvRows([["id", "type", "title", "front", "back", "teacher_use"], ...cards.map(card => [card.id, card.type, card.title, card.front, card.back, card.teacherUse])])}\n`],
    ["visual-prompt.svg", visualPromptSvg(activity, cards)]
  ];

  if (datasetRows.length > 0) {
    files.push(["sample-data.csv", `${csvRows(datasetRows)}\n`]);
  }

  if (activity.id === "change-blindness-starter") {
    files.push(["image-a.svg", changeBlindnessImage("a")]);
    files.push(["image-b.svg", changeBlindnessImage("b")]);
  }

  return files;
}

function resourceCardDeck(activity) {
  const kitCards = lessonKitCards(activity);
  const specialDeck = specialCardDeck(activity);
  if (specialDeck.length) {
    const supportCards = kitCards.filter(card => ["Lesson question", "Student task", "Teacher reveal"].includes(card.type));
    return [...specialDeck, ...supportCards].slice(0, 18);
  }

  return kitCards;
}

function cardBackFor(kind, activity, index) {
  const prompts = {
    Stimulus: `Students identify what this example makes visible or invisible in ${activity.category}.`,
    Prompt: "Students answer privately first, then compare what changed after discussion.",
    Evidence: "Students separate observation, inference, confidence, and justification.",
    Challenge: "Students revise one first judgement after adding a new criterion or perspective.",
    Debrief: activity.knowledgeQuestions[index % activity.knowledgeQuestions.length] || activity.bigIdea,
    Extension: fieldList(activity, "extensionTasks")[index % Math.max(1, fieldList(activity, "extensionTasks").length)] || "Apply the same knowledge issue to a second AOK."
  };

  return prompts[kind] || activity.bigIdea;
}

function cardTeacherUse(kind) {
  const uses = {
    Stimulus: "Place on desks or show on screen to launch the task.",
    Prompt: "Use for individual writing before discussion.",
    Evidence: "Use during the activity record phase.",
    Challenge: "Use after first responses to force revision.",
    Debrief: "Use during TOK discussion.",
    Extension: "Use for fast finishers or homework."
  };

  return uses[kind] || "Use as an activity support card.";
}

function specialCardDeck(activity) {
  switch (activity.id) {
    case "algorithmic-feed-simulation":
      return algorithmicFeedCards(activity);
    case "translation-loss-game":
      return translationCards(activity);
    case "reliability-ranking":
    case "certainty-thermometer":
    case "what-counts-as-evidence":
      return claimRankingCards(activity);
    case "curator-choice-gallery":
      return curatorCards(activity);
    case "p-hacking-with-random-data":
      return pHackingCards(activity);
    case "data-dashboard-mirage":
      return dashboardCards(activity);
    case "log-scale-surprise":
      return logScaleCards(activity);
    case "monty-hall-shock":
      return montyHallCards(activity);
    case "bayes-update-cards":
      return bayesUpdateCards(activity);
    case "simpsons-paradox-shuffle":
      return simpsonsParadoxCards(activity);
    case "average-trap":
      return averageTrapCards(activity);
    case "infinity-hotel-check-in":
      return infinityHotelCards(activity);
    case "pythagorean-proof-gallery":
      return pythagoreanProofCards(activity);
    default:
      return [];
  }
}

function algorithmicFeedCards(activity) {
  const posts = [
    ["Science", "New sleep study suggests revision after 9pm may reduce recall.", "University press office", "Curious", "High", 42],
    ["News", "Local council considers later bus times for students.", "Local newspaper", "Practical", "Medium", 38],
    ["Meme", "When the TOK essay asks for one more example.", "Student meme page", "Humorous", "Low", 81],
    ["Sport", "Captain says team won because they trusted the data.", "Sports blog", "Admiring", "Medium", 57],
    ["Celebrity", "Actor says phones are destroying creativity.", "Entertainment site", "Alarmed", "Low", 76],
    ["Advert", "Brain-boost drink promises sharper focus in seven days.", "Sponsored post", "Confident", "Low", 69],
    ["Revision", "Spacing practice beats rereading for long-term memory.", "Study skills centre", "Useful", "High", 55],
    ["Conspiracy", "Hidden exam pattern revealed by anonymous insider.", "Anonymous channel", "Suspicious", "Very low", 88],
    ["Local", "Students organise food-bank collection after school.", "School newsletter", "Hopeful", "High", 31],
    ["Science", "Chart shows global temperatures by decade.", "Public data office", "Serious", "High", 64],
    ["News", "Headline claims new policy is a disaster before data is released.", "Comment site", "Outraged", "Low", 72],
    ["Meme", "Two tabs open: research and panic.", "Class group chat", "Humorous", "Low", 91],
    ["Sport", "Player credits lucky socks for five-match winning streak.", "Fan account", "Playful", "Low", 49],
    ["Celebrity", "Influencer shares 'ancient memory hack' with no source.", "Influencer reel", "Excited", "Very low", 84],
    ["Advert", "Tutoring app claims it can predict your final grade.", "Sponsored post", "Confident", "Low", 66],
    ["Revision", "Teacher explains why retrieval practice feels harder but works better.", "Teacher blog", "Helpful", "High", 45],
    ["Conspiracy", "Viral thread says all search engines hide the same result.", "Anonymous thread", "Suspicious", "Very low", 93],
    ["Local", "Cafe offers free study space during exam week.", "Local business page", "Warm", "Medium", 37],
    ["Science", "Small study links music tempo with concentration.", "Science news site", "Curious", "Medium", 52],
    ["News", "Photo from old protest reused as if it happened today.", "Unverified post", "Angry", "Very low", 79],
    ["Meme", "Graph of confidence before and after opening the markscheme.", "Student meme page", "Humorous", "Low", 74],
    ["Sport", "Training data suggests rest days improved performance.", "Club report", "Analytical", "High", 46],
    ["Celebrity", "Singer says school should teach 'real life not facts'.", "Interview clip", "Provocative", "Medium", 70],
    ["Advert", "Flash sale: notebook brand used by top students.", "Sponsored post", "Aspirational", "Low", 62],
    ["Revision", "Checklist: test yourself, sleep, explain one concept aloud.", "School library", "Practical", "High", 33],
    ["Conspiracy", "Video claims exam boards use secret personality scoring.", "Video channel", "Fearful", "Very low", 95],
    ["Local", "Library extends hours after student survey.", "Library notice", "Useful", "High", 29],
    ["Science", "Expert thread explains correlation versus causation.", "Researcher account", "Explanatory", "High", 41],
    ["News", "Breaking: dramatic claim updated after official correction.", "News alert", "Urgent", "Medium", 68],
    ["Meme", "Me pretending my first source is enough.", "Student meme page", "Humorous", "Low", 86],
    ["Sport", "Coach uses wearable data to choose training loads.", "Team site", "Technical", "High", 40],
    ["Celebrity", "Famous actor repeats fake quote about intelligence.", "Fan page", "Admiring", "Low", 77],
    ["Advert", "AI essay improver says it 'guarantees insight'.", "Sponsored tool", "Confident", "Low", 73],
    ["Revision", "Past paper reflection: why the wrong answer seemed right.", "Revision blog", "Reflective", "High", 44],
    ["Conspiracy", "Post claims the 'real' data was deleted overnight.", "Anonymous channel", "Suspicious", "Very low", 90],
    ["Local", "Community garden data shows rising student volunteers.", "Volunteer group", "Positive", "Medium", 35]
  ];

  return posts.map(([type, front, source, tone, reliability, engagement], index) => ({
    id: cardId(activity, index),
    type,
    title: `${type} post`,
    front,
    back: `Source: ${source}. Tone: ${tone}. Reliability: ${reliability}. Predicted engagement: ${engagement}/100.`,
    teacherUse: "Rank with different algorithms: engagement, recency, reliability, emotion, or friend activity."
  }));
}

function translationCards(activity) {
  const words = [
    ["Schadenfreude", "Pleasure at another person's misfortune.", "A classmate's overconfidence backfires harmlessly."],
    ["Awkward", "Social discomfort that is hard to translate exactly.", "A silence after someone says the wrong thing."],
    ["Saving face", "Protecting social dignity or public reputation.", "Correcting someone privately rather than publicly."],
    ["Home", "A place, feeling, identity, or relationship.", "A student says two countries both feel like home."],
    ["Fair", "Just, equal, appropriate, beautiful, or light-coloured depending on context.", "A fair punishment is not always an equal one."],
    ["Respect", "Status, care, obedience, recognition, or dignity.", "Students debate whether disagreement can show respect."],
    ["Freedom", "Choice, independence, rights, absence of control, or capacity.", "A rule can limit action but increase safety."],
    ["Wabi-sabi", "Beauty in imperfection, impermanence, and incompleteness.", "A cracked bowl valued because of its history."],
    ["Gezellig", "A Dutch sense of cosy, sociable, pleasant togetherness.", "A small cafe feels warm because of the people, not the decor."],
    ["Ubuntu", "A person is a person through other people.", "Community responsibility shapes individual identity."],
    ["Hygge", "Danish cosy comfort and contentment.", "Soft light, shared food, and unhurried conversation."],
    ["L'esprit de l'escalier", "Thinking of the perfect reply too late.", "A student finds the argument after the debate ends."]
  ];

  return words.map(([title, front, context], index) => ({
    id: cardId(activity, index),
    type: "Word card",
    title,
    front,
    back: `Context: ${context}`,
    teacherUse: "Ask what is lost in literal translation, then write a richer explanation."
  }));
}

function claimRankingCards(activity) {
  const claims = [
    ["Mathematics", "The angles in a Euclidean triangle sum to 180 degrees.", "Method: proof within a formal system."],
    ["Natural Sciences", "Smoking increases the risk of lung cancer.", "Method: converging evidence from many studies."],
    ["Human Sciences", "Most people conform more under public pressure.", "Method: experimental and observational evidence."],
    ["History", "The source was written in London in 1912.", "Method: provenance and archival comparison."],
    ["The Arts", "This painting expresses grief.", "Method: interpretation supported by features and context."],
    ["Everyday", "This student is a reliable group member.", "Method: repeated experience and testimony."],
    ["Technology", "The top search result is the most useful result.", "Method: ranking system plus user judgement."],
    ["Language", "The word 'invasion' frames the event negatively.", "Method: semantic and rhetorical analysis."],
    ["Ethics", "It is unfair to punish everyone for one person's action.", "Method: moral reasoning and principles."],
    ["Memory", "I definitely saw the blue bag on the table.", "Method: personal memory with possible reconstruction."],
    ["Statistics", "Class A improved more than Class B this month.", "Method: operational definition and comparison."],
    ["Culture", "This ritual shows respect.", "Method: insider explanation and contextual knowledge."]
  ];

  return claims.map(([type, front, back], index) => ({
    id: cardId(activity, index),
    type,
    title: `${type} claim`,
    front,
    back,
    teacherUse: "Rank by reliability, certainty, usefulness, or evidence quality. Then change criterion and rerank."
  }));
}

function curatorCards(activity) {
  const artworks = [
    ["Empty Chair", "A wooden chair beside a window; a coat hangs over the back.", "Absence, waiting, memory, or ordinary life."],
    ["Crowded Street", "Blurred figures cross under neon signs after rain.", "Modernity, anonymity, energy, or confusion."],
    ["Broken Cup", "A white cup repaired with a visible gold line.", "Damage, care, value, repair, or impermanence."],
    ["Bright Pattern", "Blocks of orange, teal, and blue repeat with one interruption.", "Order, play, disruption, or design."],
    ["Family Photo", "Three people smile, but one face is half outside the frame.", "Belonging, exclusion, memory, or chance."],
    ["Dark Landscape", "A hill under a heavy sky with one small light.", "Isolation, hope, uncertainty, or scale."],
    ["Plastic Flower", "A fake flower in a real glass of water.", "Imitation, beauty, consumption, or permanence."],
    ["Open Door", "A door opens onto a room we cannot see.", "Invitation, risk, curiosity, or withheld knowledge."]
  ];

  return artworks.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Artwork card",
    title,
    front,
    back,
    teacherUse: "Use as a movable gallery card. Students choose order, wall label, and curatorial theme."
  }));
}

function pHackingCards(activity) {
  const tests = [
    ["Screen Time vs Quiz Score", "Looks negative if one outlier is removed.", "Was that removal justified before seeing the result?"],
    ["Shoe Size vs Confidence", "A weak positive relationship appears in one subgroup.", "How many subgroups were tested?"],
    ["Breakfast Score vs Memory", "Highest breakfast scores cluster near high memory scores.", "Is this causal, correlational, or random?"],
    ["Pet Ownership vs Sleep", "Pet owners average 18 minutes less sleep in the sample.", "Is the difference meaningful?"],
    ["Favourite Colour vs Revision", "Blue group revised more than green group.", "How were colour groups coded?"],
    ["Desk Row vs Quiz Score", "Front row scores higher on average.", "What confounders might matter?"],
    ["Star Sign vs Screen Time", "Two signs appear unusually high.", "Why is this a warning sign?"],
    ["Music While Studying vs Score", "Looks positive only for students under six hours of sleep.", "Was this interaction predicted?"]
  ];

  return tests.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Researcher card",
    title,
    front,
    back,
    teacherUse: "Use after dataset exploration; students decide whether the pattern is publishable or suspicious."
  }));
}

function dashboardCards(activity) {
  const cards = [
    ["Dashboard A title", "Attendance Success: late arrivals down 18%.", "Highlights good news with green colour and a large percentage."],
    ["Dashboard B title", "Attendance Risk: absences up 12%.", "Highlights concern with amber colour and a warning label."],
    ["Metric choice", "Average score: 72%.", "Ask what this hides about distribution or improvement."],
    ["Metric choice", "Improvement: +8 points.", "Ask what this hides about starting point."],
    ["Ordering", "Classes ranked by highest average.", "Makes already-high groups look best."],
    ["Ordering", "Classes ranked by biggest improvement.", "Makes change over time look best."],
    ["Colour cue", "Green means success.", "A colour can make interpretation happen before analysis."],
    ["Missing context", "No sample size shown.", "Ask what is needed before trusting the dashboard."]
  ];

  return cards.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Dashboard card",
    title,
    front,
    back,
    teacherUse: "Use to audit how design choices turn data into a knowledge claim."
  }));
}

function logScaleCards(activity) {
  return [1, 2, 4, 8, 16, 32, 64, 128].map((value, index) => ({
    id: cardId(activity, index),
    type: "Data card",
    title: `Day ${index + 1}`,
    front: `Value: ${value}`,
    back: `Linear change: ${index === 0 ? "n/a" : value - (value / 2)}. Ratio: ${index === 0 ? "n/a" : "x2"}.`,
    teacherUse: "Place values on both a linear and a logarithmic scale."
  }));
}

function montyHallCards(activity) {
  const rounds = [
    [1, "A", "B", "C", "Switch wins"],
    [2, "B", "A", "C", "Stay wins"],
    [3, "C", "A", "B", "Switch wins"],
    [4, "A", "C", "B", "Switch wins"],
    [5, "B", "C", "A", "Switch wins"],
    [6, "C", "B", "A", "Stay wins"],
    [7, "A", "B", "C", "Switch wins"],
    [8, "B", "A", "C", "Switch wins"],
    [9, "C", "A", "B", "Switch wins"]
  ];

  return rounds.map(([round, car, first, host, result], index) => ({
    id: cardId(activity, index),
    type: "Round card",
    title: `Round ${round}`,
    front: `Car behind Door ${car}. First choice: Door ${first}. Host opens Door ${host}.`,
    back: result,
    teacherUse: "Use to run or check repeated Monty Hall rounds."
  }));
}

function bayesUpdateCards(activity) {
  const cards = [
    ["Base rate", "Out of 1000 people, 10 have Condition X.", "This is the prior probability before the test result."],
    ["True positives", "The test correctly flags 9 of the 10 people with Condition X.", "These 9 belong in the numerator for [[math:P(H | +)]]."],
    ["False positives", "The test falsely flags 99 people who do not have Condition X.", "These cases join the positive-test denominator."],
    ["Update", "After a positive test, use [[math:P(H | +) = 9 / (9 + 99) = 1 / 12 ≈ 8.3%]].", "Point to the denominator: all positive tests, not all real cases."],
    ["Notation trap", "[[math:P(H | +)]] asks about the hypothesis after the positive result.", "Do not confuse it with [[math:P(+ | H)]], the chance of a positive result if the hypothesis is true."],
    ["Communication", "Which format is clearest: percentage, frequency, grid, or formula?", "Students evaluate responsible communication, not just calculation."]
  ];

  return cards.map(([type, front, back], index) => ({
    id: cardId(activity, index),
    type,
    title: `${type} card`,
    front,
    back,
    teacherUse: "Use in sequence to build the Bayesian update from concrete frequencies to notation."
  }));
}

function simpsonsParadoxCards(activity) {
  const cards = [
    ["Easy subgroup", "Method A: 9/10 success. Method B: 72/90 success.", "Inside this subgroup, Method A has the higher rate."],
    ["Hard subgroup", "Method A: 30/90 success. Method B: 2/10 success.", "Inside this subgroup, Method A again has the higher rate."],
    ["Overall", "Method A: 39/100 success. Method B: 74/100 success.", "Overall, Method B appears better because the group sizes are uneven."],
    ["Reversal", "Within each subgroup A wins, but overall B wins.", "This is the paradox: the grouping structure matters."],
    ["Headline", "Method B has the higher success rate.", "Is the headline responsible without subgroup context?"],
    ["Criterion", "Fair comparison requires comparable groups, visible denominators, and relevant subgroup structure.", "Use to debrief aggregation choices."]
  ];

  return cards.map(([type, front, back], index) => ({
    id: cardId(activity, index),
    type,
    title: `${type} card`,
    front,
    back,
    teacherUse: "Sort into subgroup and overall columns, then write a responsible comparison."
  }));
}

function averageTrapCards(activity) {
  const datasets = [
    ["Revision hours", "1, 1, 2, 2, 3, 3, 18", "Mean is pulled upward; median better represents a typical student."],
    ["Screen time", "2, 2, 3, 3, 3, 4, 11", "Mode and median tell a calmer story than the mean."],
    ["Donation amounts", "1, 1, 2, 2, 2, 5, 100", "Mean matters for total money; median matters for typical donor."],
    ["Quiz scores", "28, 68, 70, 71, 72, 73, 74", "One outlier changes the mean more than the median."],
    ["Formula", "[[math:mean = Σx / n]]", "The formula is correct, but purpose decides whether it is the right summary."],
    ["TOK prompt", "Can a number be accurate but unfair?", "Students connect mathematical summary to audience and purpose."]
  ];

  return datasets.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Average card",
    title,
    front,
    back,
    teacherUse: "Calculate or identify mean, median, and mode, then decide which claim is responsible."
  }));
}

function infinityHotelCards(activity) {
  const moves = [
    ["Finite hotel", "A 10-room hotel is full. One guest arrives.", "No room unless someone leaves; finite intuition works."],
    ["Infinite hotel", "Every positive integer room is full. One guest arrives.", "Use [[math:n → n + 1]] to make room 1 free."],
    ["Claim", "[[math:∞ + 1 = ∞]]", "The claim is coherent only after specifying the model."],
    ["Rule check", "Guest in room 1 moves to 2, 2 moves to 3, 3 moves to 4, and so on.", "No current guest loses a room."],
    ["Boundary", "Could this work in a real hotel?", "No: the activity is about formal mathematical objects."],
    ["TOK prompt", "Can mathematics know beyond what we can imagine?", "Use after students feel the paradox."]
  ];

  return moves.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Infinity card",
    title,
    front,
    back,
    teacherUse: "Act out the move rule physically, then debrief intuition versus formal coherence."
  }));
}

function pythagoreanProofCards(activity) {
  const proofs = [
    ["Visual proof", "Rearrange four right triangles around a square to show [[math:a^2 + b^2 = c^2]].", "Strong for spatial explanation; ask what assumptions it uses."],
    ["Algebraic proof", "Use area expressions and simplify to [[math:a^2 + b^2 = c^2]].", "Strong for generality; ask whether students understand why it works."],
    ["Verbal proof", "Explain in words why the areas must be equal.", "Accessible, but may hide a logical gap."],
    ["Empirical check", "Measure five right triangles and see the pattern.", "Suggestive evidence, not proof."],
    ["Criterion", "Rank by certainty, explanation, elegance, and accessibility.", "Different criteria can produce different rankings."],
    ["TOK prompt", "What makes proof different from repeated confirmation?", "Use to connect mathematics with other AOKs."]
  ];

  return proofs.map(([title, front, back], index) => ({
    id: cardId(activity, index),
    type: "Proof card",
    title,
    front,
    back,
    teacherUse: "Use as gallery stations or ranking cards for proof criteria."
  }));
}

function datasetRowsFor(activity) {
  switch (activity.id) {
    case "p-hacking-with-random-data":
      return pHackingDataset();
    case "data-dashboard-mirage":
      return dashboardDataset();
    case "log-scale-surprise":
      return [["day", "linear_value", "log10_value"], ...[1, 2, 4, 8, 16, 32, 64, 128].map((value, index) => [index + 1, value, Math.log10(value).toFixed(3)])];
    case "correlation-illusion-cards":
      return [["case", "screen_time_hours", "quiz_score", "note"], ...Array.from({ length: 18 }, (_, index) => [index + 1, 2 + (index % 6), 62 + ((index * 7) % 27), index % 5 === 0 ? "attention-grabbing case" : "ordinary case"])];
    case "base-rate-neglect-clinic":
      return [["scenario", "group_size", "base_rate", "test_accuracy", "false_positive_rate"], ["Rare condition", 1000, "1%", "95%", "5%"], ["Common condition", 1000, "30%", "85%", "15%"], ["Airport screening", 10000, "0.5%", "98%", "2%"]];
    case "monty-hall-shock":
      return [["round", "car_door", "first_choice", "host_opens", "stay_result", "switch_result"], ...montyHallCards(activity).map((card, index) => {
        const match = card.front.match(/Door ([ABC]).*Door ([ABC]).*Door ([ABC])/);
        const switchWins = card.back === "Switch wins";
        return [index + 1, match?.[1], match?.[2], match?.[3], switchWins ? "lose" : "win", switchWins ? "win" : "lose"];
      })];
    case "bayes-update-cards":
      return [["group", "count", "test_result"], ["has_condition_true_positive", 9, "positive"], ["has_condition_false_negative", 1, "negative"], ["no_condition_false_positive", 99, "positive"], ["no_condition_true_negative", 891, "negative"]];
    case "simpsons-paradox-shuffle":
      return [["method", "subgroup", "successes", "total", "success_rate"], ["A", "easy", 9, 10, "90%"], ["B", "easy", 72, 90, "80%"], ["A", "hard", 30, 90, "33.3%"], ["B", "hard", 2, 10, "20%"], ["A", "overall", 39, 100, "39%"], ["B", "overall", 74, 100, "74%"]];
    case "average-trap":
      return [["dataset", "values", "mean", "median", "mode"], ["revision_hours", "1 1 2 2 3 3 18", 4.29, 2, "1, 2, 3"], ["screen_time", "2 2 3 3 3 4 11", 4.0, 3, 3], ["donations", "1 1 2 2 2 5 100", 16.14, 2, 2]];
    case "infinity-hotel-check-in":
      return [["old_room", "new_room_rule", "new_room_example"], [1, "n -> n + 1", 2], [2, "n -> n + 1", 3], [3, "n -> n + 1", 4], [4, "n -> n + 1", 5], [5, "n -> n + 1", 6]];
    case "pythagorean-proof-gallery":
      return [["proof_type", "certainty", "explanation", "accessibility", "student_note"], ["visual", "high", "high", "medium", "Shows area relationship"], ["algebraic", "high", "medium", "medium", "General but abstract"], ["verbal", "medium", "medium", "high", "May hide logical gaps"], ["measurement", "low", "medium", "high", "Confirms examples but is not proof"]];
    default:
      return [];
  }
}

function pHackingDataset() {
  const header = ["student", "sleep_hours", "screen_time_hours", "shoe_size", "breakfast_score", "quiz_score", "desk_row", "pet_owner", "favourite_colour_code"];
  const rows = Array.from({ length: 30 }, (_, index) => {
    const n = index + 1;
    return [
      n,
      (5 + ((n * 7) % 5) + (n % 3) * 0.5).toFixed(1),
      (1 + ((n * 11) % 7) * 0.6).toFixed(1),
      35 + ((n * 5) % 12),
      1 + ((n * 3) % 10),
      52 + ((n * 13 + (n % 4) * 7) % 43),
      1 + (n % 5),
      n % 3 === 0 ? "yes" : "no",
      ["blue", "green", "red", "yellow", "black"][n % 5]
    ];
  });
  return [header, ...rows];
}

function dashboardDataset() {
  return [
    ["week", "late_arrivals", "absences", "average_score", "improvement_points"],
    ["Week 1", 48, 31, 66, 0],
    ["Week 2", 42, 34, 68, 2],
    ["Week 3", 39, 37, 70, 4],
    ["Week 4", 35, 40, 72, 6],
    ["Week 5", 31, 43, 73, 7],
    ["Week 6", 28, 45, 74, 8]
  ];
}

function resourcePackMarkdown(activity, cards, hasDataset) {
  const kit = lessonKitFor(activity);
  return `---\n` +
    `title: ${yamlValue(`${activity.title} Classroom Resource Pack`)}\n` +
    `activity: ${yamlValue(activity.title)}\n` +
    `activitySlug: ${yamlValue(activity.slug)}\n` +
    `category: ${yamlValue(activity.category)}\n` +
    `time: ${yamlValue(activity.time)}\n` +
    `free: true\n` +
    `---\n\n` +
    `# ${activity.title} Classroom Resource Pack\n\n` +
    `This pack gives teachers concrete, editable materials to run the activity immediately.\n\n` +
    `## Included Files\n\n` +
    `- [Printable resource pack](index.html)\n` +
    `- [Student handout PDF](../../premium/${activity.slug}/worksheet.pdf)\n` +
    `- [Classroom run kit PDF](../../premium/${activity.slug}/run-kit.pdf)\n` +
    `- [Teacher notes PDF](../../premium/${activity.slug}/teacher-notes.pdf)\n` +
    `- [PowerPoint slide deck](../../premium/${activity.slug}/slides.pptx)\n` +
    `- [Card deck CSV](cards.csv)\n` +
    `- [Visual prompt image](visual-prompt.svg)\n` +
    `${hasDataset ? "- [Sample dataset CSV](sample-data.csv)\n" : ""}` +
    `${activity.id === "change-blindness-starter" ? "- [Change blindness Image A](image-a.svg)\n- [Change blindness Image B](image-b.svg)\n" : ""}` +
    `\n## Student Prompt\n\n${markdownWithMath(kit.studentPrompt)}\n\n` +
    `## Actual Lesson Questions\n\n` +
    `${kit.lessonQuestions.map(question => `${question.number}. ${markdownWithMath(question.question)}`).join("\n")}\n\n` +
    `## Stimulus Packet\n\n` +
    `| Stimulus | What students inspect | Teacher cue |\n| --- | --- | --- |\n` +
    `${kit.stimulusCards.map(card => `| ${markdownWithMath(card.title).replace(/\|/g, "/")} | ${markdownWithMath(card.body).replace(/\|/g, "/")} | ${markdownWithMath(card.meta || card.teacherUse || "").replace(/\|/g, "/")} |`).join("\n")}\n\n` +
    `## Student Task\n\n${markdownWithMath(kit.studentTask)}\n\n` +
    `## Teacher Key / Reveal\n\n${markdownWithMath(kit.teacherReveal)}\n\n${markdownList(kit.answerKey)}\n\n` +
    `## Teacher Run Sheet\n\n${markdownList(fieldList(activity, "setup"))}\n\n` +
    `## Concrete Examples\n\n${markdownList(fieldList(activity, "exampleStimuli"))}\n\n` +
    `## Printable Cards\n\n` +
    `| Card | Type | Front | Back / Teacher Cue |\n| --- | --- | --- | --- |\n` +
    `${cards.map(card => `| ${card.id} | ${card.type} | ${markdownWithMath(card.front).replace(/\|/g, "/")} | ${markdownWithMath(card.back).replace(/\|/g, "/")} |`).join("\n")}\n\n` +
    `## Student Recording Sheet\n\n` +
    `| Card / stimulus | What I noticed | What I inferred | Evidence | Confidence |\n` +
    `| --- | --- | --- | --- | --- |\n` +
    `|  |  |  |  |  |\n|  |  |  |  |  |\n|  |  |  |  |  |\n\n` +
    `## Debrief Prompts\n\n${markdownList(activity.knowledgeQuestions)}\n`;
}

function resourcePackHtml(activity, cards, hasDataset) {
  const kit = lessonKitFor(activity);
  const cardHtml = cards.map(card => `
            <article class="print-card">
              <p class="print-card-type">${htmlWithMath(card.type)}</p>
              <h3>${htmlWithMath(card.title)}</h3>
              <p>${htmlWithMath(card.front)}</p>
              <small>${htmlWithMath(card.back)}</small>
            </article>`).join("");
  const datasetLink = hasDataset ? `              <li><a href="sample-data.csv" download>Download sample dataset CSV</a></li>` : "";
  const changeBlindnessLinks = activity.id === "change-blindness-starter"
    ? `              <li><a href="image-a.svg">Open Image A</a></li>\n              <li><a href="image-b.svg">Open Image B</a></li>`
    : "";
  const stimulusHtml = kit.stimulusCards.map(card => `
            <article class="print-card stimulus-card">
              <p class="print-card-type">Stimulus</p>
              <h3>${htmlWithMath(card.title)}</h3>
              <p>${htmlWithMath(card.body)}</p>
              <small>${htmlWithMath(card.meta || card.teacherUse || "")}</small>
            </article>`).join("");
  const lessonQuestionHtml = kit.lessonQuestions.map(question => `
                  <tr>
                    <td>${question.number}</td>
                    <td>${htmlWithMath(question.question)}</td>
                    <td>${htmlWithMath(question.answer || "")}</td>
                  </tr>`).join("");
  const answerKeyHtml = kit.answerKey.map(item => `              <li>${htmlWithMath(item)}</li>`).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Classroom resource pack for ${htmlEscape(activity.title)}.">
  <title>${htmlEscape(activity.title)} Resource Pack | TOK Cognitive Science Activity Bank</title>
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
      <div class="nav-links" id="site-menu">
        <a href="../../index.html">Home</a>
        <a href="../../activities.html">Activities</a>
        <a href="../../pricing.html">Pricing</a>
        <a href="../../about.html">About</a>
      </div>
    </nav>
  </header>
  <main id="main-content">
    <article class="activity-detail">
      <header class="page-hero activity-detail-hero">
        <div class="container page-hero-inner">
          <p class="eyebrow">Free classroom resource pack</p>
          <h1>${htmlEscape(activity.title)}</h1>
          <div class="activity-detail-meta" aria-label="Resource details">
            <span class="meta-pill">${htmlEscape(activity.category)}</span>
            <span class="meta-pill">${htmlEscape(activity.time)}</span>
            <span class="tier-badge tier-free">Ready to run</span>
          </div>
          <p>${htmlWithMath(activity.bigIdea)}</p>
        </div>
      </header>
      <div class="section">
        <div class="container resource-document classroom-pack">
          <p><a class="resource-back-link" href="../../activities/${activity.slug}.html">Back to activity page</a></p>
          <section>
            <h2>Included Files</h2>
            <ul>
              <li><a href="resource-pack.md" download>Download Markdown resource pack</a></li>
              <li><a href="../../premium/${activity.slug}/worksheet.pdf" download>Download student handout PDF</a></li>
              <li><a href="../../premium/${activity.slug}/run-kit.pdf" download>Download classroom run kit PDF</a></li>
              <li><a href="../../premium/${activity.slug}/teacher-notes.pdf" download>Download teacher notes PDF</a></li>
              <li><a href="../../premium/${activity.slug}/slides.pptx" download>Download PowerPoint slides</a></li>
              <li><a href="cards.csv" download>Download editable card deck CSV</a></li>
              <li><a href="visual-prompt.svg">Open visual prompt image</a></li>
${datasetLink}
${changeBlindnessLinks}
            </ul>
          </section>
          <section>
            <h2>Visual Prompt</h2>
            <img class="resource-visual" src="visual-prompt.svg" alt="Visual prompt for ${htmlEscape(activity.title)}">
          </section>
          <section class="lesson-kit-section">
            <h2>Student Prompt</h2>
            <p>${htmlWithMath(kit.studentPrompt)}</p>
          </section>
          <section class="lesson-kit-section">
            <h2>Actual Lesson Questions</h2>
            <p>These are the questions students answer during the lesson, not just teacher-facing discussion prompts.</p>
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
${lessonQuestionHtml}
                </tbody>
              </table>
            </div>
          </section>
          <section class="lesson-kit-section">
            <h2>Concrete Stimulus Packet</h2>
            <p>Print or project these exact stimuli. Students should inspect these before the debrief.</p>
            <div class="print-card-grid">
${stimulusHtml}
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
${answerKeyHtml}
            </ul>
          </section>
          <section>
            <h2>Teacher Run Sheet</h2>
            <ul>
${htmlList(fieldList(activity, "setup"))}
            </ul>
          </section>
          <section>
            <h2>Concrete Examples</h2>
            <ul>
${htmlList(fieldList(activity, "exampleStimuli"))}
            </ul>
          </section>
          <section>
            <h2>Printable Activity Cards</h2>
            <p>Print, cut, sort, rank, annotate, or project these cards. They are deliberately fictional/open so teachers can adapt them safely.</p>
            <div class="print-card-grid">
${cardHtml}
            </div>
          </section>
          <section>
            <h2>Student Recording Sheet</h2>
            <div class="resource-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Card / stimulus</th>
                    <th>What I noticed</th>
                    <th>What I inferred</th>
                    <th>Evidence</th>
                    <th>Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td></td><td></td><td></td><td></td><td></td></tr>
                  <tr><td></td><td></td><td></td><td></td><td></td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>Debrief Prompts</h2>
            <ul>
${htmlList(activity.knowledgeQuestions)}
            </ul>
          </section>
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

function visualPromptSvg(activity, cards) {
  const palette = ["#2F865F", "#D89B38", "#385E7F", "#8A5D14"];
  const cardSnippets = cards.slice(0, 4).map((card, index) => {
    const x = 82 + (index % 2) * 540;
    const y = 230 + Math.floor(index / 2) * 180;
    const color = palette[index % palette.length];
    return `
  <rect x="${x}" y="${y}" width="470" height="128" rx="18" fill="#FFFDF7" stroke="#DED8CB" stroke-width="2"/>
  <rect x="${x}" y="${y}" width="12" height="128" rx="6" fill="${color}"/>
  <text x="${x + 34}" y="${y + 36}" font-size="20" font-weight="700" fill="#172033">${escapeSvg(plainMath(card.title).slice(0, 38))}</text>
  <text x="${x + 34}" y="${y + 72}" font-size="17" fill="#4A5872">${escapeSvg(plainMath(card.front).slice(0, 56))}</text>
  <text x="${x + 34}" y="${y + 98}" font-size="17" fill="#4A5872">${escapeSvg(plainMath(card.front).slice(56, 112))}</text>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
  <title id="title">${escapeSvg(activity.title)} visual prompt</title>
  <desc id="desc">Original classroom visual prompt for the ${escapeSvg(activity.title)} TOK activity.</desc>
  <rect width="1200" height="675" fill="#F7F3EA"/>
  <rect x="0" y="0" width="22" height="675" fill="#2F865F"/>
  <rect x="22" y="0" width="12" height="675" fill="#D89B38"/>
  <text x="82" y="92" font-size="24" font-weight="700" fill="#1F6448">${escapeSvg(activity.category)} • ${escapeSvg(activity.time)}</text>
  <text x="82" y="150" font-size="46" font-weight="800" fill="#172033">${escapeSvg(activity.title.slice(0, 44))}</text>
  <text x="82" y="190" font-size="24" fill="#4A5872">${escapeSvg(plainMath(activity.bigIdea).slice(0, 86))}</text>
${cardSnippets}
  <text x="82" y="620" font-size="20" font-weight="700" fill="#172033">Use these cards to launch, sort, rank, or debrief the activity.</text>
</svg>
`;
}

function changeBlindnessImage(variant) {
  const changed = variant === "b";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="650" viewBox="0 0 1000 650" role="img" aria-labelledby="title desc">
  <title id="title">Change blindness image ${variant.toUpperCase()}</title>
  <desc id="desc">A classroom desk scene with small differences between image A and image B.</desc>
  <rect width="1000" height="650" fill="#F7F3EA"/>
  <rect x="95" y="140" width="810" height="390" rx="28" fill="#D8B98C"/>
  <rect x="155" y="205" width="220" height="150" rx="16" fill="#FFFDF7" stroke="#DED8CB" stroke-width="4"/>
  <line x1="180" y1="245" x2="340" y2="245" stroke="#4A5872" stroke-width="5"/>
  <line x1="180" y1="285" x2="325" y2="285" stroke="#4A5872" stroke-width="5"/>
  <rect x="430" y="215" width="180" height="120" rx="16" fill="${changed ? "#EAF5EF" : "#EAF0F7"}" stroke="#385E7F" stroke-width="4"/>
  <text x="455" y="285" font-size="38" font-weight="800" fill="#172033">TOK</text>
  <circle cx="720" cy="275" r="58" fill="#FFFDF7" stroke="#8A5D14" stroke-width="6"/>
  <path d="${changed ? "M775 278 C820 248 825 310 780 310" : "M665 278 C620 248 615 310 660 310"}" fill="none" stroke="#8A5D14" stroke-width="10" stroke-linecap="round"/>
  <rect x="710" y="390" width="130" height="44" rx="10" fill="#2F865F" transform="rotate(${changed ? -8 : 8} 775 412)"/>
  ${changed ? '<rect x="520" y="385" width="112" height="78" rx="8" fill="#FFE4A8" stroke="#D89B38" stroke-width="3"/><text x="540" y="432" font-size="22" font-weight="700" fill="#8A5D14">NOTE</text>' : ""}
  <circle cx="${changed ? 255 : 275}" cy="445" r="28" fill="#D89B38"/>
  <text x="95" y="94" font-size="36" font-weight="800" fill="#172033">Image ${variant.toUpperCase()}</text>
  <text x="95" y="585" font-size="24" fill="#4A5872">Look for changes in colour, position, added objects, and orientation.</text>
</svg>
`;
}

function escapeSvg(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
