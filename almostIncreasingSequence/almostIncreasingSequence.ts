function almostIncreasingSequence(sequence: number[]): boolean {

    let incorrect = 0; 

    for(let i = 0; i < sequence.length - 1; i++) {
        let isIncreasing = sequence[i] < sequence[i+1] ? true : false 
        if (!isIncreasing) {
            incorrect++;
        }
    }
        if(incorrect > 1) {
            return false;
        }
        return true;

}

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 