import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from "@mui/icons-material";
import { Collapse, Grid } from "@mui/material";
import React, { useState } from "react";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
  const [expandProject, setExpandProject] = useState(0);
  return (
    <Grid className="skill container">
      {PROJECTS.map((project, index) => (
        <Collapse
          in={expandProject === index}
          collapsedSize={"calc(8px + 8vmin)"}
          timeout={1000}
          className="projectCollapse"
        >
          <Grid
            container
            className="projectHeader"
            onClick={() =>
              expandProject === index
                ? setExpandProject(null)
                : setExpandProject(index)
            }
          >
            <Grid item xs={11}>
              {project.projectTitle}
            </Grid>
            <Grid
              container
              item
              xs={1}
              alignItems="center"
              justifyContent={"flex-end"}
            >
              {expandProject === index ? (
                <KeyboardArrowDownTwoTone className="tabIcon" />
              ) : (
                <KeyboardArrowUpTwoTone className="tabIcon" />
              )}
            </Grid>
          </Grid>
          <Grid container className="projectDescription">
            {project.description}
          </Grid>
        </Collapse>
      ))}
    </Grid>
  );
}
