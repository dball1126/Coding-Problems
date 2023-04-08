var increasingTriplet = function(nums) {
    const dp = Array(nums.length).fill(false)

    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            
            if (nums[i] < nums[j]) dp[j] = true;
        }   
    }

    for (let i = 0; i+1 <= dp.length; i++) {
        if (dp[i] === true) {
            const secondNum = nums[i];

            for (let j = i+1; j < nums.length; j++) {
                if (nums[j] > secondNum) return true;
            }

        }
    }
    return false
};


console.log(increasingTriplet([1,5,0,4,1,3]))