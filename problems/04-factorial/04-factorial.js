/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if (sumNum == 0 || sumNum == 1){
        return 1
    }
    if(sumNum > 0){
        return sumNum = factorial(sumNum - 1) * sumNum
    }
}
console.log(factorial(8))

// function is called with value passed
// if statement checks if value is 0 or 1
// if 0 or 1 it returns 1 ( it will never hit zero )
// if value greater 0 it returns the factorial of that value which is where the recursion lives
// the function is called again with -1 subtracted from the value
// once the value eventually equals 1, we then multiply by the previous value through
// ex.) if the value is 4 then it looks like this. 1*2(=2)*3(=6)*4(=24)
// we get the factorial of the value passed by recursion 
/* we start with the original value and subtracts all the way til we get to one 
  then multiplies back up by each value til we get to our original value*/