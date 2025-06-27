/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Sliding Window + Monotonic Deque
// Time: O(n)...since elements can be at most checked twice.
// Space: O(k)...for the queue length
var maxSlidingWindow = function(nums, k) {
    let result = [], queue = [], s = 0, n = nums.length
    let e = 0

    while (e < n) {

        while (queue.length && nums[queue[queue.length-1]] <= nums[e]) {
            queue.pop();
        }
        queue.push(e)

        if ((e - s) + 1 === k) {
            result.push(nums[queue[0]])
            if (queue[0] === s) {
                queue.shift()
            }
            s++
        }
        e++
    }
    return result
};
console.log(maxSlidingWindow(nums = [1,3,-1,-3,5,3,6,7], k = 3))// = [ 3, 3, 5, 5, 6, 7 ]



//s = 0