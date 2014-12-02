# gini [![NPM version](http://img.shields.io/npm/v/gini.svg?style=flat-square)](https://www.npmjs.org/package/gini)

Calculate the [Gini coefficient](http://en.wikipedia.org/wiki/Gini_coefficient) of a data set.

## Installation

```bash
$ npm install gini
```

## Usage

For *unordered* data sets, call the `calculate1` method:

```javascript
var gini = require("gini");
var data = [0, 14, 2, 9, 3, 8, 13, 23, 57, 49];
var result = gini.calculate1(data);
console.log(result);
```

For *ordered* data sets, call the `calculate2` method:

```javascript
var gini = require("gini");
var data = [0, 2, 3, 8, 9, 13, 14, 23, 49, 57];
var result = gini.calculate2(data);
console.log(result);
```
