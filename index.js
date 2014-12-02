"use strict";

var mean = function(array) {
  var sum = 0;

  array.forEach(function(value) {
    sum += value;
  });

  return sum / array.length;
};

var gini = function(array) {
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

module.exports.gini = gini;
