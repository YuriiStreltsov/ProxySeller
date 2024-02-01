import { useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { type Album as TAlbum } from "src/service/album/AlbumsAPI";
import Photos from "../Photos/Photos";

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

          <Photos albumId={album.id} />
        </div>
      </div>
    </>
  );
}
