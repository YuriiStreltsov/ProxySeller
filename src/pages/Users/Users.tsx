import { useEffect, useState } from "react";
import UsersAPI, { User } from "src/service/users/UsersAPI";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await UsersAPI.getAll();

      if (Array.isArray(fetchedUsers)) {
        setUsers(fetchedUsers);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}
