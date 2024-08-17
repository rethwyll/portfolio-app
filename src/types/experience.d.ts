export type ExperienceItem = {
  name: string;
  location: string;
  mapsLink: string | null;
  url: string | null;
  title: string;
  start: string;
  end: string | null;
  summary: string;
  contributions: Array<string>;
  skills: Array<string>;
};
