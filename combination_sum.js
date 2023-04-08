var combinationSum = function(candidates, target) {
    
    const allCombos = [];

    const find = (arr, start) => {

        if (getSum(arr) === target) {
            const arrCopy = arr.slice(); // Important. Make a copy so the values do not mutate(we're passing in the same arr in the recursive call).
            return allCombos.push(arrCopy); // our base case.

        } else if (getSum(arr) >= target) {  // No need to continue.....another base case.
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i];
            arr.push(candidate);
            // Two checks: 
            // 1. If the sum is less than or equal to our number. 
            // 2. If the Future(recursive) number + our sum will be less than or equal to our number.
            if (getSum(arr) <= target || getSum(arr) + candidate <= target) {
                find(arr, i);
                arr.pop(); // backtrack
            } else {
                // We're over the sum of the target. Backtrack.
                arr.pop();
            }
        }
    }

    find([], 0)

    return allCombos;
};

const getSum = (arr) => {
    return arr.length === 0 ? 0 : arr.reduce((a,b) => a +b)
}

console.log(combinationSum([2,3,6,7], 7))