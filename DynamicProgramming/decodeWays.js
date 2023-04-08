/**
 * State Var: 
 *  i for idx of str .... end of str
 *  (i stands for number of ways to decode).
 * Base Case: 
 *  1 if we reach the end of the array
 *  0 if val is not in the map
 * Recurrence Relation:
 *  if map has str[i]
 *      result += dp(i+1)
 *  if i+1 < str.length && map has str[i+1]
 *      result += dp(i+2)
 * Time: O(n);
 * Space: O(n) for memo, abc is constant;
 */
// Top down
var numDecodings = function(s) {

    const abc = new Map([["1", "a"],["2", "b"],["3", "c"],["4", "d"],["5", "e"],["6", "f"],["7", "g"],["8", "h"],["9", "i"],["10", "j"],["11", "k"],["12", "l"],["13", "m"],["14", "n"],["15", "o"],["16", "p"],["17", "q"],["18", "r"],["19", "s"],["20", "t"],["21", "u"],["22", "v"],["23", "w"],["24", "x"],["25", "y"],["26", "z"],])
    const memo = [...new Array(s.length+1)].fill(-Infinity);

    const dp = (i) => {
        if (i >= s.length) return 1;
        if (memo[i] !== -Infinity) return memo[i];
        memo[i] = 0;

        if (abc.has(s[i]))
            memo[i] += dp(i+1)
        
        if (i+1 < s.length && abc.has(s.substring(i, i + 2)))
            memo[i] += dp(i+2)
        
        return memo[i]
    }
    return dp(0);
}

// Bottom Up
var numDecodings = function(s) {
    const abc = new Map([["1", "a"],["2", "b"],["3", "c"],["4", "d"],["5", "e"],["6", "f"],["7", "g"],["8", "h"],["9", "i"],["10", "j"],["11", "k"],["12", "l"],["13", "m"],["14", "n"],["15", "o"],["16", "p"],["17", "q"],["18", "r"],["19", "s"],["20", "t"],["21", "u"],["22", "v"],["23", "w"],["24", "x"],["25", "y"],["26", "z"],])
    const memo = [...new Array(s.length+1)].fill(0);
    memo[s.length] = 1;

    for (let i = s.length-1; i >= 0; i--) {
        if (abc.has(s[i]))
            memo[i] += memo[i+1]
        if (i+1 < s.length && abc.has(s.substring(i, i + 2)))
            memo[i] += memo[i+2]
    }
    return memo[0];
}
console.log(numDecodings( s = "12"))