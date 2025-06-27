// import XCTest

// final class ArrayIterationTests: XCTestCase {

//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     let expectedSum = 55 // Sum of numbers from 1 to 10

//     // MARK: - Iteration Methods

//     func test_iteration_method_1_forInLoop() {
//         var sum = 0
//         for number in numbers {
//             sum += number
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 1: for-in loop failed.")
//     }

//     func test_iteration_method_2_forEach() {
//         var sum = 0
//         numbers.forEach { number in
//             sum += number
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 2: forEach failed.")
//     }

//     func test_iteration_method_3_forInLoopWithIndex() {
//         var sum = 0
//         for i in 0..<numbers.count {
//             sum += numbers[i]
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 3: for-in loop with index failed.")
//     }

//     func test_iteration_method_4_enumerated() {
//         var sum = 0
//         for (index, number) in numbers.enumerated() {
//             sum += number // Or sum += numbers[index]
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 4: enumerated() failed.")
//     }

//     func test_iteration_method_5_whileLoop() {
//         var sum = 0
//         var index = 0
//         while index < numbers.count {
//             sum += numbers[index]
//             index += 1
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 5: while loop failed.")
//     }

//     func test_iteration_method_6_repeatWhileLoop() {
//         var sum = 0
//         var index = 0
//         if numbers.isEmpty {
//             XCTAssertEqual(sum, expectedSum, "Method 6: repeat-while loop failed for empty array.")
//             return
//         }
//         repeat {
//             sum += numbers[index]
//             index += 1
//         } while index < numbers.count
//         XCTAssertEqual(sum, expectedSum, "Method 6: repeat-while loop failed.")
//     }

//     func test_iteration_method_7_reduce() {
//         let sum = numbers.reduce(0, +)
//         XCTAssertEqual(sum, expectedSum, "Method 7: reduce failed.")
//     }

//     func test_iteration_method_8_mapAndReduce() {
//         let sum = numbers.map { $0 }.reduce(0, +)
//         XCTAssertEqual(sum, expectedSum, "Method 8: map then reduce failed.")
//     }

//     func test_iteration_method_9_lazyMapAndReduce() {
//         let sum = numbers.lazy.map { $0 }.reduce(0, +)
//         XCTAssertEqual(sum, expectedSum, "Method 9: lazy map then reduce failed.")
//     }

//     func test_iteration_method_10_reversedAndForEach() {
//         var sum = 0
//         numbers.reversed().forEach { number in
//             sum += number
//         }
//         XCTAssertEqual(sum, expectedSum, "Method 10: reversed() and forEach failed.")
//     }
// }