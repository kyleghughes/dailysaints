import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import type { LiturgicalColour } from "../data/liturgicalCalendar";
import { green, grey, pink, purple, red } from "@mui/material/colors";
import { darken } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

// #region interace
interface HeaderProps {
  date: string;
  colour: LiturgicalColour;
  mode: "light" | "dark";
  onToggleMode: () => void;
}
// #endregion

const Header = ({ date, colour, mode, onToggleMode }: HeaderProps) => {
  // #region constants
  const colourMap: Record<LiturgicalColour, string> = {
    green: green[500],
    red: red[700],
    white: grey[100],
    purple: purple[500],
    pink: pink[300],
  };
  // #endregion

  // #region variables
  const baseColor = colourMap[colour];
  const darkColor = darken(baseColor, 0.5);
  // #endregion

  return (
    <AppBar
      elevation={1}
      position="static"
      sx={{
        background: `linear-gradient(135deg, ${darkColor} 0%, ${baseColor} 100%)`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          DailySaints
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2">{date}</Typography>

          <Tooltip
            arrow
            title={
              mode === "light"
                ? "Darkness came over the whole land."
                : "Let there be light!"
            }
          >
            <IconButton onClick={onToggleMode} color="inherit">
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
