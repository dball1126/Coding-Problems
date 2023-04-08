/**
 * Kadane's Algorithm.
 * Time: O(n) + O(n) = O(n)
 * Space: O(1)
 */
var maxSubarraySumCircular = function(nums) {
    let [max1, max2] = [-Infinity, -Infinity]

    // calculate cicular array max
    let curr = nums[nums.length-1]
    for (let i = 0; i < nums.length-1; i++) {
        let val = nums[i]
        let newVal = curr + val;
        if (newVal > val) {
            curr = newVal;
        } else if (val > curr) {
            curr = val;
        } else {
            curr += val;
        }

        max1 = Math.max(max1, curr)
    }

    // calculate regular array max
    curr = nums[1];
    for (let i = 2; i <= nums.length; i++) {
        let val = i === nums.length ? nums[0] : nums[i]
        console.log("val " + val)
        let newVal = curr + val;
        if (newVal > val) {
            curr = newVal;
        } else if (val > curr) {
            curr = val;
        } else {
            curr += val;
        }

        max2 = Math.max(max2, curr)
    }

    return Math.max(max1, max2, nums[0], nums[nums.length-1]);
};

console.log(maxSubarraySumCircular(nums = [-2,4,-5,4,-5,9,4]))