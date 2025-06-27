// // Sources/MyTopKFrequentProject/main.swift
// import Foundation
// import HeapModule
// // No need to import HeapModule here, it's linked via Package.swift to the target.

// // This is the Solution class from your immersive artifact
// class Solution {
//     func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
//         // ... (Your HeapModule code from the immersive artifact goes here) ...
//         // Copy and paste the entire Solution class from the immersive artifact
//         // into this file or TopKFrequent.swift. If you move Solution to TopKFrequent.swift,
//         // then main.swift will just call it.
//         // For simplicity, you can put the Solution class directly in this main.swift for a single-file run.

//         // 1. Count the frequency of each number
//         var frequencyMap: [Int: Int] = [:]
//         for num in nums {
//             frequencyMap[num, default: 0] += 1
//         }

//         // 2. Use a Min-Heap from HeapModule
//         var minHeap = Heap<(Int, Int)>() // Tuples (frequency, number)

//         for (num, freq) in frequencyMap {
//             minHeap.insert((freq, num))
//             if minHeap.count > k {
//                 _ = minHeap.popMin()
//             }
//         }

//         // 3. Extract the k elements
//         var result: [Int] = []
//         while let (_, num) = minHeap.popMin() {
//             result.append(num)
//         }
//         return result
//     }
// }


// // Example Usage:
// let sol = Solution()

// let nums1 = [1,1,1,2,2,3]
// let k1 = 2
// print("Input: \(nums1), k=\(k1)")
// print("Top \(k1) frequent elements: \(sol.topKFrequent(nums1, k1))")

// let nums2 = [1]
// let k2 = 1
// print("\nInput: \(nums2), k=\(k2)")
// print("Top \(k2) frequent elements: \(sol.topKFrequent(nums2, k2))")

// let nums3 = [3,0,1,0]
// let k3 = 1
// print("\nInput: \(nums3), k=\(k3)")
// print("Top \(k3) frequent elements: \(sol.topKFrequent(nums3, k3))")