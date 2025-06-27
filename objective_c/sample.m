// sample.m
// #import <Foundation/Foundation.h> // Include Foundation for NSLog (for printing to console)

// // Your function definition (this is a C-style function, not an Objective-C method)
// float divideNumberByTwo(float dividend)
// {
//     float divisor = 2.0;
//     float quotient = dividend / divisor;
//     return quotient;
// }

// // Main function where your program starts execution
// int main(int argc, const char * argv[]) {
//     // @autoreleasepool is necessary for Objective-C memory management, even for simple programs
//     @autoreleasepool {
//         // Test 1: Using a positive number
//         float testDividend1 = 10.0;
//         float result1 = divideNumberByTwo(testDividend1);
//         NSLog(@"Test 1: Dividing %.1f by two results in %.1f", testDividend1, result1);

//         // Test 2: Using a negative number
//         float testDividend2 = -5.0;
//         float result2 = divideNumberByTwo(testDividend2);
//         NSLog(@"Test 2: Dividing %.1f by two results in %.1f", testDividend2, result2);

//         // Test 3: Using zero
//         float testDividend3 = 0.0;
//         float result3 = divideNumberByTwo(testDividend3);
//         NSLog(@"Test 3: Dividing %.1f by two results in %.1f", testDividend3, result3);
//     }
//     return 0; // Indicates successful program execution
// }

#import <Foundation/Foundation.h> // Always include Foundation for array, number, etc.

int main(int argc, const char * argv[]) {
    @autoreleasepool {

        NSArray *numbers = @[@1, @2, @3, @4, @5]; // Immutable array
        NSMutableArray *mutableNumbers = [NSMutableArray arrayWithArray:numbers]; // Mutable array

        NSLog(@"Original Array: %@", numbers);
        NSLog(@"---------------------------------");

        // MARK: - 1. Fast Enumeration (for-in style)

        // This is the most modern and preferred way to iterate in Objective-C.
        // It's similar to Swift's 'for-in' loop.
        NSLog(@"1. Fast Enumeration:");
        for (NSNumber *number in numbers) {
            NSLog(@"  Number: %@", number);
        }
        NSLog(@"---------------------------------");


        // // MARK: - 2. Standard C-style for loop with Index (using objectAtIndex:)

        // // This is a traditional approach, often used when you need the index.
        // // It works with both NSArray and NSMutableArray.
        // NSLog(@"2. Standard C-style for loop with Index:");
        // for (NSUInteger i = 0; i < numbers.count; i++) {
        //     NSNumber *number = [numbers objectAtIndex:i];
        //     NSLog(@"  Index: %lu, Number: %@", (unsigned long)i, number);
        // }
        // NSLog(@"---------------------------------");


        // // MARK: - 3. Using `NSEnumerator`

        // // `NSEnumerator` is a more explicit way to iterate over collections.
        // // Fast Enumeration (`for-in`) is syntactical sugar for `NSEnumerator` behind the scenes.
        // NSLog(@"3. Using NSEnumerator:");
        // NSEnumerator *enumerator = [numbers objectEnumerator]; // For forward enumeration
        // // NSEnumerator *enumerator = [numbers reverseObjectEnumerator]; // For reverse enumeration

        // NSNumber *number;
        // while ((number = [enumerator nextObject])) {
        //     NSLog(@"  Number: %@", number);
        // }
        // NSLog(@"---------------------------------");


        // // MARK: - 4. Using `enumerateObjectsUsingBlock:` (Block-based enumeration)

        // // This is a powerful and flexible way to iterate using blocks (closures in Swift).
        // // It provides both the object and its index, and can be configured with options.
        // NSLog(@"4. Using enumerateObjectsUsingBlock:");
        // [numbers enumerateObjectsUsingBlock:^(NSNumber * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        //     NSLog(@"  Index: %lu, Number: %@", (unsigned long)idx, obj);

        //     // You can stop the enumeration early by setting *stop to YES
        //     if (idx == 2) {
        //         *stop = YES; // Will stop after processing index 2
        //         NSLog(@"  (Stopped enumeration early)");
        //     }
        // }];
        // NSLog(@"---------------------------------");


        // // MARK: - 5. Using `makeObjectsPerformSelector:`

        // // This method is for when you want to send the same message (call the same method)
        // // to every object in the array. This is less common for complex manipulations
        // // but handy for simple actions like printing or updating a property.
        // // The selector must take no arguments or one argument (the sender itself usually).
        // // It's typically used with methods that don't return values.
        // NSLog(@"5. Using makeObjectsPerformSelector:");
        // // Assuming NSNumber has a method that does something simple, like `description`
        // // or a custom method you might add via a category.
        // // For numbers, just calling description:
        // [numbers makeObjectsPerformSelector:@selector(description)];
        // // You'd usually see the output of the selector's action if it has one.
        // // For demonstrating a custom action, let's pretend NSNumber had `printValue`.
        // // If we wanted to call a method that takes the index, it's not direct.
        // // For simple logging:
        // NSLog(@"  (Note: This method is less flexible for complex actions or returning values.)");
        // // To truly show it, you'd need a custom class with a method
        // // For example, if you had a 'Person' object with a 'sayHello' method:
        // // [peopleArray makeObjectsPerformSelector:@selector(sayHello)];
        // NSLog(@"---------------------------------");


        // // Important: For actual manipulation (like removing elements while iterating),
        // // be cautious. Fast enumeration and `enumerateObjectsUsingBlock` are generally
        // // safe for removal if you use `removeObjectAtIndex:` after iterating or
        // // modify a *mutable copy* of the array. Never modify an array while
        // // fast enumerating it directly.

    }
    return 0;
}