"use strict";

module.exports.ordered = function(array) {
  var sum1 = 0;
  var sum2 = 0;

  array.forEach(function(value, i) {
    sum1 += ((2 * (i + 1)) - array.length - 1) * Number(value);
    sum2 += Number(value);
  });

  return sum1 / (Math.pow(array.length, 2) * (sum2 / array.length));
};

module.exports.unordered = function(array) {
  var sum1 = 0;
  var sum2 = 0;

  array.forEach(function(value1, i) {
    array.forEach(function(value2, j) {
      if (i != j) {
        sum1 += Math.abs(Number(value1) - Number(value2));
      }
    });

    sum2 += Number(value1);
  });

  return sum1 / (2 * Math.pow(array.length, 2) * (sum2 / array.length));
};
