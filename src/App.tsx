import apiClient, { CanceledError } from "./Services/api-client";
import { useEffect, useState } from "react";
import UserService, { User } from "./Services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Ahmad" };

    setUsers([...users, newUser]);

    UserService.create(newUser)
      .then(({ data: saveUser }) => setUsers([...users, saveUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const UpdateUser = (user: User) => {
    const originalUser = [...users];
    const updateU = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updateU : u)));
    UserService.update(updateU).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => UpdateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  deleteUser(user);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
