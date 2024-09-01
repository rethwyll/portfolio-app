import App from "./App";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";

it("renders", async () => {
  const { queryByTestId } = render(
    <MemoryRouter>
      <TranslationProvider i18n={i18next}>
        <App />
      </TranslationProvider>
    </MemoryRouter>
  );
  expect(queryByTestId("app")).toBeTruthy();
});
