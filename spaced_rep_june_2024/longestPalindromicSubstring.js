/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s.length) return 0
    const n = s.length
    let L = 0, R = 0
    const checkStr = (i, j) => {
        let valid = false;
        while (i >= 0  && j < n) {
            if (i === j) {
                if ((R + L) < i + j) {
                    L = i; R = j
                }
                i--; j++;
                continue; 
            } else {
                if (s[i] !== s[j]) {
                    break;
                } else {
                    if ((R + L) < i + j) {
                        L = i; R = j
                    }
                    i--; j++
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        checkStr(i, i)
        if (i +1 < n) checkStr(i, i+1)
    }
    console.log()
    return s.slice(L, R+1)
};

console.log(longestPalindrome(s = "babad"))