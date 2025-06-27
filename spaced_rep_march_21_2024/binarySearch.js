/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var search = function(nums, target) {
    
    let l = 0, r = nums.length-1

    while (l <= r) {
        let mid = Math.floor((r + l) / 2)

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return -1
};

console.log(search(nums = [-1,0,3,5,9,12], target = 2))

// mid = 3
// 0   6
// 4, 6

// mid = 5 return 5

// [1] tgt = 1

// 0 + 0 / 2 = 0   return 1

// [1]  tgt = -1

// 0 0 -- error out