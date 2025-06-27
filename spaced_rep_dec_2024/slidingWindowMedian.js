/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i >= k-1) {
            const window = nums.slice(i - (k - 1), i+1).sort((a,b) => a - b);
            let mid = Math.floor( k / 2);
            if (k & 1) { // odd
                result.push(window[mid]);
            } else { // even
                result.push((window[mid-1] + window[mid]) / 2);
            }
        }
    }
    return result;
};
console.log(medianSlidingWindow([1,2,3,4,2,3,1,4,2], k = 3))