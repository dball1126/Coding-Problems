/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const groups = new Map();
    for (let str of strings) {
        let k = ""
        for (let i = 1; i < str.length; i++) {
            k += (((26 + str[i].charCodeAt() )- str[i-1].charCodeAt()) % 26) + ":";
        }
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push(str);
    }
    return Array.from(groups.values());
};
console.log(groupStrings(["abc","bcd","acef","xyz","az","ba","a","z"]))