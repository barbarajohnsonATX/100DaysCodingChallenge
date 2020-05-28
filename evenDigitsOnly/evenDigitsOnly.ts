function evenDigitsOnly(n: number): boolean {
   let nArray = n.toString().split('').map(n => parseInt(n));
    console.log(nArray)
    return nArray.every( n => n % 2 === 0)

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));