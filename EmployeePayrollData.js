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
            console.log("\nSetting Name as : " + name);
            this._name = name;
        } else throw "Name : " + name + " is Incorrect!";
    }

    get id() {
        return this._id;
    }
    set id(id) {
        const ID_REGEX = RegExp("^[1-9]{1}[0-9]*$");
        if (ID_REGEX.test(id)) {
            this._id = id;
        } else throw "Id : " + id + " is Incorrect!";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        const SALARY_REGEX = RegExp("^[1-9]{1}[0-9]*$");
        if (SALARY_REGEX.test(salary)) {
            this._salary = salary;
        } else throw "Salary : " + salary + " is Incorrect!";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender == undefined) gender = "-";
        const GENDER_REGEX = RegExp("[MF-]");
        if (GENDER_REGEX.test(gender)) {
            this._gender = gender;
        } else throw "Gender : " + gender + " is Incorrect!";
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate == undefined) startDate = "-";
        if (startDate <= new Date() || startDate == "-") {
            this._startDate = startDate;
        } else throw "Start Date : " + startDate + " is Incorrect!";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == "-" ? "-" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary
            + ", gender: " + this.gender + ", startDate: " + employeeDate + "\n";
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 50000);
console.log(employeePayrollData.toString());

try {
    employeePayrollData.id = 0;
    employeePayrollData.name = "Jeff";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}
try {
    employeePayrollData.name = "joey";
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 80000, "F", new Date());
console.log(newEmployeePayrollData.toString());

try {
    newEmployeePayrollData.salary = -1;
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}
try {
    newEmployeePayrollData.gender = "O";
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}
try {
    newEmployeePayrollData.startDate = new Date(2021, 00, 01);
    console.log(newEmployeePayrollData.toString());
} catch (error) {
    console.error(error);
}