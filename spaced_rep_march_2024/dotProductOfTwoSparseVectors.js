/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */

// Array Traversal
// Time & Space: O(n)
SparseVector.prototype.dotProduct = function(vec) {
    let total = 0
    for (let i = 0; i < this.nums.length; i++) {
        total += (this.nums[i] * vec.nums[i])
    }
    return total
};

// Your SparseVector object will be instantiated and called as such:
let v1 = new SparseVector([1,0,0,2,3]);
let v2 = new SparseVector([0,3,0,4,0]);
let ans = v1.dotProduct(v2);
console.log(ans) // = 8

