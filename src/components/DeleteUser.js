import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { deleteUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { userDeleteMsge } from "../store/userSlice";
import Tooltip from "@mui/material/Tooltip";

function DeleteUser({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteUsers(id));
    setTimeout(() => {
      dispatch(userDeleteMsge());
    }, 1500);
    console.log(id);
  };
  return (
    <div>
      <IconButton variant="text" onClick={handleClick}>
        <Tooltip title="Delete">
          <DeleteIcon />
        </Tooltip>
      </IconButton>
    </div>
  );
}

export default DeleteUser;
