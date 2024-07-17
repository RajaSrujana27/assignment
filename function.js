// Function without parameters
function greet() {
    console.log("Hello, World!");
}
greet();

// Function with parameters
function addNumbers(a, b) {
    console.log(a + b);
}
console.log('function with parameters')
addNumbers(5, 3);
addNumbers(10, 20);
addNumbers(-5, 8);

// Function with return statements
function multiply(x, y) {
    return x * y;
}
console.log('fuction with return statements')
let result = multiply(4, 5);
console.log(`${result}`);

result = multiply(7, 3);
console.log(`${result}`);

result = multiply(-2, 6);
console.log(`${result}`);

// Combining Functions
function calculateRectangleArea(length, width) {
    return multiply(length, width); 
  }
  const area = calculateRectangleArea(6, 5);
  console.log(`Area of the rectangle: ${area}`);
  
  // Default Parameters
  function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greetUser("srujana");
  greetUser(); 
  /**
   * output:
   * Hello, World!
function with parameters
8
30
3
fuction with return statements
20
21
-12
Area of the rectangle: 30
Hello, srujana!
Hello, Guest!
   */