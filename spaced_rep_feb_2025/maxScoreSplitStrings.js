/**
 * @param {string} s
 * @return {number}
 */
// Prefix Sums
// Time: O(n)
// Space: O(1)
var maxScore = function(s) {
    let leftPrefixSum = 0, max = 0, rightPrefixSum = 0;
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] === "0") leftPrefixSum++;
    }
    for (let j = s.length-1; j >= 1; j--) {
        if (s[j] === "1") rightPrefixSum++;
        let diff = (s.length - j) - rightPrefixSum
        let offset = s[s.length-1] === "0" ? 1 : 0;
        max = Math.max(max, leftPrefixSum + rightPrefixSum - diff + offset);
    }
    return max;
};
console.log(maxScore("011101"))