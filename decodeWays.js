/**
 * state var:  i for idx    h for 1/2 letter combo
 * recurrence relation:
 * if parseint s.substr(i, i+h) - 1 in ABC
 * val = 1 
 * val += Math.max(dp(i, 2), dp(i+h, 1))
 * if (h === 1) val = Math.max(val, dp(i, 2))
 * Time: O(1) + n * 2 = O(n)
 * Space: n * 2 = O(n)
 */
var numDecodings = function(s) {
    let memo = [...new Array(s.length+1)].map(a => [...new Array(3).fill(-Infinity)])
    let abc = "abcdefghijklmnopqrstuvwxyz"

    const dp = (i, h) => {
        if (i >= s.length) return 1;
        if (memo[i][h] !== -Infinity) return memo[i][h]

        let n = parseInt(s.slice(i, i+h)) - 1;
        if (abc[n] === undefined) return 0;
        let val = 0;

        // if (abc[n] !== undefined) val = 1;
        if (i === 2){
            let test = ""
        }

        val += Math.max(dp(i+h, 1), dp(i + h, 2))
        
        if (h === 1) val = Math.max(val, dp(i, 2))
        
        memo[i][h] = val
        return memo[i][h]
    }
    return dp(0, 1)
}

console.log(numDecodings(s = "226"))