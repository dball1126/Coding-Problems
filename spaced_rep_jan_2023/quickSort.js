// Quick Sort
// Time: O(n * log(n))
// Space: On)
const sortArray = (nums) => {
    if (nums.length <= 1) return nums;

    
    let pivot = 0, leftIdx = 1, rightIdx = nums.length-1

    while (leftIdx < rightIdx) {
        if (nums[leftIdx] > nums[rightIdx] && nums[leftIdx] > nums[pivot]) {
            [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]]
        }
        leftIdx++; rightIdx--;
    }
    let left = [], mid = [], right = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[pivot]) {
            left.push(nums[i])
        } else if (nums[i] > nums[pivot]) {
            right.push(nums[i])
        } else {
            mid.push(nums[i])
        }
    }
    return [...sortArray(left), ...mid, ...sortArray(right)]
}

console.log(sortArray([8,10,9,1,3,4,5]))