function arrayConversion(inputArray: number[]): number {
     let nSize = inputArray.length;
     let iter = false
     let res; 


     while(inputArray.length > 1) {
        let ptr = 0

        while(ptr <  nSize ) {
            res = iter ? inputArray[0] * inputArray[1] :inputArray[0] + inputArray[1]
            inputArray.push(res)
            inputArray.shift()
            inputArray.shift()
            console.log(inputArray)    
            ptr += 2
        }

        iter = !iter
 
        console.log(inputArray)
        nSize = inputArray.length
 
    }
    
    
     
    return inputArray[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
