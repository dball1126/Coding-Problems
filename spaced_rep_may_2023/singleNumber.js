// Bit Manipulation
// XOR operator
// Time: O(n)
// Space: O(1)
var singleNumber = function(nums) {
    return nums.reduce((a, v) => a ^= v)
};
console.log(singleNumber([1,5,3,6,5,6,3]))// = 1

