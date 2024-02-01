import { type Album as TAlbum } from "src/service/album/AlbumsAPI";

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
          <h6 className="card-title">{album.title}</h6>
        </div>
      </div>
    </>
  );
}
