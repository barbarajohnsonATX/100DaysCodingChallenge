function alphabetSubsequence(s: string): boolean {
    let sArray = s.split('')
    for(let i = 0; i < sArray.length - 1; i++) {
        if(sArray[i].charCodeAt(0) >= sArray[i+1].charCodeAt(0)) {
            return false
        }
    }
    return true


}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
