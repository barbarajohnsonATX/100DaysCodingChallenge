function arrayPreviousLess(items: number[]): number[] {

    let result = []
     for(let i = items.length-1 ; i >= 0; i--) {
        let smaller = items[i-1] < items[i] ? items[i-1] : -1
        console.log(smaller)
        result.unshift(smaller)

    }
    return result

}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));