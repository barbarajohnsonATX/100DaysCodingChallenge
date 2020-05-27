function squareDigitsSequence(a0: number): number {
    //sequence []
    //push a0 in sequence
    //next val = a0.toString().split('')
    //get sum of squres of next val 
    //check if it is already in squence, if not, push to sequence
    let sequence = [];
    sequence.push(a0)
 
    let currentSquareDigits = squareDigits(a0);
 
    while( !sequence.includes(currentSquareDigits)) {
        if(!sequence.includes(currentSquareDigits)) {
            sequence.push(currentSquareDigits)
         }

        currentSquareDigits = squareDigits(currentSquareDigits)
     }
    console.log(sequence)
    return sequence;
    
}

function squareDigits(num) {
    let numArray = num.toString().split('');
    numArray = numArray.map(s => parseInt(s))
    return  numArray.reduce( (accum, current) => accum + current * current, 0);

}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));