import Foundation

func runStructuredConcurrencyTaskEvent_Corrected() {
    print("\n--- Launching Structured Concurrency Task Event (Corrected) ---")
    print("Task Event 2 (Corrected): Main thread starting. (Thread: \(Thread.current))") // Still safe here

    Task {
        // No Thread.current here!
        print("Task Event 2 (Corrected): Parent Task started. (Running on a system-managed thread).")

        async let childResult = simulateChildWork_Corrected()

        print("Task Event 2 (Corrected): Parent Task doing other work concurrently... (Running on a system-managed thread).")
        try? await Task.sleep(nanoseconds: 500_000_000)

        let result = await childResult
        print("Task Event 2 (Corrected): Parent Task received result from child: '\(result)'. (Running on a system-managed thread).")
        print("Task Event 2 (Corrected): Parent Task finished. (Running on a system-managed thread).")
    }

    print("Task Event 2 (Corrected): Main thread continued after launching parent task. (Thread: \(Thread.current))") // Still safe here
}

func simulateChildWork_Corrected() async -> String {
    // No Thread.current here!
    print("Task Event 2 (Corrected): Child Task started. (Running on a system-managed thread).")
    try? await Task.sleep(nanoseconds: 1_000_000_000)
    print("Task Event 2 (Corrected): Child Task finished its work. (May or may not be the same thread).")
    return "Data Fetched"
}

runStructuredConcurrencyTaskEvent_Corrected()

DispatchQueue.main.asyncAfter(deadline: .now() + 2.5) {
    print("Task Event 2 (Corrected): Main thread (after delay) has observed structured tasks output.")
}