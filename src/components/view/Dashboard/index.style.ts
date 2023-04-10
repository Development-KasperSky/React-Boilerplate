import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type DashboardViewStyleProps = StyledComponentProps & {};

export const DashboardViewStyle = styled("div")<DashboardViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    display: "flex",
    justifyContent: "center",

    ".title": {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      padding: "0 1.5rem",
      borderRadius: "1rem",
      fontWeight: bdTheme.textWeight.regular,
      fontFamily: bdTheme.textFont.mainFont,
      fontSize: "3rem",
      backgroundColor: bdTheme.colors.gray,
      color: bdTheme.colors.black
    }
  };
});
