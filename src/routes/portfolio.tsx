import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Inkforge Book Writing Agency" },
      {
        name: "description",
        content:
          "Selected books written, edited, designed and launched by Inkforge, with the results each author saw.",
      },
      { property: "og:title", content: "Portfolio — Inkforge Book Writing Agency" },
      {
        property: "og:description",
        content: "Selected books we wrote, edited, designed and launched.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Selected work</p>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.9]">
          Books we <span className="text-aurora">shipped</span>
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="surface-card rounded-3xl p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-2xl font-bold">{p.title}</h2>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.author} · {p.genre}
              </p>
              <p className="mt-4 font-display text-lg text-aurora">{p.result}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
