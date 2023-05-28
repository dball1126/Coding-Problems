
// Sliding Window + Dynamic Programming
// Time: O(n)
// Space: O(1)
var numSub = function(s) {
    if (!s) return 0;
    let e = s.length-1, curr = s.length-1, total = 0, sum = 0;
    let max = 10**9 + 7

    while (e >= 0) {
        let prev = s[e+1]
        if (prev !== undefined && prev === '1' && s[e] === '1') {
            sum += ((curr - e) + 1)
        } else if (s[e] === '1') {
            sum = 1
            curr = e
        } else {
            sum = 0
            curr = e-1
        }
        e--
        if (e < 0 || s[e] !== '1') {
            total += sum
            sum = 0
            curr = e
        }
    }
    return total % max
}; console.log(numSub("01110")) // = 6
