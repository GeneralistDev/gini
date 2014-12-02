#!/usr/bin/env node

"use strict";

var gini = require("./");
var pkg = require("./package.json");
var args = process.argv.slice(2);

if (args.indexOf("--help") !== -1 || args.length <= 0) {
  console.log([
    "",
    pkg.name + " - " + pkg.description,
    "",
    "Usage:",
    "",
    "  " + pkg.name + " <1> <2> <3> ... <N>"
  ].join("\n"));
  return;
}

if (args.indexOf("--version") !== -1) {
  console.log(pkg.version);
  return;
}

console.log(gini.unordered(args));
