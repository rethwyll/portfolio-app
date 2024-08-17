import { snakeCase } from "lodash";

export const themeKeys = ["recipe", "two"];
export const skills = [
  "typescript",
  "javascript",
  "react",
  "html",
  "css",
  "project-management",
  "ux-design",
  "devops"
];
export const skillTypes = skills.reduce(
  (acc, curr) => ({ ...acc, [snakeCase(curr)]: curr }),
  {} as { [key: string]: string }
);
