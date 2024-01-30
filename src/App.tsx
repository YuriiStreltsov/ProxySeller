import { useEffect } from "react";
import UsersApi from "./service/users/UsersAPI";

const App = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await UsersApi.getAll();
      console.log(users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
