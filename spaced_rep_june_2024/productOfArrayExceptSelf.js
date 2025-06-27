/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Prefix Sums. Dynamic Programming
// Time: O(n)
// Space: O(1)
var productExceptSelf = function(nums) {
    const prefixSums = [], n = nums.length
    let sum = 1

    for (let i = 0; i < n; i++) { // cumulative sums left to right
        sum *= nums[i]
        prefixSums.push(sum)
    }
    sum = 1 // after

    for (let i = n-1; i >= 0; i--) { // cumulative sums right to left
        let prev = 1;
        if (i-1 >= 0) prev = prefixSums[i-1] 
        prefixSums[i] = prev * sum // multiply prev and after 
        sum *= nums[i]
    }
    return prefixSums
};
console.log(productExceptSelf([1,2,3,4]))

