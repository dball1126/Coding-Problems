const getPartition = (nums) => {
    const mIdx = (Math.floor(nums.length/2))
    let m = nums[mIdx], l = 0, r = nums.length-1
    let sorted = true;
    while (l <= r) {
        while (l < nums.length && nums[l] <= m) l++
        while (r >= 0 && nums[r] >= m) r--
        if (l >= 0 && l <nums.length && m > nums[r]) {
            [nums[r], nums[mIdx]] = [nums[mIdx], nums[r]]
            if (sorted) return -1
            if (l  >= nums.length) return nums.length-1
            return l
            break;
        }
        if (l >= 0 && r >= 0 && l <nums.length && r < nums.length && nums[l] >= nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            sorted = false
        }

        l++; r--
    }


    if (sorted) return -1
    if (l  >= nums.length) return nums.length-1
    return l
}
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let m = getPartition(nums)

    if (m >= 0 && m < nums.length){
        // nums = nums.slice(0, m) + nums.slice(m)
        sortArray(nums)
    }
    return nums;
};

console.log(sortArray([5,1,1,2,0,0]))