// //UC1
// {
//     const IS_ABSENT = 0;
//     let empCheck = Math.floor(Math.random()*10)%2;
//     if (empCheck==IS_ABSENT){
//     console.log("UC1 - employee is Absent. Exiting the program");
//     return;
//     }else{
//       console.log("UC1 - employee is Present");
//     }
// }

//UC 2 using switch case to calculate emp wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAY = 20;

//UC3 Refactored code to write function for daily work hrs.

function getWorkingHours(empCheck){
  switch(empCheck){
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;    
  
    }
}
let empHr = 0;
let empCheck = Math.floor(Math.random()*10)%3;
empHr = getWorkingHours(empCheck);
let empWage = empHr * WAGE_PER_HOURS;
console.log("Emp Wage: "+ empWage);