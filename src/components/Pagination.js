import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { pageAdded } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Paginationn() {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.users.pageCount);
  console.log(pageNum);

  const handleChange = (event, page) => {
    dispatch(pageAdded(page));
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={pageNum} color="secondary" onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default Paginationn;
