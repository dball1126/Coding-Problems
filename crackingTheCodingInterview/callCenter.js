class Employees {
    boss = '';
    available = true;
    name = ''
    team = []
    constructor(name, boss, available = true) {
        this.setBoss(boss)
        this.setName(name);
        this.setAvailable(available);
    }
    setAvailable(available) {
        this.available = available;
    }
    isAvailable() {
        return this.available;
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setBoss(boss) {
        this.boss = boss;
    }
    getBoss() {
        return this.boss;
    }

    setTeam(team) {
        this.team = team;
    }
    getTeam() {
        return this.team;
    }

    handleCall() {
        console.log("Call handled successfully")
    }
}

class Respondent extends Employees {
    isRespondent = true;
    constructor(name, bossName){
        super(name, bossName)
    }
}
class Manager extends Employees {
    respondentTeam = []
    isManager = true;
    constructor(name, bossName, employees){
        this.team = employees
        super(name, bossName)
    }
}
class Director extends Employees {
    managerTeam = []
    isDirector = true;
    constructor(name){
        super(name)

    }
}
// [[directorName, managerName, [employeeNames]]]
class CallCenter {
    groups = []
    employeeQ = []
    managerQ = []
    directorQ = []
    constructor(groups) {
        this.createTeams(groups)
    }

    createTeams(groups) {
        this.groups = groups.map(group => this.createTeams(group))
    }
    createTeam(group) {
        let director = new Director(group[0]);
        let manager = new Manager(group[1], director.getName());
        let employees = group[2].map(name => new Respondent(name, manager.getName()))
        this.employeeQ.push(...employees)
        manager.setTeam(employees)
        director.setTeam([manager, ...employees])
        return director
    }

    dispatchCall(call) {
        // check employees
        if (this.employeeQ.length) {
            let employee = this.employeeQ.shift();
            employee.setAvailable(false)
            return employee.handleCall(call)
        }
        // check managers
        if (this.managerQ.length) {
            let employee = this.managerQ.shift();
            employee.setAvailable(false)
            return employee.handleCall(call)
        }
        // check directors
        if (this.directorQ.length) {
            let employee = this.directorQ.shift();
            employee.setAvailable(false)
            return employee.handleCall(call)
        }

    }
}


const callCenter = new CallCenter( [      ["david", "joe", ["emp1", "emp2"]], ["carlos", "danny", ["gg1", "gg2"]] ] )


console.log(callCenter)