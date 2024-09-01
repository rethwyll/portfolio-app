import ThemeSwitcher from "./ThemeSwitcher";
import { expect, it } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";
import { act } from "react";

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ThemeSwitcher themes={["foo", "bar", "baz"]} />
    </TranslationProvider>
  );
  expect(queryByTestId("theme-switcher")).toBeTruthy();
});

it("renders when themes is too short", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ThemeSwitcher themes={["foo"]} />
    </TranslationProvider>
  );
  expect(queryByTestId("theme-switcher")).toBeFalsy();
});

it("updates theme", async () => {
  const { getByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <ThemeSwitcher themes={["foo", "bar", "baz"]} />
    </TranslationProvider>
  );
  const rangeId = "theme-switcher-range";
  const range = getByTestId(rangeId);
  await act(() => fireEvent.change(range, { target: { value: "2" } }));
  await waitFor(() =>
    expect(getByTestId(rangeId).getAttribute("value")).toEqual("2")
  );
});
