import Image from "next/image";
import { basePath, githubUrl } from "../data/config";
import Arrow from "./Arrow";

export default function FeaturedProjects() {
  return (
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
            <a href={`${githubUrl.replace("omadigital23", "omadigital23")}/NUBIAAURA`}>
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
  );
}
