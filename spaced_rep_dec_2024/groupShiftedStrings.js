/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let groups = new Map();
    for (let s of strings) {
        let k = "";
        for (let i = 1; i < s.length; i++) {
            let prev = ("z".charCodeAt() - s[i-1].charCodeAt()) - (s[i-1].charCodeAt() - "a".charCodeAt());
            let curr = ("z".charCodeAt() - s[i].charCodeAt()) - (s[i].charCodeAt() - "a".charCodeAt());
            k += (Math.abs(prev - curr) + ":")
        }
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push(s);
    }
    return Array.from(groups);
};
console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))
