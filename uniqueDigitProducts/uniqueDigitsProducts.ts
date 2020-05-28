function uniqueDigitProducts(a: number[]): number {
    //take each elem in a, convet to string, split as array of chars, do parseInt in subElem
    //check if subElem lenght is 1. if 1 move to next elem in a. if not 1, repeat steps to create a subElem and mult each elem

    let result = [];

    for(let i = 0; i < a.length; i++) {
        let subElem = a[i].toString().split('').map(elem => parseInt(elem));
        console.log(subElem)
        let reduced = subElem.reduce( (accum, item) => accum * item, 1 )
        console.log(reduced)
        result.push(reduced)
    }

        let list = getList(result);
        console.log(list)
        return Object.keys(list).length;

}

function getList(a) {
    let obj = {};
    console.log(a)
    for(let i = 0; i < a.length; i++) {
        obj[a[i]] = obj[a[i]]++ || 1;
    }
    return obj
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));


 