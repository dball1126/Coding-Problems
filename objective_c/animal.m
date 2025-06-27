#import <Foundation/Foundation.h>

// --- Animal Class Definition (Animal.h) ---
@interface Animal : NSObject
@property (nonatomic, strong) NSString *name; // All animals have a name

- (instancetype)initWithName:(NSString *)name;
- (void)makeSound; // A generic sound method
@end

// --- Animal Class Implementation (Animal.m) ---
@implementation Animal

- (instancetype)initWithName:(NSString *)name {
    self = [super init]; // Initialize the NSObject superclass
    if (self) {
        _name = name; // Assign the provided name
    }
    return self;
}

- (void)makeSound {
    NSLog(@"%@ makes a generic animal sound.", self.name);
}

// Optional: Override description for better logging
- (NSString *)description {
    return [NSString stringWithFormat:@"<Animal: %p, name='%@'>", self, self.name];
}

@end


// --- Dog Class Definition (Dog.h) ---
@interface Dog : Animal
@property (nonatomic, strong) NSString *breed; // Dogs have a breed in addition to a name

- (instancetype)initWithName:(NSString *)name breed:(NSString *)breed;
// makeSound will be overridden
- (void)fetch; // A dog-specific action
@end

// --- Dog Class Implementation (Dog.m) ---
@implementation Dog

// Custom initializer for Dog, calling superclass's initializer
- (instancetype)initWithName:(NSString *)name breed:(NSString *)breed {
    self = [super initWithName:name]; // Call Animal's initializer
    if (self) {
        _breed = breed; // Assign the Dog's specific property
    }
    return self;
}

// Override the makeSound method from Animal
- (void)makeSound {
    NSLog(@"%@ the %@ says Woof! Woof!", self.name, self.breed);
}

- (void)fetch {
    NSLog(@"%@ the %@ happily fetches the ball!", self.name, self.breed);
}

// Optional: Override description for better logging, including superclass info
- (NSString *)description {
    // You can call super's description or format it yourself
    return [NSString stringWithFormat:@"<Dog: %p, name='%@', breed='%@'>", self, self.name, self.breed];
}

@end


// --- Main Program to Test (main.m) ---
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        NSLog(@"--- Class Inheritance Demonstration ---");

        // Create an instance of the Animal class
        Animal *myAnimal = [[Animal alloc] initWithName:@"Leo"];
        NSLog(@"%@", myAnimal);
        [myAnimal makeSound]; // Output: Leo makes a generic animal sound.

        NSLog(@"\n---------------------------------");

        // Create an instance of the Dog class (inherits from Animal)
        Dog *myDog = [[Dog alloc] initWithName:@"Buddy" breed:@"Golden Retriever"];
        NSLog(@"%@", myDog);
        [myDog makeSound]; // Output: Buddy the Golden Retriever says Woof! Woof! (Dog's overridden method)
        [myDog fetch];     // Output: Buddy the Golden Retriever happily fetches the ball!

        NSLog(@"\n---------------------------------");

        // Polymorphism: An Animal pointer can point to a Dog object
        Animal *anotherAnimal = [[Dog alloc] initWithName:@"Max" breed:@"German Shepherd"];
        NSLog(@"%@", anotherAnimal);
        [anotherAnimal makeSound]; // Output: Max the German Shepherd says Woof! Woof!
                                   // The Dog's implementation of makeSound is called at runtime.
        // [anotherAnimal fetch]; // ERROR: 'fetch' is not defined for Animal, even if the object is a Dog.
                                 // You would need to cast it: [(Dog *)anotherAnimal fetch];

        NSLog(@"--- End Demonstration ---");
    }
    return 0;
}