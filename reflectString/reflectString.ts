function reflectString(inputString: string): string {
    let aValue = 'a'.charCodeAt(0)
    let zValue = 'z'.charCodeAt(0)
  
    let reflection = [];
    let original = inputString.split('')
 
    for(let i = 0; i < original.length; i++){
        let code = original[i].charCodeAt(0)
        let distanceFromA =  code - aValue
        let reflected = String.fromCharCode(zValue - distanceFromA);
        console.log(reflected)      
        reflection.push(reflected)
    }

    return reflection.join('');
    
}



console.log(reflectString("name"));
