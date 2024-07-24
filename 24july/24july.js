// 1. Using forEach
const numbers = [1, 2, 3, 4, 5];

function printNumbers(array) {
  array.forEach(number => {
    console.log(number);
  });
}

printNumbers(numbers);

// 2. Using map
const numbers2 = [1, 2, 3, 4, 5];

function doubleNumbers(array) {
  const doubledNumbers = array.map(number => number * 2);
  console.log(doubledNumbers);
}

doubleNumbers(numbers2);

// 3. Using filter
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbersArray);
console.log('Even numbers:', evenNumbers);

// 4. Using reduce
function sumOfNumbers(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const sum = sumOfNumbers(numbersArray);
console.log('Sum of numbers:', sum);

// 5. Using find
const people = [
    { name: 'Srujana', age: 20 },
    { name: 'praneeth', age: 25 },
    { name: 'Alekhya', age: 40 },
    { name: 'chandu', age: 35 }
];

function findPersonOlderThan25(people) {
    return people.find(person => person.age > 25);
}

const personOlderThan25 = findPersonOlderThan25(people);
console.log('First person older than 25:', personOlderThan25 ? personOlderThan25.name : 'None');

// 6. Using findIndex
function findIndexYoungerThan18(people) {
    return people.findIndex(person => person.age < 18);
}

const indexYoungerThan18 = findIndexYoungerThan18(people);
console.log('Index of first person younger than 18:', indexYoungerThan18);
/***
 * OUTPUT:
 * -------
1
2
3
4
5
[ 2, 4, 6, 8, 10 ]
Even numbers: [ 2, 4, 6, 8, 10 ]
Sum of numbers: 55
First person older than 25: Alekhya
Index of first person younger than 18: -1
 */