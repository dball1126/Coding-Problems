import Foundation // For DispatchQueue

func dispatchEventMethod1() {
    print("Method 1: Starting event dispatch process on main thread.")

    // Get a global concurrent queue. .userInitiated is for tasks that the user
    // is waiting for, but shouldn't block the UI. Other options include
    // .utility, .background, or .default.
    let backgroundQueue = DispatchQueue.global(qos: .userInitiated)

    // Dispatch the event asynchronously to the background queue
    backgroundQueue.async {
        print("Method 1: Event code running on background queue (Thread: \(Thread.current)).")
        // Simulate some work
        Thread.sleep(forTimeInterval: 1.0) // Sleep for 1 second
        print("Method 1: Event code finished on background queue.")

        // If you need to update UI or interact with main thread after background work,
        // dispatch back to the main queue
        DispatchQueue.main.async {
            print("Method 1: Back on main queue after event completion (Thread: \(Thread.current)).")
        }
    }

    print("Method 1: Dispatch call completed on main thread. Main thread continues.")
}

// --- Call the function to test ---
print("\n--- Testing Dispatch Method 1 ---")
dispatchEventMethod1()

// Keep the main thread alive long enough for async tasks to complete in a playground/simple script
// In a real app, the app's lifecycle manages this.
// For playground/simple script:
DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
    print("Method 1: Main thread (after delay) has observed async tasks.")
}



func dispatchEventMethod2() {
    print("Method 2: Starting delayed event dispatch process on main thread.")

    let delayInSeconds: Double = 1.5 // 1.5 seconds delay

    // Dispatch the event to the main queue after a specified deadline
    DispatchQueue.main.asyncAfter(deadline: .now() + delayInSeconds) {
        print("Method 2: Delayed event code running on main queue (Thread: \(Thread.current)).")
        print("Method 2: This message appeared after a \(delayInSeconds) second delay.")
    }

    print("Method 2: Dispatch delayed call completed on main thread. Main thread continues immediately.")
}

// --- Call the function to test ---
print("\n--- Testing Dispatch Method 2 ---")
dispatchEventMethod2()

// Keep the main thread alive for the delay
DispatchQueue.main.asyncAfter(deadline: .now() + 3.0) {
    print("Method 2: Main thread (after longer delay) has observed delayed task.")
}