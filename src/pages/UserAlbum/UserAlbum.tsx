import {
  Outlet,
  Params,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import Album from "src/Components/Album";
import ErrorBoundary from "src/Components/ErrorBoundary";
import Photos from "src/Components/PhotoGallery/PhotoGallery";
import AlbumsAPI, { type Album as TAlbum } from "src/service/album/AlbumsAPI";
import { User } from "src/service/users/UsersAPI";

export async function albumLoader({
  params,
}: {
  params: Params<"albumId" | "userId">;
}) {
  if (params?.albumId && params?.userId) {
    return await AlbumsAPI.getAlbumById<TAlbum[]>(
      params.userId,
      params.albumId
    );
  } else {
    return undefined;
  }
}
export default function UserAlbum() {
  const albums = useLoaderData() as TAlbum[];
  const users = useRouteLoaderData("root") as User[];
  const { userId } = useParams<{ userId: string }>();

  const user = users.find((user) => user.id.toString() === userId);

  if (!user) {
    return (
      <div className="container">
        <ErrorBoundary message="User not found " />
      </div>
    );
  }

  return (
    <div className="container">
      {albums.length > 0 ? (
        <Album username={user.username} album={albums[0]} />
      ) : (
        <ErrorBoundary message="Album not found" />
      )}
    </div>
  );
}
