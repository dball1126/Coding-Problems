const increasingTriplites = (nums) => {
    let i = nums[0];
    let j;

    for (let n = 1; n < nums.length; n++) {
        if (nums[n] < i) {
            i = nums[n]
            j = undefined;
        } else if (!j || nums[n] < j) {
            j = nums[n];
        } else if (i && j && nums[n] > j) {
            return true;
        }

        let maxArr = nums.slice(n+1);
        let maxNum = Math.max(...maxArr);

        if (maxNum > j ) return true;
        
    }
    return false;
}

console.log(increasingTriplites([9,3,4,2,4,6]))