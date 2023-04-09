import { Theme } from "@mui/material";

export type ThemeColors = {
  colors: Record<string, string>;
  textFont: {
    mainFont: string;
    oneFont: string;
  };
  textWeight: {
    light: string;
    regular: string;
    semibold: string;
  };
};

export type ImageURLs = {
  primaryLogoImg: string;
  sidebarLogoImg: string;
  secondLogoImg: string;
  primaryCoverImg: string;
  secondCoverImg: string;
  primaryBusinessCoverImg: string;
};

export type LogoSize = {
  primaryWidth: string;
  primaryHeight: string;
  primaryMarginTop: string;
  sidebarLogoWidth: string;
  sidebarLogoHeight: string;
};

export interface BDTheme extends Theme, ThemeColors, ImageURLs, LogoSize {}
