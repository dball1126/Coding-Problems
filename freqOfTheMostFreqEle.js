var maxFrequency = function(nums, k) {
    let [s, e, result] = [0, 0, 0]

    while (e < nums.length) {
        let n = nums[e]

        k -= n

        if (k > 0 || (nums[e-1] !== undefined && nums[e-1] + k >= 0)) {
            result = Math.max(result, (e - s + 1))
        }
        
        
        while (k <= 0) {
            // result = Math.max(result, (e - s + 1))
            let v = nums[s]
            k += v
            s += 1
        }
        e += 1
    }

    return result
};

console.log(maxFrequency( nums = [1,4,8,13], k = 5))