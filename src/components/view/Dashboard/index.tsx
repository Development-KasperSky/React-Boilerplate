import React from "react";

import { Box, Typography } from "@mui/material";

import { DashboardViewStyle } from "./index.style";

export const DashboardView: React.FC = () => {
  return (
    <DashboardViewStyle>
      <Box>
        <Typography>Hello World</Typography>
      </Box>
    </DashboardViewStyle>
  );
};
