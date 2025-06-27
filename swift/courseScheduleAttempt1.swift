class Solution {
    func canFinish(_ numCourses: Int, _ prerequisites: [[Int]]) -> Bool {
        var adjList: [Int: Set<Int>] = [:], visited = Set<Int>(), visiting = Set<Int>()
        for i in 0..<numCourses { adjList[i] = Set<Int>()}
        for pre in prerequisites { adjList[pre[0]]?.insert(pre[1])}

        func hasCycle(_ node: Int) -> Bool {
            guard !visited.contains(node) else { return false }
            guard !visiting.contains(node) else { return true }
            visiting.insert(node)

            for n in adjList[node]! {
                if hasCycle(n) { return false }
            }
            visiting.remove(node)
            visited.insert(node)
            return false
        }

        for i in 0..<numCourses {
            if hasCycle(i) { return false }
        }
        return true
    }
}


