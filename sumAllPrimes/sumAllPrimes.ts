function sumAllPrimes(num: number): number {

    let n = 2;
    let sum = 0;

    while(n <= num) {
        sum = isPrime(n) ? sum + n : sum; 
        n++;
    }
    //console.log(sum)
    return sum

}

function isPrime(num) {
    const divisors = [];
    for(let i = 2; i < num ; i ++) {
        if(num % i === 0) {
            divisors.push(i)
        }
    }
    return !divisors.length || false

}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));