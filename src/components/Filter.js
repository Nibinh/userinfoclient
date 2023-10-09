import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tooltip from "@mui/material/Tooltip";
import { roleAdded } from "../store/userSlice";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (value) => {
    console.log("Menu Item Clicked", value);
    dispatch(roleAdded(value));
  };

  const role = useSelector((state) => state.users.filter);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Tooltip title="Filter">
          <FilterListIcon />
        </Tooltip>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick("developer")}>
          Developer
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("tester")}>
          Tester
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("")}>All</MenuItem>
      </Menu>
    </div>
  );
}

export default Filter;
