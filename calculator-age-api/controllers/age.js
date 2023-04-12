const { calculateAgeWithDayjs, extendedDayjs } = require("../utils/date");

const calculateAge = (req, res) => {
  const { dob } = req.query ?? {};
  const dayjsDob = extendedDayjs(dob, "YYYY-MM-DD");
  if (!dob || !dayjsDob.isValid()) {
    return res.send(400, {
      error: "Invalid dob",
    });
  }
  const duration = calculateAgeWithDayjs(dayjsDob);
  res.send({
    age: {
      years: duration.years(),
      months: duration.months(),
      days: duration.days(),
    },
  });
};

exports.calculateAge = calculateAge;

module.exports = exports;
