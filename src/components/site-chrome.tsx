import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/expertise", label: "Expertise" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
          Inkforge<span className="text-aurora">.</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-2 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-foreground">Inkforge Literary Studio</p>
        <p>Manuscripts, covers, launches — since 2016.</p>
      </div>
    </footer>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="surface-card glow relative overflow-hidden rounded-4xl px-8 py-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-10 -top-24 h-48 opacity-40 blur-3xl"
          style={{ backgroundImage: "var(--gradient-aurora)" }}
        />
        <h2 className="relative text-4xl font-extrabold sm:text-5xl">
          Your book deserves a <span className="text-aurora">real team</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
          Tell us where the manuscript stands. We'll come back with an honest read and a plan.
        </p>
        <Link
          to="/contact"
          className="relative mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
