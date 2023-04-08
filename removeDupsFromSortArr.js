// Two pointer
// Time: O(n), space O(1)
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length

    let count = nums.length, leftPt = 2;;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[leftPt-1] && nums[i] !== nums[leftPt-2] || 
            (nums[i] === nums[leftPt-1] && nums[i] !== nums[leftPt-2])) {

            [nums[leftPt], nums[i]] = [nums[i], nums[leftPt]]
            leftPt++
        } else {
            nums[i] = '_'
            count--
        }
    }
    return count
};console.log(removeDuplicates(nums = [0,0,1,1,1,1,2,3,3]))// = [1,2,4,'_','_'] 



// [1]
// leftPT = 1
// [1,'_',2,2]
// i = 2
// leftPt = 2 
// [1,2,"_",2]
// i = 3