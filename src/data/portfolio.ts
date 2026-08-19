export type Project = {
  title: string;
  author: string;
  genre: string;
  year: string;
  result: string;
  services: string[];
};

export const projects: Project[] = [
  {
    title: "The Whispering of Dusk",
    author: "R. Adeyemi",
    genre: "Literary fiction",
    year: "2025",
    result: "42,000 copies in first year",
    services: ["Developmental editing", "Cover design", "Marketing"],
  },
  {
    title: "Quiet Capital",
    author: "M. Halloran",
    genre: "Business memoir",
    year: "2025",
    result: "WSJ bestseller list, week 2",
    services: ["Ghostwriting", "Publishing", "Audiobook"],
  },
  {
    title: "Echoes of Silent Dreams",
    author: "L. Varga",
    genre: "Speculative fiction",
    year: "2024",
    result: "Optioned for screen",
    services: ["Line editing", "Formatting", "Branding"],
  },
  {
    title: "Beyond the Horizon",
    author: "S. Okonkwo",
    genre: "Travel narrative",
    year: "2024",
    result: "Translated into 6 languages",
    services: ["Ghostwriting", "Cover design"],
  },
  {
    title: "The Last Light",
    author: "D. Ferreira",
    genre: "Thriller",
    year: "2023",
    result: "Series deal, three books",
    services: ["Developmental editing", "Marketing"],
  },
  {
    title: "Secrets of the Forgotten Realm",
    author: "A. Nakamura",
    genre: "Fantasy",
    year: "2023",
    result: "1,900 reviews at 4.7★",
    services: ["Formatting", "Audiobook", "Launch"],
  },
];
