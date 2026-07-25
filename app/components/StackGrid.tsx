import { skillGroups } from "../data/skills";

export default function StackGrid() {
  return (
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
  );
}
