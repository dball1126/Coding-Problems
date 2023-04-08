
// top down 
// time O(1) * O(n) = O(n)
// space = O(n).............we can reduce this to Constant space.

var rob = function(nums, i = nums.length-1, memo = new Map()) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    if (i < 0) return 0;
    if (memo.has(i)) return memo.get(i);

    memo.set(i, 
        Math.max(
            nums[i] + rob(nums, i-2, memo),
            rob(nums, i-1, memo)
        ))
    return memo.get(i);
};

console.log(rob([7,10,10,1,1]))