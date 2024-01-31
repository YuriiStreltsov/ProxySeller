import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { BadRequest } from "src/service/types";
import UsersAPI, { User } from "src/service/users/UsersAPI";

type HomeLoaderData = User[] | BadRequest | Error;

export async function homeLoader(): Promise<HomeLoaderData> {
  return await UsersAPI.getAll();
}

export default function Home() {
  const users = useLoaderData() as HomeLoaderData;
  return (
    <>
      <h2>Home</h2>

      {/* User cards */}
      <ul>
        {Array.isArray(users) &&
          users.length > 0 &&
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
