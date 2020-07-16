export const seconds2Str = (seconds: number): string =>
  `${Math.floor(seconds / 60) || 0}`.padStart(2, "0") +
  ":" +
  `${Math.floor(seconds) % 60}`.padStart(2, "0");
