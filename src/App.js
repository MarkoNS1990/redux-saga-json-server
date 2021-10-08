import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  addUser,
  fetchUsersBegin,
  removeUser,
} from "./redux/users/usersActions";
import User from "./components/User";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onAddNameClick = () => {
    const newUser = { name, id: Math.random() };
    dispatch(addUser(newUser));
    setName("");
  };

  const onDeleteClick = (user) => {
    dispatch(removeUser(user));
  };

  useEffect(() => {
    dispatch(fetchUsersBegin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      {users &&
        users.map((user) => (
          <User key={user.id} user={user} onDeleteClick={onDeleteClick} />
        ))}
      <input
        type="text"
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="form-control w-25 mt-2 mb-2 m-auto"
      />
      <button onClick={onAddNameClick} className="btn btn-primary ml-2">
        Add
      </button>
    </div>
  );
}

export default App;
