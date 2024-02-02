import { useState } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import FilterAndSearchBar from "src/Components/FilterAndSearchBar";
import UserList from "src/Components/UserList";
import UsersAPI, { User } from "src/service/users/UsersAPI";
import { searchUserByName } from "src/utils/searchUserByName";
import { sortUsersByUsername } from "src/utils/sortUsersByUsername";

export async function homeLoader() {
  return await UsersAPI.getAll<User[]>();
}

export default function Home() {
  const users = useLoaderData() as User[];
  const [loadedUsers, setLoadedUsers] = useState(users);

  return (
    <div className="container">
      {/* Filter and search bar */}
      <FilterAndSearchBar
        items={users}
        onApply={setLoadedUsers}
        searchFunction={searchUserByName}
        sortFunction={sortUsersByUsername}
      />
      {/* User cards */}
      <UserList users={loadedUsers} />
    </div>
  );
}
