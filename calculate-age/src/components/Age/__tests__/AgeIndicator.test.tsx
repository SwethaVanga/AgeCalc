import { render, screen } from "@testing-library/react";
import { AgeIndicator } from "../AgeIndicator";

describe("AgeIndicator", () => {
  it("should test age label, year, month and day", () => {
    render(
      <AgeIndicator
        age={{
          years: 1,
          months: 2,
          days: 29,
        }}
      />
    );
    expect(screen.getByTestId("age-label")).toBeInTheDocument();
    expect(screen.getByTestId("age-year")).toHaveTextContent("1 Year");
    expect(screen.getByTestId("age-month")).toHaveTextContent("2 Months");
    expect(screen.getByTestId("age-day")).toHaveTextContent("29 Days");
  });

  it("should test age:  year, month and day singular format", () => {
    render(
      <AgeIndicator
        age={{
          years: 1,
          months: 1,
          days: 1,
        }}
      />
    );
    expect(screen.getByTestId("age-label")).toBeInTheDocument();
    expect(screen.getByTestId("age-year")).toHaveTextContent("1 Year");
    expect(screen.getByTestId("age-month")).toHaveTextContent("1 Month");
    expect(screen.getByTestId("age-day")).toHaveTextContent("1 Day");
  });

  it("should test month and day only", () => {
    render(
      <AgeIndicator
        age={{
          years: 0,
          months: 1,
          days: 1,
        }}
      />
    );

    expect(screen.getByTestId("age-year")).toHaveTextContent("0 Year");
    expect(screen.getByTestId("age-month")).toHaveTextContent("1 Month");
    expect(screen.getByTestId("age-day")).toHaveTextContent("1 Day");
  });
});
