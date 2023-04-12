export const humanizeValue = (value: number, label: string) =>
  `${value} ${label}${value > 1 ? "s" : ""}`;