import { email, linkedinUrl, githubUrl, resumePath } from "../data/config";
import Arrow from "./Arrow";

export default function Contact() {
  return (
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
          <a className="email" href={`mailto:${email}`}>
            {email} <Arrow />
          </a>
          <div className="contact-links">
            <a href={linkedinUrl}>
              LinkedIn <Arrow />
            </a>
            <a href={githubUrl}>
              GitHub <Arrow />
            </a>
            <a href={resumePath} download>
              Resume <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
