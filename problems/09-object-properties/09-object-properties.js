/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    this.someObj = someObj
    
}

let ryanWalker = new objectProperties('Ryan Walker')
let myComputer = new objectProperties('Dell')
let myNotebook = new objectProperties('Five Star')
let myAge = new objectProperties(23)

console.log(ryanWalker)
console.log(myComputer)
console.log(myNotebook)
console.log(myAge)