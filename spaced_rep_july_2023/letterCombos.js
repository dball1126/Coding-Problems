/**
 * @param {string} digits
 * @return {string[]}
 */
// Time: O(4^n)...n is digits length and 4 is the num of ltrs
// Space: O(n)
var letterCombinations = function(digits) {
    if (!digits) return []
    const result = []

    const backtrack = (idx1, idx2, curr) => {
        if (curr.length === digits.length) {
            return result.push(curr)}
        if (idx1 >= digits.length) return;
        let phoneMap = new Map([["2", "abc"],["3","def"],["4","ghi"],["5","jkl"],["6","mno"]
        ,["7","pqrs"],["8","tuv"],["9","wxyz"]]);
        let arr = phoneMap.get(digits[idx1])
        if (idx2 >= arr.length) return;
        for (let i = idx2; i < arr.length; i++) {
            let val = arr[i]
            backtrack(idx1+1, idx2, curr + val)
        }
    }
    backtrack(0,0,"")
    return result;
};
console.log(letterCombinations("23")) 
// ['ad', 'ae', 'af','bd', 'be', 'bf','cd', 'ce', 'cf']