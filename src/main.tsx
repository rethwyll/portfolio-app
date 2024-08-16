import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/reset.css";
import "./assets/index.css";
import "./assets/themes.css";

// components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Error from "./routes/Error";
import Home from "./routes/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <App />,
          errorElement: <Error />,
          children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/one",
              element: <>one</>
            },
            {
              path: "/two",
              element: <>two</>
            }
          ]
        }
      ])}
    />
  </React.StrictMode>
);
