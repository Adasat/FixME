const lodash = require('lodash');


function greet(name) {
  console.log('Hello, ' + name)
}

greet()

let person = {
    name: "John",
    age: 30,
    city: "New York"



sayHi()

const sayHi = (name) => {
    console.log(`Hi ${name}`)
}


let myBuyList = ['coke', 'water', 1, true, {childs: [1, 4, "coche"}]

console.log(myBuyList)

let array = [1, 2, 3, 4, 5];
console.log(lodash.reverse(array));


function multiply(a, b) {
    return a * b;
}


function add(a, b) {
    return a + b;



console.log(multiply(5, c));

console.log(add('2' + 4))


let car = {
    brand: "Toyota",
    model: "Corolla"
};

console.log(car.year); 

const z = 10;
z = 20;
console.log(z); 


function fetchData(callback) {
    // Simulación de una llamada a una API
    let data = { id: 1, name: "John Doe" };
    callback(data);
}

fetchData();
 


async function fetchUser() {
  let response = fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = response.json()
  console.log(data)
}

fetchUser()

