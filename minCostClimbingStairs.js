/**
 * S minCostClimbingStairs(i)
 * R minCostClimbingStairs(i+ 1) = Math.min(dp(i - 1) + nums[i], dp(i - 2) + nums[i]) 
 * T increasing for(i, i+1, i+2 ........)
 * B i === nums.length-1
 * O minCostClimbingStairs(i)
 * T O(1) + O(n) = O(n)
 * S O(n) // we can lower the space complexity to O(1) by mutating the input array
 */


// Top down
// const minCostClimbingStairs = (nums) => {
//     if (nums.length === 2) return Math.min(nums[0], nums[1])
//     if (nums.length === 3) return Math.min(nums[1], nums[0] + nums[2])

//     const memo = new Map()

//     const dp = (i) => {
//         if (i < 0) return 0;
//         if (memo.has(i)) return memo.get(i)

//         memo.set(i,
//             nums[i] + Math.min( dp(i-2), dp(i-1) )
//         )

//         return memo.get(i)
//     }
//     dp(nums.length-1)

//     return Math.min(memo.get(nums.length-1), memo.get(nums.length-2))
// }

// Bottom up

// const minCostClimbingStairs = (nums) => {
//     if (nums.length === 2) return Math.min(nums[0], nums[1])
//     if (nums.length === 3) return Math.min(nums[0] + nums[2], nums[1])
//     let dp = [nums[0], nums[1]]

//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.min(nums[i] + dp[i - 1], nums[i] + dp[i - 2])
//     }
//     console.log(dp)
//     return Math.min(dp[nums.length-1], dp[nums.length-2])
// }


// bottom up with two variables

const minCostClimbingStairs = (nums) => {
    if (nums.length === 2) return Math.min(nums[0], nums[1])
    let [curr, prev, result] = [nums[0], nums[1], Infinity];

    for (let i = 2; i < nums.length; i++) {
        prev += nums[i]
        curr += nums[i]
        result = Math.min(prev, curr)
    }
    console.log("prev " + prev)
    console.log("curr " + curr)
    return result
}



console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))



