var largestPerimeter = function(nums) {
    nums.sort(function(a,b){return a-b});
    let len = nums.length-1;
    for (let i = len; i >= 0; i--) {
        let num1 = nums[i];
        let num2 = nums[i-1];
        let num3 = nums[i-2];
        if (!num1 || !num2 || !num3) return 0;
        if (num1 === num2 === num3) return num1+num2+num3;
        let res = num2+num3 
        if ((res) > num1) return res+num1;
        continue;
        
    }
    return 0;
};

console.log(largestPerimeter([1,2,2,4,18,8]))