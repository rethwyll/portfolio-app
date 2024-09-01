import AppFooter from "./AppFooter";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";

it("renders", async () => {
  const { queryByTestId } = render(<AppFooter />);
  expect(queryByTestId("app-footer")).toBeTruthy();
});
