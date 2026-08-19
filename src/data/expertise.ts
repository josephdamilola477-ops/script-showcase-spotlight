export type Expertise = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const expertise: Expertise[] = [
  {
    slug: "ghostwriting",
    title: "Ghostwriting",
    summary: "Full-length manuscripts written in your voice, from blank page to final draft.",
    detail:
      "We interview, outline, and draft chapter by chapter until the book sounds unmistakably like you — never like a template.",
    deliverables: ["Voice study", "Chapter outline", "Weekly drafts", "Author revisions"],
  },
  {
    slug: "developmental-editing",
    title: "Developmental Editing",
    summary: "Structural surgery for pacing, argument, character and narrative arc.",
    detail:
      "A senior editor reads the whole manuscript, maps what works, and rebuilds what doesn't at the level of structure.",
    deliverables: ["Editorial letter", "Chapter-level notes", "Revision roadmap"],
  },
  {
    slug: "line-copy-editing",
    title: "Line & Copy Editing",
    summary: "Sentence-level craft, consistency, and a clean, publisher-ready text.",
    detail:
      "Rhythm, clarity, and grammar tightened line by line, with a house style sheet so the whole book stays consistent.",
    deliverables: ["Tracked-changes edit", "Style sheet", "Fact & consistency pass"],
  },
  {
    slug: "proofreading",
    title: "Proofreading",
    summary: "The final read before print — typos, widows, orphans, running heads.",
    detail:
      "We proof the typeset pages, not just the file, so nothing embarrassing survives to the first printing.",
    deliverables: ["Proof mark-up", "Print-ready sign-off"],
  },
  {
    slug: "book-cover-design",
    title: "Book Cover Design",
    summary: "Covers built to compete at thumbnail size and on the shelf.",
    detail:
      "Genre research, three distinct concepts, then full wrap artwork with spine and back copy layout.",
    deliverables: ["3 cover concepts", "Full wrap + spine", "3D mockups"],
  },
  {
    slug: "interior-formatting",
    title: "Interior Formatting",
    summary: "Typesetting for paperback, hardcover, ebook and large print.",
    detail:
      "Typography, margins and chapter openers set to spec for every retailer and trim size you plan to sell in.",
    deliverables: ["Print PDF", "EPUB & MOBI", "Large-print edition"],
  },
  {
    slug: "publishing-distribution",
    title: "Publishing & Distribution",
    summary: "Imprint setup, ISBNs, metadata and global retail placement.",
    detail:
      "We handle the unglamorous machinery: accounts, categories, keywords, pricing and worldwide distribution.",
    deliverables: ["ISBN & copyright", "Retailer setup", "Metadata & keywords"],
  },
  {
    slug: "audiobook-production",
    title: "Audiobook Production",
    summary: "Narrator casting, studio direction, mastering and ACX delivery.",
    detail:
      "Auditions from vetted narrators, directed sessions, and mastering that passes retail audio spec first time.",
    deliverables: ["Narrator auditions", "Directed recording", "Mastered files"],
  },
  {
    slug: "book-marketing",
    title: "Book Marketing",
    summary: "Launch strategy, review campaigns, ads and author platform.",
    detail:
      "A ninety-day launch plan with pre-orders, ARC readers, paid ads and press outreach — measured against real sales.",
    deliverables: ["Launch plan", "ARC campaign", "Ad management", "Press kit"],
  },
  {
    slug: "author-branding",
    title: "Author Branding",
    summary: "Author websites, bios, and the identity that outlives one title.",
    detail:
      "We build the brand around the writer, so book two starts with an audience instead of a standing start.",
    deliverables: ["Author site", "Brand system", "Bio & headshot direction"],
  },
];
