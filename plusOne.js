// Time: O(n), Space: O(1)
var plusOne = function(nums) {
  let carry = 0;
  for (let i = nums.length-1; i >= 0; i--) {
    let sum = nums[i] + carry;
    if (i === nums.length-1) sum += 1;
    if (sum < 10) {
      nums[i] = sum;
      return nums;
    } else {
      nums[i] = 0;
      carry = sum % 10
      if (carry === 0) carry = 1
    }
  }
  if (carry !== 0) nums.unshift(carry)
  return nums
}; console.log(plusOne([4,2,9,9])) // = [4,3,0,0]

