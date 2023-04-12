import { FC, ReactNode } from "react";
import "./DateInput.css";

export const DateInput: FC<{
  handleDateChange: (val: string) => void;
  label: ReactNode;
  value: string;
  disableFutureDates?: boolean;
  required?: boolean;
}> = ({ handleDateChange, label, value, disableFutureDates, required }) => {
  return (
    <>
      <label className="Label">{label}</label>
      <input
        type="date"
        data-testid="date-input"
        value={value}
        onChange={(e) => handleDateChange(e.target.value)}
        className="DateInput"
        placeholder="Enter Date"
        required={required}
        {...{
          ...(disableFutureDates && {
            max: new Date().toISOString().substring(0, 10),
          }),
        }}
      />
    </>
  );
};
