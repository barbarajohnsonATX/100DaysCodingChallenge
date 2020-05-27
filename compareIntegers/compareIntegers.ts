function compareIntegers(a: string, b: string): string {

    return parseInt(a) > parseInt(b) ? "greater" : (parseInt(a) == parseInt(b) ? "equal" : "less"))
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
console.log(compareIntegers('100', '1000'));