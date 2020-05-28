function firstDuplicate(a: number[]): number {
    let list = getList(a)
    let duplicates = Object.keys(list).filter( k => list[k] > 1 ).map( n => parseInt(n))
    if(!duplicates.length) {
        return -1
    }
  
    let indexesOfDuplicates = [];

    for(let n = 0; n < duplicates.length ; n++) {
        let charIndexes = []
        for(let m = 0; m < a.length; m++) {
            if(a[m] === duplicates[n]){
                charIndexes.push(m)
            }
        }

        indexesOfDuplicates.push(charIndexes)
        
    }

  

    console.log(indexesOfDuplicates)

    let minIndexOfSecondOccurence = indexesOfDuplicates[0][1];
    for(let elem of indexesOfDuplicates) {
        if(elem[1] < minIndexOfSecondOccurence) {
            minIndexOfSecondOccurence = elem[1]
        }
    }
    console.log(minIndexOfSecondOccurence)
    return a[minIndexOfSecondOccurence] 

}

 

function getList(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj.hasOwnProperty(arr[i]) ? obj[arr[i]] + 1 : 1
    }
    return obj;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
