const basePath = "/PapaAmadouFall-FullStack";

const skillGroups = [
  ["Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, responsive design, component architecture, state and form handling, accessibility, internationalization, performance"],
  ["Backend", "Python, Django, REST APIs, Next.js API routes, Node.js, PHP, authentication, authorization, business logic, integrations, server-side validation"],
  ["Data", "PostgreSQL, MySQL, Supabase, database modelling, SQL, migrations, Row Level Security, query optimization fundamentals"],
  ["Cloud & DevOps", "AWS, Google Cloud, Vercel, GitHub Pages, Git, GitHub, CI/CD fundamentals, Linux, virtual machines, Nginx, DNS, HTTPS, environment configuration"],
  ["Automation & AI", "n8n, webhooks, REST integrations, workflow automation, AI chatbot integration, RAG fundamentals, API-based model integrations"],
] as const;

const projects = [
  {
    name: "NUBIA AURA",
    label: "Principal case study",
    problem: "Create a dependable bilingual commerce journey from cart through order management.",
    role: "Full Stack Engineer",
    stack: "Next.js · React · TypeScript · Supabase · PostgreSQL",
    features: "Shopping cart, real-time calculations, multi-step checkout, authentication, stock reservations, payment integration, order history and transactional notifications.",
    challenge: "Keeping inventory, validation, checkout state and customer feedback aligned across frontend and backend boundaries.",
    repo: "https://github.com/omadigital23/NUBIAAURA",
    live: "https://www.nubiaaura.com/en",
    caseStudy: "#nubia-case-study",
  },
  {
    name: "OMA Digital Platform",
    label: "Production platform",
    problem: "Turn service discovery and lead capture into a fast, bilingual product experience.",
    role: "Full Stack Developer / Automation Builder",
    stack: "Next.js · React · TypeScript · Supabase · Vitest · Playwright",
    features: "Bilingual content, server API routes, lead capture, AI chat, SEO, PWA and offline support, validation and rate limiting.",
    challenge: "Balancing discoverability, interactive features, resilient delivery and secure public-facing integrations.",
    repo: "https://github.com/omadigital23/OMADIGITAL",
    live: "https://www.omadigital.net/en",
    caseStudy: "#oma-case-study",
  },
  {
    name: "OMA Compta",
    label: "Private client repository — technical overview available",
    problem: "Support structured accounting workflows through an authenticated SaaS interface.",
    role: "Full Stack Developer",
    stack: "Responsive web application · Authentication · Database workflows",
    features: "Secure sign-in, dashboard-oriented workflows and business data handling. Public claims are intentionally limited to the accessible product surface.",
    challenge: "Presenting sensitive business workflows clearly while preserving access controls.",
    live: "https://oma-compta.vercel.app/login",
    caseStudy: "#projects",
  },
  {
    name: "Cloud Cert",
    label: "Learning product",
    problem: "Make cloud and networking study material easier to navigate and practise in two languages.",
    role: "Full Stack Developer",
    stack: "React · Next.js · TypeScript",
    features: "Bilingual interface, dashboard experience, progress tracking, quizzes and cloud networking content.",
    challenge: "Organizing technical learning content into a responsive, low-friction progression.",
    live: "https://cloud-cert.vercel.app/",
    caseStudy: "#projects",
  },
  {
    name: "n8n Cloud Deployment",
    label: "Infrastructure case study",
    problem: "Run automation workflows securely on cloud infrastructure with a stable public endpoint.",
    role: "Automation Builder / Cloud Operator",
    stack: "n8n · AWS · Google Cloud · Linux · Nginx · DNS · HTTPS",
    features: "VM provisioning, environment configuration, reverse proxy, TLS, API and webhook connections, deployment troubleshooting and workflow maintenance.",
    challenge: "Connecting application, network, DNS and TLS layers without exposing private infrastructure details.",
    caseStudy: "#infrastructure",
  },
  {
    name: "Python/Django Backend Experience",
    label: "Academic and project-based · some repositories private",
    problem: "Build maintainable server-side workflows and database-backed application logic.",
    role: "Python/Django Developer",
    stack: "Python · Django · SQL · REST APIs",
    features: "Models, views, authentication, forms, REST endpoints, migrations, database operations and backend business rules.",
    challenge: "Translating business rules into validated, testable server-side behaviour.",
    caseStudy: "#django",
  },
] as const;

const approaches = [
  ["End-to-end ownership", "Follow a feature from requirement and data model through interface, deployment and maintenance."],
  ["Maintainable architecture", "Separate concerns, reuse components and keep technical decisions understandable for future changes."],
  ["API and data integrity", "Validate at system boundaries and design flows that keep client, server and database state aligned."],
  ["Security by default", "Apply authentication, authorization, least-privilege data access, input validation and careful secret handling."],
  ["Testing and quality", "Use linting, strict types, focused tests and browser checks to catch defects before release."],
  ["Cloud deployment", "Treat DNS, HTTPS, environment configuration, observability and rollback thinking as part of delivery."],
  ["Customer-centred engineering", "Use support experience to clarify failure states and design software people can recover from."],
  ["Continuous learning", "Strengthen fundamentals through real projects, documentation and deliberate technical practice."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Section({ id, number, title, intro, children }: { id: string; number: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="kicker">{number}</p>
        <div><h2 id={`${id}-title`}>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>
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
    address: { "@type": "PostalAddress", addressLocality: "Campbell River", addressRegion: "British Columbia", addressCountry: "CA" },
    url: "https://omadigital23.github.io/PapaAmadouFall-FullStack/",
    email: "mailto:fallpape199@gmail.com",
    sameAs: ["https://github.com/omadigital23", "https://www.linkedin.com/in/papa-amadou-fall-bb95a01a1", "https://www.omadigital.net/en"],
    knowsAbout: ["React", "TypeScript", "Next.js", "Python", "Django", "REST APIs", "Supabase", "PostgreSQL", "AWS", "Google Cloud", "n8n"],
  };

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Papa Amadou Fall, home">PAF<span>.</span></a>
        <div className="nav-links"><a href="#projects">Projects</a><a href="#stack">Stack</a><a href="#experience">Experience</a><a className="nav-cta" href="mailto:fallpape199@gmail.com">Contact <Arrow /></a></div>
      </nav>
    </header>

    <main id="main-content">
      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Full Stack Engineer · Campbell River, BC</p>
          <h1 id="hero-title">Building reliable web applications from frontend to cloud deployment.</h1>
          <p className="hero-lede">I build responsive React and Next.js interfaces, backend services, APIs, database-driven features, Python/Django applications and cloud-hosted automation systems. My work combines product thinking, technical troubleshooting, customer empathy and end-to-end ownership.</p>
          <div className="actions">
            <a className="button primary" href="#projects">View projects <Arrow /></a>
            <a className="button secondary" href="https://github.com/omadigital23">View GitHub <Arrow /></a>
            <a className="button secondary" href={`${basePath}/assets/Papa_Amadou_Fall_Full_Stack_Resume.pdf`} download>Download resume</a>
            <a className="text-link" href="mailto:fallpape199@gmail.com">Contact me</a>
          </div>
        </div>
        <aside className="availability" aria-label="Professional profile summary"><span className="status-dot" /> Open to Full Stack and SaaS engineering opportunities<small>React · TypeScript · Next.js · Python · Django</small></aside>
      </section>

      <div className="proof" aria-label="Engineering strengths"><p>End-to-end delivery</p><p>Product-minded engineering</p><p>Production troubleshooting</p><p>Bilingual communication</p></div>

      <Section id="positioning" number="01 / POSITIONING" title="A product engineer who can see the whole system.">
        <div className="positioning-grid"><p className="large-copy">Full Stack Engineer with hands-on experience building and deploying end-to-end web applications using React, TypeScript, Next.js, Python, Django, REST APIs, SQL, Supabase, AWS and Google Cloud.</p><p>I work across responsive interfaces, backend services, database-driven features, integrations and cloud-hosted automation. Freelance product work is reinforced by structured troubleshooting, technical communication and production issue resolution.</p></div>
      </Section>

      <Section id="stack" number="02 / TECHNICAL STACK" title="A practical stack for shipping complete web products.">
        <div className="stack-grid">{skillGroups.map(([title, text]) => <article className="stack-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section id="projects" number="03 / FEATURED PROJECTS" title="Work grounded in product and delivery constraints." intro="Public repositories show the technical approach. Some client implementations remain private, so those entries are labelled and described only at a verifiable level.">
        <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${index < 2 ? "featured" : ""}`} key={project.name}>
          <p className="kicker">{project.label}</p><h3>{project.name}</h3><p className="problem">{project.problem}</p>
          <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Stack</dt><dd>{project.stack}</dd></div><div><dt>Key features</dt><dd>{project.features}</dd></div><div><dt>Technical challenge</dt><dd>{project.challenge}</dd></div></dl>
          <div className="project-links">{"live" in project && <a href={project.live}>Live product <Arrow /></a>}{"repo" in project && <a href={project.repo}>Repository <Arrow /></a>}<a href={project.caseStudy}>Case study ↓</a></div>
        </article>)}</div>
      </Section>

      <Section id="nubia-case-study" number="04 / NUBIA AURA CASE STUDY" title="Making checkout dependable at every step.">
        <div className="case-layout"><div><p className="large-copy">An end-to-end e-commerce checkout and order-management feature spanning customer experience, backend rules and operational data.</p><p>I was responsible for requirements analysis, architecture, database design, frontend components, backend logic, API integrations, security validation, testing, deployment, troubleshooting and ongoing maintenance.</p></div><div className="case-grid">
          <article><h3>Frontend</h3><p>Responsive cart, real-time calculations, multi-step checkout, confirmation and order-history interfaces with bilingual content.</p></article>
          <article><h3>Backend & data</h3><p>API routes, Supabase/PostgreSQL operations, authentication, stock reservations and order-management logic.</p></article>
          <article><h3>Integrations</h3><p>Payment workflow and transactional notifications coordinated with validated application state.</p></article>
          <article><h3>Key decision</h3><p>Keep inventory and checkout rules at trusted backend boundaries while giving the interface immediate, clear feedback.</p></article>
        </div></div>
      </Section>

      <Section id="oma-case-study" number="05 / OMA DIGITAL CASE STUDY" title="A bilingual platform designed for discovery, trust and conversion.">
        <div className="case-layout"><div><p className="large-copy">OMA Digital brings service content, lead capture and assisted discovery into one production-facing platform.</p><p>The work combines reusable Next.js interfaces with API routes, Supabase-backed flows and integrations. Public repository evidence supports the technical overview; no traffic or business-impact metrics are claimed.</p><div className="inline-links"><a href="https://github.com/omadigital23/OMADIGITAL">Review repository <Arrow /></a><a href="https://www.omadigital.net/en">Visit platform <Arrow /></a></div></div><div className="detail-list">
          <p><b>Architecture</b><span>Next.js App Router, React, strict TypeScript and server-side API routes.</span></p>
          <p><b>Product surface</b><span>Bilingual content, lead capture, AI chat, SEO, PWA and offline support.</span></p>
          <p><b>Security & resilience</b><span>Validation, rate limiting and careful handling of public API boundaries.</span></p>
          <p><b>Quality & delivery</b><span>Vitest, Playwright and production deployment workflows.</span></p>
        </div></div>
      </Section>

      <Section id="django" number="06 / PYTHON & DJANGO" title="Backend experience built through academic, freelance and project-based work.">
        <div className="three-columns"><article><h3>Application structure</h3><p>Django models, views, forms and migrations organized around clear business responsibilities.</p></article><article><h3>Secure workflows</h3><p>Authentication, validated inputs, database operations and authorization-aware backend logic.</p></article><article><h3>API development</h3><p>REST endpoints and third-party integrations that connect server-side rules to product interfaces.</p></article></div>
        <p className="disclosure">Not every client repository is public. This section describes hands-on capabilities without presenting a private application as a public case study.</p>
      </Section>

      <Section id="infrastructure" number="07 / CLOUD & AUTOMATION" title="Running n8n workflows across AWS and Google Cloud.">
        <ol className="infra-flow"><li><span>01</span><h3>Provision</h3><p>Create and secure a cloud virtual machine, then configure the Linux runtime and environment.</p></li><li><span>02</span><h3>Expose</h3><p>Connect DNS, place Nginx in front of the service and enable HTTPS for a stable endpoint.</p></li><li><span>03</span><h3>Integrate</h3><p>Connect APIs and webhooks while keeping credentials in protected environment configuration.</p></li><li><span>04</span><h3>Operate</h3><p>Troubleshoot networking and deployment issues and maintain automation workflows over time.</p></li></ol>
      </Section>

      <Section id="approach" number="08 / ENGINEERING APPROACH" title="Clear decisions, maintainable systems, useful software.">
        <div className="approach-grid">{approaches.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section id="experience" number="09 / EXPERIENCE" title="Technical depth strengthened by real-world responsibility.">
        <div className="timeline"><article><p className="date">2015 — Present</p><div><h3>OMA Digital</h3><p className="role">Full Stack Developer / Automation Builder · Freelance / project-based</p></div><p>Freelance and project-based experience accumulated through client projects, independent products and production deployments. Work includes application architecture, React/Next.js interfaces, Python/Django services, API routes, schemas, authentication, integrations, cloud deployment, n8n workflows, testing, debugging and documentation.</p></article><article><p className="date">Dec 2020 — Jun 2026</p><div><h3>XCM Sourcing — Videotron Project</h3><p className="role">Bilingual Technical Support Representative</p></div><p>Structured diagnosis, remote production troubleshooting, escalation, technical documentation, customer communication and root-cause thinking in a high-volume environment.</p></article><article><p className="date">Jun 2026 — Present</p><div><h3>Tim Hortons</h3><p className="role">Customer Service Team Member</p></div><p>Recent Canadian workplace experience demonstrating reliability, teamwork, procedure compliance and customer communication.</p></article></div>
      </Section>

      <Section id="background" number="10 / BACKGROUND" title="Education, languages and work authorization.">
        <div className="about-grid"><article><h3>Education</h3><p><b>Bachelor’s Degree in Management Information Systems</b><span>University of Thiès, Senegal</span></p><p>Relevant studies included information systems, Python, databases, software engineering, web development, business management and organizational computing.</p></article><article><h3>Languages</h3><ul><li><b>French</b><span>TCF Canada — C1 listening, C1 reading, C1 writing, B2 speaking</span></li><li><b>English</b><span>Professional working proficiency</span></li><li><b>Wolof</b><span>Native</span></li></ul></article><article><h3>Work authorization</h3><p>Currently in Canada with a valid employer-specific, LMIA-exempt work permit under the Francophone Mobility Program. A change of employer requires the applicable employer-side process and approval of a new work permit before employment can begin.</p></article></div>
      </Section>

      <section id="contact" className="contact" aria-labelledby="contact-title"><div className="shell"><p className="kicker">11 / CONTACT</p><h2 id="contact-title">Looking for an engineer who can work across the whole product?</h2><p>I’m interested in Full Stack Engineer, Software Engineer, React/TypeScript, Python/Django and SaaS engineering opportunities in Canada.</p><div className="contact-links"><a className="email" href="mailto:fallpape199@gmail.com">fallpape199@gmail.com <Arrow /></a><a href="https://www.linkedin.com/in/papa-amadou-fall-bb95a01a1">LinkedIn <Arrow /></a><a href="https://github.com/omadigital23">GitHub <Arrow /></a></div></div></section>
    </main>

    <footer className="footer shell"><span>© {new Date().getFullYear()} Papa Amadou Fall</span><span>Campbell River, British Columbia, Canada</span><div><a href="#top">Back to top ↑</a><a href="https://www.omadigital.net/en">OMA Digital</a></div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </>;
}
