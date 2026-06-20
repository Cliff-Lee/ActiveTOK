#!/usr/bin/env python3
import json
import re
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


PALETTE = {
    "ink": colors.HexColor("#172033"),
    "muted": colors.HexColor("#4A5872"),
    "teal": colors.HexColor("#2F865F"),
    "teal_pale": colors.HexColor("#EAF5EF"),
    "gold": colors.HexColor("#D89B38"),
    "gold_pale": colors.HexColor("#FFF3DA"),
    "blue": colors.HexColor("#385E7F"),
    "blue_pale": colors.HexColor("#EAF0F7"),
    "line": colors.HexColor("#DED8CB"),
    "paper": colors.HexColor("#FFFDF7"),
}


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="TokTitle",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=24,
    textColor=PALETTE["ink"],
    spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="TokSubtitle",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=13,
    textColor=PALETTE["teal"],
    spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="TokH2",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=13,
    leading=16,
    textColor=PALETTE["ink"],
    spaceBefore=10,
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="TokBody",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9.6,
    leading=13.2,
    textColor=PALETTE["ink"],
    spaceAfter=5,
))
styles.add(ParagraphStyle(
    name="TokSmall",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.2,
    leading=10.5,
    textColor=PALETTE["muted"],
))
styles.add(ParagraphStyle(
    name="TokCell",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.4,
    leading=10.8,
    textColor=PALETTE["ink"],
))
styles.add(ParagraphStyle(
    name="TokCellBold",
    parent=styles["TokCell"],
    fontName="Helvetica-Bold",
    textColor=PALETTE["ink"],
))
styles.add(ParagraphStyle(
    name="TokFooter",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.5,
    leading=9,
    textColor=PALETTE["muted"],
    alignment=TA_CENTER,
))


def esc(value):
    value = re.sub(r"\[\[math:([\s\S]*?)\]\]", lambda match: match.group(1).strip(), str(value or ""))
    return (
        value
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def para(text, style="TokBody"):
    return Paragraph(esc(text), styles[style])


def section(title):
    return Paragraph(esc(title), styles["TokH2"])


def bullet_list(items, limit=None):
    visible = [item for item in (items or []) if item]
    if limit:
        visible = visible[:limit]
    flowables = []
    for item in visible:
        flowables.append(Paragraph(f"• {esc(item)}", styles["TokBody"]))
    if not flowables:
        flowables.append(para("Add or adapt a classroom example before running this activity.", "TokSmall"))
    return flowables


def numbered_list(items, limit=None):
    visible = [item for item in (items or []) if item]
    if limit:
        visible = visible[:limit]
    return [Paragraph(f"{index}. {esc(item)}", styles["TokBody"]) for index, item in enumerate(visible, 1)]


def callout(text, fill=PALETTE["teal_pale"], border=PALETTE["teal"]):
    table = Table([[para(text)]], colWidths=[7.05 * inch])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), fill),
        ("BOX", (0, 0), (-1, -1), 0.7, border),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return table


def meta_table(activity):
    data = [
        [para("Category", "TokCellBold"), para(activity["category"], "TokCell"), para("Time", "TokCellBold"), para(activity["time"], "TokCell")],
        [para("Difficulty", "TokCellBold"), para(activity.get("difficulty", "Flexible"), "TokCell"), para("ID", "TokCellBold"), para(activity["id"], "TokCell")],
    ]
    table = Table(data, colWidths=[1.1 * inch, 2.25 * inch, 0.8 * inch, 2.9 * inch])
    table.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.45, PALETTE["line"]),
        ("BACKGROUND", (0, 0), (0, -1), PALETTE["blue_pale"]),
        ("BACKGROUND", (2, 0), (2, -1), PALETTE["blue_pale"]),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def document_header(activity, label):
    return [
        Paragraph(esc(f"{activity['title']} {label}"), styles["TokTitle"]),
        Paragraph(esc(f"TOK Cognitive Science Activity Bank • {activity['category']} • {activity['time']}"), styles["TokSubtitle"]),
        meta_table(activity),
        Spacer(1, 0.12 * inch),
        callout(f"Big idea: {activity['bigIdea']}"),
        Spacer(1, 0.1 * inch),
    ]


def response_table():
    data = [
        [para("What I noticed", "TokCellBold"), para("What I inferred", "TokCellBold"), para("Evidence", "TokCellBold"), para("Confidence", "TokCellBold")],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
    ]
    table = Table(data, colWidths=[1.75 * inch, 1.75 * inch, 1.9 * inch, 1.25 * inch], rowHeights=[0.34 * inch, 0.54 * inch, 0.54 * inch, 0.54 * inch])
    table.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.45, PALETTE["line"]),
        ("BACKGROUND", (0, 0), (-1, 0), PALETTE["gold_pale"]),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def lesson_question_table(activity, include_answers=True):
    kit = activity.get("lessonKit", {})
    rows = [[para("#", "TokCellBold"), para("Question for students", "TokCellBold")]]
    widths = [0.38 * inch, 6.25 * inch]
    if include_answers:
        rows[0].append(para("Teacher key / cue", "TokCellBold"))
        widths = [0.35 * inch, 3.55 * inch, 2.75 * inch]

    for question in kit.get("lessonQuestions", []):
        row = [
            para(str(question.get("number", "")), "TokCellBold"),
            para(question.get("question", ""), "TokCell"),
        ]
        if include_answers:
            row.append(para(question.get("answer", ""), "TokCell"))
        rows.append(row)

    table = Table(rows, colWidths=widths, repeatRows=1)
    table.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.4, PALETTE["line"]),
        ("BACKGROUND", (0, 0), (-1, 0), PALETTE["gold_pale"]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return table


def stimulus_cards_flow(activity, limit=None):
    kit = activity.get("lessonKit", {})
    cards = kit.get("stimulusCards", [])
    if limit:
        cards = cards[:limit]
    flowables = []
    for card in cards:
        table = Table(
            [[
                para(card.get("title", "Stimulus"), "TokCellBold"),
                para(card.get("body", ""), "TokCell"),
                para(card.get("meta") or card.get("teacherUse") or "", "TokCell"),
            ]],
            colWidths=[1.35 * inch, 3.55 * inch, 1.75 * inch],
        )
        table.setStyle(TableStyle([
            ("GRID", (0, 0), (-1, -1), 0.4, PALETTE["line"]),
            ("BACKGROUND", (0, 0), (0, -1), PALETTE["teal_pale"]),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ]))
        flowables.extend([table, Spacer(1, 0.06 * inch)])
    return flowables


def worksheet_story(activity):
    kit = activity.get("lessonKit", {})
    story = document_header(activity, "Student Handout")
    story.extend([
        section("Student-Facing Prompt"),
        para(kit.get("studentPrompt") or activity["readyPrompt"]),
        section("Concrete Stimulus Packet"),
        *stimulus_cards_flow(activity, limit=6),
        section("Actual Lesson Questions"),
        lesson_question_table(activity, include_answers=False),
        section("Ready-to-Use Examples"),
        *bullet_list(activity["exampleStimuli"], 4),
        section("Student Task"),
        para(kit.get("studentTask") or "Complete the grid, then answer one TOK debrief question."),
        section("Activity Steps"),
        *numbered_list(activity["procedure"], 8),
        section("Observation and Evidence Record"),
        para("Use this grid to keep observation, inference, evidence, and confidence separate."),
        response_table(),
        section("TOK Debrief"),
        *bullet_list(activity["debrief"], 4),
        section("Knowledge Questions"),
        *bullet_list(activity["knowledgeQuestions"], 4),
        section("Transfer Example"),
        para(activity["classroomExample"]),
        section("Exit Ticket"),
        *bullet_list(activity["exitTicket"], 3),
    ])
    return story


def timing_table(activity):
    rows = [[para("Stage", "TokCellBold"), para("Teacher move", "TokCellBold"), para("Watch for", "TokCellBold")]]
    for index, step in enumerate(activity["procedure"], 1):
        rows.append([
            para(str(index), "TokCellBold"),
            para(step, "TokCell"),
            para("Assumptions, confidence shifts, evidence claims, and language choices.", "TokCell"),
        ])
    rows.append([
        para("Debrief", "TokCellBold"),
        para("Move from the activity result to a TOK knowledge question.", "TokCell"),
        para("Students distinguishing method, evidence, interpretation, and overclaiming.", "TokCell"),
    ])
    table = Table(rows, colWidths=[0.7 * inch, 3.3 * inch, 2.65 * inch], repeatRows=1)
    table.setStyle(TableStyle([
        ("GRID", (0, 0), (-1, -1), 0.4, PALETTE["line"]),
        ("BACKGROUND", (0, 0), (-1, 0), PALETTE["blue_pale"]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def teacher_notes_story(activity):
    kit = activity.get("lessonKit", {})
    story = document_header(activity, "Teacher Notes")
    story.extend([
        section("Overview"),
        para(activity["summary"]),
        section("Student Prompt"),
        para(kit.get("studentPrompt") or activity["readyPrompt"]),
        section("Concrete Stimulus Packet"),
        *stimulus_cards_flow(activity),
        section("Actual Lesson Questions and Key"),
        lesson_question_table(activity, include_answers=True),
        section("Teacher Key / Reveal"),
        para(kit.get("teacherReveal") or "Use the reveal after students commit to their first answer."),
        *bullet_list(kit.get("answerKey", []), 12),
        section("Setup Checklist"),
        *bullet_list(activity["setup"], 6),
        section("Ready-to-Use Examples"),
        *bullet_list(activity["exampleStimuli"], 5),
        section("Suggested Timing"),
        timing_table(activity),
        section("Teacher Language"),
        *bullet_list(activity["sampleTeacherLanguage"], 5),
        section("Common Misconceptions"),
        *bullet_list(activity["commonMisconceptions"], 4),
        section("Assessment Look-Fors"),
        *bullet_list(activity["assessmentLookFors"], 4),
        section("Differentiation and Adaptations"),
        *bullet_list(activity["adaptations"], 5),
        section("Extension Tasks"),
        *bullet_list(activity["extensionTasks"], 4),
        section("Related Activities"),
        *bullet_list(activity["relatedTitles"], 4),
    ])
    return story


def run_kit_story(activity):
    kit = activity.get("lessonKit", {})
    story = document_header(activity, "Classroom Run Kit")
    story.extend([
        section("One-Minute Teacher Brief"),
        para(activity["summary"]),
        section("Student Prompt"),
        para(kit.get("studentPrompt") or activity["readyPrompt"]),
        section("Concrete Stimulus Packet"),
        *stimulus_cards_flow(activity),
        section("Actual Lesson Questions"),
        lesson_question_table(activity, include_answers=True),
        section("Student Task"),
        para(kit.get("studentTask") or "Complete the grid and prepare for debrief."),
        section("Teacher Key / Reveal"),
        para(kit.get("teacherReveal") or "Reveal after first responses."),
        *bullet_list(kit.get("answerKey", []), 12),
        section("Student Instructions"),
        *bullet_list(activity["studentInstructions"], 4),
        section("Setup Checklist"),
        *bullet_list(activity["setup"], 6),
        section("Example Stimuli or Materials"),
        *bullet_list(activity["exampleStimuli"], 5),
        section("Resources To Use"),
        *bullet_list([
            f"Resource pack: {activity['resourcePackPath']}",
            f"Card deck CSV: {activity['cardDeckPath']}",
            f"Visual prompt: {activity['visualPromptPath']}",
            *activity["runResources"],
        ], 8),
        section("Run Sequence"),
        *numbered_list(activity["procedure"], 8),
        section("Debrief Moves"),
        *bullet_list(activity["debrief"], 4),
        section("Teacher Quick Script"),
        *bullet_list(activity["sampleTeacherLanguage"], 5),
        section("Exit Ticket"),
        *bullet_list(activity["exitTicket"], 3),
    ])
    return story


def on_page(canvas, doc, title):
    canvas.saveState()
    canvas.setFillColor(PALETTE["teal"])
    canvas.rect(0, 0, 0.16 * inch, letter[1], fill=1, stroke=0)
    canvas.setFillColor(PALETTE["gold"])
    canvas.rect(0.16 * inch, 0, 0.06 * inch, letter[1], fill=1, stroke=0)
    canvas.setFillColor(PALETTE["muted"])
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(0.55 * inch, 0.35 * inch, "TOK Cognitive Science Activity Bank")
    canvas.drawRightString(letter[0] - 0.55 * inch, 0.35 * inch, f"{title} • Page {doc.page}")
    canvas.restoreState()


def build_pdf(path, activity, label, story_fn):
    output = Path(path)
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output),
        pagesize=letter,
        leftMargin=0.55 * inch,
        rightMargin=0.55 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title=f"{activity['title']} {label}",
        author="TOK Cognitive Science Activity Bank",
    )
    story = story_fn(activity)
    doc.build(story, onFirstPage=lambda c, d: on_page(c, d, label), onLaterPages=lambda c, d: on_page(c, d, label))


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Usage: pdf-resource-builder.py <manifest.json>")
    manifest = json.loads(Path(sys.argv[1]).read_text())
    count = 0
    for activity in manifest["activities"]:
        build_pdf(activity["pdfOutputs"]["worksheet"], activity, "Student Handout", worksheet_story)
        build_pdf(activity["pdfOutputs"]["teacherNotes"], activity, "Teacher Notes", teacher_notes_story)
        build_pdf(activity["pdfOutputs"]["runKit"], activity, "Run Kit", run_kit_story)
        count += 3
    print(f"Generated {count} PDF resources.")


if __name__ == "__main__":
    main()
