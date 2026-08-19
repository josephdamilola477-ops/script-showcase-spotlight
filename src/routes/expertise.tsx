import { createFileRoute } from "@tanstack/react-router";
import { expertise } from "@/data/expertise";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Wordwise Book Writing Agency" },
      {
        name: "description",
        content:
          "Ten book publishing disciplines: ghostwriting, developmental editing, line editing, proofreading, cover design, formatting, publishing, audiobooks, marketing and author branding.",
      },
      { property: "og:title", content: "Expertise — Wordwise Book Writing Agency" },
      {
        property: "og:description",
        content: "Ten book publishing disciplines under one studio roof.",
      },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">What we do</p>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.9]">
          Ten disciplines,
          <br />
          <span className="text-aurora">one studio</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Hire the whole pipeline or just the piece you're missing. Every engagement is run by a
          named lead who stays with the book until it's on sale.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <ul className="grid gap-5 md:grid-cols-2">
          {expertise.map((item, i) => (
            <li key={item.slug} className="surface-card rounded-3xl p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm text-aurora">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>
              <p className="mt-3 text-sm text-foreground/85">{item.summary}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {d}
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
