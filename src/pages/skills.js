import { Grid } from "@mui/material";
import React from "react";
import { SKILLS } from "../constants/skills";

export default function Skills() {
  return (
    <Grid className="skill container">
      {SKILLS?.map((skillCategory) => (
        <>
          <b>{skillCategory.skillTitle}: -</b>
          {skillCategory?.skills?.map((skill) => (
            <Grid container alignItems={"center"} py={2}>
              <img alt="html" src={skill.imgUrl} className="skillImage" />
              {skill.label}
            </Grid>
          ))}
          <br />
        </>
      ))}
    </Grid>
  );
}
