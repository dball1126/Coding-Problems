/**
 * Use Binary Search.
 * Find the edges of the target in the array. Find the left edge and the right edge.
 * The edge is where  m - 1 is not the target and m + 1 is not the target.
 * Use two variables to keep track of the edges.
 * If no edges found return - 1. If one edge found use another pass to find the other.
 * Time log(n)
 * Space O(1)
 */
var searchRange = function(nums, target) {
    let [l, r, s, e] = [undefined, undefined, 0, nums.length - 1]
    const MID = Math.floor(nums.length / 2)

    while (s <= e) {
        let m = Math.floor((e - s) / 2) + s;
        
        if (nums[m] === target && nums[m - 1] !== target) l = m;
        if (nums[m] === target && nums[m + 1] !== target) r = m;

        // found both edges. Return result;
        if (l !== undefined && r !== undefined) return  [l, r]

        if (nums[m] === target) { // find left or right index

            if (l === undefined && r !== undefined) { // find left edge
                e = m - 1;
                s = 0
            } else if (r === undefined && l !== undefined) { // find right edge
                s = m + 1;
                e = nums.length - 1
            } else { // go to the closest edge
                if (m <= MID) { 
                    e = m - 1
                } else { 
                    s = m + 1
                }
            }

        } else if (nums[m] > target) { // go left
            e = m -1
        } else { // go right
            s = m + 1;
        }
    }

    return [-1, -1]
};

console.log(searchRange(nums = [5,7,7,8,8,10], target = 8))