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
        let m = Math.floor((e - s) / 2) + s;
        console.log(m)
        if (nums[m] === target) return m;

        if (nums[m] > target) { // go left generally
            if (nums[e] > nums[m] && nums[e] >= target) {
                s = m + 1
            } else {
                e = m - 1
            }
        } else { // go right generally
            if (nums[s] < nums[m] && nums[s] <= target) {
                e = m - 1
            } else {
                s = m + 1
            }
        }
    }
    return -1
};

console.log(search([5,1,3],
    5))