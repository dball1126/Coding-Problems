/**
 * @param {string} s
 * @return {string[]}
 */
// Backtracking
// Time: O(3^n)...3 for newCurr length and n for input length
// Space: O(n)...for recursive call stack
var restoreIpAddresses = function(s) {
    let result = [];
    const backtrack = (i, ipAddress, curr, dots) => {
        if (i >= s.length && dots === 4) { 
            return result.push(ipAddress)
        } else if (i >= s.length || dots === 4) {
            return;
        }
        let newCurr = curr + s[i];
        if (newCurr.length > 1 && newCurr[0] === '0') return;
        if (parseInt(newCurr) > 255) return;

        if (dots === 3) {
            backtrack(i+1, ipAddress + newCurr, '', dots + 1);
        } else {
            backtrack(i+1, ipAddress + newCurr + ".", '', dots + 1);
        }
        backtrack(i+1, ipAddress, newCurr, dots);
    }
    backtrack(0, '', '', 0);
    return result;
};
console.log(restoreIpAddresses("101023"))
// = [ '1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3' ]



