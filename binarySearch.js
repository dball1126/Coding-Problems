/**
 * Binary Search. Recursion.
 * Time Complexity: log(N)
 * Space complexity: log(N) because of recursion the call stack
 */


var search = function(nums, target) {
    if (!nums.length) return -1;
    const find = (s, e) => {
        console.log("s " + s)
        console.log("e " + e)
        if (s > e) return -1;

        let mid = Math.floor((e -s) / 2) + s;
        console.log("mid " + mid)


        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >  target) {
            return find(s, mid -1)
        } else {
            return find(mid+1, e)
        }
    }

    return find(0, nums.length-1)
};

console.log(search(nums = [-1,0,3,5,9,12], target = -1))




// 0    5
// 3    5
