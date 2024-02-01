import { useEffect, useState } from "react";
import AlbumsAPI, { type Photos as TPhotos } from "src/service/album/AlbumsAPI";
import styles from "./Photos.module.scss";

type PhotosProps = {
  albumId: string;
};

export default function Photos({ albumId }: PhotosProps) {
  const [photos, setPhotos] = useState<TPhotos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [fullscreenUrl, setFullscreenUrl] = useState("");

  useEffect(() => {
    async function fetchPhotos() {
      setIsLoading(true);
      const photos = await AlbumsAPI.getAlbumPhotos<TPhotos[]>(albumId);
      setPhotos(photos);
      setIsLoading(false);
    }

    fetchPhotos();
  }, [albumId]);

  function toggleModal(url?: string) {
    if (url) {
      setFullscreenUrl(url);
    } else {
      setFullscreenUrl("");
    }

    setIsOpenModal(!isOpenModal);
  }

  function handleUserKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape") {
      toggleModal();
    }
  }

  useEffect(() => {
    if (!isOpenModal) return;

    document.addEventListener("keydown", handleUserKeyPress);

    return () => document.removeEventListener("keydown", handleUserKeyPress);
  }, [isOpenModal]);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <ul className="row row-cols-1 row-cols-md-3 g-4 list-unstyled">
        {photos &&
          photos.map((photo) => (
            <li
              key={photo.id}
              className="col cursor-pointer"
              onClick={() => toggleModal(photo.url)}
            >
              <div className="card h-100 mb-4">
                <img
                  src={photo.thumbnailUrl}
                  className="card-img-top"
                  alt={`Photo-#${photo.id}`}
                />
                <div className="card-body">
                  <h6 className="card-title">{photo.title}</h6>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {isOpenModal && (
        <div
          id="full-screen-image-modal"
          className={styles.overlay}
          onClick={() => toggleModal()}
        >
          <div>
            <img src={fullscreenUrl} alt="fullscreen image" />
          </div>
        </div>
      )}
    </>
  );
}
