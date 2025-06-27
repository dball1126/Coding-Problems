/**
 * @param {number[]} nums
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var minimumSwaps = function(arr) {
    let min = Infinity, max = -Infinity, n = arr.length
    let minIdx = n-1, maxIdx = 0
    
    for (let i = 0; i < n; i++) {
        if (arr[i] <= min) {
            if (arr[i] === min) {
                if (i < minIdx) {
                    minIdx = i
                }
            } else {
                min = arr[i]
                minIdx = i
            }
        }

        if (arr[i] >= max) {
            if (arr[i] === max) {
                if (i > maxIdx) {
                    maxIdx = i
                }
            } else {
                max = arr[i]
                maxIdx = i
            }
        }
    }

    if (minIdx > maxIdx) {
        return minIdx - 0 + n-1 -maxIdx - 1
    } else {
        return minIdx - 0 + n-1 - maxIdx
    }

};
console.log(minimumSwaps( [3,4,5,5,3,1])) // = 6