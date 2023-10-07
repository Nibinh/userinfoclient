import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortAdded } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Sort() {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickItem = (value) => {
    dispatch(sortAdded(value));
  };
  const sort = useSelector((state) => state.users.sort);

  return (
    <div>
      <Box sx={{ minWidth: 12 }}>
        <FormControl sx={{ width: 150, backgroundColor: "lightgray" }}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem onClick={() => handleClickItem("age")}>Age</MenuItem>
            <MenuItem onClick={() => handleClickItem("salary")}>
              Salary
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Sort;
