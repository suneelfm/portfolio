import { Avatar, Grid } from "@mui/material";
import React from "react";
import "../styles/MySelf.css";

export default function MySelf() {
  return (
    <Grid className="mySelfContainer">
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Avatar src="./DSC_0452.JPG" className="mySelfAvatar" />
        </Grid>
        <Grid item xs={12} md={8} className="nameContainer">
          <Grid>
            <dev>Suneel F Mavinagidad</dev>
            <div
              style={{
                fontSize: "calc(3px + 3vmin)",
                marginTop: "calc(3px + 3vmin)",
              }}
            >
              Software Development Engineer - I (Frontend Developer_ReactJS)
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
