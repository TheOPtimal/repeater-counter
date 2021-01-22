import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = (palletType: "dark" | "light") =>
  createMuiTheme({
    palette: {
      type: palletType,
    },
  });
