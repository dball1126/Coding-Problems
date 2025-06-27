/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var maxEnvelopes = function(envelopes) {
    const n = envelopes.length, memo = [...new Array(n+1)]
    let maxSum = 0;

    const dp = (i, visited) => {
        if (i >= n) return 0;
        if (memo[i] !== undefined) return memo[i];
        visited.add(i);
        let count = 0, [lo, hi] = envelopes[i];
        for (let j = 0; j < n; j++) {
            if (visited.has(j)) continue;
            let [cLo, cHi] = envelopes[j];
            if (cLo < lo &&  cHi < hi) {
                visited.add(j);
                count = Math.max(count, dp(j, visited));
                visited.delete(j);
            }
        }
        count++;
        return memo[i] = count;
    }
    for (let i = 0; i < n; i++) {
        maxSum = Math.max(maxSum, dp(i, new Set()));
    }
    return maxSum;
};
console.log(maxEnvelopes([[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]))