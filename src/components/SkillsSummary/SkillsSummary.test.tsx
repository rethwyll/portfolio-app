import SkillsSummary from "./SkillsSummary";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <SkillsSummary />
    </TranslationProvider>
  );
  expect(queryByTestId("skills-summary")).toBeTruthy();
});
