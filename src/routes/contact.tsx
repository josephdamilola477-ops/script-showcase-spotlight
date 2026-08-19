import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { expertise } from "@/data/expertise";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Inkforge Book Writing Agency" },
      {
        name: "description",
        content:
          "Tell Inkforge where your manuscript stands and get an honest editorial read plus a plan within two business days.",
      },
      { property: "og:title", content: "Contact — Inkforge Book Writing Agency" },
      {
        property: "og:description",
        content: "Start a book project with Inkforge.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[0.9]">
          Start a <span className="text-aurora">book</span>
        </h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          Send us the premise, the word count, and where you're stuck. A senior editor replies
          within two business days with a read and a plan.
        </p>
        <div className="mt-10 space-y-2 text-sm text-muted-foreground">
          <p>hello@inkforge.studio</p>
          <p>Mon–Fri, 9am–6pm GMT</p>
        </div>
      </div>

      <form
        className="surface-card rounded-4xl p-7"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        {sent ? (
          <p className="py-16 text-center font-display text-xl">
            Thanks — we'll be in touch shortly.
          </p>
        ) : (
          <div className="space-y-5">
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <div>
              <label
                htmlFor="service"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                className="mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                {expertise.map((e) => (
                  <option key={e.slug} value={e.slug}>
                    {e.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                About the book
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send enquiry
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
