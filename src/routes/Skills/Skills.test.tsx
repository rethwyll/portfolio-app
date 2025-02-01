import Skills from "./Skills";
import { expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";

it("renders", async () => {
  const { queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <Skills />
    </TranslationProvider>
  );
  waitFor(() => expect(queryByTestId("skills")).toBeTruthy());
});
