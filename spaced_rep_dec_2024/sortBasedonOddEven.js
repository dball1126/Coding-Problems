
const sortBasedOnOddEven = (nums) => {

    nums.sort((a, b) => {
        if (a % 2 !== 0 && b % 2 === 0) {
            return -1; // a comes first (odd)
        } else if (a % 2 === 0 && b % 2 !== 0) {
            return 1; // b comes first (even)
        } else {
            return a - b; // sort by value
        }
    });
    return nums;
}

console.log(sortBasedOnOddEven([1,3,9,2,4,5,6,7]))