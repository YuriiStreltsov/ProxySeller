import { requestHandler } from "../requestHandler";

const config = {
  url: "https://jsonplaceholder.typicode.com",
  options: {
    headers: { "content-type": "application/json" },
  },
};

export type Post = { userId: string; id: string; title: string; body: string };

async function getPostsByUserId<TResponse>(id: string) {
  const posts = await requestHandler<TResponse>(
    `${config.url}/posts?/userId=${id}`,
    {
      ...config.options,
    }
  );

  return posts;
}
async function getPostById<TResponse>(id: string) {
  const posts = await requestHandler<TResponse>(`${config.url}/posts/${id}`, {
    ...config.options,
  });

  return posts;
}

export default { getPostsByUserId, getPostById };
