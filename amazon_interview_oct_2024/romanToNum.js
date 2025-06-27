/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let i = 0, total = 0
    const map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50],
    ["C", 100], ["D", 500], ["M", 1000], ["IV", 4], ["IX", 9], ["XL", 40], ["XC", 90],
    ["CD", 400], ["CM", 900]])

    while (i < s.length) {
        let nx = s[i] + (s[i+1] || "")

        if (nx.length === 2 && map.has(nx)) {
            total += map.get(nx);
            i += 2
        } else {
            total += map.get(s[i])
            i += 1
        }
    }
    return total
};
console.log(romanToInt("MCMXCIV"))