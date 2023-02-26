import { MenuTwoTone } from "@mui/icons-material";
import { Avatar, Button, Grid, Menu } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { TABS } from "../constants/tabs";
import "../styles/Layout.css";

export default function Layout() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (tab) => {
    if (tab.route) {
      navigate(tab.route);
    } else {
      window.open("./resume.pdf", "_blank");
    }
  };
  return (
    <Grid className="layoutBody">
      <Grid container className="headerBar">
        {location.pathname !== "/" && (
          <Grid container item xs={10} sm={4} md={3} lg={2} alignItems="center">
            <Avatar
              src="./DSC_0452.JPG"
              className="avatar"
              onClick={() => navigate("/")}
              title="Home"
            />{" "}
            <span className="name">Suneel F Mavinagidad</span>
          </Grid>
        )}
        <Grid
          item
          xs={location.pathname === "/" ? 12 : 6}
          sm={location.pathname === "/" ? "" : 8}
          md={location.pathname === "/" ? "" : 9}
          lg={location.pathname === "/" ? "" : 10}
          className="tabContainer"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Grid display={"flex"}>
            {TABS.map((tab, index) => (
              <Button
                key={1}
                className="tabButton"
                onClick={() => handleTabClick(tab)}
                sx={{
                  height: {
                    lg: "40px !important",
                    md: "30px !important",
                    sm: "30px !important",
                    xs: "20px !important",
                  },
                  borderRadius: {
                    lg: "20px !important",
                    md: "15px !important",
                    sm: "15px !important",
                    xs: "10px !important",
                  },
                  backgroundColor:
                    location.pathname === tab.route ? "rgb(128, 128, 128)" : "",
                  color:
                    location.pathname === tab.route
                      ? "#272727 !important"
                      : "#4f4f4f !important",
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={location.pathname === "/" ? 12 : 2}
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
          className="menuButtonContainer"
        >
          <MenuTwoTone
            className="menuButton"
            onClick={(e) => setMenuAnchorEl(e.currentTarget)}
          />
        </Grid>
      </Grid>
      <Grid container className="contentContainer">
        <Outlet />
      </Grid>
      <Menu
        id="basic-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={() => setMenuAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {TABS.map((tab) => (
          <li
            onClick={() => {
              handleTabClick(tab);
              setMenuAnchorEl(null);
            }}
            style={{
              backgroundColor: location.pathname === tab.route ? "#bcbcbc" : "",
            }}
            className="menuItem"
          >
            {tab.label}
          </li>
        ))}
      </Menu>
    </Grid>
  );
}
