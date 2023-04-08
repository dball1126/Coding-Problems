

var search = function(nums, target) {
    let val = -1, s = 0, e = nums.length-1
    while (s < e) {
        let m = Math.floor((e-s)/2)
        if (nums[m] === target) return m

        if (nums[m] > target) {
            e = m-1
        } else {
            s = m + 1
        }
    }
    return val;
};