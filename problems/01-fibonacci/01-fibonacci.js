/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
        // this is a base case
        if(n === 0){
            console.log('plus 0');
            return 0
        }
        //this is a base case
        if(n === 1){
            console.log('1+');
            return 1
        }
    return fib(n-1) + fib(n-2)
}
console.log(fib(6))