/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    let max = 0
    rollMax.forEach(v => max = Math.max(max, v));

    const dp = [...new Array()]
};