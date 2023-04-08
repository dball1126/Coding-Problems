var longestPalindrome = function(s) {
    const dp = [];
    let palindrome = "";

    for (let row = 0; row < s.length; row++) {
        const arr = []
        for (let column = 0; column < s.length; column++) {
            arr.push(false)
        }
        dp.push(arr)
    }
    console.log(dp.slice())
    for (let r = 0; r < s.length; r++) {
       
        
                dp[r][r] = true;
                palindrome = s.substring(r, r+1)
            
        
    }
console.log(dp.slice())
    for (let r = 0; r+1 < s.length; r++) {
            if (s[r] === s[r+1]) {
                dp[r][r+1] = true
                palindrome = s.substring(r, r+1)
            }
    }
console.log(dp.slice())

for (let c = 2; c < s.length; c++) {
    for (let r = 0; r < s.length-c; r++) {
        console.log(s.substring(r, c+1))
        if (s[r] === s[c] && dp[r+1][c-1]) {
            let word = s.substring(r, c+1)
            dp[r][c] = true
            if (word.length > palindrome.length) {
                palindrome = word
            }
        }
        
    }
    
}
// let wordLength = 2;
// for (let c = wordLength; c < s.length; c++) {
//     for (let r = 0; r < c; r++) {
//             console.log("s[c]: " + s[c])
//             console.log("s[r]: " + s[r])

//                 if (s[r] === s[c] && dp[r+1][c-1]) {
//                     dp[r][c] = true
//                     word = s.substring(r, c+1)
//                     if (word.length > palindrome.length) {
//                         palindrome = word;
//                     }
//                 }
//             }
        
//     }

    return palindrome
};

console.log(longestPalindrome("fsdfiuhisdmadamsdfs"
))