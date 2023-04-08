/**
 * Backtracking
 * Time and Space: O(n*4)
 * Space: O(n) (Recursion only takes up to the length of our input digits.length)
 * 
 * Since there are no more than 4 possible characters for each digit, the number of recursive calls, T(n), satisfies T(n) < 4T(n - 1), where n is the number of digits in the number. This solves to T(n) = O(4^n).
Each base case entails making a copy of a string and adding it to the result. Since each such string has length n, each base case takes time O(n). Therefore, the time complexity is O(n * 4^n).
https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/802198/Python%3A-Backtracking-%2B-Time-Complexity
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    let map = new Map([["2", ["a","b","c"]],["3", ["d","e","f"]],["4", ["g","h","i"]],["5", ["j","k","l"]],["6", ["m","n","o"]],["7", ["p","q","r","s"]],
        ["8", ["t","u","v"]],["9", ["w","x","y","z"]]])

    let result = []

    const backtrack = (i, str) => {
        if (str.length === digits.length) {
            result.push(str)
            return;
        }
        if (i >= digits.length) return;
        map.get(digits[i]).forEach(v => {
            backtrack(i+1, str + v)
        })
    }
    backtrack(0, "");
    return result;
};

console.log(letterCombinations("234"))