/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// QuickSelect Algorithm
// Time: O(n)...on average...worst case which is rare is O(n^2)
// Space: O(log(n))...recursive call stack on overage...worse case O(n) which is rare
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length-1, nums.length - k);
};

const quickSelect = (nums, left, right, k) => {
    let pivot = partition(nums,left,right);
    if (pivot < k) {
        return quickSelect(nums, pivot + 1, right, k);
    } else if (pivot > k) {
        return quickSelect(nums, left, pivot - 1 , k);
    } else {
        return nums[pivot]
    }
}
const partition = (nums, left, right) => {
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
console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2)) // = 5


