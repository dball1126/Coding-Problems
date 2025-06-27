// Sliding Window & STACK
// Time: O(n)
// Space: O(k)
var maxSlidingWindow = function(nums, k) {
    let result = [], s = 0, e = 0, n = nums.length, stack = []
    while (e < n) { // slide right pointer right

        while(e < n && (e-s) < k) {
            while (stack.length && nums[stack[stack.length-1]] < nums[e]) {
                stack.pop();
            }
            stack.push(e)
            e++
        }
        result.push(nums[stack[0]])

        while (stack.length && stack[0] <= s) { // slide left pointer right
            stack.shift()
        }
        s++
    }
    return result
};
console.log(
    maxSlidingWindow(nums = [1,3,-1,-3,5,3,6,7], k = 3))//=s = [3,3,5,5,6,7]
    