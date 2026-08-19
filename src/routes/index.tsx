import { createFileRoute, Link } from "@tanstack/react-router";
import aurora from "@/assets/aurora.jpg";
import books from "@/assets/books.jpg";
import { expertise } from "@/data/expertise";
import { projects } from "@/data/portfolio";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wordwise — Book Writing Agency for Serious Authors" },
      {
        name: "description",
        content:
          "Wordwise is a book writing agency covering ghostwriting, editing, cover design, formatting, publishing, audiobooks, marketing and author branding.",
      },
      { property: "og:title", content: "Wordwise — Book Writing Agency for Serious Authors" },
      {
        property: "og:description",
        content: "Ten disciplines, one studio: from first outline to bestseller launch.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={aurora}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div aria-hidden className="veil absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Work showcase 2026
          </p>
          <p className="mx-auto mt-8 max-w-md text-sm text-foreground/90">
            Every great book starts with a single thought. The challenge is shaping it into
            something people finish.
          </p>
          <h1 className="mt-10 font-display text-[clamp(3rem,14vw,10rem)] font-extrabold leading-[0.85]">
            Portfolio
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg text-muted-foreground">
            Wordwise is a book writing agency. Ten disciplines under one roof — from the first
            interview to the launch-week ad spend.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/expertise"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See our expertise
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            From idea to <span className="text-aurora">iconic</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            We take on a small number of books each year, and we take them the whole way. A
            senior editor owns your manuscript, a designer owns your shelf presence, and a
            launch strategist owns the first ninety days.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6">
            {[
              ["340+", "Books shipped"],
              ["11", "Bestseller lists"],
              ["4.9★", "Author rating"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-extrabold text-aurora">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <img
          src={books}
          alt="Stack of hardcover books published by Wordwise"
          width={1200}
          height={1408}
          loading="lazy"
          className="glow rounded-4xl"
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Ten kinds of expertise</h2>
          <Link to="/expertise" className="text-sm text-muted-foreground hover:text-foreground">
            All services →
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.slice(0, 6).map((item, i) => (
            <li key={item.slug} className="surface-card rounded-3xl p-6">
              <span className="font-display text-sm text-aurora">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Recent work</h2>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {projects.slice(0, 4).map((p) => (
            <li
              key={p.title}
              className="flex flex-wrap items-baseline justify-between gap-2 py-5"
            >
              <span className="font-display text-lg font-bold">{p.title}</span>
              <span className="text-sm text-muted-foreground">
                {p.genre} · {p.result}
              </span>
            </li>
          ))}
        </ul>
        <Link
          to="/portfolio"
          className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          View full portfolio →
        </Link>
      </section>

      <CtaBand />
    </>
  );
}
