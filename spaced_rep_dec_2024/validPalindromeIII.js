/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    let n = s.length
    const memo = [...new Array(n+1)].map(a =>
                [...new Array(n +1)].map(a => 
                [...new Array(k + 1)]))

    const dp = (idx1, idx2, count) => {
        if (count < 0 || idx1 > idx2) return false;
        if (idx1 === idx2) return true
        if (memo[idx1][idx2][count] !== undefined) return memo[idx1][idx2][count]        
        let v1 = false;

        if (s[idx1] === s[idx2]) {
            if (idx1+1 === idx2) {
                v1 = true;
            } else {
                v1 = dp(idx1+1, idx2-1, count)
            }
        } else {
            if (idx1+1 === idx2) {
                v1 = dp(idx1+1, idx2, count-1) || dp(idx1, idx2-1, count - 1)
            } else {
                v1 = dp(idx1+1, idx2, count-1) || dp(idx1, idx2-1, count - 1) || dp(idx1+1, idx2-1, count - 2)
            }
        }

        return memo[idx1][idx2][count] = v1
    }
    return dp(0, s.length-1, k)
};
console.log(isValidPalindrome(  s = "fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd", k = 216))