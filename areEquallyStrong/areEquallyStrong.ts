function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  
    const yourStrongest = Math.max(yourLeft, yourRight)
    const yourWeakest = Math.min(yourLeft, yourRight)
    const friendsStrongest = Math.max(friendsLeft, friendsRight)
    const friendsWeakest = Math.min(friendsLeft, friendsRight)

    const yourCombined = yourLeft + yourRight
    const friendsCombined = friendsLeft + friendsRight
    
    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest || (yourCombined === friendsCombined)

    
    


    
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
