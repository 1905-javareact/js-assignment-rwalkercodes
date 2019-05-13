/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let newArr = []
    for(i = 0; i < someArr.length; i++){
        if(i !== index){
            newArr.push(someArr[i])
        }
    }
    console.log(newArr);
    
    return [someArr[index]]
}

//let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let stringArr = ['one', 'two', 'three']

//let shouldBeSix = spliceElement(myArray, 5)
let noTwo = spliceElement(stringArr, 1)

console.log(noTwo)