// Initialize an object with nested properties
const originalObject = {
    name: 'Srujana',
    address: {
      city: 'Allavaram',
      zip: '12345'
    }
};
  const shallowCopy1 = Object.assign({}, originalObject);
  const shallowCopy2 = { ...originalObject };
  
  shallowCopy1.address.city = 'Amalapuram';
  shallowCopy2.address.zip = '54321';
  console.log('Original Object:', originalObject);
  console.log('Shallow Copy using Object.assign:', shallowCopy1);
  console.log('Shallow Copy using spread operator:', shallowCopy2);
  
  // Initialize an object with nested properties
const originalObj2 = {
    name: 'sai',
    address: {
      city: 'Nizampet',
      zip: '94101'
    }
  };
  const deepCopy = JSON.parse(JSON.stringify(originalObj2));
  
  deepCopy.address.city = 'chintal';
  deepCopy.address.zip = '98101';
  console.log('Original Object:', originalObj2);
  console.log('Deep Copy:', deepCopy);

  // Initialize two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Initialize two objects
let object1 = {a: 1, b: 2};
let object2 = {c: 3, d: 4};
let combinedObject = {...object1, ...object2};
console.log(combinedObject);

// Function that sums any number of arguments
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7)); 
console.log(sum(8, 9)); 

// Initialize an array with at least five elements
let array = [10, 20, 30, 40, 50];
let [first, second, ...rest] = array;
console.log(first); 
console.log(second); 
console.log(rest); 

/****
 * output:
  Original Object: { name: 'Srujana', address: { city: 'Amalapuram', zip: '54321' } }
Shallow Copy using Object.assign: { name: 'Srujana', address: { city: 'Amalapuram', zip: '54321' } }
Shallow Copy using spread operator: { name: 'Srujana', address: { city: 'Amalapuram', zip: '54321' } }
Original Object: { name: 'sai', address: { city: 'Nizampet', zip: '94101' } }
Deep Copy: { name: 'sai', address: { city: 'chintal', zip: '98101' } }
[ 1, 2, 3, 4, 5, 6 ]
{ a: 1, b: 2, c: 3, d: 4 }
6
22
17
10
20
 */





  