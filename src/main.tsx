import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/reset.css";
import "./assets/css/print.css";
import "./assets/css/index.css";
import "./assets/css/themes.css";

// components
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App/App";
import Contact from "./routes/Contact/Contact";
import Error from "./routes/Error/Error";
import Experience from "./routes/Experience/Experience";
import Home from "./routes/Home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter(
        [
          {
            element: <App />,
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
              },
              {
                path: "*",
                element: <Error />
              }
            ]
          }
        ],
        { basename: import.meta.env.BASE_URL }
      )}
    />
  </React.StrictMode>
);
