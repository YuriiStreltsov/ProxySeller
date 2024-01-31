import { Link } from "react-router-dom";
import { User } from "src/service/users/UsersAPI";

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <>
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
