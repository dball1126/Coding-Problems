/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target, result = 0) {
   if (!nums || !nums.length) return false;
   let index = Math.floor(nums.length / 2);
   if (nums.length === 1) index = 0;
    
    let left = nums.slice(0, index);
    let right = nums.slice(index + 1);

    if (nums[index] === target) {
        return true
    } else if (target > nums[index]) {
        return search(right, target)
    } else {
        return search(left, target)
    }
};



console.log(search([1,2,3,4,5,6,7],2))