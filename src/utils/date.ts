import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isLeapYear);

/**
 * Returns today's month and day as a simple key object.
 *
 * - `month`: 1-12 (local time)
 * - `day`: 1-31 (local time)
 */
export const getTodayKey = (): {
  month: number;
  day: number;
} => {
  const now = dayjs();

  return {
    month: now.month() + 1,
    day: now.date(),
  };
};

/**
 * Returns the correct day for February 29th based on the current year.
 *
 * - Returns `29` if the current year is a leap year.
 * - Returns `28` if the current year is not a leap year.
 */
export const getFebruary29Day = (): number => {
  return dayjs().isLeapYear() ? 29 : 28;
};
