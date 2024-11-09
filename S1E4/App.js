// import { sum,x } from "./sum.js";

// var name = "saad";

var a = 10;
var b = 10;

// const { x, sum } = require("./calculate/sum");

// const { calculateMutiply } = require("./calculate/multiply");

const { calculateMutiply, sum } = require("./calculate")

calculateMutiply(a, b);
sum(a, b);
// console.log(globalThis === global);

// console.log(x);


const data=require("./data.json")

console.log(data);


const x=require("./xyz");

console.log(x);
