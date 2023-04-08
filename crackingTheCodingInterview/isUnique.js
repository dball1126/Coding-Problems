// const isUnique = (s) => {
//     const map = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if (!map.has(s[i])) map.set(s[i], 0)
//         map.set(s[i], map.get(s[i])+1)
//         if (map.get(s[i]) > 1) return false;
//     }
//     return true;
// }

const isUnique = (s) => {
    s = [...s].sort((a,b) => a.localeCompare(b)).join("")
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) return false;
    }
    return true;
}
console.log(isUnique("addfs"))