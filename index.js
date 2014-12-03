"use strict";

module.exports.ordered = function(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data set is not an array.");
  }

  var sum1 = 0;
  var sum2 = 0;

  data.forEach(function(value, i) {
    value = Number(value); // Cast.

    sum1 += ((2 * (i + 1)) - data.length - 1) * value;
    sum2 += value;
  });

  return sum1 / (Math.pow(data.length, 2) * (sum2 / data.length));
};

module.exports.unordered = function(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data set is not an array.");
  }

  var sum1 = 0;
  var sum2 = 0;

  data.forEach(function(value1, i) {
    value1 = Number(value1); // Cast.

    data.forEach(function(value2, j) {
      if (i != j) {
        value2 = Number(value2); // Cast.

        sum1 += Math.abs(value1 - value2);
      }
    });

    sum2 += value1;
  });

  return sum1 / (2 * Math.pow(data.length, 2) * (sum2 / data.length));
};
