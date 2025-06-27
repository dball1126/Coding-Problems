/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    num = (num + "").split("")
    let vals = [...new Array(num.length)].map(a => []);
    vals[num.length-1].push(parseInt(num[num.length-1]), num.length-1);
    for (let i = num.length-2; i >= 0; i--) {
        let val = parseInt(num[i]);
        let [prevVal, prevIdx] = vals[i+1];
        if (prevVal >= val) {
            vals[i].push(prevVal, prevIdx)
        } else {
            vals[i].push(val, i)
        }
    }
    let i = 0;
    while (i+1 < num.length) {
        let curr = parseInt(num[i]);
        if (curr === vals[i+1][0] || i === vals[i+1][1]) {
            i++;
        } else if (curr < vals[i+1][0]) {
            
            [num[i], num[vals[i+1][1]]] = [num[vals[i+1][1]], num[i]];
            break
        } else {
            i++;
        }
    }
    return parseInt(num.join(""))
};
console.log(maximumSwap(1993))