// Iterative in-place QuickSort
// Time: O(n * log(n))
// Space: O(log(n))...log(n) pointers in the stack
var sortColors = function(nums) {
    if (nums.length <= 1) return nums;
    const partition = (l, r) => {
        let pivot = nums[Math.floor((r + l) / 2)]
        while (l <= r) {
            while (nums[l] < pivot) l++
            while (nums[r] > pivot) r--
            if (l <= r) {
                [nums[l], nums[r]] = [nums[r], nums[l]]
                l++; r--;
            }
        }
        return l;
    }
    const stack = [[0, nums.length-1]]
    while (stack.length) {
        let [l, r] = stack.pop();
        if (l >= r) return;
        let leftIdx = partition(l, r)
        if ((leftIdx - 1) > l) stack.push([l, leftIdx-1])
        if (leftIdx < r) stack.push([leftIdx, r])
    }
    return nums;
};
console.log(sortColors([2,0,2,1,1,0])) //= [ 0, 0, 1, 1, 2, 2 ]
