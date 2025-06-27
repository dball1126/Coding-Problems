/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let str = num + ""
    let n = str.length, result = "", swapped = false, swappedIdx = undefined, nextSwappedIdx = undefined;
    let maxIdx = n-1
    maxNums = [...new Array(n)]

    for (let i = n-1; i >= 0; i--) { // O(n)
        if (parseInt(str[maxIdx]) < parseInt(str[i])) {
            maxIdx = i
        }
        maxNums[i] = maxIdx;
    }

    for (let i = 0; i < n; i++) {
        const v = parseInt(str[i])
        if (swapped) {
            if (swappedIdx !== undefined && i === swappedIdx) {
                result += str[nextSwappedIdx]
                swappedIdx = undefined
            } else {
                result += str[i]
            }
            continue;
        } 
        else if ((i+1) < n &&  parseInt(str[maxNums[i+1]]) > v) {
            swappedIdx = maxNums[i+1]
            nextSwappedIdx = i
            result += str[maxNums[i+1]]
            swapped = true;
        } else {
            result += str[i]
        }
    }
    return parseInt(result);
};
console.log(maximumSwap(1993))
/**
 2736
[1,1,3,3] max indexes
swappedidx = 0
result = "7"
swapped = true

next iteration   swappwed


 */