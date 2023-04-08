/**
 * Time: O(4^n * n)
 * Space: O(n) for the recursive call stack...(excluding the output)
 */
var letterCombinations = function(digits) {
    let map = new Map([["2", ["a","b","c"]],["3", ["d","e","f"]],
        ["4", ["g","h","i"]],["5", ["j","k","l"]],["6", ["m","n","o"]],
        ["7", ["p","q","r","s"]], ["8", ["t","u","v"]],["9", ["w","x","y","z"]]])
    
        let combos = [], max = digits.length
        const backtrack = (i, curr) => {
            if (curr.length === max) return combos.push(curr)
            if (i > max-1) return;
            let nums = map.get(digits[i])
            for (let j = 0; j < nums.length; j++) {
                backtrack(i + 1, curr + nums[j])
            }
        }
        for (let j = 0; j < digits.length; j++) {
            backtrack(j, "")
        }
        return combos;
}