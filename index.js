"use strict";

function mean(array) {
  var sum = 0;

  array.forEach(function(value) {
    sum += value;
  });

  return sum / array.length;
}

module.exports.ordered = function(array) {
  var sum = 0;
  array.forEach(function(value, i) {
    sum += ((2 * (i + 1)) - array.length - 1) * value;
  });

  return sum / (Math.pow(array.length, 2) * mean(array));
};

module.exports.unordered = function(array) {
  var sum = 0;

  array.forEach(function(value1, i) {
    array.forEach(function(value2, j) {
      if (i != j) {
        sum += Math.abs(value1 - value2);
      }
    });
  });

  return sum / (2 * Math.pow(array.length, 2) * mean(array));
};
