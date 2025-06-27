/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    let stack = [], order = nums.map(a => a)
    const top = () => stack[stack.length-1]
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 2) {
            if (top() > nums[i] && nums[i] > stack[0]) {
                return true;
            } else if (nums[i] > top()) {
                stack.pop()
                stack.push(nums[i])
            }
        } else if (stack.length === 1) {
            if (nums[i] > top()) {
                stack.push(nums[i])
            } else {
                stack.pop()
                stack.push(nums[i])
            }
        } else {
            stack.push(nums[i])
        }
        
    }
    return false;
};

console.log()