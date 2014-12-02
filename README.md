# gini [![NPM version](http://img.shields.io/npm/v/gini.svg?style=flat-square)](https://www.npmjs.org/package/gini)

Calculate the [Gini coefficient](http://en.wikipedia.org/wiki/Gini_coefficient) of a data set.

## Installation

```bash
$ npm install gini
```

## Usage

```javascript
var gini = require("gini").gini;
var data = [0, 14, 2, 9, 3, 8, 13, 23, 57, 49];
var result = gini(data);
console.log(result);
```
