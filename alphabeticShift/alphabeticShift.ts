function alphabeticShift(inputString: string): string {
    let shifted = []


    inputString.split('').forEach(letter => {
        //z becomes a, Z becomes A
        let shiftedCode = letter.charCodeAt(0) === 'z'.charCodeAt(0) ||  letter.charCodeAt(0) === 'Z'.charCodeAt(0)  ? letter.charCodeAt(0) - 25 : letter.charCodeAt(0) + 1
        //console.log(String.fromCharCode(shiftedCode))            
        shifted.push(String.fromCharCode(shiftedCode))

 
    })
    return shifted.join('')
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('Zig'));