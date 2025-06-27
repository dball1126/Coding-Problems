/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (!gas.length) return -1;
    let idx = 1, currSum = gas[0] - cost[0], currIdx = 1;
    while (currIdx < gas.length) {
        if (currSum < 0) {
            idx = currIdx
        }
        currSum += (gas[currIdx] - cost[currIdx]);
        currIdx++
    }
    return currSum >= 0 ? idx : -1
};
console.log(canCompleteCircuit(gas = [1,2,3,4,5], cost = [3,4,5,1,2]));