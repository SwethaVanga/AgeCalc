import React, { useCallback, useState } from "react";
import { getAge } from "../../api/dateApi";
import { AgeResponse } from "../../types/response";
import { AgeIndicator } from "../Age/AgeIndicator";
import { DateInput } from "../DateInput/DateInput";
import "./CalculatorForm.css";

export const CalculatorForm = () => {
  const [dob, setDob] = useState("");
  const [calculatedAge, setCalculatedAge] = useState<null | AgeResponse>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const age = await getAge(dob);
        setCalculatedAge(age);
      } catch (e) {
        console.error("error is", (e as Error).message);
      }
    },
    [setCalculatedAge, dob]
  );
  return (
    <div className="CalculateCard">
      <h1 className="CalculateCardHeading">Age Calculator</h1>
      <form
        data-testid="calculator-form"
        onSubmit={handleSubmit}
        className="CalculateForm"
      >
        <DateInput
          value={dob}
          label="Enter date of birth"
          handleDateChange={setDob}
          disableFutureDates
          required
        />

        <button
          type="submit"
          className="CalculateButton"
          data-testid="calculator-form-btn"
        >
          Calculate Age
        </button>

        {calculatedAge && <AgeIndicator age={calculatedAge} />}
      </form>
    </div>
  );
};
