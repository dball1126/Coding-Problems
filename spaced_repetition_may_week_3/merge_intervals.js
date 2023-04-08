const merge = (intervals) => {
    if (intervals.length <= 1) return intervals
    intervals.sort((a,b) => a[0] - b[0])
    let result = []
    console.log(intervals)
    for (let i = 0; i < intervals.length-1; i++) {
        let [s, f] = [intervals[i], intervals[i+1]]
        if ( s[0] < f[0] && s[1] < f[0] && s[1] < f[1]) {
            result.push([ s[0],s[1] ])
            if (i+1 >= intervals.length-1) {
                result.push([ f[0],f[1] ])
            }
        } else {
            result.push([s[0], Math.max(s[1], f[1])])
            i++
        }
    }
    return result
}

console.log(merge([[1,4],[0,4]]))