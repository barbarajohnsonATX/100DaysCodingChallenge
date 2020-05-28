function firstDigit(inputString: string): string {

    let inputArray = inputString.split('')
    for(let n of inputArray){
        console.log(parseInt(n))
        if(parseInt(n) == n) {
            return n 
        }  
    }
 }

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
