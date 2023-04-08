/**
 * Time: 32  * O(n) = O(n)
 * Space: O(1)
 */
var majorityElement = function(nums) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let ones = 0, zeros = 0
        for (let num of nums) {
            if (num & (1 << i)) {
                ones++
            } else {
                zeros++
            }
        }
        if (ones > zeros) {
            result |= (1 << i)
        }
    }
    return result;
};

console.log(majorityElement([3,5,3,2,2,2]))