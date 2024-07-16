// Multiplication Table for 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Sum of even numbers between 1 and 50
let sumEven = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(`Sum of even numbers between 1 and 50 is ${sumEven}`);

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Countdown Timer: Prime numbers from 2 to 20
let num = 2;
while (num <= 20) {
    if (isPrime(num)) {
        console.log(num);
    }
    num++;
}

// Sum of odd numbers between 1 and 20
let sumOdd = 0;
let j = 1;
while (j <= 20) {
    if (j % 2 !== 0) {
        sumOdd += j;
    }
    j++;
}
console.log(`Sum of odd numbers between 1 and 20 is ${sumOdd}`);

// Factorial Calculation
let number = 5; // You can change this number to calculate the factorial of a different number
let factorial = 1;
let i = number;
while (i > 0) {
    factorial *= i;
    i--;
}
console.log(`Factorial of ${number} is ${factorial}`);
/**
 * output
 * 5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
Sum of even numbers between 1 and 50 is 650
2
3
5
7
11
13
17
19
Sum of odd numbers between 1 and 20 is 100
Factorial of 5 is 120
 */