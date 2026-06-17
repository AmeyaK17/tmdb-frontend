import Movies from "./screens/Movies";
import Detail from "./itemInfo/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trending from "./screens/Trending";
import SearchResults from "./screens/SearchResults";
import TvShows from "./screens/TvShows";
import Layout from "./utils/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Trending />,
        },
        {
          path: "/trending",
          element: <Trending />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/tv",
          element: <TvShows />,
        },
        {
          path: "/detail/:type/:movieId",
          element: <Detail />,
        },
        {
          path: "/search/:keyword",
          element: <SearchResults />,
        },
      ],
    },
  ],
  { basename: "/tmdb-frontend" },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
