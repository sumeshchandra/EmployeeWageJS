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
let employeeDailyWageArray = new Array();

while(totalEmployeeHours <= TOTAL_MONTHLY_WORKING_HOURS && 
      totalWorkingDays < TOTAL_MONTHLY_WORKING_DAYS) {

    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
    totalWorkingDays++;
}


let dayCounter = 0;
function dayToDailyWageMap(dailyWage) {
    dayCounter++;
    return "Day " + dayCounter + " = Rs " + dailyWage;
}
let dayToDailyWageMapArray = employeeDailyWageArray.map(dayToDailyWageMap);
console.log("Daily Wage Map :");
console.log(dayToDailyWageMapArray);


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
console.log("Monthly Employee Wage using Reduce : Rs " + employeeDailyWageArray.reduce(totalWages, 0));


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