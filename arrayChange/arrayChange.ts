function arrayChange(inputArray: number[]): number {
    let moves = 0;
 
    
    for(let i  = 1; i < inputArray.length; i++) {
            if(inputArray[i] !== inputArray[i-1] + 1) {
                moves += Math.abs(inputArray[i] - inputArray[i-1]) + 1
                inputArray[i] = inputArray[i - 1] + 1
              }
 
    }
    return moves 
 
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 1]));