function isCaseInsensitivePalindrome(inputString: string): boolean {

    let reversed = inputString.toLowerCase().split('').reverse().join('');
    console.log(reversed)
    return reversed === inputString.toLowerCase();
 


}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
console.log(isCaseInsensitivePalindrome('abbA'));
console.log(isCaseInsensitivePalindrome('bacaaCAB'));