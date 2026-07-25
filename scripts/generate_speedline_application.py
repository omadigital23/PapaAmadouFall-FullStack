from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, PageBreak


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)


def styles():
    s = getSampleStyleSheet()
    ink = colors.HexColor("#17252A")
    blue = colors.HexColor("#1F5D78")
    return {
        "name": ParagraphStyle("name", parent=s["Title"], fontName="Helvetica-Bold", fontSize=24, leading=27, textColor=ink, spaceAfter=3),
        "headline": ParagraphStyle("headline", parent=s["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=blue, spaceAfter=6),
        "contact": ParagraphStyle("contact", parent=s["Normal"], fontSize=8.3, leading=11, textColor=colors.HexColor("#4A5A60"), spaceAfter=8),
        "section": ParagraphStyle("section", parent=s["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=blue, spaceBefore=10, spaceAfter=5, borderWidth=0, borderPadding=0),
        "role": ParagraphStyle("role", parent=s["Heading3"], fontName="Helvetica-Bold", fontSize=10, leading=12.5, textColor=ink, spaceAfter=1),
        "meta": ParagraphStyle("meta", parent=s["Normal"], fontName="Helvetica-Oblique", fontSize=8.2, leading=10.5, textColor=colors.HexColor("#56666C"), spaceAfter=4),
        "body": ParagraphStyle("body", parent=s["BodyText"], fontSize=8.8, leading=12.1, textColor=ink, spaceAfter=4),
        "bullet": ParagraphStyle("bullet", parent=s["BodyText"], fontSize=8.6, leading=11.8, leftIndent=12, firstLineIndent=-8, textColor=ink, spaceAfter=2.5),
        "letter": ParagraphStyle("letter", parent=s["BodyText"], fontSize=9.6, leading=13.8, textColor=ink, spaceAfter=8),
    }


def p(text, st):
    return Paragraph(text, st)


def bullet(text, st):
    return p(f"- {text}", st)


def resume():
    st = styles()
    path = OUT / "Papa_Amadou_Fall_SpeedLine_DSS_QA_Resume.pdf"
    doc = SimpleDocTemplate(str(path), pagesize=LETTER, leftMargin=.62*inch, rightMargin=.62*inch, topMargin=.5*inch, bottomMargin=.5*inch,
                            title="Papa Amadou Fall - Development Support Specialist (QA)", author="Papa Amadou Fall")
    story = [
        p("Papa Amadou Fall", st["name"]),
        p("DEVELOPMENT SUPPORT SPECIALIST | QUALITY ASSURANCE | TECHNICAL SUPPORT", st["headline"]),
        p("Campbell River, BC, Canada | +1 250 204 8358 | <link href='mailto:fallpape199@gmail.com'>fallpape199@gmail.com</link> | Open to relocation<br/>LinkedIn: linkedin.com/in/papa-amadou-fall-bb95a01a1 | GitHub: github.com/omadigital23 | Portfolio: omadigital23.github.io/PapaAmadouFall", st["contact"]),
        p("PROFESSIONAL SUMMARY", st["section"]),
        p("Bilingual technical support and software professional with 5+ years of frontline production support experience and hands-on web development, database, testing, and automation work. Skilled in structured troubleshooting, defect documentation, escalation, root-cause investigation, SQL, API testing, and clear cross-functional communication. Experienced supporting non-technical users in French and English while translating complex symptoms into actionable technical context.", st["body"]),
        p("CORE QUALIFICATIONS", st["section"]),
        bullet("Quality and testing: manual functional testing, regression checks, test-case thinking, defect reproduction, API testing, Vitest, Jest, Playwright, validation, and release troubleshooting.", st["bullet"]),
        bullet("Technical support: incident triage, remote diagnosis, hardware/software and connectivity troubleshooting, escalation, customer de-escalation, and CRM/ticket documentation.", st["bullet"]),
        bullet("Data and development: SQL, MySQL, PostgreSQL, Supabase, JavaScript, TypeScript, Python, REST APIs, Git/GitHub, SDLC fundamentals, and Agile project practices.", st["bullet"]),
        bullet("Systems: Windows 10/11, macOS, Microsoft 365, TCP/IP, DNS, VPN, Wi-Fi, routers/modems, Linux, cloud deployments, and workflow automation.", st["bullet"]),
        p("PROFESSIONAL EXPERIENCE", st["section"]),
        p("Technical Support Representative - XCM Sourcing (Videotron Project)", st["role"]),
        p("December 2020 - June 2026", st["meta"]),
        bullet("Delivered bilingual frontline technical support for internet, Wi-Fi, mobile, telephony, account, and service issues in a high-volume production environment.", st["bullet"]),
        bullet("Analyzed symptoms and isolated connectivity, device configuration, VPN/DNS, modem/router, and network-access problems through structured remote troubleshooting.", st["bullet"]),
        bullet("Documented diagnostic steps, results, and resolutions in CRM/ticketing workflows; escalated unresolved incidents with complete and actionable technical context.", st["bullet"]),
        bullet("Guided users through clear step-by-step resolutions in French and English while meeting established procedures, quality standards, and service expectations.", st["bullet"]),
        p("Web Developer / Automation Builder - OMA Digital (Freelance / Part-time)", st["role"]),
        p("2015 - Present", st["meta"]),
        bullet("Build and maintain web applications, REST APIs, database-backed features, and automation workflows using TypeScript, JavaScript, Python, SQL, Supabase, and n8n.", st["bullet"]),
        bullet("Clarify requirements, reproduce defects, validate fixes, document technical decisions, and troubleshoot application, integration, and deployment issues.", st["bullet"]),
        bullet("Use automated unit and end-to-end testing tools including Vitest and Playwright alongside manual validation of customer-facing workflows.", st["bullet"]),
        p("Web Developer - Nettransact", st["role"]),
        p("Senegal | 2014 - 2016", st["meta"]),
        bullet("Contributed to the scalability and maintenance of a commercial e-commerce website, building practical experience with software development and production reliability.", st["bullet"]),
        p("Customer Service Team Member - Tim Hortons", st["role"]),
        p("June 2026 - Present", st["meta"]),
        bullet("Provide reliable service in a fast-paced Canadian workplace while following procedures and communicating effectively with customers and team members.", st["bullet"]),
        p("SELECTED QUALITY AND DEVELOPMENT EXPERIENCE", st["section"]),
        bullet("NUBIA AURA: implemented and tested multi-step checkout, stock reservations, order flows, database operations, backend validation, payment integration, and transactional notifications.", st["bullet"]),
        bullet("OMA Digital platform: built secure APIs and bilingual interfaces; added input validation, rate limiting, PWA/offline behavior, and automated unit and end-to-end coverage.", st["bullet"]),
        bullet("Apply systematic root-cause analysis across application, network, database, API, and deployment boundaries; record findings so issues can be reproduced and resolved.", st["bullet"]),
        p("EDUCATION", st["section"]),
        p("<b>Bachelor's Degree in Management Information Systems</b> - University of Thies, Senegal", st["body"]),
        p("Relevant studies: information systems, databases, SQL, Python, software engineering, web development, business management, and organizational computing.", st["body"]),
        p("LANGUAGES", st["section"]),
        p("<b>French:</b> TCF Canada - C1 listening, C1 reading, C1 writing, B2 speaking<br/><b>English:</b> Professional working proficiency | <b>Wolof:</b> Native", st["body"]),
        p("WORK AUTHORIZATION AND MOBILITY", st["section"]),
        p("Legally authorized to work in Canada with a valid employer-specific, LMIA-exempt work permit under the Francophone Mobility Program. Eligible to change employers through the required LMIA-exempt process. Open to relocation and able to discuss the hybrid Abbotsford schedule.", st["body"]),
    ]
    doc.build(story)
    return path


def cover_letter():
    st = styles()
    path = OUT / "Papa_Amadou_Fall_SpeedLine_DSS_QA_Cover_Letter.pdf"
    doc = SimpleDocTemplate(str(path), pagesize=LETTER, leftMargin=.72*inch, rightMargin=.72*inch, topMargin=.48*inch, bottomMargin=.48*inch,
                            title="Papa Amadou Fall - SpeedLine Cover Letter", author="Papa Amadou Fall")
    story = [
        p("Papa Amadou Fall", st["name"]),
        p("Campbell River, BC | +1 250 204 8358 | fallpape199@gmail.com | Open to relocation", st["contact"]),
        Spacer(1, 5),
        p("July 17, 2026", st["letter"]),
        p("Hiring Team<br/>SpeedLine Solutions Inc.<br/>3899 Mt. Lehman Road<br/>Abbotsford, BC", st["letter"]),
        p("<b>Re: Development Support Specialist (Quality Assurance)</b>", st["letter"]),
        p("Dear Hiring Team,", st["letter"]),
        p("I am applying for the Development Support Specialist (Quality Assurance) position at SpeedLine. I bring more than five years of bilingual technical support experience, along with hands-on software development, SQL, API, testing, and automation work. The opportunity to connect Support and Development is especially compelling to me because that intersection - understanding user impact, isolating technical causes, and communicating actionable findings - has been central to my work.", st["letter"]),
        p("On the Videotron project at XCM Sourcing, I investigated production-facing connectivity, configuration, device, VPN/DNS, and network-access issues in a high-volume environment. I documented symptoms, diagnostic steps, and outcomes in ticketing workflows and escalated unresolved incidents with clear technical context. This experience strengthened the structured troubleshooting, professional writing, prioritization, and customer communication skills required to reproduce complex defects and support internal teams.", st["letter"]),
        p("Through OMA Digital and my software projects, I also work with SQL databases, REST APIs, TypeScript, Python, Git, automated tests, and manual workflow validation. I have built and tested checkout, authentication, inventory, API, and database-backed features, using tools such as Vitest and Playwright while troubleshooting across application and deployment boundaries. I would bring this practical development perspective to test planning, defect investigation, documentation, and cross-functional collaboration at SpeedLine.", st["letter"]),
        p("I am based in Campbell River and am open to relocating for the hybrid arrangement in Abbotsford. I am legally authorized to work in Canada under a valid employer-specific, LMIA-exempt Francophone Mobility work permit and am eligible to change employers through the applicable LMIA-exempt process. I would welcome the opportunity to discuss both my fit for the role and the employment authorization process transparently.", st["letter"]),
        p("Thank you for considering my application. I would be pleased to contribute my support experience, testing mindset, and bilingual communication skills to SpeedLine's Development team.", st["letter"]),
        p("Sincerely,<br/><br/><b>Papa Amadou Fall</b>", st["letter"]),
    ]
    doc.build(story)
    return path


print(resume())
print(cover_letter())
