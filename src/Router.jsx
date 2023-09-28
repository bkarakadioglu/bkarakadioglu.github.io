import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Besiktas from "./pages/Besiktas/Besiktas";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "besiktas",
        element: <Besiktas />
    },
    {
        path: "education",
        element: <Education />
    },
    {
        path: "projects",
        element: <Projects />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;