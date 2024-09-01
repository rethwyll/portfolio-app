import { expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLocationStore } from "./locationStore";

it("renders initial state", () => {
  const { result } = renderHook(() => useLocationStore());
  expect(result.current.timezone).toEqual(expect.any(String));
  expect(result.current.timezoneUtc).toEqual(expect.any(String));
  expect(result.current.currentLocation).toEqual(expect.any(String));
});
