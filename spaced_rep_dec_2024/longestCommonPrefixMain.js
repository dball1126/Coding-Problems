/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest = ""
    let maxLength = Infinity
    for (let str of strs) {
        maxLength = Math.min(maxLength, str.length)
    }
    let long = ""
    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (j > 0 && strs[j][i] !== strs[j-1][i]) {
                return longest
            }
        }
        long += strs[0][i]
        longest = long
    }
    return longest
};
console.log(longestCommonPrefix(  ["dog","racecar","car"]))