// time O(n  + m)
// space O(n)
// use hashmap and a count variable

const checkPermutation = (s, t) => {
    if (s === t || s.length !== t.length) return false;
    let [map, count] = [new Map(), s.length]

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 0)
        map.set(s[i], map.get(s[i]) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
            if (map.get(t[i]) >= 0) count--
        }
    }
    return count === 0
}

console.log(checkPermutation("eat", "tae"))