export default function Section({ id, title, action, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {action}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
