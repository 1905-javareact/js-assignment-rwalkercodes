/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let strArr = someStr.split('').reverse().join('')
    return strArr
}
console.log(reverseStr('hello'))

// someStr is our string
// we asign our string(someStr) to a variable(strArr)
// .split('') transfers our string into an array of the characters in that string
// .reverse() reverese doesn't work on strings so that's why we have to make our array of the string
// .join('') transfers our array BACK into a string
// we then return our variable which is our new reversed string
// for all of this to work we need to call our function with a string passed into it
// console.log() the function to see the results