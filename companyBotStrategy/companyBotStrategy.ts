function companyBotStrategy(trainingData: number[][]): number {

    //nx2 array
    //n = trainingData.length, 2 = trainingData[0].length
    //filter for trainingData[0] === 1, result in correct array
    //reduce to add to accum, increment 
    //return sum/correct.length 

 
    let correct = trainingData.filter( trainer => trainer[1] === 1);
    console.log(correct)

    let total = correct.reduce( (accum,current) =>  accum + current[0] , 0)                      
    return (correct.length > 0 ? (total/correct.length).toFixed(1): 0);

 
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
