function maxMultiple(divisor: number, bound: number): number  {

    let start = bound;
    while(start) {
        
        if(start % divisor === 0) {
            return start
        }
        start--

    }
}

console.log(maxMultiple(3,10));
console.log(maxMultiple(5,8));