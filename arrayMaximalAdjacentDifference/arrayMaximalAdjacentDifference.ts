function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let max = 0;

    for(let i = 0; i < inputArray.length - 1; i++) {

            let absDiff = Math.abs(inputArray[i] - inputArray[i+1]) 
            console.log(absDiff)
            max = max > absDiff ? max : absDiff
    }

    console.log(max)
    return max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));