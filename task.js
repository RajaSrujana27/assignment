// Declare variables of different data types
let str = "Hello, World!";
let num = 42;
let bool = true;
let undef;
let nll = null;

// Print each variable and its type using console.log and the typeof operator
console.log("Value: " + str + ", Type: " + typeof str);
console.log("Value: " + num + ", Type: " + typeof num);
console.log("Value: " + bool + ", Type: " + typeof bool);
console.log("Value: " + undef + ", Type: " + typeof undef);
console.log("Value: " + nll + ", Type: " + typeof nll); // Note: typeof null is 'object'

// Mathematical Operators
let a = 10;
let b = 5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));

// Comparator Operators

// Use comparator operators to compare two variables of the same datatype
console.log("Equality (==): " + (a == b));
console.log("Strict Equality (===): " + (a === b));
console.log("Inequality (!=): " + (a != b));
console.log("Strict Inequality (!==): " + (a !== b));
console.log("Greater than (>): " + (a > b));
console.log("Less than (<): " + (a < b));

// Comparing different data types
console.log("Inequality (!=)  " + (str != num));
console.log("Strict Inequality (!==) " + (str !== num));
console.log("Greater than (>)  " + (str > num));
console.log("Less than (<)  " + (str < num));
console.log("Greater than or equal to (>=) " + (str >= num));
console.log("Less than or equal to (<=) " + (str <= num));