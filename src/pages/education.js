import { Grid } from "@mui/material";
import React from "react";
import { EDUCATIONS } from "../constants/educations";

export default function Education() {
  return (
    <Grid className="skill container">
      {EDUCATIONS.map((edu) => (
        <Grid container py={1}>
          <Grid item xs={12} className="eduTitle">
            {edu.eduTitle}
          </Grid>
          <Grid item xs={12} className="college">
            {edu.college}
          </Grid>
          <Grid item xs={12} className="college">
            {edu.passedOut}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
