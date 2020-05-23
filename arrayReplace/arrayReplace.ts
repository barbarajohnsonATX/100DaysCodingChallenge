function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   
    return  inputArray.map( num => {
        return num === elemToReplace ? substitutionElem : num
    })
 }

console.log(arrayReplace([1, 2, 1], 1, 3));