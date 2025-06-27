/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */

// base case return false if l > r out of bounds
// if (l === r) return true
/**
 * state variables l = 0, r = s.length-1
 * stands for valid palindrome inbetween     l....r
 * 
 * if (l !== r && k === 0) return false
 * if (l !== r) dp(l+1, r , rk-1) || dp(l, r-1, k-1)
 * 
 * 
 * 
 */
// Top down Dynamic Programming
// Time and Space: O(n^2)
// var isValidPalindrome = function(s, k) {
//     let n = s.length;
//     // const memo = [...new Array(n)].map(a => [...new Array(n)].fill(undefined))
//     const memo = new Map()
//     const dp = (l, r, t) => {
//         if (t < 0) return false;
//         if (l === r) return true;
//         if (l > r) {
//             if (l >= n && r < 0) return true;
//             return s[l] === s[r]
//         }
//         let key = l + "" + r + "" + t
//         if (memo.has(key)) {
            
//             return memo.get(key)
//         }

//         while (s[l] === s[r]) {
//             l++; r--
//         }
//         if (l === r) {
//             memo.set(key, true)
//             return true;
//         }
//         key = l + "" + r + "" + t
//             let value3 = dp(l, r-1, t-1)
//             let value2 = dp(l+1, r, t-1)
//             memo.set(key, (value2 || value3))
//             // memo[l][r] = value2 || value3
        
//         return memo.get(key)
//     }
//     return dp(0, n-1, k)
// };
function isValidPalindrome(s, k) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Try skipping from either side
            return isValidPalindrome(s.substring(left + 1, right + 1), k - 1) ||
                   isValidPalindrome(s.substring(left, right), k - 1); 
        }
        left++;
        right--;
    }
    return true; // Base case: already a palindrome or deletions allowed
}

console.log(isValidPalindrome("fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd", k = 1))

/**
 * abcdeca", k = 2
 * 
 * l = 0, r = 6
 * step1: dp (0, 6, 2)
 * step2: dp(1, 5, 2)
 *  dp(2, 5, 1) or dp(1, 4, 1)
 *  dp(3, 4, 1)
 * dp (4, 4, 0)
 */

