function avoidObstacles(inputArray: number[]): number {

    let sorted = inputArray.sort();
    let freeSpots = [0]
     

         for(let i = 0; i < sorted.length - 1; i++) {
             if(sorted[i+1] > sorted[i] + 1) {
                freeSpots.push(sorted[i] + 1)
             }
         }
         console.log(freeSpots)

         let min = freeSpots[1] - freeSpots[0]
         for(let i = 0; i < freeSpots.length -1 ; i++) {
             min = min < freeSpots[i+1] - freeSpots[i] ? min : freeSpots[i+1] - freeSpots[i]

         }

         console.log(min)

         return min
 }



console.log(avoidObstacles([5, 3, 6, 7, 9]));