function allLongestStrings(inputArray: string[]): string[] {
     let maxLength = inputArray[0].length

    for(let i = 1; i < inputArray.length; i ++){
        maxLength = Math.max(inputArray[i].length, maxLength)
    }

    return inputArray.filter( s => s.length === maxLength)

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));