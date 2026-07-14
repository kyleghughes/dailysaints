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
import DailySaintsLogo from "../../DailySaintsLogo.png";

// #region interface
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
  const isWhiteColour = colour === "white";
  const textColor = isWhiteColour ? "#000" : "inherit";
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
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          <Box
            component="img"
            src={DailySaintsLogo}
            alt="D"
            sx={{
              height: 32,
              width: 32,
              mr: 0.1,
              mb: 1,
              objectFit: "contain",
            }}
          />

          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 600,
              color: textColor,
            }}
          >
            ailySaints
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ color: textColor }}>
            {date}
          </Typography>

          <Tooltip
            arrow
            title={
              mode === "light"
                ? "Darkness came over the whole land."
                : "Let there be light!"
            }
          >
            <IconButton onClick={onToggleMode} sx={{ color: textColor }}>
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
