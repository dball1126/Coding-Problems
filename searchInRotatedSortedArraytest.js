/**
 * Keep track of first and last values.
 * Only go right if pivot and first values are smaller
 * Only go left if pivot and last values are bigger
 * Time log(n)
 * Space O(1)
 */
var search = function(nums, target) {
    let [s, e] = [0, nums.length-1]

    while (s <= e) {
        let m = Math.floor((e-s) / 2) + s;
        
        if (nums[m] === target) {
            return m;
        }

        if (nums[m] > target) {
            if (nums[s] > target) {
                s = m +1
            } else {
                e = m - 1
            }
        } else {
            if (nums[e] < target) {
                e = m - 1
            } else {
                s = m + 1
            }
        }
    }
    return -1
};


console.log(search([4,5,6,7,8,1,2,3],
    8))