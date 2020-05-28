function firstNotRepeatingCharacter(s: string): string {
  let list = getList(s);
  let nonRepeatedChars = Object.keys(list).filter( key => list[key] === 1);
  let indexes = nonRepeatedChars.map(ch => s.indexOf(ch)).sort( (a, b) => a - b);
  return s[indexes[0]] || '_'
}

function getList(s) {
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        obj[s[i]] = obj.hasOwnProperty(s[i]) ? obj[s[i]] + 1 : 1
    }
    return obj;
}



console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
