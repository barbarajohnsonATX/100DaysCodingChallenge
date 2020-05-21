function longestSubSequence(s1: string, s2: string): string {

    let result1 = []  
    let S1 = s1.split('')
    let S2 = s2.split('')

    let n2Start = 0
     for(let i = 0; i < S1.length; i++) {
         //adjust second string start 
        for(let j = n2Start; j < S2.length; j++) {
            if(S1[i] === S2[j]) {
                result1.push(S2[j])
                n2Start++
                i++
            }
            
        }
        
    }

    


     return result1.join(',')
}

console.log(longestSubSequence('abcdehfg', 'zbxxedhhg'))

console.log(longestSubSequence('abazdc', 'bacbad'))
console.log(longestSubSequence('aaa', 'aa'))
console.log(longestSubSequence('abba', 'abcaba'))

