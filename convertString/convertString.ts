function convertString(s: string, t: string): boolean {
    const sArray = s.split('');
    const tArray = t.split('');


    //s = [a, b, c, e, d]
    // = [ a, c, d]
    // loop through s array of chars
    // keept track of ptr to t array of chars
    // if s char === current ptr to t, push to new array
    // check if new array joined as string === t 

    let word = [];
    let tPtr = 0;

    for(let letter of sArray){
        console.log(letter, tArray[tPtr]);
        if(letter === tArray[tPtr]) {
            word.push(letter);
            tPtr++
        }
        console.log(word)
        if(word.join('') === t) {
            return true;
        }
        
    }

    return false

    
    
}
 

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
