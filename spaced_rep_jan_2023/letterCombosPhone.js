// Backtracking
// Time O(m^n * n)
// Space: O(n)
var letterCombinations = function(digits) {
    if (!digits) return [];
    let numbers = []
    let phoneMap = new Map([["2", "abc"],["3","def"],["4","ghi"],["5","jkl"],["6","mno"]
        ,["7","pqrs"],["8","tuv"],["9","wxyz"]]);

    const backtrack = (idx, curr) => {
        if (curr.length === digits.length) return numbers.push(curr)
        if (idx >= digits.length) return
        
        let ltrs = phoneMap.get(digits[idx])
        for(let ltr of ltrs) {
            backtrack(idx+1, curr + ltr)
        }
    }
    backtrack(0, "")
    return numbers;
};
console.log(letterCombinations("2")) // = ["a", "b", "C"]