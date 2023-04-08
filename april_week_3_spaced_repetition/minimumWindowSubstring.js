var minWindow = function(s, t) {
    let [l,r,word,map,c] = [0,0,"",new Map(), 0]

    for (let i = 0; i < t.length; i++) {
        c++;
        if (!map.has(t[i])) map.set(t[i], 0)
        map.set(t[i], map.get(t[i]) + 1)
    }
    while (l < s.length && r < s.length) {
        if (r < s.length && map.has(s[r])) {
            if (map.get(s[r]) > 0) {
                c--;
                map.set(s[r], map.get(s[r]) -1)
            } else {
                c++;
                map.set(s[r], map.get(s[r]) - 1)
            }
        }

        if (c === 0) {
            let sub = s.substring(l, r + 1)
            console.log(sub)
            if (!word.length || sub.length < word.length) word = sub
            while (c === 0 || l < r) {

                    if (map.has(s[l])) {
                        map.set(s[l], map.get(s[l]) + 1)
                        c++
                    }
                    if (l === r) r++
                    l++
                
            }
        }

        if (r >= s.length && l !== r) {
            l++
        } else {
            r++
        }
    }
    return word
}

console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"))