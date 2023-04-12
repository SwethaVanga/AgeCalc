const { extendedDayjs, calculateAgeWithDayjs } = require("../date");

describe("utils", () => {
  it("calculateAgeWithDayjs should return duration", () => {
    const duration = calculateAgeWithDayjs(
      extendedDayjs("2019-03-04", "YYYY-MM-DD")
    );

    expect(duration.years()).toBe(4);
    expect(duration.months()).toBe(1);
    expect(duration.days()).toBe(10);
  });
});
