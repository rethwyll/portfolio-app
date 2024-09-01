import ExperienceList from "./ExperienceList";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";

it("renders", async () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <TranslationProvider i18n={i18next}>
        <ExperienceList />
      </TranslationProvider>
    </MemoryRouter>
  );
  expect(queryByTestId("experience-list")).toBeTruthy();
});

it("renders when there are no experiences to display", async () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <TranslationProvider i18n={i18next}>
        <ExperienceList num={0} />
      </TranslationProvider>
    </MemoryRouter>
  );
  expect(queryByTestId("no-matches")).toBeTruthy();
});

it("renders all experiences link", async () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <TranslationProvider i18n={i18next}>
        <ExperienceList num={1} />
      </TranslationProvider>
    </MemoryRouter>
  );
  expect(queryByTestId("all-experiences")).toBeTruthy();
});
