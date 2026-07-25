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
  const now = new Date();

  return {
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
};
