/**
 * Use the ends as checks as well.
 * Binary search.
 * Time log(n)
 * Space O(1) 
**/
var search = function(nums, target) {
    let [s, e] = [0, nums.length-1]
    let [leftE, rightE] = [nums[s], nums[e]]

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s
        num = nums[m]
        
        if (num > target) {
            
        }
    }

    return -1;
};

console.log(search(ums = [4,5,6,7,0,1,2], target = 0))