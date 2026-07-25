from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "Papa_Amadou_Fall_TELUS_Full_Stack_AI_Logic_Cover_Letter.pdf"


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    base = getSampleStyleSheet()
    ink = colors.HexColor("#17252A")
    purple = colors.HexColor("#5B2C83")
    muted = colors.HexColor("#526269")
    line = colors.HexColor("#D8DDE2")

    styles = {
        "name": ParagraphStyle(
            "name", parent=base["Title"], fontName="Helvetica-Bold",
            fontSize=21, leading=23, textColor=ink, spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "headline", parent=base["Normal"], fontName="Helvetica-Bold",
            fontSize=9.8, leading=12, textColor=purple, spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "contact", parent=base["Normal"], fontSize=7.9,
            leading=10.4, textColor=muted,
        ),
        "body": ParagraphStyle(
            "body", parent=base["BodyText"], fontSize=9.15,
            leading=13.3, textColor=ink, spaceAfter=9,
        ),
        "address": ParagraphStyle(
            "address", parent=base["BodyText"], fontSize=8.8,
            leading=12.3, textColor=ink, spaceAfter=8,
        ),
        "subject": ParagraphStyle(
            "subject", parent=base["BodyText"], fontName="Helvetica-Bold",
            fontSize=9.4, leading=12.5, textColor=purple, spaceAfter=10,
        ),
        "closing": ParagraphStyle(
            "closing", parent=base["BodyText"], fontSize=9.15,
            leading=13, textColor=ink,
        ),
    }

    def p(text, style="body"):
        return Paragraph(text, styles[style])

    header = Table(
        [[
            [p("Papa Amadou Fall", "name"),
             p("FULL-STACK AI LOGIC SPECIALIST | PYTHON, JAVASCRIPT, REACT &amp; DJANGO", "headline")],
            p(
                "Campbell River, BC, Canada<br/>"
                "+1 250 204 8358<br/>"
                "fallpape199@gmail.com<br/>"
                "linkedin.com/in/papa-amadou-fall-bb95a01a1<br/>"
                "github.com/omadigital23",
                "contact",
            ),
        ]],
        colWidths=[4.18 * inch, 2.72 * inch],
    )
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LINEBELOW", (0, 0), (-1, -1), 0.8, line),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))

    story = [
        header,
        Spacer(1, 12),
        p("July 17, 2026<br/><br/>Hiring Team<br/>TELUS Digital AI Community", "address"),
        p("Re: Full-Stack AI Logic Specialist - Intermediate (AI Community)", "subject"),
        p("Dear Hiring Team,"),
        p(
            "I am applying for the <b>Full-Stack AI Logic Specialist - Intermediate</b> opportunity. "
            "The role closely matches the way I work: translating natural-language requirements into functioning "
            "software, reviewing AI-assisted output critically, reproducing defects, and improving code through "
            "structured testing and iteration. I bring hands-on full-stack and automation experience since 2015, "
            "supported by a Bachelor's degree in Management Information Systems."
        ),
        p(
            "Through OMA Digital, I build and maintain applications with <b>Python, Django, JavaScript, TypeScript, "
            "React, Next.js, REST APIs, SQL, and Supabase</b>. My workflow includes refining prompts, inspecting "
            "generated logic and syntax, testing edge cases, and revising implementations before release. I use "
            "Vitest and Playwright for automated testing and evaluate code for correctness, maintainability, data "
            "integrity, security risks, and alignment with the original user instruction."
        ),
        p(
            "Two recent projects demonstrate this fit. For <b>NUBIA AURA</b>, I developed and tested checkout, "
            "inventory reservations, payment integration, order history, backend validation, database operations, "
            "and transactional notifications. For the <b>OMA Digital platform</b>, I delivered bilingual interfaces, "
            "secure APIs, AI-assisted chat, lead automation, rate limiting, and automated tests. Across both projects, "
            "I debugged failures spanning application logic, APIs, data, integrations, and deployment, then documented "
            "reproducible fixes."
        ),
        p(
            "My five-plus years supporting the Videotron project at XCM also strengthened the reviewer mindset this "
            "work requires. I learned to isolate root causes through multi-step diagnosis, compare symptoms with logs "
            "and prior troubleshooting, document evidence precisely, and escalate issues in a form another specialist "
            "could reproduce. That discipline transfers directly to auditing AI-generated code and conducting "
            "multi-turn debugging without accepting the first plausible answer."
        ),
        p(
            "I am based in Campbell River, British Columbia, and am available for flexible remote project work. I "
            "offer professional working proficiency in English, advanced French proficiency (TCF Canada NCLC "
            "8/8/8/9), and native Wolof. I would welcome the opportunity to complete TELUS Digital's qualification "
            "process and contribute reliable, security-aware evaluations to the AI Community."
        ),
        p(
            "Thank you for your consideration. I look forward to discussing how my full-stack development, technical "
            "diagnosis, and AI-assisted quality-review experience can support TELUS Digital's evaluation projects."
        ),
        Spacer(1, 2),
        p("Sincerely,<br/><br/><b>Papa Amadou Fall</b>", "closing"),
    ]

    doc = SimpleDocTemplate(
        str(OUT), pagesize=LETTER,
        leftMargin=0.62 * inch, rightMargin=0.62 * inch,
        topMargin=0.45 * inch, bottomMargin=0.45 * inch,
        title="Papa Amadou Fall - TELUS Full-Stack AI Logic Specialist Cover Letter",
        author="Papa Amadou Fall",
        subject="Application for Full-Stack AI Logic Specialist - Intermediate",
    )
    doc.build(story)


build()
print(OUT)
