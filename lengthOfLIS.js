var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let n = i-1; n >= 0; n--) {
            const currentNum = nums[i];
            if (nums[n] < currentNum) {
                dp[i] = Math.max(dp[n]+1, dp[i])
            }

            // If the number is right below the currentNum then it's guaranteed
            // the number longest increasing subsequence + 1 is the correct number
            // and we can break.
            if (nums[n]+1 === currentNum) break;
        }
        
    }
    return Math.max(...dp)
};



console.log(lengthOfLIS([1,20,40,80,2,3,4,5,6,7,8,9,10]))