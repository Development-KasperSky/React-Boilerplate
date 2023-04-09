import React from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { DashboardPage } from "pages";

import { PATH } from "consts";

import "./styles/global.css";
import { defaultTheme } from "styles";

export const App: React.FC = () => {
  let theme: Theme = defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={PATH.INDEX} element={<DashboardPage />} />
      </Routes>
    </ThemeProvider>
  );
};
