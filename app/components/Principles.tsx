import { principles } from "../data/skills";

export default function Principles() {
  return (
    <div className="principles-grid">
      {principles.map(([title, text], index) => (
        <article key={title}>
          <span>0{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
