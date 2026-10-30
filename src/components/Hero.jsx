import Button from "./Button.jsx";
import { links, profile } from "../data/content.js";

// A small API-style card: the one memorable element, built only from resume facts.
function ProfileCard() {
  const row = (k, v) => (
    <div className="flex gap-2"><span className="text-accent">"{k}":</span><span>{v}</span></div>
  );
  return (
    <aside aria-label="Profile summary" className="rise rounded-lg border border-line bg-surface font-mono text-sm shadow-sm" style={{ "--i": 4 }}>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-xs text-muted">
        <span>GET /profile</span><span className="rounded bg-accent-soft px-2 py-0.5 text-accent">200 OK</span>
      </div>
      <div className="space-y-1.5 p-4 leading-relaxed">
        {row("name", `"${profile.name}"`)}
        {row("role", `"${profile.title}"`)}
        {row("experience", '"2+ years"')}
        {row("location", '"Chennai, IN"')}
        {row("backend", '["Django", "Flask", "FastAPI"]')}
        {row("database", '["PostgreSQL", "SQL Server"]')}
        {row("also", '["C#", "ASP.NET Core"]')}
      </div>
    </aside>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="rise text-sm font-medium text-accent" style={{ "--i": 0 }}>{profile.title}</p>
        <h1 id="hero-title" className="rise mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl" style={{ "--i": 1 }}>
          {profile.name}
        </h1>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ "--i": 2 }}>{profile.tagline}</p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 3 }}>
          <Button href="#projects" variant="primary">View Projects</Button>
          {links.github && <Button href={links.github}>GitHub</Button>}
          <Button href="#contact">Contact Me</Button>
        </div>
      </div>
      <ProfileCard />
    </section>
  );
}
