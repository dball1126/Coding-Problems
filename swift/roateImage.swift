class Solution {
    func rotate(_ arr: inout [[Int]]) {
        
        for r in 0..<arr.count {
            for c in r..<arr.count {
                var tmp = arr[r][c]
                arr[r][c] = arr[c][r]
                arr[c][r] = tmp
            }
            var i = 0, j = arr.count-1;
            while i < j {
                var temp = arr[r][i];
                arr[r][i] = arr[r][j];
                arr[r][j] = temp;
                i += 1;
                j -= 1;
            }
        }
    }
}