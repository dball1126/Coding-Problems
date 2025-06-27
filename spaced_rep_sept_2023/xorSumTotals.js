//Backtracking
// Time: O(2^n)
// Space: O(n)
var subsetXORSum = function(nums) {
    let total = 0, n = nums.length;

    const backtrack = (i, sum) => {
        total += sum
        if (i >= n) return;
        for (let j = i; j < n; j++) {
            const v = nums[j];
            backtrack(j+1, sum ^ v)
        }
    }
    backtrack(0,0)
    return total;
};
console.log(subsetXORSum([5,1,6]))// = 28