var toLowerCase = function(s) {
    let result = "";
    const map = new Map([["A", "a"],["B", "b"],["C", "c"],["D", "d"],["E", "e"],["F", "f"],["G", "g"],
    ["h", "h"],["I", "i"],["J", "j"],["K", "k"],["L", "l"],["M", "m"],["N", "n"],
    ["O", "o"],["P", "p"],["Q", "q"],["R", "r"],["S", "s"],["T", "t"],["U", "u"],
    ["V", "V"],["W", "w"],["X", "x"],["Y", "y"],["Z", "Z"]])
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            result += map.get(char)
        } else {
            result += char
        }
    }
    return result;
};