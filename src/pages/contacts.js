import { Grid } from "@mui/material";
import React from "react";
import { CONTACTS } from "../constants/contacts";

export default function Contacts() {
  return (
    <Grid className="skill container">
      {CONTACTS.map((contact) => (
        <Grid container alignItems={"center"} pt={5}>
          <img alt="call" src={contact.gif} className="skillImage" />
          {contact.detail}
        </Grid>
      ))}
    </Grid>
  );
}
