import { createTheme } from "@mui/material/styles";

import { defaultColors } from "./default";
import { ImageURLs, LogoSize, ThemeColors } from "./types";

const themeColors: ThemeColors = {
  colors: {
    ...defaultColors
  },

  textFont: {
    mainFont: "Helvetica",
    oneFont: "Articulat CF"
  },

  textWeight: {
    light: "300",
    regular: "500",
    semibold: "700"
  }
};

const imageURLs: ImageURLs = {
  primaryLogoImg: "",
  sidebarLogoImg: "",
  secondLogoImg: "",
  primaryCoverImg: "",
  secondCoverImg: "",
  primaryBusinessCoverImg: ""
};

const logoSize: LogoSize = {
  primaryWidth: "",
  primaryHeight: "",
  primaryMarginTop: "",
  sidebarLogoWidth: "",
  sidebarLogoHeight: ""
};

export const defaultTheme = createTheme({
  ...themeColors,
  ...imageURLs,
  ...logoSize,
  palette: {
    mode: "light"
  }
});
