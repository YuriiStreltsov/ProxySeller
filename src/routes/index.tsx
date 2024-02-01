import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "src/Components/ErrorBoundary";
import RootLayout from "src/Components/RootLayout";
import Albums from "src/pages/Albums";
import UserAlbum from "src/pages/Albums/UserAlbum";
import Home, { homeLoader } from "src/pages/Home";
import Posts, { postsLoader } from "src/pages/Posts";
import UserPost, { postLoader } from "src/pages/UserPost";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    loader: homeLoader,
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home,
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
        Component: Albums,
      },
      {
        path: ":userId/albums/:albumId",
        Component: UserAlbum,
      },
    ],
  },
]);
