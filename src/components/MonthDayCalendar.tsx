import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import dayjs, { type Dayjs } from "dayjs";

import { PickerDay } from "@mui/x-date-pickers/PickerDay";

import { CALENDAR_YEAR } from "../utils/date";

// #region interfaces

interface MonthDayCalendarProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
}

// #endregion

const MonthDayCalendar = ({ value, onChange }: MonthDayCalendarProps) => {
  // #region state

  const [displayedMonth, setDisplayedMonth] = useState(
    value.year(CALENDAR_YEAR).startOf("month"),
  );

  // #endregion

  // #region hooks

  useEffect(() => {
    setDisplayedMonth(value.year(CALENDAR_YEAR).startOf("month"));
  }, [value]);

  // #endregion

  // #region variables

  const today = dayjs();

  const daysInMonth = displayedMonth.daysInMonth();

  const days = Array.from({ length: daysInMonth }, (_, index) =>
    displayedMonth.date(index + 1),
  );

  const isToday =
    value.month() === today.month() && value.date() === today.date();

  // #endregion

  // #region functions

  /**
   * Moves the calendar to the previous month.
   * Disabled at January to keep the calendar within the fixed year.
   */
  const goToPreviousMonth = (): void => {
    setDisplayedMonth((current) => current.subtract(1, "month"));
  };

  /**
   * Moves the calendar to the next month.
   * Disabled at December to keep the calendar within the fixed year.
   */
  const goToNextMonth = (): void => {
    setDisplayedMonth((current) => current.add(1, "month"));
  };

  /**
   * Returns the calendar to today's month and selects today's day.
   * The selected date remains within the fixed year.
   */
  const goToToday = (): void => {
    setDisplayedMonth(today.year(CALENDAR_YEAR).startOf("month"));

    onChange(today.year(CALENDAR_YEAR));
  };

  /**
   * Selects a day and ensures the selected date remains
   * within the fixed leap year used by the calendar.
   */
  const handleDaySelect = (day: Dayjs): void => {
    onChange(day.year(CALENDAR_YEAR));
  };

  // #endregion

  return (
    <Box sx={{ width: 320, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <IconButton
          onClick={goToPreviousMonth}
          disabled={displayedMonth.month() === 0}
          size="small"
        >
          <ChevronLeftIcon />
        </IconButton>

        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {displayedMonth.format("MMMM")}
        </Typography>

        <IconButton
          onClick={goToNextMonth}
          disabled={displayedMonth.month() === 11}
          size="small"
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {!isToday && (
        <Button
          onClick={goToToday}
          size="small"
          sx={{
            display: "block",
            mx: "auto",
            mb: 1,
          }}
        >
          Return to today
        </Button>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyItems: "center",
        }}
      >
        {days.map((day) => (
          <PickerDay
            key={day.format("YYYY-MM-DD")}
            day={day}
            selected={day.isSame(value, "day")}
            onDaySelect={handleDaySelect}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MonthDayCalendar;
