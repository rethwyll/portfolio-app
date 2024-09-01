import EducationListItem from "./EducationListItem";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";
import education from "../../data/education.json";
const educationItem = { ...education[0], id: "foo" };

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <EducationListItem educationItem={educationItem} />
    </TranslationProvider>
  );
  expect(queryByTestId(`education-list-item-${educationItem.id}`)).toBeTruthy();
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-minor`)
  ).toBeTruthy();
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-degree-honor`)
  ).toBeTruthy();
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-college-url`)
  ).toBeTruthy();
});

it("renders when minor is falsy", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <EducationListItem educationItem={{ ...educationItem, minor: null }} />
    </TranslationProvider>
  );
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-minor`)
  ).toBeFalsy();
});

it("renders when degree-honor is falsy", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <EducationListItem
        educationItem={{ ...educationItem, "degree-honor": null }}
      />
    </TranslationProvider>
  );
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-degree-honor`)
  ).toBeFalsy();
});

it("renders when college-url is falsy", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <EducationListItem
        educationItem={{ ...educationItem, "college-url": null }}
      />
    </TranslationProvider>
  );
  expect(
    queryByTestId(`education-list-item-${educationItem.id}-college-url`)
  ).toBeFalsy();
});
