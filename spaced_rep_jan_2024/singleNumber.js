
// Bit Manipulation
// Time: O(n)
// Space: O(1)
var singleNumber = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum ^= nums[i]
    }
    return sum
};
console.log(singleNumber([4,1,2,1,2])) // = 4
// 100 001  10    0001     10
//     101 111     110    100

