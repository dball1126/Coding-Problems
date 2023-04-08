/**
 * Time O(n^2)
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            nums.push('_')
        }
        let c = nums.length -1
        while (nums[c-1] !== undefined && (nums[c-1] === '_')) {
            [nums[c], nums[c-1]] = [nums[c-1], nums[c]]
            c--
        }
    }    
    return nums;
};

console.log(removeElement([3,2,2,3], 3))