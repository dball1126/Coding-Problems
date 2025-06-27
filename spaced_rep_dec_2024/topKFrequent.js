


var topKFrequent = function(nums, k) {
    const map = new Map()
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)
    }
    const pairs = Array.from(map)
    return quickSelect(pairs, 0, pairs.length-1, pairs.length - k)
};

const quickSelect = (nums, left, right, k) => {
    let pivotIndex = partition(nums, left, right);

    if (pivotIndex > k) return quickSelect(nums, left, pivotIndex - 1, k);
    else if (pivotIndex < k) return quickSelect(nums, pivotIndex+1, right, k);
    return nums.slice(pivotIndex).map(pair => pair[0]);
}

const partition = (nums, left, right) => {
    let pivot = nums[right][1], i = left, j = right -1;
    while (i <= j) {
        while (nums[i] && nums[i][1] < pivot) i++;
        while (nums[j] && nums[j][1] > pivot) j--;
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
}

console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2))