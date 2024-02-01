import { requestHandler } from "../requestHandler";

const config = {
  url: "https://jsonplaceholder.typicode.com",
  options: {
    headers: { "content-type": "application/json" },
  },
};

export type Album = {
  userId: number;
  id: string;
  title: string;
};

export type Photos = {
  userId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

async function getAlbumsByUserId<TResponse>(id: string) {
  const albums = await requestHandler<TResponse>(
    `${config.url}/users/${id}/albums`,
    {
      ...config.options,
    }
  );

  return albums;
}
async function getAlbumById<TResponse>(userId: string, albumId: string) {
  const albums = await requestHandler<TResponse>(
    `${config.url}/user/${userId}/albums?id=${albumId}`,
    {
      ...config.options,
    }
  );

  return albums;
}

async function getAlbumPhotos<TResponse>(albumId: string) {
  const albums = await requestHandler<TResponse>(
    `${config.url}/album/${albumId}/photos`,
    {
      ...config.options,
    }
  );

  return albums;
}

export default { getAlbumsByUserId, getAlbumById, getAlbumPhotos };
