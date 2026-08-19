import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/expertise", label: "Expertise" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          Wordwise
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="transition-colors hover:text-foreground"
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
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-foreground">Wordwise</p>
        <p>Manuscripts, covers, launches — since 2016.</p>
      </div>
    </footer>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Let's write your book</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Tell us where the manuscript stands. You'll get an honest read and a plan within
            two working days.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Book a free consult
        </Link>
      </div>
    </section>
  );
}
