/**
 * find a none zero starting at the beginning, bubble down the number to the beginning
 * Break when you encounter a number that is not a zero when bubbling down
 * Time O(n*2);
 * Space O(1);
 */
var moveZeroes = function(nums) {
    
    const bubbleDown = (i) => {
        if (i <= 0 || nums[i-1] !== 0) return;
        [nums[i],  nums[i-1]] = [nums[i-1], nums[i]]
        bubbleDown(i-1)
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) bubbleDown(j)
    }

};

console.log(moveZeroes( [0,1,0,3,12]))