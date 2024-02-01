import { Link } from "react-router-dom";
import { Album } from "src/service/album/AlbumsAPI";

type AlbumListType = {
  albums: Album[];
};

export default function AlbumList({ albums }: AlbumListType) {
  return (
    <>
      {albums.length > 0 && (
        <ul className="list-group list-group-flush list-unstyled">
          {albums.map((album) => (
            <li
              key={album.id}
              className="list-group-item list-group-item-action"
            >
              <Link
                to={`${album.id}`}
                className="text-decoration-none d-block w-100"
              >
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
