import { useLoaderData } from "react-router-dom";
import UserList from "src/Components/UserList";
import UsersAPI, { User } from "src/service/users/UsersAPI";

export async function homeLoader() {
  return await UsersAPI.getAll<User[]>();
}

export default function Home() {
  const users = useLoaderData() as User[];
  return (
    <>
      {/* User cards */}
      <UserList users={users} />
    </>
  );
}
