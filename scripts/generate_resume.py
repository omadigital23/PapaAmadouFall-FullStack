from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUTS = [
    ROOT / "output" / "pdf" / "Papa_Amadou_Fall_Full_Stack_Resume.pdf",
    ROOT / "public" / "assets" / "Papa_Amadou_Fall_Full_Stack_Resume.pdf",
]

INK = colors.HexColor("#17231f")
MUTED = colors.HexColor("#52645d")
ACCENT = colors.HexColor("#587600")
LINE = colors.HexColor("#d4ddd8")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=INK, alignment=TA_LEFT, spaceAfter=2),
        "title": ParagraphStyle("Title", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=ACCENT, spaceAfter=4),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.5, leading=9.2, textColor=MUTED),
        "section": ParagraphStyle("Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=8.7, leading=10, textColor=ACCENT, spaceBefore=6, spaceAfter=3, uppercase=True),
        "role": ParagraphStyle("Role", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=9.2, leading=11, textColor=INK, spaceAfter=1),
        "meta": ParagraphStyle("Meta", parent=base["Normal"], fontName="Helvetica-Oblique", fontSize=7.3, leading=9, textColor=MUTED, spaceAfter=2),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=7.7, leading=10, textColor=INK, spaceAfter=3),
        "bullet": ParagraphStyle("Bullet", parent=base["BodyText"], fontName="Helvetica", fontSize=7.5, leading=9.6, leftIndent=10, firstLineIndent=-6, textColor=INK, spaceAfter=1.5),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName="Helvetica", fontSize=7.1, leading=9, textColor=MUTED, spaceAfter=2),
    }


def section_rule(label, s):
    table = Table([[Paragraph(label.upper(), s["section"]), ""]], colWidths=[2.35 * inch, 4.7 * inch])
    table.setStyle(TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.6, LINE), ("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    return table


def bullet(text, s):
    return Paragraph(f"- {text}", s["bullet"])


def build(path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)
    s = styles()
    doc = SimpleDocTemplate(str(path), pagesize=LETTER, rightMargin=0.48 * inch, leftMargin=0.48 * inch, topMargin=0.34 * inch, bottomMargin=0.32 * inch, title="Papa Amadou Fall - Full Stack Engineer Resume", author="Papa Amadou Fall")
    story = [
        Paragraph("Papa Amadou Fall", s["name"]),
        Paragraph("FULL STACK ENGINEER | REACT, TYPESCRIPT, NEXT.JS, PYTHON AND DJANGO", s["title"]),
        Paragraph("Campbell River, British Columbia, Canada  |  fallpape199@gmail.com  |  github.com/omadigital23  |  linkedin.com/in/papa-amadou-fall-bb95a01a1", s["contact"]),
        section_rule("Professional summary", s),
        Spacer(1, 3),
        Paragraph("Full Stack Engineer with hands-on experience building and deploying end-to-end web applications using React, TypeScript, Next.js, Python, Django, REST APIs, SQL, Supabase, AWS and Google Cloud. Builds responsive interfaces, backend services, database-driven features, API integrations and cloud-hosted automation systems with product thinking, structured troubleshooting and end-to-end ownership.", s["body"]),
        section_rule("Technical skills", s),
        Spacer(1, 3),
    ]

    skills = [
        ("Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, responsive design, accessibility, internationalization"),
        ("Backend", "Python, Django, REST APIs, Next.js API routes, Node.js, PHP, authentication, authorization, validation, integrations"),
        ("Data", "PostgreSQL, MySQL, Supabase, SQL, database modelling, migrations, Row Level Security fundamentals"),
        ("Cloud & automation", "AWS, Google Cloud, Vercel, GitHub Pages, Linux, Nginx, DNS, HTTPS, n8n, webhooks, CI/CD fundamentals"),
    ]
    skill_rows = [[Paragraph(f"<b>{label}</b>", s["small"]), Paragraph(value, s["small"])] for label, value in skills]
    skill_table = Table(skill_rows, colWidths=[1.25 * inch, 5.8 * inch])
    skill_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 5), ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
    story.extend([skill_table, section_rule("Selected projects", s), Spacer(1, 3)])

    story.extend([
        KeepTogether([Paragraph("NUBIA AURA - End-to-end e-commerce", s["role"]), Paragraph("Full Stack Engineer | Next.js, React, TypeScript, Supabase, PostgreSQL", s["meta"]), bullet("Built responsive cart, multi-step checkout, order confirmation and order-history interfaces with bilingual content.", s), bullet("Implemented API routes, authentication, stock reservations, payment integration, order operations and transactional notifications.", s), bullet("Owned requirements analysis, architecture, database design, frontend and backend implementation, validation, deployment and maintenance.", s)]),
        Spacer(1, 2),
        KeepTogether([Paragraph("OMA Digital Platform", s["role"]), Paragraph("Full Stack Developer / Automation Builder | Next.js, TypeScript, Supabase, Vitest, Playwright", s["meta"]), bullet("Built bilingual product interfaces, lead-capture flows, server API routes, AI-assisted chat, SEO, PWA and offline features.", s), bullet("Applied validation, rate limiting and public API boundary protections; supported testing and production deployment.", s)]),
        section_rule("Professional experience", s),
        Spacer(1, 3),
        KeepTogether([Paragraph("OMA Digital - Full Stack Developer / Automation Builder", s["role"]), Paragraph("Freelance / project-based | 2015 - Present", s["meta"]), bullet("Design and build end-to-end web applications, reusable React/Next.js interfaces, Python/Django services, API routes and database schemas.", s), bullet("Integrate authentication and third-party services, deploy and maintain applications, and create n8n automation workflows.", s), bullet("Work directly with clients to translate requirements into technical solutions, then test, debug, document and maintain delivery.", s)]),
        Spacer(1, 2),
        KeepTogether([Paragraph("XCM Sourcing - Videotron Project - Bilingual Technical Support Representative", s["role"]), Paragraph("December 2020 - June 2026", s["meta"]), bullet("Performed structured diagnosis, remote issue resolution, escalation and technical documentation in a high-volume environment.", s), bullet("Developed root-cause thinking, clear bilingual communication and reliability applicable to production engineering work.", s)]),
        Spacer(1, 2),
        KeepTogether([Paragraph("Tim Hortons - Customer Service Team Member", s["role"]), Paragraph("June 2026 - Present", s["meta"]), bullet("Demonstrate reliability, teamwork, procedure compliance and customer communication in a Canadian workplace.", s)]),
        section_rule("Education & languages", s),
        Spacer(1, 3),
        Paragraph("<b>Bachelor's Degree in Management Information Systems</b> - University of Thies, Senegal", s["body"]),
        Paragraph("Studies included information systems, Python, databases, software engineering, web development, business management and organizational computing.", s["small"]),
        Paragraph("<b>French:</b> TCF Canada - C1 listening, C1 reading, C1 writing, B2 speaking  |  <b>English:</b> Professional working proficiency  |  <b>Wolof:</b> Native", s["small"]),
        section_rule("Work authorization", s),
        Spacer(1, 3),
        Paragraph("Currently in Canada with a valid employer-specific, LMIA-exempt work permit under the Francophone Mobility Program. A change of employer requires the applicable employer-side process and approval of a new work permit before employment can begin.", s["small"]),
    ])
    doc.build(story)


for output in OUTPUTS:
    build(output)

print(OUTPUTS[1])
