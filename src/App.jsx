import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Button from "./components/Button.jsx";
import { certifications, education, experience, links, profile, projects, publication, skills } from "./data/content.js";

export default function App() {
  const contact = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["Location", profile.location],
  ];
  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="divide-y divide-line border-y border-line">
            {skills.map((s) => (
              <div key={s.group} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="font-medium">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded border border-line bg-surface px-2.5 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-ink">{i}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-12">
            {experience.map((e) => (
              <li key={e.org} className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-8">
                <p className="font-mono text-sm text-muted">{e.period}</p>
                <div>
                  <h3 className="font-display text-xl font-bold">{e.role}</h3>
                  <p className="text-accent">{e.org}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-line">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects" action={links.github && <Button href={links.github}>View GitHub</Button>}>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="grid gap-6 md:grid-cols-2">
            {education.map((e) => (
              <li key={e.degree} className="rounded-lg border border-line bg-surface p-6">
                <h3 className="font-display text-xl font-bold">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.school}</p>
                <p className="mt-4 font-mono text-sm text-muted">{e.period} · {e.score}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="credentials" title="Publication & Certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-medium">Publication</h3>
              <p className="mt-3 text-muted">“{publication.title}”, {publication.venue}</p>
            </div>
            <div>
              <h3 className="font-medium">Certifications</h3>
              <ul className="mt-3 space-y-2 text-muted">
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl text-lg text-muted">Open to software developer opportunities. The quickest way to reach me is email.</p>
          <dl className="mt-8 space-y-3">
            {contact.map(([k, v, href]) => (
              <div key={k} className="flex gap-6">
                <dt className="w-20 text-muted">{k}</dt>
                <dd>{href ? <a href={href} className="underline decoration-line underline-offset-4 hover:decoration-accent">{v}</a> : v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="primary">Email me</Button>
            {links.linkedin && <Button href={links.linkedin}>LinkedIn</Button>}
            {links.github && <Button href={links.github}>GitHub</Button>}
          </div>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© 2026 {profile.name}</footer>
    </>
  );
}
