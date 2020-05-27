function containsDuplicates(a: number[]): boolean {
     let list = getList(a)
     return Object.values(list).find(val => val > 1) ? true : false


}

function getList(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] + 1 || 1;
    }
    return obj
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
