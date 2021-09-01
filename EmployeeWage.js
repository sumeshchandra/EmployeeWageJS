const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_MONTHLY_WORKING_DAYS = 20;
const TOTAL_MONTHLY_WORKING_HOURS = 160;

function getWorkingHours(employeeCheck) {
    switch(employeeCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            return FULL_TIME_HOURS;
        default :
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let employeeDataObjectArray = new Array();
let employeeDailyWageArray = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();

while(totalEmployeeHours <= TOTAL_MONTHLY_WORKING_HOURS && 
      totalWorkingDays < TOTAL_MONTHLY_WORKING_DAYS) {
    
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDataObjectArray.push(
        {
            day : totalWorkingDays,
            dailyHours : employeeHours,
            dailyWage:calculateDailyWage(employeeHours),
            toString(){
                return "Day : " + this.day + "  => Working Hours : " + this.dailyHours + 
                "\t And Wage Earned : " + this.dailyWage + "\n"
            },
        }

    );
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(employeeHours));
    employeeDailyHoursMap.set(totalWorkingDays, employeeHours);
}

{
    let dayCounter = 0;
    function dayToDailyWageMap(dailyWage) {
        dayCounter++;
        return "Day " + dayCounter + " = Rs " + dailyWage;
    }
    let dayToDailyWageMapArray = employeeDailyWageArray.map(dayToDailyWageMap);
    console.log("Daily Wage Map using Array Map Helper functions :");
    console.log(dayToDailyWageMapArray);

    console.log("Daily Wage Map using Maps :");
    console.log(employeeDailyWageMap);


    console.log("Total Days : " + totalWorkingDays + "\t" 
            + "Total Working Hours : " 
            + (totalEmployeeHours > 160 ? 160 : totalEmployeeHours));


    let totalEmployeeWage = 0;
    function sum(dailyWage){
        totalEmployeeWage += dailyWage;
    }
    employeeDailyWageArray.forEach(sum);
    console.log("Monthly Employee Wage using ForEach : Rs " + totalEmployeeWage);


    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Monthly Employee Wage using Arrays Reduce : Rs " + employeeDailyWageArray.reduce(totalWages, 0));

    console.log("Monthly Employee Wage using Maps Reduce : Rs " + 
                Array.from(employeeDailyWageMap.values()).reduce(totalWages, 0));


    function fullTimeWages(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullTimeWageArray = dayToDailyWageMapArray.filter(fullTimeWages);
    console.log("Daily Wages when employees worked Full Time : ");
    console.log(fullTimeWageArray);

    console.log("Employee worked Full Time First on : " + 
                dayToDailyWageMapArray.find(fullTimeWages));

    console.log("Does all elements of Full Time Wage Array have Full Time Wages : "
                + fullTimeWageArray.every(fullTimeWages));


    function partTimeWages(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("Has employee ever worked Part Time  : "
                + dayToDailyWageMapArray.some(partTimeWages));


    function totalDaysWorked(numberOfDays, dailyWage){
        if(dailyWage > 0) return numberOfDays + 1;
        return numberOfDays;
    }
    console.log("Number of Days Employee Worked  : "
                + employeeDailyWageArray.reduce(totalDaysWorked, 0));
}

//Arrow Functions
{
    console.log("\nUSING ARROW FUNCTIONS : ")
    const findTotal = (totalValue, dailyValue) => {
        return totalValue + dailyValue;
    }
    let fullTimeWorkingDays = new Array();
    let partTimeWorkingDays = new Array();
    let nonWorkingDays = new Array();

    let totalWage = employeeDailyWageArray.filter(dailyWage => dailyWage > 0)
                                        .reduce(findTotal, 0);
    let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
    employeeDailyHoursMap.forEach((hours, day) => {
        if(hours == 8) fullTimeWorkingDays.push(day);
        else if(hours == 4) partTimeWorkingDays.push(day);
        else nonWorkingDays.push(day);
    });
    console.log("Total Days:" + employeeDailyWageArray.length + 
                " Total Hours:" + totalHours + 
                " Total Wage:" + totalWage);
    console.log("Full Time Working Days : " + fullTimeWorkingDays);
    console.log("Part Time Working Days : " + partTimeWorkingDays);
    console.log("Non Working Days : " + nonWorkingDays);
}

//USING EMPLOYEE OBJECT ARRAY
{
    console.log("\nUSING OBJECT ARRAY : ");
    console.log(employeeDataObjectArray.toString());
//USING ARROW FUNCTIONS ON EMPLOYEE OBJECT ARRAY
    console.log("USING ARROW FUNCTIONS ON EMPLOYEE OBJECT ARRAY : ");
    let totalWage = employeeDataObjectArray
                    .filter(employeeObject => employeeObject.dailyWage > 0)
                    .reduce((totalWage, employeeDataObjectArray) => totalWage += employeeDataObjectArray.dailyWage, 0);
    let totalHours = employeeDataObjectArray
                    .filter(employeeObject => employeeObject.dailyHours > 0)
                    .reduce((totalHours, employeeDataObjectArray) => totalHours += employeeDataObjectArray.dailyHours,0);
    console.log("Total Days:" + employeeDataObjectArray.length + 
                " Total Hours:" + totalHours + 
                " Total Wage:" + totalWage);
    console.log("Full Time Work Days : ");
    employeeDataObjectArray.filter(employeeObject => employeeObject.dailyHours == 8)
                           .forEach(object => process.stdout.write(object.toString()));
    let partTimeWorkingDaysArray = employeeDataObjectArray
                                   .filter(employeeObject => employeeObject.dailyHours == 4)
                                   .map(employeeDataObjectArray => employeeDataObjectArray.toString());
    console.log("\nPart Time Work Days : \n" + partTimeWorkingDaysArray);
    let nonWorkingDaysNumber = employeeDataObjectArray
                               .filter(employeeObject => employeeObject.dailyHours == 0)
                               .map(employeeDataObjectArray => employeeDataObjectArray.day);
    console.log("Non Woring Days :\n" + nonWorkingDaysNumber);
}