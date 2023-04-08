//
var minSubArrayLen = function(target, nums) {
    nums.sort((a, b) => a - b)
    let sums = new Array(nums.length), sum = 0, minVal = Infinity, minLen = Infinity
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum += num
        sums[i] = sum;
    }
    let l = 0, r = nums.length -1;
    while (l < r) {
        let m = Math.floor((r-l)/2)
        sum = (sums[r] - sums[l]) + nums[l]
        if (sum >= target) {
            if (minLen > r-l) {
                minLen = r-l
                minVal = sum
            }
            if (r - l === 1)break
            r = m
        } else {
            if (r - l === 1)break
            l = m
        }
    }
    return minLen
};