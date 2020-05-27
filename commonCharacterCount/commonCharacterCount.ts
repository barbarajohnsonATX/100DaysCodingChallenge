function commonCharacterCount(s1: string, s2: string): number {
    let s1Obj = {}
    let s2Obj = {}

    let s1Array = s1.split('');
    let s2Array = s2.split('');
    for(let c of s1Array) {
        s1Obj[c] = s1Obj[c]+ 1 || 1;
    }

   for(let c of s2Array) {
        s2Obj[c] = s2Obj[c]+ 1 || 1;
    }

    console.log(s1Obj, s2Obj)

    let s1Keys = Object.keys(s1Obj)
    let s2Keys = Object.keys(s2Obj)

   let common = s1Keys.map( s1Key => {
       return s2Keys.find(s2Key => s1Key === s2Key) 
    }).filter(elem => elem !== undefined)
  

   console.log(common)

   let count = 0;
   for(let i = 0; i < common.length; i++) {
       count = count + Math.min(s1Obj[common[i]], s2Obj[common[i]])
   }
   
   console.log(count)
    
   
   return count

}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('aabccef', 'fadcaab'));
console.log(commonCharacterCount('zbc', 'zbcc'));