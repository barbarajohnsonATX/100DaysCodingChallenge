function crossingSum(matrix: number[][], a: number, b: number): number {

    let intersection = matrix[a][b]
 
    let sum = 0;
    for(let i = 0; i < matrix[0].length; i++) {
        sum += matrix[a][i];
        console.log(sum)
    }

    for(let j = 0; j < matrix.length; j++){
        sum += matrix[j][b];
        console.log(sum)
    }

    return sum - intersection
  
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));