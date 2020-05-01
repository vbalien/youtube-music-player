export const seconds2Str = (seconds: number): string =>
  `${Math.floor(seconds / 60)}`.padStart(2, "0") +
  ":" +
  `${seconds % 60}`.padStart(2, "0");
