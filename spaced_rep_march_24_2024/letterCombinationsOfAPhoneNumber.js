/**
 * @param {string} digits
 * @return {string[]}
 */
// Time: O(4^n)...n being the number of digits
// Space: O(n)
var letterCombinations = function(digits) {
    if (!digits) return []
    let map = new Map([["2", ["a","b","c"]],["3", ["d","e","f"]],["4", ["g","h","i"]],["5", ["j","k","l"]],["6", ["m","n","o"]],["7", ["p","q","r","s"]],
        ["8", ["t","u","v"]],["9", ["w","x","y","z"]]])
    let combos = []
    const backtrack = (idx, curr) => {
        if (curr.length >= digits.length) {
            return combos.push(curr)
        }

        for (let i = idx; i < digits.length; i++) {
            let d = digits[i]
            let arr = map.get(d)
            for (let c of arr) {
                backtrack(i+1, curr + c)
            }
        }
    }
    backtrack(0, "")
    return combos
};
console.log(letterCombinations("23"))
/**
 * 0 ""
 * arr = [ a b c]
 * 
 * 1 a
 * 
 * arr = ["d","e","f"]
 * 
 * 2 ad  ae   af
 * 
 */