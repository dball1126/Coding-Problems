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

    // -  SORT ascending order
    NSSortDescriptor *sortDescriptor = [NSSortDescriptor sortDescriptorWithKey:@"self" ascending:YES];

    NSSortDescriptor *sortDescriptordecend = [NSSortDescriptor sortDescriptorWithKey:@"self" ascending:NO];

    // sortedArrayUsingDescriptors: returns a new array with the sorted elements
    NSArray *myNumberssorted = [myNumbers sortedArrayUsingDescriptors:@[sortDescriptor]];

    NSArray *myNumberssorteddecend = [myNumbers sortedArrayUsingDescriptors:@[sortDescriptordecend]];
    NSLog(@"My numbers array: %@", myNumberssorted);
    NSLog(@"My numbers array: %@", myNumberssorteddecend);

        // 4. Print the result
        // NSLog(@"The sum of the numbers is: %ld");

    }
    return 0;
}