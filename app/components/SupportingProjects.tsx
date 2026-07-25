import { supportingProjects } from "../data/projects";
import Arrow from "./Arrow";

export default function SupportingProjects() {
  return (
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
  );
}
