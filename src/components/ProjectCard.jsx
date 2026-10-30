import Button from "./Button.jsx";

export default function ProjectCard({ name, year, tech, description, points = [], github, demo }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl font-bold">{name}</h3>
        {year && <span className="font-mono text-sm text-muted">{year}</span>}
      </div>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      {points.length > 0 && (
        <ul className="mt-4 flex-1 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-line">
          {points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
      )}
      <ul className="mt-5 flex flex-wrap gap-2 pt-1" aria-label="Technologies">
        {tech.map((t) => (
          <li key={t} className="rounded bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">{t}</li>
        ))}
      </ul>
      {(github || demo) && (
        <div className="mt-5 flex gap-3">
          {github && <Button href={github}>GitHub</Button>}
          {demo && <Button href={demo}>Live demo</Button>}
        </div>
      )}
    </article>
  );
}
