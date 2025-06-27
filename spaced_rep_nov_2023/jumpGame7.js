/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
// Greedy
// Time and Space: O(n)
var canReach = function(s, minJump, maxJump) {
    let queue = [0], n = s.length, min = 0

    while (queue.length) {
        let i = queue.shift();

        if (i === n-1) return true;
        let newMin = Math.min(i + maxJump, n-1)
        if ((i + minJump) <= newMin) {
 
            let begin = Math.max(min+1, i + minJump)

            for (let j = begin; j <= newMin; j++) {
                if (s[j] === '0') {
                    if (j === n-1) return true
                    if (Math.min(j + maxJump, n-1) > newMin) {
                        queue.push(j)
                    }
                }
            }
            min = newMin
        }
    }
    return false;
};
console.log(canReach( s = "01101110", minJump = 2, maxJump = 3))// = true




