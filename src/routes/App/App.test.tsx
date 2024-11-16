import App from "./App";
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

it("renders", async () => {
  // Mock global window.open
  vi.stubGlobal("scrollTo", vi.fn());
  const { queryByTestId } = render(
    <RouterProvider
      router={createBrowserRouter(
        [
          {
            element: <App />,
            children: [
              {
                path: "/",
                element: <>home</>
              },
              {
                path: "/experience",
                element: <>experience</>
              },
              {
                path: "/contact",
                element: <>contact</>
              },
              {
                path: "*",
                element: <>error</>
              }
            ]
          }
        ],
        { basename: import.meta.env.BASE_URL }
      )}
    />
  );
  expect(queryByTestId("app")).toBeTruthy();
});
