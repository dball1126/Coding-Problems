// in-place Quick Sort:
// Time: O(n * log(n))
// Space: O(log(n)...recursive call stacks..can most likely lower to O(1)
// with while loops
const sortArray = (nums) => {
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
        console.log(stack)
        let [l, r] = stack.pop();
        if (l >= r) return;
        let leftIdx = partition(l, r)
        if ((leftIdx - 1) > l) stack.push([l, leftIdx-1])
        if (leftIdx < r) stack.push([leftIdx, r])
    }
    return nums;
}
console.log(sortArray([-1,2,-8,-10,4,5,6,4,2,1,4,6,7,8,5,3,2,2,1,2,23,5,4,6,4]))// = [-10,-8,-1,2]
