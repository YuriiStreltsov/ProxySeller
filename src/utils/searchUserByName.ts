import { User } from "src/service/users/UsersAPI";

export const searchUserByName = (items: User[], searchTerm: string) => {
  if (searchTerm === "") {
    return items;
  }
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return items.filter((item) =>
    item.username.toLowerCase().includes(lowerCaseSearchTerm)
  );
};
