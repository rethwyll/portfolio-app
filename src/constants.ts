import { snakeCase } from "lodash";

export const themeKeys = ["bluecalm"];
export const skills = [
  "typescript",
  "javascript",
  "react",
  "html",
  "css",
  "project-management",
  "uxui-design",
  "devops",
  "teaching",
  "ruby",
  "rails"
];
export const skillTypes = skills.reduce(
  (acc, curr) => ({ ...acc, [snakeCase(curr)]: curr }),
  {} as { [key: string]: string }
);
