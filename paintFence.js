/**
 * State Variables: 
 *  i for post you're on.
 *  c for current posts you have amassed
 * 
 * Recurrence Relation:
 *  if (c.length === k) return 1
 *  if ( c[i-1] === c[i] && c[i+1] === c[i]) return 0
 *  dp(i, c) = Math.max( dp(i, [i]), dp(i+1, []) )
 */
var numWays = function(n, k) {
    
};