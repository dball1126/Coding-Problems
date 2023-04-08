var findNumberOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);
    let maxCount = 0;
    let max = {};

    if (nums.length === 2 && nums[0] < nums[1]) return 1

    for (let i = 1; i < nums.length; i++) {
        for (let n = i-1; n >= 0; n--) {
            const currentNum = nums[i];
            if (nums[n] < currentNum) {
                dp[i] = Math.max(dp[i], dp[n]+1)
            }
            if (dp[n]+1 === currentNum) {
                break
            }
        }
    }
    const maxNumber = Math.max(...dp);
    maxCount += dp.filter(n => n === maxNumber).length

    let foundIndex = false;
    for (let i = dp.length-1; i >= 0; i--) {
        if (foundIndex && dp[i]+1 === maxNumber) {
            maxCount++
        }
        if (dp[i] === maxNumber) foundIndex = true;
    }

     return maxCount
};

console.log(findNumberOfLIS( [1,2,3]))