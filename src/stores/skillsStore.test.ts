import { expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useSkillsStore } from "./skillsStore";
import { act } from "react";

it("renders initial state", () => {
  const { result } = renderHook(() => useSkillsStore());
  expect(result.current.skills.length).toBeFalsy();
  expect(result.current.yearsOfExperience).toEqual(expect.any(Number));
});

it("updates skills", async () => {
  const { result } = renderHook(() => useSkillsStore());
  await act(() => result.current.updateSkills(["foo"]));
  await waitFor(() => {
    expect(result.current.skills).toEqual(["foo"]);
  });
});
