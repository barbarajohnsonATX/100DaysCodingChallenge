function composeRanges(nums: number[]): string[] {
  
    let start = 0;
    let ptr = 0;
    let ranges = []

    while(ptr < nums.length) {

        if(nums[ptr + 1] === nums[ptr] + 1) {
             ptr++
 
        } else {
            if(start === ptr) {
                ranges.push(`${nums[start]}`)

            } else {
                ranges.push(`${nums[start]}->${nums[ptr]}`)

            }
            ptr++;
            start = ptr
        }
    }
    
     console.log(ranges)
     return ranges


}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 1, 2, 4, 6, 7, 8, 9]));