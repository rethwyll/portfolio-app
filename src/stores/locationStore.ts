import { DateTime } from "luxon";
import { create } from "zustand";

type State = {
  timezone: string;
  timezoneUtc: string;
  currentLocation: string;
};

export const useLocationStore = create<State>(() => {
  return {
    timezone: DateTime.local({ zone: "America/Los_Angeles" }).toFormat("ZZZZ"),
    timezoneUtc: DateTime.local({ zone: "America/Los_Angeles" }).toFormat("ZZ"),
    currentLocation: "Seattle, WA"
  };
});
