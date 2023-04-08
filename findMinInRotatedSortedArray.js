/**
 * Use Binary search.
 * Find the pivot. The pivot is where the right element is samller than the left or the left element is bigger than the right.
 * Determine which side has been rotated. Compare the Middle element with the start or end elements....you can find out that way.
 * Find the min element...so Generally go left.
 * Space Complexity: O(1)
 * Time Complexity: log(n)
 */

var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    let [s, e] = [0, nums.length-1]
    let found = Infinity;
    
    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;
        found = Math.min(nums[m], found)

        // if pivot return it
        if (nums[m + 1] < nums[m]) return nums[m + 1];
        if (nums[m - 1] > nums[m]) return found;

        // pivot not found... look for it
        if (nums[m] >= nums[e]) {
            s = m + 1
        } else {
            e = m - 1;
        }
    }
    return found
};

console.log(findMin( [4,5,6,0,1,2,3,4]))