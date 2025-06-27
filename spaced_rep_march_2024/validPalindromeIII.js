/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
// Recursion
// Time: O(n * k)...n for string length and k for the size of k
// Space: O(n)
var isValidPalindrome = function(s, k) {
  
    
    const isPalindrome = (l, r, steps) => {
        if (l === r) return true;
        console.log("l: " + l + " r: " + r + " steps: " + steps)
        
        while (s[l] === s[r] && l < r) {
            l++; r--;
        }

        if (l < r) {
            if (steps === 0) return false;
            return isPalindrome(l+1, r, steps-1) || isPalindrome(l, r-1, steps-1)
        }

        return true;
    }

    return isPalindrome(0, s.length-1, k)

};

console.log(isValidPalindrome(s = "fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd",k = 216))