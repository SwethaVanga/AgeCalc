import { FC } from "react";
import { AgeResponse } from "../../types/response";
import { humanizeValue } from "../../util/util";
import "./AgeIndicator.css";

export const AgeIndicator: FC<{
  age: AgeResponse;
}> = ({ age: { months, years, days } }) => {
  if (years < 0 && months < 0 && days < 0) {
    return null;
  }
  return (
    <div data-testid="age-indicator" className="AgeIndicator">
      <span data-testid="age-label">Current Age:</span>
      <span data-testid="age-year">{humanizeValue(years, "Year")},</span>
      <span data-testid="age-month">{humanizeValue(months, "Month")},</span>
      <span data-testid="age-day">{humanizeValue(days, "Day")}</span>
    </div>
  );
};
