/**
 * Stack, time/space: O(n)
 */
const isValid = (a) => {
    let map = new Map([[")","("],["}","{"],["]","["]])
    let stack = [];
    for (let i = 0; i < a.length; i++) {
        if (!map.has(a[i])) {
            stack.push(a[i])
        } else {
            let v = stack.pop();
            if (map.get(a[i]) !== v) return false
        }
    }
    return a.length === 0;
}
console.log(isValid(s = "()"))