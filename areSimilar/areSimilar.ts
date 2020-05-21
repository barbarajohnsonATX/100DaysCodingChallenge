function areSimilar(a: number[], b: number[]): boolean {

    const aString = a.sort().toString();
    const bString = b.sort().toString();
     return aString === bString
   
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
