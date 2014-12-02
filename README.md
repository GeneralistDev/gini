# gini [![NPM version](http://img.shields.io/npm/v/gini.svg?style=flat-square)](https://www.npmjs.org/package/gini)

Calculate the [Gini coefficient](http://en.wikipedia.org/wiki/Gini_coefficient) of a data set.

## Installation

```bash
$ npm install gini
```

## Usage

For data sets that are already ordered ascendingly, use the `ordered` function:

```javascript
var gini = require("gini");
var data = [0, 2, 3, 8, 9, 13, 14, 23, 49, 57];
var result = gini.ordered(data);
console.log(result);
```

For data sets in any other order, use the `unordered` method:

```javascript
var gini = require("gini");
var data = [0, 14, 2, 9, 3, 8, 13, 23, 57, 49];
var result = gini.unordered(data);
console.log(result);
```
