
// Monotonic Stack
// Time: O(n)
// Space: O(1)...never goes above 3 items in the stack.
var find132pattern = function(nums) {
    const stack = []
    const top = () => stack[stack.length-1]
    let mins = nums.map(a => Infinity), n = nums.length
    let min = nums[0]
    for (let i = 1; i < n; i++) {
        if (min < nums[i]) mins[i] = min
        min = Math.min(min, nums[i])
    }

    for (let i = 0; i < n; i++) {
        while (stack.length && nums[top()] < nums[i]) {
            stack.pop()
        }

        if (stack.length) {
            if (mins[top()] < nums[i]) return true
        }

        stack.push(i)
    }
    return false;
};
console.log(find132pattern(nums = [-1,3,2,0]))//= true


