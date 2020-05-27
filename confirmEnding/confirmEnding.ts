function confirmEnding(str: string, target: string) {
  
     return target  === str.substring(str.length - target.length, str.length) 
   
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));