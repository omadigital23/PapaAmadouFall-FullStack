from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_RESUME = ROOT / "public" / "assets" / "Papa_Amadou_Fall_Full_Stack_Resume.pdf"
TARGETED_RESUME = ROOT / "output" / "pdf" / "Papa_Amadou_Fall_Procurify_Full_Stack_Resume.pdf"
OUTPUTS = [PUBLIC_RESUME, TARGETED_RESUME]

INK = colors.HexColor("#14231f")
MUTED = colors.HexColor("#536660")
ACCENT = colors.HexColor("#4f6f00")
PALE = colors.HexColor("#eef3e8")
LINE = colors.HexColor("#d3ddd7")


def make_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=26, leading=29, textColor=INK, alignment=TA_LEFT, spaceAfter=3),
        "headline": ParagraphStyle("Headline", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=ACCENT, spaceAfter=7),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=8.2, leading=11.5, textColor=MUTED),
        "section": ParagraphStyle("Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=ACCENT, spaceBefore=12, spaceAfter=6),
        "role": ParagraphStyle("Role", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceAfter=2),
        "meta": ParagraphStyle("Meta", parent=base["Normal"], fontName="Helvetica-Oblique", fontSize=8.2, leading=11, textColor=MUTED, spaceAfter=5),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=8.8, leading=12.5, textColor=INK, spaceAfter=5),
        "bullet": ParagraphStyle("Bullet", parent=base["BodyText"], fontName="Helvetica", fontSize=8.6, leading=12.1, leftIndent=12, firstLineIndent=-8, textColor=INK, spaceAfter=3),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName="Helvetica", fontSize=8, leading=11.2, textColor=MUTED, spaceAfter=3),
        "skill_label": ParagraphStyle("SkillLabel", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8.2, leading=11, textColor=INK),
        "skill_text": ParagraphStyle("SkillText", parent=base["Normal"], fontName="Helvetica", fontSize=8.1, leading=11.2, textColor=MUTED),
        "footer": ParagraphStyle("Footer", parent=base["Normal"], fontName="Helvetica", fontSize=7.4, textColor=MUTED),
    }


def bullet(text, styles):
    return Paragraph(f"- {text}", styles["bullet"])


def section_heading(label, styles):
    table = Table([[Paragraph(label.upper(), styles["section"]), ""]], colWidths=[2.2 * inch, 4.7 * inch])
    table.setStyle(
        TableStyle(
            [
                ("LINEBELOW", (0, 0), (-1, -1), 0.7, LINE),
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


def role_block(title, meta, bullets, styles):
    return KeepTogether(
        [
            Paragraph(title, styles["role"]),
            Paragraph(meta, styles["meta"]),
            *[bullet(item, styles) for item in bullets],
        ]
    )


def draw_page(canvas: Canvas, doc):
    canvas.saveState()
    width, _ = LETTER
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.38 * inch, width - doc.rightMargin, 0.38 * inch)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7.2)
    canvas.drawString(doc.leftMargin, 0.22 * inch, "Papa Amadou Fall - Full Stack Engineer")
    canvas.drawRightString(width - doc.rightMargin, 0.22 * inch, f"Page {doc.page}")
    canvas.restoreState()


def build(path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(path),
        pagesize=LETTER,
        rightMargin=0.58 * inch,
        leftMargin=0.58 * inch,
        topMargin=0.48 * inch,
        bottomMargin=0.52 * inch,
        title="Papa Amadou Fall - Full Stack Engineer II Resume",
        author="Papa Amadou Fall",
        subject="Full Stack Engineer II - React, TypeScript, Python, Django, MySQL and AWS",
    )

    story = [
        Paragraph("Papa Amadou Fall", styles["name"]),
        Paragraph("FULL STACK ENGINEER | REACT, TYPESCRIPT, PYTHON/DJANGO, MYSQL AND AWS", styles["headline"]),
        Paragraph(
            "Campbell River, British Columbia, Canada  |  fallpape199@gmail.com  |  github.com/omadigital23<br/>"
            "linkedin.com/in/papa-amadou-fall-bb95a01a1  |  omadigital23.github.io/PapaAmadouFall-FullStack/",
            styles["contact"],
        ),
        section_heading("Professional summary", styles),
        Spacer(1, 5),
        Paragraph(
            "Full Stack Engineer with project-based experience delivering customer-facing web applications from responsive React and TypeScript interfaces through REST APIs, database models and cloud deployment. Hands-on with Next.js, Python/Django, MySQL, PostgreSQL, Supabase and AWS. Brings structured production troubleshooting, bilingual communication and direct client collaboration to build reliable, maintainable software with clear ownership from requirement to release.",
            styles["body"],
        ),
        section_heading("Core technical fit", styles),
        Spacer(1, 6),
    ]

    skill_rows = [
        ("Frontend", "React, TypeScript, Next.js, JavaScript, reusable components, state management, forms, accessibility, responsive UI, performance fundamentals"),
        ("Backend", "Python, Django, REST APIs, Next.js API routes, Node.js, authentication, authorization, business logic, server-side validation, integrations"),
        ("Data", "MySQL, PostgreSQL, Supabase, SQL, schema design, migrations, Row Level Security, query optimization fundamentals, data integrity"),
        ("Cloud & delivery", "AWS, Google Cloud, Linux, Nginx, DNS, HTTPS, Vercel, GitHub Pages, Git, GitHub Actions, CI/CD fundamentals"),
        ("Quality & reliability", "Strict TypeScript, ESLint, Vitest, Jest, Playwright, API testing, debugging, defect investigation, security validation, documentation"),
        ("Automation & AI", "n8n, webhooks, workflow automation, Groq-backed AI chat integration, RAG fundamentals, AI-assisted development workflows"),
    ]
    skills_table = Table(
        [[Paragraph(label, styles["skill_label"]), Paragraph(text, styles["skill_text"])] for label, text in skill_rows],
        colWidths=[1.28 * inch, 5.58 * inch],
    )
    skills_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.extend(
        [
            skills_table,
            section_heading("Selected full stack projects", styles),
            Spacer(1, 6),
            role_block(
                "NUBIA AURA - E-commerce checkout and order management",
                "Full Stack Engineer | Next.js, React, TypeScript, Supabase/PostgreSQL | github.com/omadigital23/NUBIAAURA",
                [
                    "Built responsive cart, real-time calculations, multi-step checkout, order confirmation and customer order-history interfaces.",
                    "Implemented API routes, authentication, stock reservations, database operations, payment integration and transactional notifications.",
                    "Protected data integrity with trusted backend validation and coordinated inventory, checkout and customer feedback across system boundaries.",
                    "Owned requirements analysis, architecture, schema design, implementation, testing, deployment, troubleshooting and maintenance.",
                ],
                styles,
            ),
            Spacer(1, 5),
            role_block(
                "OMA Digital - Bilingual production platform",
                "Full Stack Developer / Automation Builder | Next.js, React, TypeScript, Supabase, Vitest, Playwright | github.com/omadigital23/OMADIGITAL",
                [
                    "Built reusable bilingual interfaces, lead-capture workflows, server API routes and a Groq-backed AI chat experience.",
                    "Implemented validation, distributed rate limiting and secure public API boundaries for customer-facing features.",
                    "Added SEO, PWA and offline capabilities and maintained automated unit and end-to-end test coverage.",
                    "Deployed and maintained the production application while translating business needs into practical technical decisions.",
                ],
                styles,
            ),
            PageBreak(),
            section_heading("Professional experience", styles),
            Spacer(1, 6),
            role_block(
                "OMA Digital - Full Stack Developer / Automation Builder",
                "Freelance and project-based | 2015 - Present",
                [
                    "Deliver end-to-end applications and features across React/Next.js interfaces, Python/Django backend work, REST APIs and relational data models.",
                    "Work directly with clients to clarify requirements, simplify workflows and turn business needs into maintainable product behaviour.",
                    "Integrate authentication, databases, external APIs and automation workflows; use strict typing, linting, tests and documentation while deploying and troubleshooting across cloud environments.",
                ],
                styles,
            ),
            Spacer(1, 6),
            role_block(
                "XCM Sourcing - Videotron Project - Bilingual Technical Support Representative",
                "December 2020 - June 2026",
                [
                    "Investigated and resolved production-facing connectivity, service and configuration issues through structured remote diagnosis.",
                    "Documented and escalated complex defects while communicating clearly in French and English; developed accountable root-cause habits in a high-volume environment.",
                ],
                styles,
            ),
            Spacer(1, 4),
            Paragraph("<b>Additional Canadian employment:</b> Tim Hortons - Customer Service Team Member | June 2026 - Present. Reliability, teamwork, procedure compliance and customer communication.", styles["small"]),
            section_heading("Additional engineering experience", styles),
            Spacer(1, 6),
            Paragraph("<b>Python/Django:</b> Build models, views, forms, authentication flows, migrations, REST endpoints and database-backed business rules with explicit server-side validation. Some client repositories are private.", styles["body"]),
            Paragraph("<b>AWS, Google Cloud and n8n:</b> Provision cloud VMs; configure Linux, environment variables, DNS, Nginx and HTTPS; operate API/webhook workflows and troubleshoot application, network and deployment issues.", styles["body"]),
            section_heading("Engineering approach", styles),
            Spacer(1, 5),
        ]
    )

    approach = Table(
        [
            [
                Paragraph("<b>Ownership</b><br/>Requirement through release and maintenance.", styles["skill_text"]),
                Paragraph("<b>Quality</b><br/>Clear, typed, testable code and documented decisions.", styles["skill_text"]),
                Paragraph("<b>Reliability</b><br/>Root-cause diagnosis and trusted data boundaries.", styles["skill_text"]),
            ],
            [
                Paragraph("<b>Customer focus</b><br/>Understandable flows and useful recovery states.", styles["skill_text"]),
                Paragraph("<b>Simplicity</b><br/>Maintainable systems without unnecessary complexity.", styles["skill_text"]),
                Paragraph("<b>Growth</b><br/>Production work, feedback and deliberate practice.", styles["skill_text"]),
            ],
        ],
        colWidths=[2.28 * inch, 2.28 * inch, 2.28 * inch],
    )
    approach.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.extend(
        [
            approach,
            section_heading("Education, languages and work authorization", styles),
            Spacer(1, 6),
            Paragraph("<b>Bachelor's Degree in Management Information Systems</b> - University of Thies, Senegal", styles["body"]),
            Paragraph("Relevant studies: information systems, Python, databases, software engineering, web development, business management and organizational computing.", styles["small"]),
            Paragraph("<b>French:</b> TCF Canada - C1 listening, C1 reading, C1 writing, B2 speaking  |  <b>English:</b> Professional working proficiency  |  <b>Wolof:</b> Native", styles["small"]),
            Spacer(1, 2),
            Paragraph("Currently in Canada with a valid employer-specific, LMIA-exempt work permit under the Francophone Mobility Program. A change of employer requires the applicable employer-side process and approval of a new work permit before employment can begin.", styles["small"]),
        ]
    )

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)


for output in OUTPUTS:
    build(output)

print(PUBLIC_RESUME)
print(TARGETED_RESUME)
