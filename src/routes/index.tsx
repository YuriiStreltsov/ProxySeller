import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "src/Components/ErrorBoundary";
import RootLayout from "src/Components/RootLayout";
import Albums, { albumsLoader } from "src/pages/Albums";
import UserAlbum, { albumLoader } from "src/pages/UserAlbum";
import Home, { homeLoader } from "src/pages/Home";
import Posts, { postsLoader } from "src/pages/Posts";
import UserPost, { postLoader } from "src/pages/UserPost";
import UsersAPI from "src/service/users/UsersAPI";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: async () => await UsersAPI.getAll(),
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: ":userId/posts",
        loader: postsLoader,
        Component: Posts,
      },
      {
        path: ":userId/posts/:postId",
        loader: postLoader,
        Component: UserPost,
      },
      {
        path: ":userId/albums",
        loader: albumsLoader,
        Component: Albums,
      },
      {
        path: ":userId/albums/:albumId",
        loader: albumLoader,
        Component: UserAlbum,
      },
    ],
  },
]);
