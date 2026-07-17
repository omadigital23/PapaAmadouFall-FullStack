import Image from "next/image";

const basePath = "/PapaAmadouFall-FullStack";

const roleFit = [
  {
    number: "01",
    title: "Ship end to end",
    text: "Translate a requirement into UI, API, data model, deployment and maintenance decisions.",
    evidence: "NUBIA AURA + OMA Digital",
  },
  {
    number: "02",
    title: "Protect business logic",
    text: "Keep validation, authorization and data integrity at trusted server and database boundaries.",
    evidence: "REST APIs + SQL + RLS",
  },
  {
    number: "03",
    title: "Build polished interfaces",
    text: "Create responsive, bilingual and accessible flows with clear feedback and recovery states.",
    evidence: "React + TypeScript + Next.js",
  },
  {
    number: "04",
    title: "Own production issues",
    text: "Diagnose defects methodically, document findings and communicate clearly across technical and customer contexts.",
    evidence: "5+ years in technical support",
  },
] as const;

const skillGroups = [
  ["Frontend", "React, TypeScript, Next.js, JavaScript, responsive UI, forms, component architecture, accessibility and internationalization"],
  ["Backend", "Python, Django, REST APIs, Next.js API routes, Node.js, authentication, authorization, validation and integrations"],
  ["Data", "MySQL, PostgreSQL, Supabase, SQL, schema design, migrations, Row Level Security and data integrity"],
  ["Cloud & delivery", "AWS, Google Cloud, Linux, Nginx, DNS, HTTPS, Vercel, GitHub Pages, GitHub Actions and CI/CD fundamentals"],
  ["Quality & automation", "Strict TypeScript, ESLint, Vitest, Jest, Playwright, debugging, n8n, webhooks and AI integrations"],
] as const;

const supportingProjects = [
  {
    name: "OMA Compta",
    label: "Private client product",
    role: "Full Stack Developer",
    text: "Authenticated SaaS workflows for structured accounting operations. Claims are intentionally limited because the repository is private.",
    stack: "Authentication | Dashboards | Data workflows",
    live: "https://oma-compta.vercel.app/login",
  },
  {
    name: "Cloud Cert",
    label: "Learning product",
    role: "Full Stack Developer",
    text: "A bilingual cloud-learning experience with progress tracking, quizzes and responsive dashboard patterns.",
    stack: "React | Next.js | TypeScript",
    live: "https://cloud-cert.vercel.app/",
  },
  {
    name: "n8n Cloud Deployment",
    label: "Infrastructure case",
    role: "Automation Builder / Cloud Operator",
    text: "Cloud VM provisioning, Linux configuration, DNS, Nginx, HTTPS, APIs, webhooks and deployment troubleshooting.",
    stack: "n8n | AWS | Google Cloud | Linux",
  },
  {
    name: "Python / Django",
    label: "Academic + project-based",
    role: "Backend Developer",
    text: "Models, views, forms, authentication, migrations, REST endpoints and database-backed business rules. Some client work is private.",
    stack: "Python | Django | SQL | REST APIs",
  },
] as const;

const principles = [
  ["Ownership", "Stay accountable from requirement and architecture through release and maintenance."],
  ["Growth", "Learn through production work, review, documentation and deliberate practice."],
  ["Resilience", "Investigate defects calmly, communicate early and keep moving toward root cause."],
  ["Quality", "Prefer clear, typed, testable code and decisions that teammates can review."],
  ["Simplicity", "Reduce accidental complexity and make the next change easier, not harder."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Section({
  id,
  number,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="kicker">{number}</p>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Papa Amadou Fall",
    jobTitle: "Full Stack Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campbell River",
      addressRegion: "British Columbia",
      addressCountry: "CA",
    },
    url: "https://omadigital23.github.io/PapaAmadouFall-FullStack/",
    email: "mailto:fallpape199@gmail.com",
    sameAs: [
      "https://github.com/omadigital23",
      "https://www.linkedin.com/in/papa-amadou-fall-bb95a01a1",
      "https://www.omadigital.net/en",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Python",
      "Django",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Google Cloud",
      "n8n",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Papa Amadou Fall, home">
            PAF<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#fit">Role fit</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a
              className="nav-resume"
              href={`${basePath}/assets/Papa_Amadou_Fall_Full_Stack_Resume.pdf`}
              download
            >
              Resume <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-name">Papa Amadou Fall</p>
            <p className="eyebrow">Full Stack Engineer · Campbell River, BC</p>
            <h1 id="hero-title">
              Reliable SaaS features, from interface to data and cloud.
            </h1>
            <p className="hero-lede">
              I build React and TypeScript product experiences backed by REST APIs,
              Python/Django services and relational data. I bring end-to-end
              ownership, production troubleshooting and bilingual communication to
              teams that care about useful, maintainable software.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">
                Review my work <Arrow />
              </a>
              <a className="button secondary" href="https://github.com/omadigital23">
                GitHub <Arrow />
              </a>
              <a className="text-link" href="mailto:fallpape199@gmail.com">
                Start a conversation
              </a>
            </div>
          </div>

          <aside className="role-card" aria-label="Full Stack Engineer role alignment">
            <div className="role-card-status">
              <span className="status-dot" /> Open to Canadian SaaS teams
            </div>
            <p className="role-card-label">Best aligned with</p>
            <ul>
              <li>
                <span>Product</span>
                <b>End-to-end feature delivery</b>
              </li>
              <li>
                <span>Backend</span>
                <b>Business logic and REST APIs</b>
              </li>
              <li>
                <span>Frontend</span>
                <b>React, TypeScript and accessibility</b>
              </li>
              <li>
                <span>Operations</span>
                <b>Defect investigation and reliability</b>
              </li>
            </ul>
            <a href={`${basePath}/assets/Papa_Amadou_Fall_Full_Stack_Resume.pdf`} download>
              Download targeted resume <Arrow />
            </a>
          </aside>
        </section>

        <div className="proof-bar" aria-label="Professional profile highlights">
          <p>
            <b>UI → cloud</b>
            <span>Full product ownership</span>
          </p>
          <p>
            <b>2</b>
            <span>Public production case studies</span>
          </p>
          <p>
            <b>5+ years</b>
            <span>Structured technical support</span>
          </p>
          <p>
            <b>FR / EN</b>
            <span>Bilingual collaboration</span>
          </p>
        </div>

        <Section
          id="fit"
          number="01 / ROLE ALIGNMENT"
          title="What I bring to a SaaS product team."
          intro="The strongest match is not a list of tools. It is the ability to connect customer needs, software boundaries and reliable delivery."
        >
          <div className="fit-grid">
            {roleFit.map((item) => (
              <article className="fit-card" key={item.number}>
                <p className="fit-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.evidence}</span>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="stack"
          number="02 / TECHNICAL FIT"
          title="A practical stack for complete web products."
        >
          <div className="stack-grid">
            {skillGroups.map(([title, text]) => (
              <article className="stack-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <article className="learning-card">
              <p className="kicker">Currently learning</p>
              <h3>Kubernetes · Terraform · CircleCI</h3>
              <p>
                Expanding existing cloud and CI/CD fundamentals toward container
                orchestration, infrastructure as code and additional delivery tooling.
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="projects"
          number="03 / SELECTED WORK"
          title="Production work with visible technical evidence."
          intro="The first two projects link to public repositories and live products. Private work is clearly labelled and never presented with unverifiable claims."
        >
          <div className="featured-projects">
            <article className="feature-project">
              <div className="project-media nubia-media">
                <Image
                  src={`${basePath}/projects/nubia-aura.webp`}
                  alt="NUBIA AURA wax-shirt product photography used in the live commerce experience"
                  width={800}
                  height={1200}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  unoptimized
                />
                <span>Live commerce product</span>
              </div>
              <div className="feature-body">
                <p className="kicker">Principal case study · Full Stack Engineer</p>
                <h3>NUBIA AURA</h3>
                <p className="project-summary">
                  A bilingual e-commerce journey spanning cart, checkout, inventory,
                  payment, order history and transactional notifications.
                </p>
                <ul className="project-points">
                  <li>Responsive checkout and clear customer feedback</li>
                  <li>Trusted backend validation and stock reservations</li>
                  <li>Authentication, order data and payment integration</li>
                </ul>
                <ol className="system-flow" aria-label="NUBIA AURA system flow">
                  <li>React UI</li>
                  <li>API rules</li>
                  <li>Stock + data</li>
                  <li>Order events</li>
                </ol>
                <div className="project-links">
                  <a href="https://www.nubiaaura.com/en">
                    Live product <Arrow />
                  </a>
                  <a href="https://github.com/omadigital23/NUBIAAURA">
                    Repository <Arrow />
                  </a>
                  <a href="#system-case">Architecture ↓</a>
                </div>
              </div>
            </article>

            <article className="feature-project">
              <div className="project-media oma-media">
                <Image
                  src={`${basePath}/projects/oma-digital.webp`}
                  alt="OMA Digital bilingual platform identity from the production application"
                  width={1200}
                  height={630}
                  sizes="(max-width: 760px) 100vw, 50vw"
                  unoptimized
                />
                <span>Public repository + live platform</span>
              </div>
              <div className="feature-body">
                <p className="kicker">Production platform · Full Stack Developer</p>
                <h3>OMA Digital</h3>
                <p className="project-summary">
                  A bilingual product experience for service discovery, lead capture
                  and AI-assisted navigation, built for resilient public delivery.
                </p>
                <ul className="project-points">
                  <li>Reusable Next.js interfaces and server API routes</li>
                  <li>Validation, rate limiting and secure API boundaries</li>
                  <li>Vitest, Playwright, PWA and offline capabilities</li>
                </ul>
                <ol className="system-flow" aria-label="OMA Digital system flow">
                  <li>Next.js UI</li>
                  <li>API routes</li>
                  <li>Supabase + AI</li>
                  <li>Tests + deploy</li>
                </ol>
                <div className="project-links">
                  <a href="https://www.omadigital.net/en">
                    Live platform <Arrow />
                  </a>
                  <a href="https://github.com/omadigital23/OMADIGITAL">
                    Repository <Arrow />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="supporting-grid">
            {supportingProjects.map((project) => (
              <article className="supporting-project" key={project.name}>
                <p className="kicker">{project.label}</p>
                <h3>{project.name}</h3>
                <p className="supporting-role">{project.role}</p>
                <p>{project.text}</p>
                <span>{project.stack}</span>
                {"live" in project && (
                  <a href={project.live}>
                    View product <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="system-case"
          number="04 / SYSTEM THINKING"
          title="Checkout reliability is a cross-system problem."
          intro="The NUBIA AURA case shows how I reason across user experience, APIs, business rules and persistent data."
        >
          <div className="system-case">
            <div className="architecture-panel">
              <p className="kicker">Request to durable outcome</p>
              <ol className="architecture-flow">
                <li>
                  <span>01</span>
                  <div>
                    <h3>React checkout</h3>
                    <p>Collect intent, calculate clearly and expose useful recovery states.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>API validation</h3>
                    <p>Re-check identity, inputs, pricing assumptions and business rules.</p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>Inventory + database</h3>
                    <p>Coordinate stock reservations and order state at trusted boundaries.</p>
                  </div>
                </li>
                <li>
                  <span>04</span>
                  <div>
                    <h3>Payment + events</h3>
                    <p>Connect the payment result to durable orders and notifications.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="decision-panel">
              <p className="kicker">Engineering decisions</p>
              <div>
                <h3>Do not trust the browser</h3>
                <p>Use the interface for responsiveness, but enforce critical rules on the server.</p>
              </div>
              <div>
                <h3>Model failure explicitly</h3>
                <p>Design for unavailable stock, invalid sessions and interrupted payment flows.</p>
              </div>
              <div>
                <h3>Keep state understandable</h3>
                <p>Make transitions observable enough to diagnose and maintain after release.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="approach"
          number="05 / HOW I WORK"
          title="Accountable, resilient and deliberately simple."
        >
          <div className="principles-grid">
            {principles.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          number="06 / EXPERIENCE"
          title="Technical depth reinforced by real-world responsibility."
        >
          <div className="experience-layout">
            <div className="timeline">
              <article>
                <p className="date">2015 — Present</p>
                <div>
                  <h3>OMA Digital</h3>
                  <p className="role">Full Stack Developer / Automation Builder · Part-time freelance</p>
                </div>
                <p>
                  Product architecture, React/Next.js interfaces, APIs, schemas,
                  authentication, integrations, cloud deployment, n8n,
                  testing, debugging and documentation.
                </p>
              </article>
              <article>
                <p className="date">Dec 2020 — Jun 2026</p>
                <div>
                  <h3>XCM Sourcing — Videotron</h3>
                  <p className="role">Bilingual Technical Support Representative</p>
                </div>
                <p>
                  Structured diagnosis, production troubleshooting, escalation,
                  technical documentation and customer communication in a high-volume environment.
                </p>
              </article>
              <article>
                <p className="date">2014 — 2016</p>
                <div>
                  <h3>Nettransact</h3>
                  <p className="role">Web Developer · Full time · Senegal</p>
                </div>
                <p>
                  Web development focused on the scalability of the company website
                  in a commercial e-commerce environment.
                </p>
              </article>
              <article>
                <p className="date">Jun 2026 — Present</p>
                <div>
                  <h3>Tim Hortons</h3>
                  <p className="role">Customer Service Team Member</p>
                </div>
                <p>
                  Canadian workplace experience demonstrating reliability, teamwork,
                  procedure compliance and customer communication.
                </p>
              </article>
            </div>

            <aside className="background-card">
              <div>
                <p className="kicker">Education</p>
                <h3>Bachelor&apos;s Degree in Management Information Systems</h3>
                <p>University of Thies, Senegal</p>
              </div>
              <div>
                <p className="kicker">Languages</p>
                <p><b>French:</b> TCF Canada C1 / B2 speaking</p>
                <p><b>English:</b> Professional working proficiency</p>
                <p><b>Wolof:</b> Native</p>
              </div>
              <div>
                <p className="kicker">Canada</p>
                <p>
                  Based in Campbell River, BC. Valid employer-specific, LMIA-exempt
                  work permit under the Francophone Mobility Program; employer change
                  requires the applicable process and a new permit approval.
                </p>
              </div>
            </aside>
          </div>
        </Section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div>
              <p className="kicker">07 / LET&apos;S TALK</p>
              <h2 id="contact-title">Need an engineer who can connect the whole product?</h2>
            </div>
            <div className="contact-copy">
              <p>
                I am interested in Full Stack Engineer and SaaS product roles where
                React/TypeScript, Python/Django, APIs, data and reliable delivery matter.
              </p>
              <a className="email" href="mailto:fallpape199@gmail.com">
                fallpape199@gmail.com <Arrow />
              </a>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/papa-amadou-fall-bb95a01a1">
                  LinkedIn <Arrow />
                </a>
                <a href="https://github.com/omadigital23">
                  GitHub <Arrow />
                </a>
                <a href={`${basePath}/assets/Papa_Amadou_Fall_Full_Stack_Resume.pdf`} download>
                  Resume <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Papa Amadou Fall</span>
        <span>Campbell River, British Columbia, Canada</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
