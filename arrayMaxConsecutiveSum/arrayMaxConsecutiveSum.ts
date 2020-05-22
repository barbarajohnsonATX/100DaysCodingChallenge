function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {

    let maxSum = 0;
    let n = 0

    while(n < inputArray.length ) {
        let sum = 0
        for(let ptr = n; ptr < (n + k)  && ptr < inputArray.length ; ptr++) {
            sum = sum + inputArray[ptr]
         }
         console.log(sum)
         maxSum = maxSum > sum ? maxSum : sum 
         n++
    }
    return maxSum

}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));