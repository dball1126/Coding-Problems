var nextPermutation = function(nums) {
    let pivot = Infinity, min = Infinity;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            pivot = i; min = i;
        }
        if (pivot !== Infinity  && nums[i] > nums[pivot-1] && nums[i] !== nums) {
            if (min === Infinity || nums[i] < nums[min]) {
                min = i
            }
        }
    }
    const reverseNumsInRange = (i, j) => {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++; j--;
        }
    }
    if (pivot === Infinity) {
        reverseNumsInRange(0, nums.length-1)
    } else if (min === pivot) {
        [nums[pivot], nums[pivot-1]] = [nums[pivot-1], nums[pivot]]
        reverseNumsInRange(pivot, nums.length-1)
    } else {
        [nums[min], nums[pivot-1]] = [nums[pivot-1], nums[min]]
        reverseNumsInRange(pivot, nums.length-1)
    }
    return nums
};
console.log(nextPermutation([2,1,2,2,2,2,2,1])) // = [ 1, 4, 3, 2, 5 ]