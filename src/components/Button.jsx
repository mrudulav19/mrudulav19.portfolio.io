const styles = {
  primary: "bg-ink text-white hover:bg-accent",
  secondary: "border border-line bg-surface text-ink hover:border-ink",
};

export default function Button({ href, variant = "secondary", children }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
