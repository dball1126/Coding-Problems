function threeSum(n) {
    if (!n) return []
    let result = []
    n.sort((a,b) => a - b);
    for (let i = 0; i < n.length; i++) {
        let j = i + 1, e = n.length-1
        while (j < e) {
            let sum = n[i] + n[j] + n[e]
            if ( sum === 0) result.push([n[i],n[j],n[e]])
            
            if (sum > 0) {
                while (n[e] === n[e-1]) e--
                e--
            } else {
                while (n[j] === n[j+1]) j++
                j++
            }
        }
        while (n[i] === n[i+1])i++
    }
    return result;
}

console.log(threeSum([-1,0,-4,-1,2,1]))