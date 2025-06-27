
// import HeapModule
// class Solution {
//     func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
//         let numsDict = nums.reduce(into: [:]) { $0[$1, default: 0] += 1 }
//         var heap: Heap<NumFreq> = []
        
//         for (num, freq) in numsDict {
//             heap.insert(NumFreq(num: num, freq: freq))
//             if heap.count > k {
//                 heap.removeMin()
//             }
//         }
        
//         return heap.unordered.map { $0.num }
//     }

//     struct NumFreq: Comparable {
//         let num: Int
//         let freq: Int
        
//         static func < (lhs: Solution.NumFreq, rhs: Solution.NumFreq) -> Bool {
//             lhs.freq < rhs.freq
//         }
//     }
// }



// let sol = Solution()

// let nums1 = [1,1,1,2,2,3]
// let k1 = 2
// // print("Input: \(nums1), k=\(k1)")
// // print("Top \(k1) frequent elements: \(sol.topKFrequent(nums1, k1))")