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

    let s1Keys = Object.keys(s1Obj)
     
    let common = []
    for(let key of s1Keys) {
         if(s2Obj.hasOwnProperty(key)) {
             common.push(key)
         }
        
    }
     console.log(common)


   let count = 0;
   for(let i = 0; i < common.length; i++) {
       count = count + Math.min(s1Obj[common[i]], s2Obj[common[i]])
   }
   
   return count

}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('aabccef', 'fadcaab'));
console.log(commonCharacterCount('zbc', 'zbcc'));