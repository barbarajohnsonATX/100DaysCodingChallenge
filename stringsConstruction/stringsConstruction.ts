function stringsConstruction(a: string, b: string): number {

    //get each key of A in an array
    //for each key of A, push difference of B[key] and A[key] and push to new array

    let charsAList = getCharsList(a);
    let charsAKeys = Object.keys(charsAList);
    let charsBList = getCharsList(b);
    let counts = []

    for(let i = 0; i < charsAKeys.length; i++) {
       counts.push(Math.floor(charsBList[charsAKeys[i]]/charsAList[charsAKeys[i]]))
    }

    console.log(Math.min(...counts))
    return Math.min(...counts) || 0
}

function getCharsList(str) {
    const obj = {};
    for(let ch of str.split('')) {
         obj.hasOwnProperty(ch) ? obj[ch]++  :  obj[ch] = 1;
    }
    return obj
}

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('abc', 'abccbabac'));