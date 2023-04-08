 // Time & Space: O(n^2) 
 // State Var: r, c for longest sub between those two indexes
 // Base Case: 1 if r or c is out of bounds
 // Recurrence Relation: 
 //  dp(r, c) = for (num in nums)
 //   if (nums[r] < nums[c])
 //          dp(r, c) += Math.max(dp(c, c+1)+1, dp(r, c+1))
 //      else 
 //          dp(r, c) += dp(r, c+1)
var lengthOfLIS = function(nums) {
    let memo = [...new Array(nums.length+1)]
        .map(a => [...new Array(nums.length+1)].fill(-Infinity))
    let max = 1;
    const dp = (r, c) => {
        if (r < 0 || c < 0 || r > nums.length-1 || c > nums.length-1 || (r === c))
            return 1;
        if (memo[r][c] !== -Infinity) return memo[r][c]
            memo[r][c] = 0;
        if (nums[r] < nums[c]) {
            memo[r][c] += Math.max(dp(c, c+1)+1, dp(r, c+1))
        } else {
            memo[r][c] += dp(r, c+1)
        }
        max = Math.max(max, memo[r][c])
        return memo[r][c];
    }
    for (let i = 0; i < nums.length; i++) {
        dp(i, i+1)
    }
    return max
};console.log(lengthOfLIS([10,9,2,5,3,7,101,18])) // = 4