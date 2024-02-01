import { type Album as TAlbum } from "src/service/album/AlbumsAPI";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

type AlbumProps = {
  album: TAlbum;
  username: string;
};

export default function Album({ album, username }: AlbumProps) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          User <span className="fw-bold">{username}</span>/ Album{" "}
          <span className="fw-bold">#{album.id}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center mb-5">{album.title}</h5>

          <PhotoGallery albumId={album.id} />
        </div>
      </div>
    </>
  );
}
