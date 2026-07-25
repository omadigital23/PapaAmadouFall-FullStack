import Header from "./components/Header";
import Hero from "./components/Hero";
import ProofBar from "./components/ProofBar";
import Section from "./components/Section";
import FitGrid from "./components/FitGrid";
import StackGrid from "./components/StackGrid";
import FeaturedProjects from "./components/FeaturedProjects";
import SupportingProjects from "./components/SupportingProjects";
import SystemCase from "./components/SystemCase";
import Principles from "./components/Principles";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import { siteUrl, email, githubUrl, linkedinUrl, omadigitalUrl } from "./data/config";

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
    url: siteUrl,
    email: `mailto:${email}`,
    sameAs: [githubUrl, linkedinUrl, omadigitalUrl],
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

      <Header />

      <main id="main-content">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ProofBar />
        </ScrollReveal>

        <Section
          id="fit"
          number="01 / ROLE ALIGNMENT"
          title="What I bring to a SaaS product team."
          intro="The strongest match is not a list of tools. It is the ability to connect customer needs, software boundaries and reliable delivery."
        >
          <ScrollReveal>
            <FitGrid />
          </ScrollReveal>
        </Section>

        <Section
          id="stack"
          number="02 / TECHNICAL FIT"
          title="A practical stack for complete web products."
        >
          <ScrollReveal>
            <StackGrid />
          </ScrollReveal>
        </Section>

        <Section
          id="projects"
          number="03 / SELECTED WORK"
          title="Production work with visible technical evidence."
          intro="The first two projects link to public repositories and live products. Private work is clearly labelled and never presented with unverifiable claims."
        >
          <ScrollReveal>
            <FeaturedProjects />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SupportingProjects />
          </ScrollReveal>
        </Section>

        <Section
          id="system-case"
          number="04 / SYSTEM THINKING"
          title="Checkout reliability is a cross-system problem."
          intro="The NUBIA AURA case shows how I reason across user experience, APIs, business rules and persistent data."
        >
          <ScrollReveal>
            <SystemCase />
          </ScrollReveal>
        </Section>

        <Section
          id="approach"
          number="05 / HOW I WORK"
          title="Accountable, resilient and deliberately simple."
        >
          <ScrollReveal>
            <Principles />
          </ScrollReveal>
        </Section>

        <Section
          id="experience"
          number="06 / EXPERIENCE"
          title="Technical depth reinforced by real-world responsibility."
        >
          <ScrollReveal>
            <Experience />
          </ScrollReveal>
        </Section>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
