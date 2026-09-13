import { useEffect, useMemo, useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";

import dayjs, { type Dayjs } from "dayjs";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import AllSaintsCard from "./components/AllSaintsCard";
import AllSoulsCard from "./components/AllSoulsCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileSearchBar from "./components/MobileSearchBar";
import PrayForUsCard from "./components/PrayForUsCard";
import QuoteCard from "./components/QuoteCard";
import SaintCard from "./components/SaintCard";
import { getTheme } from "./components/theme";
import { getLiturgicalColour } from "./data/liturgicalCalendar";
import { saints, type Saint } from "./data/saints";

import { CALENDAR_YEAR } from "./utils/date";

const App = () => {
  // #region state
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    return saved === "dark" ? "dark" : "light";
  });

  const [selectedSaint, setSelectedSaint] = useState<Saint | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(() =>
    dayjs().year(CALENDAR_YEAR),
  );
  // #endregion

  // #region hooks
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const isMobile = useMediaQuery("(max-width:600px)");
  // #endregion

  // #region variables
  const month = selectedDate.month() + 1;
  const day = selectedDate.date();
  const colour = getLiturgicalColour(month, day);
  const displayedSaints = selectedSaint
    ? [selectedSaint]
    : saints.filter((saint) => saint.month === month && saint.day === day);
  const isAllSaintsDay = month === 11 && day === 1;
  const isAllSoulsDay = month === 11 && day === 2;
  // #endregion

  // #region functions
  /**
   * Toggles between light and dark mode.
   */
  const toggleMode = (): void => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  /**
   * Updates the selected date and clears any selected saint.
   *
   * The date is kept within the fixed calendar year.
   */
  const handleDateChange = (date: Dayjs | null): void => {
    if (!date) return;

    setSelectedSaint(null);
    setSelectedDate(date.year(CALENDAR_YEAR));
  };

  /**
   * Updates the selected saint and date.
   *
   * When a saint is selected, the date is updated to their feast day.
   * When the search is cleared, the date returns to today's month and day.
   */
  const handleSaintSelect = (saint: Saint | null): void => {
    setSelectedSaint(saint);

    if (!saint) {
      setSelectedDate(
        dayjs().year(CALENDAR_YEAR).month(dayjs().month()).date(dayjs().date()),
      );
      return;
    }

    setSelectedDate(
      dayjs()
        .year(CALENDAR_YEAR)
        .month(saint.month - 1)
        .date(saint.day),
    );
  };
  // #endregion

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header
        date={selectedDate}
        colour={colour}
        mode={mode}
        onToggleMode={toggleMode}
        onSelectSaint={handleSaintSelect}
        onDateChange={handleDateChange}
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
          {selectedSaint ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <SaintCard saint={selectedSaint} />
              <PrayForUsCard saints={[selectedSaint]} />
            </Box>
          ) : isAllSaintsDay ? (
            <AllSaintsCard />
          ) : isAllSoulsDay ? (
            <AllSoulsCard />
          ) : displayedSaints.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {displayedSaints.map((saint, index) => (
                <SaintCard key={`${saint.name}-${index}`} saint={saint} />
              ))}

              <PrayForUsCard saints={displayedSaints} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 8,
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>

        <Footer />
      </Container>

      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
};

export default App;
