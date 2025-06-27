/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();
    for (let n of nums) {
        if (!freq.has(n)) freq.set(n, 0);
        freq.set(n, freq.get(n) + 1);
    }
    const newNums = Array.from(freq)
    return quickSelect(newNums, 0, newNums.length-1, newNums.length - k);
};

const quickSelect = (nums, left, right, k) => {
    let pivot = partition(nums, left, right);

    if (pivot < k) {
        return quickSelect(nums, pivot + 1, right, k);
    } else if (pivot > k) {
        return quickSelect(nums, left, pivot - 1, k);
    } else {
        return nums.slice(k).map(a => a[0]);
    }
}

const partition = (nums, left, right) => {
    let i = left, j = right - 1, pivot = nums[right][1];

    while (i <= j) {
        while (nums[i] && nums[i][1] < pivot) i++;;
        while (nums[j] && nums[j][1] > pivot) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}
console.log(topKFrequent(nums = [3,0,1,0], k = 1))