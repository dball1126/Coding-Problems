// Bit Manipulation
// Time: O(n), Space: O(1)
var missingNumber = function(nums) {
    let xorFullsum = 0, xorSum = 0;
    for (let i = 0; i <= nums.length; i++) {
        if (i < nums.length) {
            xorSum ^= nums[i]
        }
        xorFullsum ^= i
    }
    return xorFullsum ^ xorSum
};
console.log(missingNumber([0,3,1,4])) // = 2