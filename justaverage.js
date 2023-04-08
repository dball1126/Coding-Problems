class Solution {
    solve(nums, k) {
        let sum = nums.reduce((a, b) => a + b)
        for(let n of nums) {
            if ( ( (sum - n) / (nums.length-1) ) === k ) return true
        }
        return false;
    }
}

const s = new Solution();

console.log(s.solve(nums = [1, 3],
    k = 2))