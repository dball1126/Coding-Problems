/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length
    const longDP = [...new Array(n+1)].fill(0)
    const amtDP = [...new Array(n+1)].fill(0)

    for (let i = 0; i < n; i++) {
        const map = new Map([[nums[i], 1]])
        let longestVal = 0, longestCount = 0
        for (let j = 0; j <= i; j++) {
            if (nums[i] > nums[j]) {
                const val = amtDP[j]
                if (longestCount === val) {
                    longestCount += amtDP[j]

                } else if (val > longestCount) {
             
                    longestCount = amtDP[j]
                }
            }
        }
        if (longestCount === 0) longestCount = 1
       amtDP[i] = longestCount 
    }

    console.log(amtDP)
};
console.log(findNumberOfLIS([1,3,5,4,7]))