var minSteps = function(s, t) {
    const charMapT = new Map(), charMapS = new Map(), checked = new Set();
    let under = 0, over = 0, missing = 0;
    for (let i = 0; i < s.length; i++) {
        if (!charMapT.has(t[i])) charMapT.set(t[i], 0)
        charMapT.set(t[i], charMapT.get(t[i]) + 1)

        if (!charMapS.has(s[i])) charMapS.set(s[i], 0)
        charMapS.set(s[i], charMapS.get(s[i]) + 1)
    }

    for (let [k, v ] of charMapT) {
        if (checked.has(k)) continue;
        checked.add(k)
        if (!charMapS.has(k)) { 
            missing += 1
            under += (charMapT.get(k) - 1)
        } else if (charMapS.get(k) < v) {
            over += (v - charMapS.get(k))
        } else {
            under += Math.abs(charMapS.get(k) - v)
        }
    }
    if (!over || !under) return missing + Math.abs(under - over)
    
    return missing + (Math.abs(under - over) + Math.floor((under+over)/2))
};

console.log(minSteps(s = "leetcode", t = "practice"))