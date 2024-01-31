import { responseHandler } from "../handlers";
import { ApiResponse, BadRequest } from "../types";

const config = {
  url: "https://jsonplaceholder.typicode.com",
  options: {
    headers: { "content-type": "application/json" },
  },
};

export type User = { id: string; username: string };
async function getAll(): Promise<BadRequest | Error | User[]> {
  try {
    const response = await fetch(`${config.url}/users`, {
      ...config.options,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await responseHandler<User[]>(response as ApiResponse<User[]>);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export default { getAll };
