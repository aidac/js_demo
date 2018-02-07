"use strict";

let a;
let a_str;
let b;
let b_str;


a_str = prompt("iveskite skaiciu a");
b_str = prompt("iveskite skaiciu b");

a = Number(a_str);
b = Number(b_str);

document.write(`a = ${a}, b = ${b}<br>a + b = ${a + b}<br> a - b = ${a - b}<br> a | b = ${a % b}`);