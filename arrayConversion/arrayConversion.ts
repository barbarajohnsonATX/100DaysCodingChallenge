/* function arrayConversion(inputArray: number[]): number {
      let iter = false
     
 
    while (inputArray.length > 1) {
        iter  = !iter 
        let test = []
         for(let i = 0; i < inputArray.length - 1; i+=2){
            let res = iter ? inputArray[i] + inputArray[i+1]: inputArray[i] * inputArray[i+1]
            test.push(res)
             
        }

        inputArray = test
        console.log(inputArray)
            
     }

    
    return inputArray[0]


} */

//recursive version
 function arrayConversion(inputArray: number[], iter = false ): number {
    if(inputArray.length === 1) {
        return inputArray[0]

    } else {

        iter = !iter
        let test = []
        for(let i = 0; i < inputArray.length - 1; i+=2){
            let res = iter ? inputArray[i] + inputArray[i+1]: inputArray[i] * inputArray[i+1]
            test.push(res)
        }
        console.log(test)
       return arrayConversion(test, iter )
    }
 }


console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
 