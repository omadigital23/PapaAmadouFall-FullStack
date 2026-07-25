from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "Papa_Amadou_Fall_TELUS_Full_Stack_AI_Logic_Resume.pdf"


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    base = getSampleStyleSheet()
    ink = colors.HexColor("#17252A")
    purple = colors.HexColor("#5B2C83")
    muted = colors.HexColor("#526269")
    line = colors.HexColor("#D8DDE2")
    st = {
        "name": ParagraphStyle("name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=ink, spaceAfter=2),
        "headline": ParagraphStyle("headline", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=10.2, leading=12, textColor=purple, spaceAfter=5),
        "contact": ParagraphStyle("contact", parent=base["Normal"], fontSize=7.8, leading=10.2, textColor=muted, spaceAfter=5),
        "section": ParagraphStyle("section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9.6, leading=11.5, textColor=purple, spaceBefore=6, spaceAfter=3),
        "role": ParagraphStyle("role", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=9.1, leading=11, textColor=ink, spaceAfter=1),
        "meta": ParagraphStyle("meta", parent=base["Normal"], fontName="Helvetica-Oblique", fontSize=7.6, leading=9.5, textColor=muted, spaceAfter=2),
        "body": ParagraphStyle("body", parent=base["BodyText"], fontSize=8.1, leading=10.6, textColor=ink, spaceAfter=2.5),
        "bullet": ParagraphStyle("bullet", parent=base["BodyText"], fontSize=7.9, leading=10.3, leftIndent=10, firstLineIndent=-7, textColor=ink, spaceAfter=1.6),
        "skill_label": ParagraphStyle("skill_label", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=7.8, leading=9.8, textColor=ink),
        "skill": ParagraphStyle("skill", parent=base["Normal"], fontSize=7.7, leading=9.8, textColor=muted),
    }

    def p(text, key="body"):
        return Paragraph(text, st[key])

    def bullet(text):
        return p(f"- {text}", "bullet")

    def section(text):
        return p(text.upper(), "section")

    skills = [
        ("AI code evaluation", "AI-assisted development, prompt refinement, logic and syntax review, output validation, RAG fundamentals"),
        ("Languages & frameworks", "Python, Django, JavaScript, TypeScript, React, Next.js, REST APIs, HTML/CSS"),
        ("Quality & security", "Debugging, defect reproduction, Vitest, Jest, Playwright, API testing, validation, rate limiting, secure API boundaries"),
        ("Data & delivery", "SQL, PostgreSQL, MySQL, Supabase, Git/GitHub, Linux, AWS, Google Cloud, Vercel, CI/CD fundamentals"),
    ]
    skill_table = Table(
        [[p(a, "skill_label"), p(b, "skill")] for a, b in skills],
        colWidths=[1.34 * inch, 5.55 * inch],
    )
    skill_table.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), .45, line),
        ("INNERGRID", (0, 0), (-1, -1), .3, line),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))

    story = [
        p("Papa Amadou Fall", "name"),
        p("FULL-STACK AI LOGIC SPECIALIST | PYTHON, JAVASCRIPT, REACT & DJANGO", "headline"),
        p(
            "Campbell River, BC, Canada | +1 250 204 8358 | fallpape199@gmail.com<br/>"
            "LinkedIn: linkedin.com/in/papa-amadou-fall-bb95a01a1 | GitHub: github.com/omadigital23 | Portfolio: omadigital23.github.io/PapaAmadouFall-FullStack/",
            "contact",
        ),
        section("Profile"),
        p(
            "Full-stack developer and bilingual technical specialist with hands-on software development and automation experience since 2015. Build and troubleshoot Python/Django and JavaScript/TypeScript applications, REST APIs, SQL-backed workflows, and AI-assisted features. Experienced validating application logic, reproducing defects, reviewing AI-assisted output, testing customer workflows, strengthening API security, and translating natural-language requirements into maintainable code.",
        ),
        section("Technical alignment"),
        skill_table,
        section("Relevant experience"),
        p("OMA Digital | Full Stack Developer / Automation Builder", "role"),
        p("Freelance and project-based | 2015 - Present", "meta"),
        bullet("Build and maintain full-stack applications, APIs, database-backed workflows, and AI-assisted features using Python, Django, JavaScript, TypeScript, React, Next.js, SQL, and Supabase."),
        bullet("Use AI-assisted development workflows critically: refine prompts, inspect generated logic, test outputs, identify defects, and revise implementations before release."),
        bullet("Debug application, API, data, integration, and deployment failures through logs, reproducible test cases, root-cause analysis, and documented fixes."),
        bullet("Implement validation, authentication, authorization, rate limiting, and secure public API boundaries; test customer-facing flows with Vitest and Playwright."),
        p("XCM Sourcing - Videotron Project | Bilingual Technical Support Representative", "role"),
        p("December 2020 - June 2026", "meta"),
        bullet("Applied structured multi-step diagnosis to production connectivity, configuration, device, VPN/DNS, and service issues in a high-volume environment."),
        bullet("Documented symptoms, diagnostic logic, outcomes, and escalation evidence so complex problems could be reproduced and resolved efficiently."),
        section("Selected full-stack and AI work"),
        bullet("<b>NUBIA AURA:</b> Built and tested checkout, inventory reservations, payment integration, order history, backend validation, database operations, and transactional notifications."),
        bullet("<b>OMA Digital platform:</b> Delivered bilingual React/Next.js interfaces, secure APIs, AI-assisted chat, lead automation, PWA/offline capabilities, rate limiting, and automated tests."),
        bullet("<b>Evaluation approach:</b> Check code for correctness, maintainability, edge cases, data integrity, security risks, and alignment between user instructions and functional output."),
        section("Education, languages and eligibility"),
        p("<b>Bachelor's Degree in Management Information Systems</b> - University of Thies, Senegal | March 2014"),
        p("Relevant study: information systems, Python, databases, SQL, software engineering, web development, and business systems."),
        p("<b>French:</b> TCF Canada NCLC 8/8/8/9 | <b>English:</b> Professional working proficiency | <b>Wolof:</b> Native"),
        p("Based in Canada and available for flexible remote project work."),
    ]

    doc = SimpleDocTemplate(
        str(OUT), pagesize=LETTER, leftMargin=.55*inch, rightMargin=.55*inch,
        topMargin=.38*inch, bottomMargin=.38*inch,
        title="Papa Amadou Fall - TELUS Full-Stack AI Logic Specialist Resume",
        author="Papa Amadou Fall",
    )
    doc.build(story)


build()
print(OUT)
