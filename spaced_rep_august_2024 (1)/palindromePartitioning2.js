/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let n = s.length
    const dp = [...new Array(n+1)].fill(0), map = new Map()

    const isPalindrome = (word) => {
        if (map.has(word)) return map.get(word)
        let l = 0, r = word.length-1, valid = true;
        while (l < r) {
            if (word[l] !== word[r]) {
                valid = false; break;
            }
            l++; r--;
        }
        map.set(word, valid)
        return valid;
    }

    for (let i = n-1; i >= 0; i--) {
        let min = dp[i+1]
        if (i+1 !== n) min += 1
        for (let j = n-1; j > i; j--) {
            let word = s.substring(i, j+1)
            if (map.has(word)) {
                if (map.get(word)) {
                    let newMin = dp[j]
                    
                    if (i+1 !== n) newMin += 1
                    min = Math.min(min, newMin)
                    break;
                }
            } else if (isPalindrome(word)) {
                let newMin = dp[j]
                if (i+1 !== n) newMin += 1
                min = Math.min(min, newMin)
                break;
            }
        }
        dp[i] = min
    }
    return dp[0] 
};
console.log(minCut( "s"

))