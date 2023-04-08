/**
 * Time and Space: O(n)
 */
var missingNumber = function(nums) {
    let memo = [...new Array(nums.length+1)].fill(undefined);
    nums.forEach(n => memo[n] = n)
    return memo.findIndex(v => v === undefined)
};

console.log(missingNumber(nums = [3,0,1]))