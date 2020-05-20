function alternatingSums(a: number[]): number[] {
    let sums = [0, 0]; 
 
    for(let i = 0; i < a.length ; i++) {
        if(!(i % 2)) {
            sums[0] += a[i]
        } else {
            sums[1] += a[i]
        }
    }

        
     return sums

}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([50, 60, 60, 45, 70, 15]))