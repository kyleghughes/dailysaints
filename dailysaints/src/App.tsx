import { useMemo, useState, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Header from "./components/Header";
import SaintCard from "./components/SaintCard";
import PrayForUsCard from "./components/PrayForUsCard";
import { getTodayKey } from "./utils/date";
import { saints, type Saint } from "./data/saints";
import { getLiturgicalColour } from "./data/liturgicalCalendar";
import { getTheme } from "./components/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileSearchBar from "./components/MobileSearchBar";
import dayjs from "dayjs";
import Footer from "./components/Footer";
import QuoteCard from "./components/QuoteCard";

// #region helper function
const { month, day } = getTodayKey();

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
  // #region state
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    return saved === "dark" ? "dark" : "light";
  });
  const [selectedSaint, setSelectedSaint] = useState<Saint | null>(null);
  // #endregion

  // #region hooks
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const formattedDate = useMemo(
    () => dayjs().format(isMobile ? "DD/MM/YYYY" : "dddd, D MMMM YYYY"),
    [],
  );

  // #endregion

  // #region variables
  const colour = getLiturgicalColour(month, day);
  const displayedSaints = selectedSaint ? [selectedSaint] : getTodaySaints();
  // #endregion

  // #region functions
  /**
   * Toggles state between 'light' and 'dark'
   * This then changes site between light and dark mode
   */
  const toggleMode = (): void => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  // #endregion

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        date={formattedDate}
        colour={colour}
        mode={mode}
        onToggleMode={toggleMode}
        onSelectSaint={setSelectedSaint}
      />
      {isMobile && (
        <MobileSearchBar darkColor={true} onSelectSaint={setSelectedSaint} />
      )}
      <Container
        maxWidth="md"
        sx={{
          pb: isMobile ? 8 : 0,
        }}
      >
        <Box sx={{ mt: 4 }}>
          <QuoteCard />
        </Box>
        <Box sx={{ mt: 4, mb: 4 }}>
          {displayedSaints.length > 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {displayedSaints.map((saint, index) => (
                <SaintCard key={`${saint.name}-${index}`} saint={saint} />
              ))}

              <PrayForUsCard saints={displayedSaints} />
            </Box>
          ) : (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
              <CircularProgress />
            </Box>
          )}
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
