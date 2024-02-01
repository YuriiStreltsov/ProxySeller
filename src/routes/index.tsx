import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "src/Components/ErrorBoundary";
import RootLayout from "src/Components/RootLayout";
import Albums from "src/pages/Albums";
import UserAlbum from "src/pages/Albums/UserAlbum";
import Home, { homeLoader } from "src/pages/Home";
import Posts from "src/pages/Posts";
import { postsLoader } from "src/pages/Posts/Posts";
import UserPost from "src/pages/Posts/UserPost";

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
