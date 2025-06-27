
// Backtracking
// Time: O(4^n)
// Space: O(n)
var letterCombinations = function(digits) {
    if (!digits) return [];
    const digitsMap = new Map([["2", ["a","b","c"]],["3", ["d","e","f"]],
    ["4", ["g","h","i"]],["5", ["j","k","l"]],
    ["6", ["m","n","o"]],["7", ["p","q","r","s"]],
    ["8", ["t","u","v"]],["9", ["w","x","y","z"]]])
    const combos = []

    const backtrack = (idx, s) => {
        if (s.length === digits.length) return combos.push(s)
        if (idx >= digits.length) return;
        const arr = digitsMap.get(digits[idx])
        for (let i = 0; i < arr.length; i++) {
            backtrack(idx+1, s + arr[i])
        }
    }
    backtrack(0, "")
    return combos
};
console.log(letterCombinations("23"))
// result = ['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf']