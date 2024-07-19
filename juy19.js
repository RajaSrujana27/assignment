//array method
//push and pop
let array1=[]
array1.push(1)
array1.push(2)
array1.push(3)
array1.pop()
console.log(array1)
//shift and unshift
let array2=["a","b","c"]
array2.shift()
array2.unshift("z")
console.log(array2)
//slice
let array3 = [1, 2, 3, 4, 5]
let newArray = array3.slice(1, 4)
console.log(newArray)
//splice
let array4 = ["red", "green", "blue", "yellow"]
array4.splice(2, 1, "purple", "orange")
console.log(array4)

//creating and manipulating objects
//object creation
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car)
//property deletion
delete car.year 
console.log(car)
//nested objects
let person = {
    name: "srujana",
    age: 20,
    address: {
        street: "st street",
        city: "Hyderabad",
        zipcode: "500003"
    }
};
console.log(person);
//Accessing object properties
console.log(person.address.city)
//basic arrow function
const greet = (name) => `Hello, ${name}!`
console.log(greet("srujana"))

/***
 * output
 * [ 1, 2 ]
[ 'z', 'b', 'c' ]
[ 2, 3, 4 ]
[ 'red', 'green', 'purple', 'orange', 'yellow' ]
{ make: 'Toyota', model: 'Corolla', year: 2020 }
{ make: 'Toyota', model: 'Corolla' }
{
  name: 'srujana',
  age: 20,
  address: { street: 'st street', city: 'Hyderabad', zipcode: '500003' }
}
Hyderabad
Hello, srujana!
 */