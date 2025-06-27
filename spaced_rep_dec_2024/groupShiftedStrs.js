/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let map = new Map()

    for (let str of strings) {
        let k = ""
        for (let i = 1; i < str.length; i++) {
            k += Math.abs(str[i-1].charCodeAt() - str[i].charCodeAt())
        }
        if (!map.has(k)) map.set(k, [])
        map.get(k).push(str)
    }
    return map.values()
};
console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))