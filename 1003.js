var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var x = parseInt(lines.shift());
var y = parseInt(lines.shift());

var soma = x + y;

console.log("SOMA = " + soma);