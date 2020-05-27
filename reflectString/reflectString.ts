function reflectString(inputString: string): string {
    const list = {};
    let aValue = 'a'.charCodeAt(0)
    let zValue = 'z'.charCodeAt(0)

     for(let i = aValue; i <= zValue; i++) {
        list[String.fromCharCode(i)] = i;
    }
  
    let reflection = [];
    let original = inputString.split('')
 
    for(let i = 0; i < original.length; i++){
        let code = list[original[i]]
        let distanceFromA =  code - aValue
        let reflected = String.fromCharCode(zValue - distanceFromA);
        console.log(reflected)      
        reflection.push(reflected)
    }

    return reflection.join('');
    
}



console.log(reflectString("name"));
