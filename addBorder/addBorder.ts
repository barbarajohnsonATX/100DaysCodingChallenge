function addBorder(picture: string[]): string[] {
    let result = []
    for(let i=0; i < picture.length ;  i++) {
        result.push(('*').concat(picture[i], '*'))
    }

     result.push('*'.repeat(picture[0].length + 2))
     result.unshift('*'.repeat(picture[0].length + 2))

     return result
 
}

 console.log(addBorder(["abc", "ded"]));