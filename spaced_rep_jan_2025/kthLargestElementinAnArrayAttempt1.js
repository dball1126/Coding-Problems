/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(0, nums.length-1, nums.length - k, nums)
};
const quickSelect = (left, right, k, nums) => {
    let pivot = partition(left, right, nums);
    if (pivot > k) {
        return quickSelect(left, pivot -1, k, nums);
    } else if (pivot < k) {
        return quickSelect(pivot + 1, right, k, nums);
    } else {
        return nums[k];
    }
}
const partition = (left, right, nums) => {
    let pivot = nums[right], i = left, j = right-1;

    while (i <= j) {
        while (nums[i] !== undefined && nums[i] < pivot) i++;
        while (nums[j] !== undefined && nums[j] > pivot) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}
console.log(findKthLargest(nums = [3,2,3,1,2,4,5,5,6]
    , k = 9))