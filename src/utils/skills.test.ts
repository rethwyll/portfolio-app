import { describe, it, expect } from "vitest";
import { z } from "zod";
import { getYearsOfExperience } from "./skills";
import experience from "../data/experience.json";
import { DateTime, Settings } from "luxon";

describe("getYearsOfExperience", () => {
  it("returns valid shape", () => {
    const result = z.number().safeParse(getYearsOfExperience(experience));
    expect(result.success).toBeTruthy();
  });
  it("returns expected", () => {
    const mockDate = DateTime.local(2024, 8, 31, 0, 0, 0);
    Settings.now = () => mockDate.toMillis();
    expect(
      getYearsOfExperience([{ ...experience[0], start: "2000-01-01" }])
    ).toEqual(24);
  });
  it("returns expected when data is unsorted", () => {
    const mockDate = DateTime.local(2024, 8, 31, 0, 0, 0);
    Settings.now = () => mockDate.toMillis();
    expect(
      getYearsOfExperience([
        { ...experience[0], start: "2024-01-01" },
        { ...experience[0], start: "2000-01-01" }
      ])
    ).toEqual(24);
  });
});
