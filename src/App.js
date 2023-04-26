import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateMoviePage from "./component/page/CreateMoviePage";
import PricePage from "./component/page/PricePage";
import AboutPage from "./component/page/AboutPage";
import GalleryPage from "./component/page/GalleryPage";
import RootLayout from "./component/page/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <CreateMoviePage />,
      },
      {
        path: "/movies",
        element: <GalleryPage />,
      },
      {
        path: "/price",
        element: <PricePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
