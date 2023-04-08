// Space: O(1)
// Time: O(log(n))
var search = function(nums, target) {
    let s = 0, e = nums.length-1;

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s

        if (nums[m] === target) {
            return m
        } else if (nums[m] < target) {
            s = m + 1
        } else {
            e = m - 1
        }
    } 

    return -1;
};
console.log(search([-1,0,3,5,9,12], 5)) // = 3
