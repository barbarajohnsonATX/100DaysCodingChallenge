function alphabetSubsequence(s: string): boolean {
    let sArray = s.split('')
    let sCodes = [];

    sArray.forEach( s => {
        sCodes.push(s.charCodeAt(0))

    })

    //Set keeps only unique values
    let copy = new Set(sCodes) 

    let sorted = [...sCodes].sort( (a, b) => a - b)
    console.log(sCodes.join(','))
    console.log(sorted.join(','))

     if(copy.size !== sCodes.length ||  sCodes.join(',') !== sorted.join(',')) {
        return false
    }
    return true 
     
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
