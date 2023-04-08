/** Bit Manipulation...XOR
 * Time: O(n), Space: O(1)
 */
var findDuplicate = function(nums) {
    let allNums = 0, allNumsWithDuplicate = 0
    for (let i = 1; i <= nums.length; i++) {
        allNums ^= i        
    }    
    nums.forEach(n => allNumsWithDuplicate ^= n)
    allNums ^ allNumsWithDuplicate
};