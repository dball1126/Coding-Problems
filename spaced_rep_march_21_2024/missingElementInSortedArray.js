/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Greedy
// Keep subtracting missing nums from k
// Time: O(n), Space: O(1)
var missingElement = function(nums, k) {
    let prev = nums[0], n = nums.length

    for (let i = 1; i < n; i++) {
        let curr = nums[i]
        let diff = (curr - prev) - 1

        if (diff >= k) {
            return prev + k
        } else {
            k -= diff
            prev = curr;
        }
    }
    return prev+k
};
console.log(missingElement(nums = [1,2,4], k = 3))
/**
 [4,7,9,10,11], k = 3

 0   4    mid = 2
 
 9 - 4 - 2 

 0 2 mid = 7

 7 - 4 - 1

 2 2

 4 + 3 + 1


 7 - 4 - 1

 1, 2

 7- 4 - 1 = 2
 left = 1

 2 - 1   - .5 = 2

 1
 1

 4 + 3 + 1 = 8

 */




