import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/users/usersActions";
const User = ({ user, onDeleteClick, setName }) => {
  const [edit, setEdit] = useState(user.name);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const onEditClick = () => {
    const editedUser = { ...user, name: edit };
    dispatch(updateUser(editedUser));
    setEdit(editedUser.name);
    setOpenDialog((isOpen) => !isOpen);
  };

  return (
    <div className="mt-3 d-flex align-items-center justify-content-center ">
      <button className="btn btn-danger" onClick={() => onDeleteClick(user)}>
        X
      </button>{" "}
      <span className="mr-2 p-3">{user.name}</span>
      <button
        className="btn btn-info"
        onClick={() => setOpenDialog((isOpen) => !isOpen)}
      >
        {openDialog ? "cancel" : "edit"}
      </button>
      {openDialog && (
        <>
          <input
            type="text"
            placeholder="enter new name"
            onChange={(e) => setEdit(e.target.value)}
            value={edit}
            className="mx-2 "
          />
          <button onClick={onEditClick} className="btn btn-secondary btn-sm">
            save
          </button>
        </>
      )}
    </div>
  );
};

export default User;
