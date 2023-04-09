import { createTheme } from "@mui/material/styles";

import { defaultColors } from "./default";
import { ImageURLs, LogoSize, ThemeColors } from "./types";

const themeColors: ThemeColors = {
  colors: {
    ...defaultColors
  },

  textFont: {
    mainFont: "",
    oneFont: ""
  },

  textWeight: {
    light: "",
    regular: "",
    semibold: ""
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
