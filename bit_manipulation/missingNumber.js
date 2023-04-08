/** Bit Manipulation...XOR
 * Time: O(n), Space: O(1)
 */
var missingNumber = function(nums) {
    let allNums = 0, allNumsExceptMissingNum = 0;
    for (let i = 0; i <= nums.length; i++) {
        allNums ^= i
    }
    nums.forEach(n => allNumsExceptMissingNum ^= n)
    return allNums ^ allNumsExceptMissingNum
};

console.log(missingNumber([3,0,1]))