import { requestHandler } from "../requestHandler";

const config = {
  url: "https://jsonplaceholder.typicode.com",
  options: {
    headers: { "content-type": "application/json" },
  },
};

export type User = { id: string; username: string };
async function getAll<TResponse>() {
  const users = await requestHandler<TResponse>(`${config.url}/users`, {
    ...config.options,
  });

  return users;
}

export default { getAll };
