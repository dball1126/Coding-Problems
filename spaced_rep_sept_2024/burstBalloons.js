/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums.unshift(1); nums.push(1);
    const n = nums.length;
    const memo = [...new Array(n+1)].map(a => 
                 [...new Array(n+1)])

    const dp = (l, r) => {
        if (l > r) return 0;
        if (memo[l][r]) return memo[l][r]
        memo[l][r] = 0;

        for (let i = l; i <= r; i++) {
            let v1 = nums[l-1] * nums[i] * nums[r+1]
            let v2 = dp(l, i-1) + dp(i+1, r)
            memo[l][r] = Math.max(memo[l][r] , v1 + v2)
        }
        return memo[l][r]
    }
    return dp(1, n-2)
};
console.log(maxCoins( [3,1,5,8]))