function chessBoardCellColor(cell1: string, cell2: string): boolean {

    const board = {
        'a': 1, 
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }

    let c1 = cell1.toLowerCase().split('')
    let c2 = cell2.toLowerCase().split('')
    console.log(c1, c2)
 
    let sumX = Math.abs(board[c1[0]] - board[c2[0]]) 
    let sumY = Math.abs(parseInt(c1[1]) - parseInt(c2[1]))
    return (sumX + sumY) % 2 === 0  ? true : false ;
    

}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
