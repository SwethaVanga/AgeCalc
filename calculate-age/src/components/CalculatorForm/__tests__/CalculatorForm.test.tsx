import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { CalculatorForm } from "../CalculatorForm";
import * as apiService from "../../../api/dateApi";

jest.mock("../../../api/dateApi");

console.error = jest.fn();

describe("App", () => {
  beforeEach(() => {
    (console.error as jest.Mock).mockClear();
  });
  it("should test initial state", () => {
    render(<CalculatorForm />);
    expect(screen.getByTestId("calculator-form")).toBeInTheDocument();
    expect(screen.getByTestId("calculator-form-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("age-indicator")).not.toBeInTheDocument();
  });

  it("should select date and show age", async () => {
    const getAgeMock = jest.spyOn(apiService, "getAge").mockResolvedValue({
      years: 2,
      months: 2,
      days: 23,
    });
    render(<CalculatorForm />);
    expect(screen.getByTestId("date-input")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("date-input"), {
      target: {
        value: "2003-09-04",
      },
    });
    fireEvent.click(screen.getByTestId("calculator-form-btn"));

    await waitFor(() => {
      expect(getAgeMock).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(screen.queryByTestId("age-indicator")).toHaveTextContent(
        "Current Age:2 Years,2 Months,23 Days"
      );
    });
  });

  it("should test api failure", async () => {
    const getAgeMock = jest
      .spyOn(apiService, "getAge")
      .mockRejectedValue(new Error("api error"));
    render(<CalculatorForm />);
    expect(screen.getByTestId("date-input")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("date-input"), {
      target: {
        value: "2003-09-04",
      },
    });
    fireEvent.click(screen.getByTestId("calculator-form-btn"));
    await waitFor(() => {
      expect(getAgeMock).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(console.error).toHaveBeenNthCalledWith(1, "error is", "api error");
    });
    await waitFor(() => {
      expect(screen.queryByTestId("age-indicator")).not.toBeInTheDocument();
    });
  });
});
