/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    let vectorMap = new Map()

    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] !== 0) vectorMap.set(i, nums[i])
    }
    this.vectorMap = vectorMap;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let sum = 0
    for (let [idx , val] of vec.vectorMap) {
        if (this.vectorMap.has(idx)) {
            sum += (val * this.vectorMap.get(idx))
        }
    }

    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);