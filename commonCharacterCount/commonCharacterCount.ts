function commonCharacterCount(s1: string, s2: string): number {
    let s1Obj = getCharsList(s1);
    let s2Obj = getCharsList(s2);

    let s1Keys = Object.keys(s1Obj)
     
    let count = 0;

    for(let key of s1Keys) {
         if(s2Obj.hasOwnProperty(key)) {
             count = count + Math.min(s1Obj[key], s2Obj[key])

         }
        
    }
   
   console.log(count)
   return count

}

function getCharsList(str) {
    let obj = {}
    for(let c of str.split('')) {
        obj[c] = obj[c]+ 1 || 1;
    }
    return obj
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('aabccef', 'fadcaab'));
console.log(commonCharacterCount('zbc', 'zbcc'));