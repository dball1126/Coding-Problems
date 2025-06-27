/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
// Time: O(n) to construct the map
// Space: O(m) for the values that are not sparse
var SparseVector = function(nums) {
    this.map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.map.set(i, nums[i])
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let total = 0;
    for (let [i, v] of vec.map) {
        if (v !== 0 && this.map.has(i)) {
            total += this.map.get(i) * v
        }
    }
    return total;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);