// a   1  2  3  4  5
// b   1  2  3  4  5
// c   1  2  3  4  5
// d   1  2  3  4  5
// ['a1', 'c3'] true 
// ['a1', 'c2'] false 

function bishopAndPawn(bishop: string, pawn: string): boolean {
     
     return isDiagonal(bishop.split(''), pawn.split(''))

}

function isDiagonal(a: number[], b: number[]): boolean {
 
    let alpha = a[0].charCodeAt(0) - b[0].charCodeAt(0);
     console.log(alpha)
     let num = parseInt(a[1]) - parseInt(b[1]);
     console.log(num)
     return (Math.abs(alpha) ===  Math.abs(num));
         
 }

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a1', 'c2'));