#import <Foundation/Foundation.h>

@interface PointerDemo : NSObject
- (void)showPointers;
@end

@implementation PointerDemo

- (void)showPointers {
    NSLog(@"--- Pointer Demonstration ---");

    // 1. Pointer to a primitive type (int)
    int myInt = 10;                     // An integer variable
    int *intPtr = &myInt;               // intPtr holds the memory address of myInt

    NSLog(@"\n1. Primitive Type Pointer:");
    NSLog(@"   myInt value: %d", myInt);
    NSLog(@"   myInt address: %p", &myInt);
    NSLog(@"   intPtr holds address: %p", intPtr);
    NSLog(@"   Value *intPtr points to: %d", *intPtr); // Dereference to get value

   
    // If NSString were mutable, changing one would affect the other.
    // (NSString is immutable, so we'd reassign the pointer for a 'change')

    NSLog(@"--- End Demonstration ---");
}

@end

// Main function to run the demo
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        PointerDemo *demo = [[PointerDemo alloc] init];
        [demo showPointers];
    }
    return 0;
}