/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let hashmap = {};
    for (let s of strings) {
        let key = "";
        for (let i = 0; i < s.length - 1; i++) {
            let circularDifference = (s.charCodeAt(i + 1) + 26 - s.charCodeAt(i)) % 26;
            key += circularDifference.toString();
        }
        if (!hashmap[key]) hashmap[key] = [];
        hashmap[key].push(s);
    }
    return Object.values(hashmap);
};
console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))