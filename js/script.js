"use strict";
let a;
let b;

a = +prompt("iveskite skaiciu a");
if (isNaN(a)) {
    do {
        a = +prompt("iveskite SKAICIU a");
    } while (isNaN(a));
}

b = +prompt("iveskite skaiciu b");
if (isNaN(b)) {
    do {
        b = +prompt("iveskite SKAICIU b");
    } while (isNaN(b));
}

document.write(`a = ${a}, b = ${b}<br>a + b = ${a + b}<br> a - b = ${a - b}<br> a | b = ${a % b}`);