import SkillsFilter from "./SkillsFilter";
import { expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";
import { skills } from "../../constants";
import { act } from "react";
const skillId = skills[0];

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <SkillsFilter />
    </TranslationProvider>
  );
  expect(queryByTestId("skills-filter")).toBeTruthy();
});

it("activates skill", async () => {
  const { getByTestId, queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <SkillsFilter />
    </TranslationProvider>
  );
  await waitFor(() => expect(queryByTestId(skillId)).toBeTruthy());
  await waitFor(() =>
    expect(queryByTestId(`${skillId}-outlined`)).toBeTruthy()
  );
  const skillInactive = getByTestId(`${skillId}-outlined`);
  await act(() => userEvent.click(skillInactive));
  await waitFor(() =>
    expect(queryByTestId(`${skillId}-contained`)).toBeTruthy()
  );
});

it("deactivates skill", async () => {
  const { getByTestId, queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <SkillsFilter />
    </TranslationProvider>
  );
  await waitFor(() => expect(queryByTestId(skillId)).toBeTruthy());
  await waitFor(() =>
    expect(queryByTestId(`${skillId}-outlined`)).toBeTruthy()
  );
  const skillInactive = getByTestId(`${skillId}-outlined`);
  await act(() => userEvent.click(skillInactive));
  await waitFor(() =>
    expect(queryByTestId(`${skillId}-contained`)).toBeTruthy()
  );
  const skillActive = getByTestId(`${skillId}-contained`);
  await act(() => userEvent.click(skillActive));
  await waitFor(() =>
    expect(queryByTestId(`${skillId}-outlined`)).toBeTruthy()
  );
});
