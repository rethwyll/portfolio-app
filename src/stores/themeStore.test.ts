import { expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useThemeStore } from "./themeStore";

it("renders initial state", () => {
  const { result } = renderHook(() => useThemeStore());
  expect(result.current.allThemes.length).toBeTruthy();
  expect(result.current.theme).toBeTruthy();
});

it("initializes theme", async () => {
  const { result } = renderHook(() => useThemeStore());
  result.current.initializeTheme();
  await waitFor(() =>
    expect(document.documentElement.dataset["theme"]).toEqual(
      result.current.theme
    )
  );
});

it("updates theme", async () => {
  const { result } = renderHook(() => useThemeStore());
  result.current.updateTheme("foo");
  await waitFor(() => {
    expect(result.current.theme).toEqual("foo");
    expect(document.documentElement.dataset["theme"]).toEqual("foo");
  });
});
