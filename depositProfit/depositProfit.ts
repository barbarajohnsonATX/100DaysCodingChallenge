function depositProfit(deposit: number, rate: number, threshold: number, year: number = 0): number {
 
    let amount = deposit;
    console.log(amount)
   /* let year = 0;

    while(amount < threshold) {
        amount = amount * ( 1 + rate/100);
        year++

    }
    console.log(year)
    return year ; */

    if(amount > threshold) {
        return year;
    } else {
        year++;
    }

    return depositProfit(amount * ( 1 + rate/100), rate, threshold, year)
    
}

console.log(depositProfit(100, 20, 170))