export type BadRequest = { code: "bad_request"; message: string };

export type ApiResponse<T> =
  | (Omit<Response, "json"> & {
      status: 200 | 201;
      json: () => T | PromiseLike<T>;
    })
  | (Omit<Response, "json"> & {
      status: 400;
      json: () => BadRequest | PromiseLike<BadRequest>;
    });
