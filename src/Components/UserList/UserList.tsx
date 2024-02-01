import { Link } from "react-router-dom";
import { User } from "src/service/users/UsersAPI";

type UserListProps = {
  users: User[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <>
      <ul className="row list-unstyled">
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id} className="col-sm-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-center">{user.username}</h5>
                  <div className="d-flex justify-content-between">
                    <Link to={`${user.id}/posts`} className="card-link">
                      Posts
                    </Link>
                    <Link to={`${user.id}/albums`} className="card-link">
                      Albums
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
