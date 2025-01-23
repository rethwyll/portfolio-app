import ExperienceListItem from "./ExperienceListItem";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";
import experience from "../../data/experience.json";
import { DateTime, Settings } from "luxon";
const experienceItem = { ...experience[0], id: "foo", end: "2024-08-31" };

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ExperienceListItem experienceItem={experienceItem} />
    </TranslationProvider>
  );
  expect(
    queryByTestId(`experience-list-item-${experienceItem.id}`)
  ).toBeTruthy();
  expect(queryByTestId("url")).toBeTruthy();
  expect(queryByTestId("end")).toBeTruthy();
});

it("renders when url is falsy", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ExperienceListItem experienceItem={{ ...experienceItem, url: null }} />
    </TranslationProvider>
  );
  expect(queryByTestId("url")).toBeFalsy();
});

it("renders when end is falsy", async () => {
  const mockDate = DateTime.local(2024, 8, 31, 0, 0, 0);
  Settings.now = () => mockDate.toMillis();
  const { getByTestId, queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ExperienceListItem experienceItem={{ ...experienceItem, end: null }} />
    </TranslationProvider>
  );
  expect(queryByTestId("present")).toBeTruthy();
  expect(getByTestId("present").getAttribute("dateTime")).toEqual("2024-08-31");
});

it("renders when skill is not available in constants", async () => {
  const mockDate = DateTime.local(2024, 8, 31, 0, 0, 0);
  Settings.now = () => mockDate.toMillis();
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ExperienceListItem
        experienceItem={{
          ...experienceItem,
          end: null,
          skills: ["react", "foo"]
        }}
      />
    </TranslationProvider>
  );
  expect(queryByTestId("skill-item-react")).toBeTruthy();
  expect(queryByTestId("skill-item-foo")).toBeFalsy();
});
