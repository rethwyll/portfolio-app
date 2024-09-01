import Contact from "./Contact";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import TranslationProvider from "../../providers/TranslationProvider";
import i18next from "i18next";

it("renders", async () => {
  const { getByTestId, queryByTestId } = render(
    <TranslationProvider i18n={i18next}>
      <Contact />
    </TranslationProvider>
  );
  expect(queryByTestId("contact")).toBeTruthy();
  expect(getByTestId("link-flickr").getAttribute("href")).toEqual(
    "https://flickr.com/photos/aprilbingham/"
  );
});
