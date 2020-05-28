function sumOddFibonacciNums(num: number): number {
//1, 1, 2, 3, 5, 8, 13
//sumFibs(10) sum of all odd fib nums less than 10 = 10 (1 + 1 + 3 + 5)

    let fib = [1, 1];
    let i = 2;

    while(1) {
        let sum = fib[i-1] + fib[i-2];
        if(sum > num) {
            return fib.filter(e => e % 2 !== 0).reduce( (accum, item) => accum + item, 0);
        }

        fib[i++] = sum;
    }
 
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));//
 