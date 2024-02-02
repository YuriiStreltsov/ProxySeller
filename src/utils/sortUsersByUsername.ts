import { User } from "src/service/users/UsersAPI";

export const sortUsersByUsername = (
  items: User[],
  order: "asc" | "desc" | undefined
) => {
  if (order === "asc") {
    return [...items].sort((a, b) => a.username.localeCompare(b.username));
  } else {
    return [...items].sort((a, b) => b.username.localeCompare(a.username));
  }
};
