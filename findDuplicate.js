/**
 * iterate over nums. For each num
 * Use another loop to find the result;
 * Time O(n2)
 * Space O(1)
 */

var findDuplicate = function(nums) {
    let left = 1
    let right = nums.length - 1
  
    const getCount = mid => {
      let count = 0
  
      for (const num of nums) {
        if (num <= mid) {
          count++
        }
      }
  
      return count
    }
  
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2)
      const count = getCount(mid)
  
      if (count > mid) {
        right = mid
      } else {
        left = mid + 1
      }
    }
  
    return left
  }

console.log(findDuplicate(nums = [1,1]))