// Calculator.m
#import <Foundation/Foundation.h> // Still need Foundation for NSObject, NSArray, NSNumber

// --- Class Interface (Declaration) ---
// Define the Calculator class and its method here directly in the .m file.
// Because it's not in a .h file, other .m files won't "see" this class.
@interface Calculator : NSObject

/**
 * Iterates over an array of NSNumber objects and sums their integer values.
 *
 * @param numbers An NSArray containing NSNumber objects.
 * @return The sum of the integer values in the array. Returns 0 if the array is nil or empty.
 */
- (NSInteger)sumNumbersInArray:(NSArray<NSNumber *> *)numbers;

@end

// --- Class Implementation ---
// Provide the actual code for the methods here.
@implementation Calculator

- (NSInteger)sumNumbersInArray:(NSArray<NSNumber *> *)numbers {
    // Check if the array is nil or empty to avoid issues and return 0
    if (!numbers || numbers.count == 0) {
        return 0;
    }

    NSInteger totalSum = 0;

    // Fast enumeration provides a clean and efficient way to iterate
    for (NSNumber *number in numbers) {
        totalSum += [number integerValue];
    }

    return totalSum;
}

@end

// --- Example Usage (typically in main.m or a test file) ---
// This main function demonstrates how to use the Calculator class,
// assuming it's in the same .m file or compiled with it.
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // 1. Create an instance of the Calculator
        Calculator *myCalculator = [[Calculator alloc] init];

        // 2. Create an array of NSNumber objects
        NSArray *myNumbers = @[
            @10,
            @(-5),
            @20,
            @100,
            @0,
            @1
        ];

        NSNumber *numberAtIndexTwo = myNumbers[2]; // Accesses the element at index 2 (which is @20)


        // 3. Call the method to sum the numbers
        NSInteger sum = [myCalculator sumNumbersInArray:myNumbers];

        // 4. Print the result
        NSLog(@"The sum of the numbers is: %ld", (long)sum);

    }
    return 0;
}