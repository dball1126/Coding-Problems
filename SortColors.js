const sortColors = (nums) => {
    let p1 = 0;
    let p2 = nums.length-1;
    let i = 1;
    while (i < nums.length) {
       if (nums[i] === 0) {
           [nums[p1], nums[i]] = [nums[i], nums[p1]];
           p1++;
       }
       if (nums[i] === 2) {
        [nums[p2], nums[i]] = [nums[i], nums[p2]];
        p2--;
       }

       i++;
    }
    return nums;
}

console.log(sortColors([2,2,1,2,1,1,1,0,0,2,1,0,2,1,2,2,1,1,1,1,1,0,2,0,2,0,2,2,1,0,2,1,0,2,1,2,0,0,0,0,2,1,1,2,0,1,2,2,0,0,2,2,0,1,0,1,0,0,1,1,1,0,0,2,2,2,1,0,0,2,1,0,1,0,2,2,1,2,1,1,2,1,1,0,0,2,1,0,0]
    ))