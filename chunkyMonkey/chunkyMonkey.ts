function chunkyMonkey(arr: any[], size: number): any[][] {

    //[1, 2, 3, 4, 5], size
    //loop size times and push values into array
    //increment i by 2

    let ptr = 0;
    let newArray = [];

    for(let i = ptr; i < arr.length ; i += size) {
        let newSubArray = []

        for(let j = i; j < i + size; j++) {
            if(arr[j] !== undefined) {
                newSubArray.push(arr[j])
            }
        }
        
         console.log(newSubArray)
         newArray.push(newSubArray)
     }

    console.log(newArray)
    return newArray
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));