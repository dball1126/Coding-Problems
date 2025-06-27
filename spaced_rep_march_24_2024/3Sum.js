/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Sorting & Two Pointer
// O(n * log (n)) + O(n^2)
// Space: O(n)...for sorting...worst case
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let triplets = [], n = nums.length

    for (let i = 0; i < n; i++) {
        
        let j = i+1
        let v1 = nums[i], k = n-1

        while (j < k) {
            let v2 = nums[j], v3 = nums[k]
            let sum = v1 + v2 + v3
            if (sum === 0) {
                triplets.push([v1,v2,v3])
            }

            if (sum <= 0) {
                while (j < k && nums[j+1] === nums[j]) j++;

                j++
            } else {
                while (k > j && nums[k] === nums[k-1]) k--;

                k--
            }
        }
            
        while (i < n && nums[i+1] === nums[i]) i++
    }

    return triplets
};
console.log(threeSum([0,1,1]))
/** [ -1 -1    2             -1        0  1]
 * [-4,-1,-1 ,0, 1,2]
    0 1 2
 *  
 * 
 * 
 */