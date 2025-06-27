// Floyd's tortoise and the hare algorithm
// Time: O(n)
// Space: O(1)
var findDuplicate = function(nums) {
    let [tortoise, hare] = [nums[0], nums[0]]
    tortoise = nums[tortoise];
    hare = nums[nums[hare]]
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]]
    }
    return tortoise
};

console.log(findDuplicate([4,5,6,1,3,2,2]))