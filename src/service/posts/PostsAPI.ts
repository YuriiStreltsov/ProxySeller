import { requestHandler } from "../requestHandler";

const config = {
  url: "https://jsonplaceholder.typicode.com",
  options: {
    headers: { "content-type": "application/json" },
  },
};

export type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

export type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

async function getPostsByUserId<TResponse>(id: string) {
  const posts = await requestHandler<TResponse>(
    `${config.url}/users/${id}/posts`,
    {
      ...config.options,
    }
  );

  return posts;
}
async function getPostById<TResponse>(userId: string, postId: string) {
  const posts = await requestHandler<TResponse>(
    `${config.url}/user/${userId}/posts?id=${postId}`,
    {
      ...config.options,
    }
  );

  return posts;
}

async function getUserComments<TResponse>(postId: string) {
  const comments = await requestHandler<TResponse>(
    `${config.url}/posts/${postId}/comments`,
    {
      ...config.options,
    }
  );

  return comments;
}

export default { getPostsByUserId, getPostById, getUserComments };
