import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "brown" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Management
            </Typography>
            <Tooltip title="Add" placement="bottom-start">
              <Link to={"/addpage"}>
                <Button variant="contained" color="success">
                  <PersonAddAltIcon />
                </Button>
              </Link>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default HeaderBar;
