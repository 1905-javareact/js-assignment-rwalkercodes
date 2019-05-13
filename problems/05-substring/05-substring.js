/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let strArr = ''
        if(startIndex < 0 || endIndex > someStr.length){
            throw 'Incorrect Input'
        } else{
            for(let i = 0; i < someStr.length; i++){
                if(i >= startIndex && i < endIndex){
                    strArr += someStr[i]
                }
            }
        }
    return strArr
}

console.log(substring('hello', 0, 4))