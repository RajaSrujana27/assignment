localStorage.setItem('mykey', 'myValue');
let value = localStorage.getItem('myKey');
console.log(value); 
sessionStorage.setItem('mySessionKey','mySessionValue');
let sessionValue = sessionStorage.getItem('mySessionKey');
console.log(sessionValue);
localStorage.removeItem('myKey');

let removedValue = localStorage.getItem('myKey');
console.log(removedValue); 
sessionStorage.removeItem('mySessionKey');

let removedSessionValue = sessionStorage.getItem('mySessionKey');
console.log(removedSessionValue); 
let myObject = {
    name: "srujana",
    age: 21,
    city: "Amalapuram"
};

localStorage.setItem('myObject', JSON.stringify(myObject));
sessionStorage.setItem('mySessionObject', JSON.stringify(myObject));

let storedObject = JSON.parse(localStorage.getItem('myObject'));
let storedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(storedSessionObject); 

localStorage.clear();
sessionStorage.clear();


let localStorageItem = localStorage.getItem('myObject');
console.log(localStorageItem);

let sessionStorageItem = sessionStorage.getItem('mySessionObject');
console.log(sessionStorageItem); 
