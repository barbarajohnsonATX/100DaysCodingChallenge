function allLongestStrings(inputArray: string[]): string[] {
     let maxLength = inputArray[0].length

     inputArray.forEach( word => {
        maxLength = Math.max(word.length, maxLength)
     })
    

    return inputArray.filter( s => s.length === maxLength)

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));