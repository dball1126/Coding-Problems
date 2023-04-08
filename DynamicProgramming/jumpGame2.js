// Time: O(n), Space: O(1)
var jump = function(nums) {
    if (nums.length === 1) return 0;
    let jumps = 0, i = 0, len = nums.length -1
    while (i <= len) {
        jumps += 1;
        if ((nums[i] + i) >= len) return jumps;
        let idx = i+1, max = i + nums[i], next = Infinity
        let nextIdx = idx

        while (idx <= max) {
            if (((len - idx) - nums[idx]) < next) {
                next = ((len - idx) - nums[idx])
                nextIdx = idx;
            }
            idx++
        }
        i = nextIdx
    }
    return jumps
};
console.log(jump(nums =[2,3,1,2,4])) // = 2
