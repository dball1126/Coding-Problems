/** XOR Bit Manipulation
 * Time: O(n), Space: O(1)
 */
var singleNumber = function(nums) {
    return nums.reduce((acc, v) => acc ^= v)    
};
console.log(singleNumber([4,1,2,1,2])) // = 4

