/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let memo = [...new Array(gas.length+1)].map(a => [...new Array(cost.length+1)].fill(false))

    let dp = (idx, c, starting, startIdx) => {
        if (idx === startIdx && !starting) {
            return c >= 0
        }
        if (!starting && memo[idx][c] !== undefined) return memo[idx][c]
        if (c < 0) return false;

        let newIdx = (idx+1) % gas.length;
        let newCost = c + gas[idx] - cost[idx];
        let val = dp(newIdx, newCost, false, startIdx);
        return memo[idx][c] = val;
    }
    // for (let i = 0; i < gas.length; i++) {
    //     if (dp(i, 0, true, i)) return i
    //     for (let j = i; j <= gas.length; j++) {
    //         if (i !== j)
    //     }
    // }
    return -1;
};
console.log(canCompleteCircuit([67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66], 
    cost = [27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]))
