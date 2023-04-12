import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should test initial state", () => {
    render(<App />);
    expect(screen.getByTestId("calculator-form")).toBeInTheDocument();
  });
});
