"use strict";

var stats = require('simple-statistics');

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

var strArrToNumberArr = function(stringData) {
  var numberData = [stringData.length];
  stringData.forEach(function(stringValue, i) {
    numberData[i] = Number(stringValue);
  });

  return numberData;
};

module.exports.giniraj = function(data) {
  if (!Array.isArray(data)) {
    throw new Error("Data set is not an array.");
  }

  if (data.length < 1) {
    return 0.0; // Not computable
  }

  if (data.length === 1) {
    return 0.0;
  }

  // Convert all string data to number data to allow calculation of mean
  data = strArrToNumberArr(data);

  var relVars = 0;
  var descMean = stats.mean(data);

  if (descMean === 0.0) {
    return 0.0; // Only possible if all data is zero
  }

  data.forEach(function(ivalue, i) {
    data.forEach(function(jvalue, j) {
      if (i != j) {
        relVars += (Math.abs(ivalue - jvalue));
      }
    });
  });

  relVars = relVars / (2.0 * Math.pow(data.length, 2));
  return (relVars / descMean); // Return gini value
};
