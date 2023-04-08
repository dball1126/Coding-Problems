var numOfWays = function(arr) {
    let prefix = [arr[0]], left = [], right = [], result = []

    for (let i = 1; i < arr.length; i++) {
        let n = arr[i], node = prefix[0]
        if (node < n) {
            right.push(n)
        } else {
            left.push(n)
        }
    }
    const weaveLists = (p, l, r, result) => {
        if (!l.length || !r.length) {
            result.push([...p, ...l, ...r])
            return;
        }
            let temp = l.shift();
            p.push(temp)
            weaveLists(p, l, r, result)
            l.unshift(temp)
            p.pop()
            
            temp = r.shift()
            p.push(temp)
            weaveLists(p, l, r, result)
            r.unshift(temp)
            p.pop()
        return
    }

    weaveLists(prefix, left, right, result)
    return result.length
};