#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Keys and values must be Objective-C objects.
        // Use NSNumber for primitive numbers, NSString for strings, etc.

        NSDictionary *myDictionary = @{
            @"firstName": @"John",
            @"lastName": @"Doe",
            @"age": @30, // NSNumber literal for int 30
            @"isStudent": @NO // NSNumber literal for BOOL NO
        };

        NSLog(@"Immutable Dictionary: %@", myDictionary);
        // Output: Immutable Dictionary: {
        //    age = 30;
        //    firstName = John;
        //    isStudent = 0;
        //    lastName = Doe;
        // }
        // Note: Order is not guaranteed.
    }
    return 0;
}