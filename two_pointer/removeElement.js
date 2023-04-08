// Two-pointer
// Time: O(n), Space: O(1)
var removeElement = function(nums, val) {
    if (!nums.length) return 0;
    let leftPoint = 0, size = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            size--;
            nums[i] = '_'
        } else {
            [nums[leftPoint], nums[i]] = [nums[i], nums[leftPoint]]
            leftPoint++
        }
    }
    return size;
};
console.log(removeElement(nums = [0,1,2,2,3,0,4,2], val = 2)) // = 5
