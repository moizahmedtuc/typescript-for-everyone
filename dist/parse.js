"use strict";
const numericString = "42";
const decimalString = "3.14";
const numericValue = parseInt(numericString, 10);
const decimalValue = parseFloat(decimalString);
console.log(numericValue);
console.log(decimalValue);
const newNumber = 42;
const myString = newNumber.toString();
const myNumber = 42;
const stringMethod = myNumber.toString();
const templateLiteral = `${myNumber}`;
console.log(stringMethod);
console.log(templateLiteral);