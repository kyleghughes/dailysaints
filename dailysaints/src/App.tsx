import { useMemo, useState, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Header from "./components/Header";

import { formatDate, getTodayKey } from "./utils/date";
import { saints, type Saint } from "./data/saints";
import { getLiturgicalColour } from "./data/liturgicalCalendar";
import { getTheme } from "./components/theme";
import SaintCard from "./components/SaintCard";
const { month, day } = getTodayKey();
const colour = getLiturgicalColour(month, day);

// #region helper function
/**
 * Retrieves all saints commemorated on the current day.
 *
 * Filters the global `saints` list and returns those whose
 * `month` and `day` match the current date values.
 *
 * @returns An array of saints celebrated today. Returns an empty array if none match.
 */
const getTodaySaints = (): Saint[] => {
  return saints.filter((s) => s.month === month && s.day === day);
};
// #endregion

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = useMemo(() => getTheme(mode), [mode]);

  const todaySaints = useMemo(() => getTodaySaints(), []);
  const formattedDate = useMemo(() => formatDate(new Date()), []);

  const toggleMode = (): void => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        date={formattedDate}
        colour={colour}
        mode={mode}
        onToggleMode={toggleMode}
      />
      <Container maxWidth="md">
        <Box sx={{ mt: 4, mb: 4 }}>
          {todaySaints.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {todaySaints.map((saint, index) => (
                <SaintCard key={`${saint.name}-${index}`} saint={saint} />
              ))}
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
