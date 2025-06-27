/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Array Manipulation
// Time: O(n), Space: O(1)
var nextPermutation = function(nums) {
    let len = nums.length
    let reverse = (i, j) => {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++; j--;
        }
    }
    let findSmallestVal = (val, idx) => {
        let small = idx;
        while (idx < len) {
            if (nums[idx] <= nums[small] && nums[idx] > val) {
                small = idx;
            }
            idx++;
        }
        return small;
    }
    for (let i = nums.length -1; i >= 0; i--) {  
        if (i - 1 >= 0 && nums[i-1] < nums[i]) {
            let j = i;
            let minIdx = findSmallestVal(nums[i-1], j)
            let newIdx = i-1;
            [nums[newIdx], nums[minIdx]] = [nums[minIdx],nums[newIdx]]
            reverse(i, len - 1)
            return nums;
        }
    }
    reverse(0, len - 1)
    return nums;
};
console.log(nextPermutation([1,2,3])) // = [1,3,2]