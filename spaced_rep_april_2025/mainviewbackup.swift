import SwiftUI
import FirebaseCore
import FirebaseFirestore
import FirebaseAuth

struct MainView: View {
    @StateObject var viewModel = MainViewViewModel()
    @StateObject var teamsViewModel = TeamsViewModel()
    @StateObject var eventsViewModel: CalendarEventTransformModel
    @FirestoreQuery var growCycles: [GrowCycle]
    @State var growCyclesMap: [String: GrowCycle]?

    @State private var isShowingNewGrowCycle = false
    @State private var calendarViewModeWeek: CalendarViewMode = .week
    @State private var calendarViewModeMonth: CalendarViewMode = .month
    @State private var showDatepickerYes: Bool = true
    @State private var showDatepickerNo: Bool = false
    @State private var selectedGrowCycle: GrowCycle? = nil // To store the tapped grow cycle
    @State private var isShowingGrowCycleDetailSheet = false // To control sheet presentation
    @State private var isEditMode = false
    @State private var editMode = true
    @State private var myUserId: String = ""
    @State private var isMenuOpen = false

    init() {
        FirebaseApp.configure()
        if let userId = Auth.auth().currentUser?.uid {
            _eventsViewModel = StateObject(wrappedValue: CalendarEventTransformModel(userId: userId))
            _growCycles = FirestoreQuery(collectionPath: "users/\(userId)/growCycles") // Correct path
            myUserId = userId
        } else {
            _eventsViewModel = StateObject(wrappedValue: CalendarEventTransformModel(userId: ""))
            _growCycles = FirestoreQuery(collectionPath: "growCycles") // new path
        }
        self.growCyclesMap = [:]
    }

    var body: some View {
        ZStack(alignment: .leading) {
            TabView {
                NavigationView {
                    VStack(spacing: 0) {
                        if viewModel.isSignedIn, !viewModel.currentUserId.isEmpty {
                            VStack {
                                BannerContentView(navigationTitle: "Grow Cycles")
                                    .frame(height: 60) // Adjust height as needed for your banner size
                                    .clipped()

                                Section {
                                    growCyclesListView
                                }

                                Section {
                                    CalendarView(growCyclesMap: $growCyclesMap, events: $eventsViewModel.events, viewMode: $calendarViewModeWeek, showDatePicker: $showDatepickerNo).padding(.bottom, 10)
                                }.frame(height: 200).border(Color.green, width: 5)

                            }
                            .toolbar {
                                ToolbarItem(placement: .principal) {
                                    Text("Grow Cycles")
                                        .font(.system(size: 24, weight: .bold))
                                        .foregroundColor(.black)
                                }

                                ToolbarItem(placement: .navigationBarTrailing) {
                                    Button {
                                        withAnimation {
                                            isMenuOpen.toggle()
                                        }
                                    } label: {
                                        Image(systemName: "line.horizontal.3")
                                            .font(.title2)
                                    }
                                }
                            }
                            .task {
                                var initialMap: [String: GrowCycle] = [:]
                                for cycle in growCycles {
                                    initialMap[cycle.id] = cycle
                                }
                                growCyclesMap = initialMap
                            }
                            .onChange(of: growCycles) { newGrowCycles in
                                var tempMap: [String: GrowCycle] = [:]
                                for cycle in newGrowCycles {
                                    tempMap[cycle.id] = cycle
                                }
                                growCyclesMap = tempMap
                            }
                            .fullScreenCover(item: $selectedGrowCycle) { cycle in
                                NavigationView {
                                    GrowCycleView(growCycle: cycle, userId: myUserId, events: $eventsViewModel.events)
                                        .toolbar {
                                            ToolbarItem(placement: .navigationBarLeading) {
                                                Button("Done") {
                                                    selectedGrowCycle = nil
                                                }
                                            }
                                        }
                                }
                            }
                        } else {
                            LoginView()
                        }
                    }.navigationBarTitleDisplayMode(.inline) // Ensure title is inline
                        .toolbarBackground(.visible, for: .navigationBar) // Make the background visible
                        .toolbarBackground(Color.green, for: .navigationBar) // Set the
                }
                .tabItem {
                    Label(viewModel.isSignedIn ? "Grow Cycles" : "", systemImage: "house")
                }
                .toolbarBackground(Color.green, for: .tabBar)
                .toolbarBackground(.visible, for: .tabBar)

                if viewModel.isSignedIn, !viewModel.currentUserId.isEmpty {
                    CalendarView(growCyclesMap: $growCyclesMap, events: $eventsViewModel.events, viewMode: $calendarViewModeMonth, showDatePicker: $showDatepickerYes)
                        .tabItem {
                            Label("Global Calendar", systemImage: "calendar")
                        }
                        .toolbarBackground(Color.green, for: .tabBar)
                        .toolbarBackground(.visible, for: .tabBar)

                    TeamsView()
                        .tabItem {
                            Label("Team", systemImage: "person.3.fill")
                        }
                        .toolbarBackground(Color.green, for: .tabBar)
                        .toolbarBackground(.visible, for: .tabBar)

                    AccountSettingsView()
                        .tabItem {
                            Label("Account", systemImage: "gear.circle")
                        }
                }
            }
            .toolbarColorScheme(.dark, for: .tabBar) // Use .dark for black icons/text on a light background (if that's the intent)

            if isMenuOpen {
                HamburgerMenuView(isPresented: $isMenuOpen)
//                    .frame(width: UIScreen.main.bounds.width * 0.7) // Adjust width as needed
                    .transition(.move(edge: .trailing)) // Slide in from the left
                    .zIndex(1) // Ensure it's on top
            }
        }
    }

    private var growCyclesListView: some View {
        List {
            ForEach(growCycles.indices, id: \.self) { index in
                let cycle = growCycles[index]
                NavigationLink(destination: GrowCycleView(growCycle: cycle, userId: myUserId, events: $eventsViewModel.events)
                    .navigationBarBackButtonHidden(true)
                ) {
                    HStack{
                        Image(systemName: "leaf.arrow.trianglehead.clockwise")
                            .foregroundColor(Color.stringToColor(cycle.color))
                            .font(.system(size: 20))
                        VStack(alignment: .leading) {
                            Text(cycle.name)
                                .font(.system(size: 20, weight: .bold))
                                .underline()
                                .foregroundColor(Color.stringToColor(cycle.color)) // Use .primary as a fallback
                            Text("**Start:** \(cycle.startDate), **End:** \(cycle.endDate)")
                        }
                    }
                }
                .listRowSeparatorTint(.green)
                .listRowSeparator(.visible) // Ensure separator is visible
                .listRowBackground(index.isMultiple(of: 2) ? Color.gray.opacity(0.1) : Color.clear) // Alternate background colors
            }
        }
        .listStyle(.plain)
        .environment(\.defaultMinListRowHeight, 10) // Increase the default row height to make separator thicker
    }
}
struct HamburgerMenuView: View {
    @Binding var isPresented: Bool

    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: FakeComponentView(title: "Option 1")) {
                    Label("Option 1", systemImage: "list.bullet")
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .buttonStyle(.plain) // Make the entire label area tappable for navigation

                NavigationLink(destination: FakeComponentView(title: "Option 2")) {
                    Label("Option 2", systemImage: "gear")
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .buttonStyle(.plain)

                NavigationLink(destination: FakeComponentView(title: "Settings")) {
                    Label("Settings", systemImage: "gearshape.fill")
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
                .buttonStyle(.plain)
            }
            .listStyle(.plain)
            .navigationTitle("Menu")
            .toolbar {
                ToolbarItem(placement: .navigationBarLeading) {
                    Button("Close") {
                        withAnimation {
                            isPresented = false
                        }
                    }
                }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .leading) // Expand to full height on the left
        .background(Color.white) // Or your desired menu background color
    }
}
struct FakeComponentView: View {
    let title: String

    var body: some View {
        VStack {
            Text("This is the \(title) view.")
                .font(.title2)
            Spacer()
        }
        .padding()
        .navigationTitle(title)
    }
}
