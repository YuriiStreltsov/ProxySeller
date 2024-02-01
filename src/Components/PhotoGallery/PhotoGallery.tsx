import { useEffect, useReducer, useState } from "react";
import AlbumsAPI, { type Photos as TPhotos } from "src/service/album/AlbumsAPI";
import styles from "./PhotoGallery.module.scss";

type PhotoGalleryProps = {
  albumId: string;
};

type State = {
  photos: TPhotos[];
  isLoading: boolean;
  fullscreenUrl: string;
};

type Action =
  | { type: "SET_PHOTOS"; payload: TPhotos[] }
  | { type: "SET_IS_LOADING"; payload: boolean }
  | { type: "SET_FULLSCREEN_URL"; payload: string };

const initialState: State = {
  photos: [],
  isLoading: false,
  fullscreenUrl: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PHOTOS":
      return { ...state, photos: action.payload };
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_FULLSCREEN_URL":
      return { ...state, fullscreenUrl: action.payload };
    default:
      return state;
  }
}

export default function PhotoGallery({ albumId }: PhotoGalleryProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { photos, isLoading, fullscreenUrl } = state;
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      dispatch({ type: "SET_IS_LOADING", payload: true });
      const photos = await AlbumsAPI.getAlbumPhotos<TPhotos[]>(albumId);
      dispatch({ type: "SET_PHOTOS", payload: photos });
      dispatch({ type: "SET_IS_LOADING", payload: false });
    }

    fetchPhotos();
  }, [albumId]);

  function toggleModal(url?: string) {
    if (url) {
      dispatch({ type: "SET_FULLSCREEN_URL", payload: url });
    } else {
      dispatch({ type: "SET_FULLSCREEN_URL", payload: "" });
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
              onClick={toggleModal.bind(null, photo.url)}
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
          onClick={toggleModal.bind(null, "")}
        >
          <div>
            <img src={fullscreenUrl} alt="fullscreen image" />
          </div>
        </div>
      )}
    </>
  );
}
