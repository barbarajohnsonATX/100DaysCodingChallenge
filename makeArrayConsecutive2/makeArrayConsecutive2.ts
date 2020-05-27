function makeArrayConsecutive2(statues: number[]): number {

    // 6, 2, 3, 8
    //sort 2, 3, 6, 8
    //find next value in sorted. if not found, push to missing array
    let missing = [];
    let sorted = statues.sort( (a, b) => a - b);
 
    let start = sorted[0]
    let last = sorted[sorted.length - 1]
 
    while(start < last ) {
        let found = sorted.find(n => n === start + 1);
        if(!found) {
            missing.push(start + 1)
        }
         start++
     }
    
     return missing

}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([6, 2, 3, 7, 1, 4, 10, 8]));