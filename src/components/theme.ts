import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#2E5E4E",
      },
      secondary: {
        main: "#7b1fa2",
      },

      ...(mode === "light"
        ? {
            background: {
              default: "#f6f3ee",
              paper: "#ffffff",
            },
            text: {
              primary: "#1c1c1c",
              secondary: "#555555",
            },
          }
        : {
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#ffffff",
              secondary: "#b0b0b0",
            },
          }),
    },

    typography: {
      fontFamily: ["Inter", "Roboto", "system-ui", "sans-serif"].join(","),
      h4: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          },
        },
      },
    },
  });
