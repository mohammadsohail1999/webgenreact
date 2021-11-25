import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function TopAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "10vh !important",
          }}
        >
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "gold" : "#fff",
                textDecoration: "none",
              };
            }}
            to="/"
          >
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "gold" : "#fff",

                textDecoration: "none",
              };
            }}
            to="/preview"
          >
            <Typography sx={{ marginLeft: "1rem" }} variant="h6">
              Preview
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
