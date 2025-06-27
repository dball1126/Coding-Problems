/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {
    let strLen = s.length;
    const dp = [...new Array(strLen+1)].map(a => [...new Array(strLen+1)].fill(false))

    for (let i = 0; i < strLen; i++) {
        dp[i][i] = true;
        for (let j = i-1; j >= 0; j--) {
            if (dp[j][i])continue
            if (i === 3) {
                let test = ""
            }
            let valid = true;
            if (s[i] === s[j]) {
                if (i-1 !== j || s[i-1] !== s[j+1]) {
                    valid = false;
                }
            } else {
                valid = false
            }
            dp[j][i] = valid

        }
    }

    const checkPalindrome = (l, r, c) => {
        if (c < 0) return false;
        if (dp[l][r]) return true;
        while (l < r) {
            if (s[l] === s[r]) {
                l++; r--;
            } else {
                return checkPalindrome(l+1, r, c-1) || checkPalindrome(l, r-1, c - 1)
            }
        }
        return true;
    }
    return checkPalindrome(0, s.length-1, k)
};
console.log(isValidPalindrome("fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd", k = 216))
