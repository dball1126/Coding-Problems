/**
 * Iterate over all the numbers.
 * For each number do a Binary Search to find the next number
 * Use the range of the current index + 1 ..... end index
 * Time log(n)
 * Space O(1)
 */

var twoSum = function(numbers, target) {

    const bSearch = (s, e, num) => {
        while (s <= e) {
            let m = Math.floor((e-s) / 2) + s;

            if (numbers[m] + num === target) {
                return m;
            } else if (numbers[m] + num > target) {
                // go left
                e = m -1;
            } else {
                // go right
                s = m + 1;
            }
        }
        return undefined;
    }

    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i];
        let n2 = bSearch(i+1, numbers.length-1, n)
        if (numbers[n2] + n === target) {
            return [i, n2]; // the actual result wants the array to be 1 based so  [i + 1, n2 + 1]
        }
    }
};

console.log(twoSum(numbers = [2,7,11,15], target = 17))