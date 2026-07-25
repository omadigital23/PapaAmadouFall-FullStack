import Image from "next/image";
import { basePath, resumePath, email, githubUrl } from "../data/config";
import Arrow from "./Arrow";

export default function Hero() {
  return (
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
          <a className="button secondary" href={githubUrl}>
            GitHub <Arrow />
          </a>
          <a className="text-link" href={`mailto:${email}`}>
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
        <a href={resumePath} download>
          Download targeted resume <Arrow />
        </a>
      </aside>
    </section>
  );
}
