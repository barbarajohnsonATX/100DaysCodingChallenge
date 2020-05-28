function digitDegree(n: number): number {

    //1. convert to array of strings, then to int digits
    //2. if array length > 1, sum array elemts, repeat 

    let nArray = n.toString().split('').map(n => parseInt( n));
    console.log(nArray);
    let degree = 0;

    while(nArray.length > 1) {
        let reduce = nArray.reduce( (accum, item) => accum + item, 0)
        console.log(reduce)
        nArray = [reduce].toString().split('').map(n => parseInt(n))
        console.log(nArray)
        degree++

     }

     return degree;
  
  
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));