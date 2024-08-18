import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/reset.css";
import "./assets/index.css";
import "./assets/themes.css";

// components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Experience from "./routes/Experience";
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
              path: "/experience",
              element: <Experience />
            },
            {
              path: "/contact",
              element: <Contact />
            }
          ]
        }
      ])}
    />
  </React.StrictMode>
);
