/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    num = num.toString()
    let idxDiff = 0, valDiff = 0, i = 0, j = num.length-1
    let tx = 0, ty = 0

    while (i < j) {
        if (parseInt(num[j]) <= parseInt(num[i])) {
            j--;
        } else {
            let newDiff = Math.abs(j - i)
            let newValDiff = parseInt(num[j]) - parseInt(num[i])
            if (newDiff >idxDiff || (newDiff >= idxDiff && newValDiff > valDiff)) {
                idxDiff = newDiff;
                valDiff = newValDiff
                tx = i;
                ty = j;
            }
            i++
        }
    }
    let arr = num.split("")
    [arr[tx], arr[ty]] = [arr[ty], arr[tx]]
    return arr.join("")
};
console.log(maximumSwap(2736))