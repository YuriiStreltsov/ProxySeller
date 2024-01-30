import { ApiResponse, BadRequest } from "./types";

export const responseHandler = async <T>(
  response: ApiResponse<T>
): Promise<BadRequest | Error | T> => {
  if (response.status === 200 || response.status === 201)
    return (await response.json()) as T;
  if (response.status === 400) return (await response.json()) as BadRequest;
  return Error("Unhandled response code");
};
