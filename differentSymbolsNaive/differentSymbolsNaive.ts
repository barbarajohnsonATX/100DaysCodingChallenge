function differentSymbolsNaive(s: string): number {
    const list = getList(s)
    console.log(list)
    return Object.keys(list).length;
}

function getList(s) {
    const obj = {};
    for(let letter of s.split('')) {
        obj[letter] = obj[letter]++ || 1;
    }
    return obj;
}

console.log(differentSymbolsNaive('cabca'));
