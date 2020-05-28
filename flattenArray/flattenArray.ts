function flattenArray(arr: any[]): any[] {
        const flat = [].concat(...arr);
        console.log("flat", flat)
        return flat.some(Array.isArray) ? flattenArray(flat) : flat;
        
}


console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
