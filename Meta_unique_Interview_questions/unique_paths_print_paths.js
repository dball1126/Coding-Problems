// Given N, representing the size of an NxN square grid, I want you to 
// return all the paths from the top left corner to the bottom right corner, 
// given that you can only move down or right in the grid. The return value should be an array of strings

const printUniquePaths = (n) => {
    
    let paths = []
    const dp = (r, c, path) => {
        if (r >= n || c >= n) return ""
        if (r === n-1 && c === n-1) {
            path += "-end"
            return paths.push(path)
        }
        
        if (r +1 < n) {
            dp(r +1, c, path + "-down")
        }
        if (c+1 < n) {
            dp(r, c + 1, path + "-right")
        }
        return memo[r][c] = path;
    }
    dp(0, 0, "start")

    for (let p of paths) {
        console.log(p)
    }
}

console.log(printUniquePaths(3))