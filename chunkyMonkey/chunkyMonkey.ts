function chunkyMonkey(arr: any[], size: number): any[][] {

    //[1, 2, 3, 4, 5], size
    //loop size times and push values into array
    //increment i by size

    let newArray = [];

    for(let i = 0; i < arr.length ; i += size) {
        //push value at i and value before i + size
        newArray.push(arr.slice(i, i + size))
      }

    console.log(newArray)
    return newArray
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));