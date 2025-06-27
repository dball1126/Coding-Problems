/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
// Queue
// Time & Space: O(n)
var canReach = function(nums, start) {
    
    const queue =  [start], n = nums.length

    while (queue.length) {
        let i = queue.shift();
        if (nums[i] === 0) return true;
        
        if (i + nums[i] >= 0 && i + nums[i] < n && nums[i + nums[i]] !== '') {
            queue.push(i + nums[i])
        }
        if (i - nums[i] >= 0 && i - nums[i] < n && nums[i - nums[i]] !== '') {
            queue.push(i - nums[i])
        }
        nums[i] = ''
    }
    return false;
};

console.log(canReach(arr = [4,2,3,0,3,1,2], start = 5))// = true
