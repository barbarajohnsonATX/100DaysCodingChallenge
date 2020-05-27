function containsCloseNums(nums: number[], k: number): boolean {

    let obj = list(nums)
    let keys = Object.keys(obj)
 
    let prop = Object.keys(keys).filter(key => obj[key] > 1)

    let indices =[];
    for(let i  = 0; i < nums.length; i++) {
        if(nums[i] === parseInt(prop[0])) {
            indices.push(i)
        }

    }
     
     for(let i = 0; i < indices.length - 1; i++) {
         if( Math.abs(indices[i] - indices[i+1]) > k) {
             return false
         }
     }
     return true 
}



function list(arr) {
    let obj = {}
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] + 1 || 1
    }
    return obj
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2, 5, 4, 2], 3));
