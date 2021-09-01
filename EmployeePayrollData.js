class EmployeePayrollData {

    constructor(...parameters) {
        this.id = parameters[0];
        this.name = parameters[1];
        this.salary = parameters[2];
        this.gender = parameters[3];
        this.startDate = parameters[4];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (NAME_REGEX.test(name)) {
            console.log("Setting Name as : " + name);
            this._name = name;
        } else throw "Name : " + name + " is Incorrect!";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary
            + ", gender: " + this.gender + ", startDate: " + employeeDate + "\n";
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 50000);
console.log(employeePayrollData.toString());

employeePayrollData.id = 0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "joey";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 80000, "F", new Date());
console.log(newEmployeePayrollData.toString());
