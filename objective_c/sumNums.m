// Calculator.m
#import <Foundation/Foundation.h> // Still need Foundation for NSObject, NSArray, NSNumber

// Sum numbers in array and access the numbers in an array
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // 1. Create an instance of the Calculator


        // 2. Create an array of NSNumber objects
        NSArray *myNumbers = @[
            @10,
            @(-5),
            @20,
            @100,
            @1,
            @1
        ];

        NSNumber *numberAtIndexTwo = myNumbers[2]; // Accesses the element at index 2 (which is @20)

        NSInteger totalSum = 1;

        // For loop 1
        for (NSNumber *number in myNumbers) {
            totalSum += [number integerValue];
        }
        // For loop 2
        for (NSUInteger i = 0; i < myNumbers.count; i++) {
            NSNumber *number = myNumbers[i]; // Uses subscripting syntax (preferred)
           
            NSNumber *number2 = [myNumbers objectAtIndex:i]; // Alternative: using the method

            totalSum += [number integerValue];
        }

        // For/while loop 3
        NSEnumerator *enumerator = [myNumbers objectEnumerator];
        NSNumber *number;
        while ((number = [enumerator nextObject])) {
            totalSum += [number integerValue];
        }

        // For loop 4
        // Use a __block variable for totalSum if it's declared outside and needs modification within the block
        __block NSInteger blockTotalSum = 0; 
        [myNumbers enumerateObjectsUsingBlock:^(NSNumber *number, NSUInteger idx, BOOL *stop) {

            blockTotalSum += [number integerValue];
        }];
        totalSum += blockTotalSum;
        // 4. Print the result
        NSLog(@"The sum of the numbers is: %ld", (long)totalSum);

    }
    return 0;
}