class Solution {
    func fib(_ n: Int) -> Int {
        var arr: [Int] = []
        arr[0] = 0
        arr[1] = 1
        for i in 2...n {
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr[n]
    }
}