/**
 * Base Case: single string is a palindrome, check for
 * State Var: i, j for indexes of string
 * Recurrence Relation
 *  if (s[i] === spj+1)
 *      dp(i, j+1)
 *      dp(i-1, j+2)
 * else 
 *  dp (i-1, j+1)
 * 
 * Time and Space: O(n*2)
 */
var longestPalindrome = function(s) {
    let memo = [...new Array(s.length+1)].map(a => [...new Array(s.length+1)].fill(undefined))
    let max = ""

    const exandAroundMiddle = (l, r) => {
        while(l >= 0 && r < s.length) {
            if (s[l] === s[r]) {
                memo[l][r] = true;
                let sub = s.substring(l, r+1)
                if (sub.length > max.length)
                    max = sub
                l--
                r++
            } else {
                memo[l][r] = false
                break
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        // if (!max.length) max = s[i]
        memo[i][i] = true;
        let [l, r] = [i, i]
        exandAroundMiddle(l, r)

        if (i+1 < s.length && s[i] === s[i+1]) {
            memo[i][i+1] = true;
            let [l, r] = [i, i+1]
            exandAroundMiddle(l, r)
        }
    }

    console.log(memo)
    return max
}

console.log(longestPalindrome(s ="a"))