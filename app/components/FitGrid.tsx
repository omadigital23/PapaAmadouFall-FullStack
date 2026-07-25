import { roleFit } from "../data/projects";

export default function FitGrid() {
  return (
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
  );
}
