import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { green, grey, pink, purple, red } from "@mui/material/colors";
import { darken } from "@mui/material/styles";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersCalendarHeader } from "@mui/x-date-pickers/PickersCalendarHeader";

import dayjs, { type Dayjs } from "dayjs";

import DailySaintsLogo from "../../DailySaintsLogo.png";
import { feastDays } from "../data/feastDays";
import type { LiturgicalColour } from "../data/liturgicalCalendar";
import type { Saint } from "../data/saints";
import Searchbar from "./Searchbar";

interface HeaderProps {
  date: Dayjs;
  colour: LiturgicalColour;
  mode: "light" | "dark";
  onToggleMode: () => void;
  onSelectSaint: (saint: Saint | null) => void;
  onDateChange: (date: Dayjs | null) => void;
}

const Header = ({
  date,
  colour,
  mode,
  onToggleMode,
  onSelectSaint,
  onDateChange,
}: HeaderProps) => {
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

  const isWhiteColour = colour === "white";

  const darkColor = darken(baseColor, isWhiteColour ? 0.1 : 0.5);

  const textColor = isWhiteColour ? "#000" : "inherit";

  const isMobile = useMediaQuery("(max-width:600px)");

  const feastDay = feastDays.find(
    (f) => f.month === date.month() + 1 && f.day === date.date(),
  );

  // #endregion

  // #region state

  const [calendarAnchor, setCalendarAnchor] = useState<HTMLElement | null>(
    null,
  );

  // #endregion

  // #region functions

  const handleDateClick = (event: React.MouseEvent<HTMLElement>) => {
    setCalendarAnchor(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setCalendarAnchor(null);
  };

  // #endregion

  return (
    <AppBar
      elevation={1}
      position="static"
      sx={{
        background: `linear-gradient(135deg, ${darkColor} 0%, ${baseColor} 100%)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
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

          {!isMobile && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                px: 2,
              }}
            >
              <Box sx={{ width: "100%", maxWidth: 450 }}>
                <Searchbar
                  darkColor={true}
                  isMobile={false}
                  onSelectSaint={onSelectSaint}
                />
              </Box>
            </Box>
          )}

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: textColor,
              }}
            >
              {date.format(isMobile ? "DD/MM" : "dddd, D MMMM")}
            </Typography>

            <Tooltip title="Select date" arrow>
              <IconButton onClick={handleDateClick} sx={{ color: textColor }}>
                <CalendarMonthIcon />
              </IconButton>
            </Tooltip>

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

        {feastDay && (
          <>
            <Divider
              sx={{
                borderColor: isWhiteColour
                  ? "rgba(0,0,0,0.12)"
                  : "rgba(255,255,255,0.2)",
              }}
            />

            <Box
              sx={{
                px: 0,
                py: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: textColor,
                  textAlign: "center",
                }}
              >
                {feastDay.name}
              </Typography>
            </Box>
          </>
        )}
      </Box>

      <Popover
        open={Boolean(calendarAnchor)}
        anchorEl={calendarAnchor}
        onClose={handleCalendarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <DateCalendar
          value={date}
          onChange={(newDate) => {
            onDateChange(newDate);
            handleCalendarClose();
          }}
          views={["month", "day"]}
          openTo="day"
          minDate={dayjs("2024-01-01")}
          maxDate={dayjs("2024-12-31")}
          slots={{
            calendarHeader: PickersCalendarHeader,
          }}
          slotProps={{
            calendarHeader: {
              format: "MMMM",
            },
          }}
        />
      </Popover>
    </AppBar>
  );
};

export default Header;
