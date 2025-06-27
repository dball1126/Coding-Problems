


#import <Foundation/Foundation.h>

@interface PointerDemo : NSObject
- (void)showPointers;
@end

@implementation PointerDemo

- (void)showPointers {
// MARK: 2. Pointer to Dynamically Allocated C Memory (Heap Memory)
    // This is where you *do* manually manage memory.
    int *dynamicIntPtr = (int *)malloc(sizeof(int)); // Allocate memory for one int on the heap
    if (dynamicIntPtr == NULL) { // Always check if malloc succeeded
        NSLog(@"   Error: Memory allocation failed for dynamicIntPtr.");
        return;
    }
    *dynamicIntPtr = 123; // Store a value in the heap memory
    NSLog(@"\n2. Dynamically Allocated C Memory (Heap):");
    NSLog(@"   dynamicIntPtr holds address: %p", dynamicIntPtr);
    NSLog(@"   Value *dynamicIntPtr points to: %d", *dynamicIntPtr);

    // After use, you MUST free this memory to prevent leaks.
    free(dynamicIntPtr); // Release the memory block pointed to by dynamicIntPtr
    dynamicIntPtr = NULL; // Good practice: set the pointer to NULL after freeing
    NSLog(@"   Memory pointed to by dynamicIntPtr has been freed.");
    // Attempting to use dynamicIntPtr after free() is undefined behavior.
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