import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { pageAdded } from "../store/userSlice";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Paginationn() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.users.page);

  const handleChange = (event, page) => {
    dispatch(pageAdded(page));
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={10} color="secondary" onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default Paginationn;
