/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i+1 < nums.length && nums[i] === nums[i+1] && nums[i] !== "_") {
            if (i-1 >= 0) {
                nums.splice(i,1)
            } else {
                nums = nums.slice(i+1)
            }
            i--
            nums.push("_")
           
        }
    }
    return nums
};

console.log(removeDuplicates([1,1,2]))