import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Error } from "../Error/Error";
import { Home } from "../sections/Home";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { ResetCSS } from "../styles/constants";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    <ResetCSS />
    <RouterProvider router={appRouter} />
  </>,
);
