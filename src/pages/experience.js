import { Avatar, Card, Grid } from "@mui/material";
import React from "react";
import { EXPERIENCE } from "../constants/experience";

export default function Experience() {
  return (
    <Grid className="experience container">
      <Grid container>
        {EXPERIENCE.map((exp, index) => (
          <Grid key={index} item xs={12} md={6} lg={4} p={1}>
            <Card className="expCard">
              <img alt="ty" src={exp.backgroundImg} className="cardImage" />
              <Grid container className="cardHeader">
                <Grid
                  item
                  xs={2}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Avatar src={exp.avatar} className="cardAvatar" />
                </Grid>
                <Grid container item xs={10} p={1}>
                  <Grid
                    item
                    xs={12}
                    fontSize={"calc(2.5px + 2.5vmin)"}
                    sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    {exp.title}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    fontSize={"calc(1.5px + 1.5vmin)"}
                    sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    {exp.subTitle}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    fontSize={"calc(1.3px + 1.3vmin)"}
                    sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                  >
                    {exp.duration}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className="cardContent">
                {exp.description}
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
