import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/users/usersActions";
const User = ({ user, onDeleteClick, setName }) => {
  const [edit, setEdit] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const onEditClick = () => {
    const editedUser = { ...user, name: edit };
    dispatch(updateUser(editedUser));
    setEdit("");
    setOpenDialog((isOpen) => !isOpen);
  };

  return (
    <div>
      {user.name}
      <button onClick={() => onDeleteClick(user)}>X</button>{" "}
      <button onClick={() => setOpenDialog((isOpen) => !isOpen)}>
        {openDialog ? "cancel" : "edit"}
      </button>
      {openDialog && (
        <>
          <input
            type="text"
            placeholder="enter new name"
            onChange={(e) => setEdit(e.target.value)}
            value={edit}
          />
          <button onClick={onEditClick}>save</button>
        </>
      )}
    </div>
  );
};

export default User;
