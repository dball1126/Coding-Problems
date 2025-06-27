

class Solution {
    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        var adjList: [Int:Set<Int>] = [:]
        for i: Int in 0..<numCourses {
            adjList[i] = []
        }
        for pre in prerequisites {
            adjList[pre[0]]?.insert(pre[1])
        }
        var visited = Set<Int>(), visiting = Set<Int>()

        func hasCycle(_ node: Int) -> Bool {
            guard !visited.contains(node) else { return false }
            guard !visiting.contains(node) else { return true }
            visiting.insert(node)

            for child: Int in adjList[node]! {
                if hasCycle(child) { return true }
            }
            visiting.remove(node)
            visited.insert(node)
            return false
        }
        for i: Int in 0..<numCourses {
            if hasCycle(i) { return false }
        }
        return true
    }
}

