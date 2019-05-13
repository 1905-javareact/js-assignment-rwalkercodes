/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let rWalk = {
    name: 'Ryan',
    age: 23
}

function person(name, age){
    this.name = name
    this.age = age
}

let Ryan = new person("Ryan", 23)
let Jordan = new person("Jordan", 15)

console.log(Ryan)
console.log(Jordan)