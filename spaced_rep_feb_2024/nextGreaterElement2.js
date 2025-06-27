/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Monotonic Stack
// Time and Space: O(n)
var nextGreaterElements = function(nums) {
  let stack = [], order = nums.map(a => -1), n = nums.length
  const top = () => stack[stack.length-1]
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[top()] < nums[i]) {
        order[stack.pop()] = nums[i]
    }
    stack.push(i)
  }
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[top()] < nums[i]) {
        order[stack.pop()] = nums[i]
    }
  }
  return order;
};
console.log(nextGreaterElements([1,2,3,4,3]))//= [ 2, 3, 4, -1, 4 ]