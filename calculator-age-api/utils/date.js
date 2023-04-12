const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);
dayjs.extend(customParseFormat);

const extendedDayjs = dayjs;
const calculateAgeWithDayjs = (dayjsDob) =>
  dayjs.duration(dayjs().diff(dayjsDob));

exports.extendedDayjs = extendedDayjs;
exports.calculateAgeWithDayjs = calculateAgeWithDayjs;
module.exports = exports;
