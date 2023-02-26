import { Grid } from "@mui/material";
import React from "react";
import { CONTACTS } from "../constants/contacts";

export default function Contacts() {
  return (
    <Grid className="skill container">
      {CONTACTS.map((contact, index) => (
        <Grid key={index} container alignItems={"center"} pt={5}>
          <Grid container item xs={12} sm={2} md={1} justifyContent="center">
            <img alt="call" src={contact.gif} className="skillImage" />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={10}
            md={11}
            sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
            textAlign={"center"}
          >
            {contact.detail}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
