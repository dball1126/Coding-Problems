class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        var visited: Set<Int> = Set<Int>()
        var adjList: [Int:Set<Int>] = [:]
        var stack: [Int] = [source]

        for edge in edges {
           var x = edge[0]
           var y = edge[1]
           if x == nil || y == nil { continue }
           adjList[x, default: Set<Int>()].insert(y)
           adjList[y, default: Set<Int>()].insert(x)
        }

        while !stack.isEmpty {
            var node: Int = stack.popLast()!
            if node == destination { return true }
            visited.insert(node)

            if var items = adjList[node] {
                for n in Array(items) {
                    if !visited.contains(n) {
                        visited.insert(n)
                        stack.append(n)
                    }
                }
            }
        }
        return false
    }
}

