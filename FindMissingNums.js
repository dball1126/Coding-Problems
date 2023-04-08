/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const numHash = new Set();
    const excludedNum = nums[0]
    let duplicate = false;
    for(let i = 1; i < nums.length; i++){
        if (numHash.has(excludedNum)) {
            duplicate = true;
        }
        numHash.add(nums[i]);
    }
    
    const missingNums = [];
    for(let i = 0; i < nums.length+1; i++) {
        if (!numHash.has(i)) {
            if ((i !== 0 && i !== excludedNum) || (i !== 0 && duplicate)) {
                missingNums.push(i)
        }
    }
}
    return missingNums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))