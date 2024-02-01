import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { Params } from "react-router-dom";
import AlbumList from "src/Components/AlbumList";
import ErrorBoundary from "src/Components/ErrorBoundary";
import AlbumsAPI, { Album } from "src/service/album/AlbumsAPI";
import { User } from "src/service/users/UsersAPI";

export async function albumsLoader({ params }: { params: Params<"userId"> }) {
  if (params?.userId) {
    return await AlbumsAPI.getAlbumsByUserId<Album[]>(params?.userId);
  } else {
    return [];
  }
}

export default function Albums() {
  const albums = useLoaderData() as Album[];
  const users = useRouteLoaderData("root") as User[];

  const { userId } = useParams<"userId">();

  const user = users.find((user) => user.id.toString() === userId);

  if (!user) {
    return (
      <div className="container">
        <ErrorBoundary message="User not found " />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        {albums.length > 0 ? (
          <div className="card bg-white">
            <div className="card-body">
              <h4 className="card-title">{`Albums of user ${user?.username}`}</h4>
              <AlbumList albums={albums} />
            </div>
          </div>
        ) : (
          <ErrorBoundary message="Albums not found " />
        )}
      </div>
    </>
  );
}
