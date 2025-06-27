/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let n = stones.length
    let memo = [...new Array(n)].map(a => [...new Array(n)])

    const dp = (idx, curr) => {
        if (curr.length <= 1) return curr.length

        let min = Infinity;
        let arr = []
        for (let i = 0; i < n; i++) {
            if (i === idx) continue;
            
            min = Math.min
        }
    }
};