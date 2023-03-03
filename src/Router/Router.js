import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Error } from "../Error/Error";
import { Home } from "../View/Home/Home";
import { About } from "../View/About/About";
import { Skills } from "../View/Skills/Skills";
import { Projects } from "../View/Projects/Projects";
import { Contact } from "../View/Contact/Contact";
import { ResetCSS } from "../DesignSystem/Utils/constants";

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
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    <ResetCSS />
    <RouterProvider router={appRouter} />
  </>
);
