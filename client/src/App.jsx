// --STYLES
import './styles/App.css';

import { RouterProvider } from "react-router-dom";

// --ROUTER SETUP
import { createBrowserRouter } from "react-router-dom";

// ---VIEWS
import Index from "./components/Index";
import ViewAboutMe from "./views/ViewAboutMe";
import ViewContact from "./views/ViewContact";
import ViewError from "./views/ViewError";
import ViewPortfolio from "./views/ViewPortfolio";
import ViewResume from "./views/ViewResume";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Index />,
    errorElement: <ViewError />,
    children: [
      {
        index: true,
        element: <ViewAboutMe />,
      },
      {
        path: "/about",
        element: <ViewAboutMe />,
      },
      {
        path: "/contact",
        element: <ViewContact />,
      },
      {
        path: "/resume",
        element: <ViewResume />,
      },
      {
        path: "/portfolio",
        element: <ViewPortfolio />,
      },
    ]
  }

]);

export default function App() {

  return (
    <>
      <RouterProvider router={router}>
        <Index />
      </RouterProvider>
    </>
  );
}
