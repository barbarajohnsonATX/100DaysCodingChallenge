function confirmEnding(str: string, target: string) {
  
     return target  === str.substr(str.length - target.length, str.length) 
   
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));