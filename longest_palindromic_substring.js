var longestPalindrome = function(s) {

    let palindrome;

    // 2D Array
    dp = Array(s.length).fill(0).map(()=> Array(s.length).fill(false))

    // Handle One Character.
    for (let row = 0; row < s.length; row++) {
        for (let column = row; column < s.length; column++) {
            // console.log(`{s[row]})
            if (row === column) {
                dp[row][column] = true;
                palindrome = s[row]
            }
        }
    }

    // Handle Two Characters
    for (let r = 0; r < s.length-1; r++) {
       for (let c = r+1; c > r; c--) {
        //    console.log(`${s[r]}${s[c]}`)
           if (s[r] === s[c]) {
               dp[r][c] = true;
               palindrome = s.substring(r, c+1)
           }
       }
    }

    // Handle Three or more Characteres. This is the real part of the algorithm.
    for (let c = 2; c < s.length; c++) {
        
        for (let r = 0; r+c < s.length; r++) {
            let wordLength = r+c
            // console.log(`${s.substring(r, wordLength+1)}`)
            if (s[r] === s[wordLength] && dp[r+1][wordLength-1]) {
                dp[r][wordLength] = true
                let newPalindrome = s.substring(r, wordLength+1)
                if (newPalindrome.length > palindrome.length) {
                    palindrome = newPalindrome
                }
            }
            
        }
    }
    return palindrome
}
// First Attempt
// var longestPalindrome = function(s) {

//     let abc = "abcdefghijklmnopqrstuvwxyz"
//     let palindrome;
//     // 2D Array
//     dp = Array(s.length).fill(0).map(() => Array(s.length).fill(false))

//     // Handle one character
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < s.length; j++) {
//             if (s[i] === s[j]) {
//                 dp[i][j] = true;
//                 palindrome = s.substring(i, j+1);
//             }
//         }
//     }

//     // Handle two characters
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i+1; j > i; j--) {
//             if (s[i] === s[j]) {
//                 dp[i][j] = true;
//                 palindrome = s.substring(i, j+1);
//             }
//         }
//     }

//     // Now our DP Array is set. This is the real part of the algorithm.
//     // Start at index 2 for a substring of 3 letters, then it increase and we check four letters and so forth.
//     for (let j = 2; j < s.length; j++) {
//         for (let i = 0; i < j; i++) {
//             if (j < s.length && abc.includes(s[i]) && abc.includes(s[j])) {
//                 if (s[i] === s[j] && dp[i+1][j-1]) {
//                     dp[i][j] = true;
//                 } else {
//                     dp[i][j] = false
//                 }

//                 if (dp[i][j] && dp[i+1][j-1]) {
//                     const newPalindrome = s.substring(i, j+1)
//                     if (newPalindrome.length > palindrome.length) {
//                         palindrome = newPalindrome
//                     }
//                 }
//             }
            
//         }
        
//     }
//     return palindrome;
// };

console.log(longestPalindrome("ccddddr"))

[2][5]
[3][4]