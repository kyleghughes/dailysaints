export function getTodayKey() {
  const now = new Date();

  return {
    month: now.getMonth() + 1, // JS months are 0-based
    day: now.getDate(),
  };
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
