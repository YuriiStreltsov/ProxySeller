import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import UsersAPI, { User } from "src/service/users/UsersAPI";

export async function homeLoader() {
  return await UsersAPI.getAll<User[]>();
}

export default function Home() {
  const users = useLoaderData() as User[];
  return (
    <>
      <h2>Home</h2>

      {/* User cards */}
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <div>
                <p>{user.username}</p>
                <div>
                  <Link to={`${user.id}/posts`}>Posts</Link>
                  <Link to={`${user.id}/albums`}>Albums</Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
