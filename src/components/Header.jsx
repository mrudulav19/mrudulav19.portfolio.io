const nav = ["About", "Skills", "Experience", "Projects", "Education", "Credentials", "Contact"];

export default function Header({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-3">
        <a href="#top" className="font-display text-lg font-bold">{name}</a>
        <nav aria-label="Main" className="no-scrollbar -mr-6 ml-auto overflow-x-auto pr-6">
          <ul className="flex gap-5 whitespace-nowrap text-sm text-muted">
            {nav.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} className="py-2 transition-colors hover:text-ink">{n}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
