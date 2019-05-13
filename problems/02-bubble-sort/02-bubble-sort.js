/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let numArray = [10, 4, 1, 7, 9, 3, 5, 8, 2, 6]
function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++){
        for(let j = 0; j < numArray.length; j++){
            if(numArray[i] < numArray[j]){
                let swap = numArray[i]
                numArray[i] = numArray[j]
                numArray[j] = swap
            }
        }
    }
    return numArray
}

console.log(bubbleSort(numArray))