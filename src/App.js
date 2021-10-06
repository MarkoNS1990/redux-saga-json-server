import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, fetchUsersBegin } from "./redux/users/usersActions";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onAddNameClick = () => {
    const newUser = { name, id: Math.random() };
    dispatch(addUser(newUser));
    setName("");
  };

  useEffect(() => {
    dispatch(fetchUsersBegin());
  }, []);
  return (
    <div className="App">
      {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      <input
        type="text"
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={onAddNameClick}>Add</button>
    </div>
  );
}

export default App;
