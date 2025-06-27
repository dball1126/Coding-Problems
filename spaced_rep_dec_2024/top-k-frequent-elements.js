/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = new Map();

    for (let n of nums) {
        if (!freq.has(n)) freq.set(n, 0);
        freq.set(n, freq.get(n) + 1);
    }
    let pairs = Array.from(freq);
    return quickSelect(pairs, 0, pairs.length-1, pairs.length - k);
};

const quickSelect = (pairs, left, right, k) => {
    let pivotIndex = getPartition(pairs, left, right);

    if (pivotIndex > k) {
        return quickSelect(pairs, left, pivotIndex - 1, k);
    } else if (pivotIndex < k) {
        return quickSelect(pairs, pivotIndex + 1, right, k);
    }
    return pairs.slice(pivotIndex).map(pair => pair[0]);
}

const getPartition = (nums, left, right) => {
    let pivot = nums[right][1], i = left, j = right -1;
    
    while (i <= j) {
        while (nums[i] && nums[i][1] < pivot) i++;
        while (nums[j] && nums[j][1] > pivot) j--;

        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++; j--;
        }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]]
    return i;
}
console.log(topKFrequent([1,1,1,2,2,3], k = 2))