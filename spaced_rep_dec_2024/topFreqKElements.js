/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0);
        map.set(n, map.get(n) + 1);
    }
    let pairs = Array.from(map);
    return quickSelect(pairs, 0, pairs.length -1, pairs.length - k);
};

const quickSelect = (nums, left, right, k) => {
    let pivot = partition(nums, left, right);
}

const partition = (nums, left, right) => {
    
}