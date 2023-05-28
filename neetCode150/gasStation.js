// Greedy
// Time: O(n * m)
// Space: O(n)
var canCompleteCircuit = function(gas, cost) {

    const recursion = (idx, s, c) => {
        if (c < 0) return -1;
        if (s === idx) return s;
        if (s === -1) s = idx;

        c += (gas[idx] - cost[idx])
        idx = idx+1 >= gas.length ? 0 : idx+1

        return recursion(idx, s, c)
    }

    for (let i = 0; i < gas.length; i++) {
        const result = recursion(i, -1, 0)
        if (result >= 0) return result;
    }
    return -1
};


console.log(canCompleteCircuit(gas = [2,3,4], cost = [3,4,3]))