/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let l = 0, r = nums.length-1

    let zero = 0, one = 0, two =0
    for (let n of nums) {
        if (n === 0) {
            zero++
        } else if (n === 1) {
            one++
        } else {
            two++
        }
    }



    return nums
};
console.log(sortColors([2,0,2,1,1,0,0,0,0,0,0,2]))