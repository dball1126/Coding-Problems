var largestNumber = function(nums) {
    if (nums.length === 1) return nums[0] + "";

    let result = "";

    // sort it
    nums.sort();

    // check to see if you need to switch the indexes
    for (let i = nums.length-2; i >= 0; i--) {
        let back = nums[i+1] + "";
        let front = nums[i] + "";
        if (parseInt(front+back) > parseInt(back+front)) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
            // bubble up
            for (let j = i+1; j < nums.length; j++) {
                front = nums[j] + ""
                back = nums[j+1] + ""
                if (parseInt(front+back) > parseInt(back+front)) {
                    [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                }
            }
        }
    }
    let allZeros = true;

    // build it
    for (let j = nums.length-1; j >= 0; j--) {
        result += nums[j]
        if (nums[j] != 0) allZeros = false;    
    }

   return allZeros ? "0" : result
};

console.log(largestNumber([74,21,33,51,77,51,90,60,5,56]))