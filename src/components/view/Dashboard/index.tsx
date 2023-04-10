import React from "react";

import { Grid, Typography } from "@mui/material";

import { DashboardViewStyle } from "./index.style";

export const DashboardView: React.FC = () => {
  return (
    <DashboardViewStyle>
      <Grid container spacing={2} justifyContent={"center"} alignContent={"center"}>
        <Grid item md={6} sm={12}>
          <Typography className="title">Hello World</Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography className="title">Hello World</Typography>
        </Grid>
        <Grid item md={6} sm={6}>
          <Typography className="title">Hello World</Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography className="title">Hello World</Typography>
        </Grid>
      </Grid>
    </DashboardViewStyle>
  );
};
