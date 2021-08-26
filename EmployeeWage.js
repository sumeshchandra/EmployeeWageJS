//UC1
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    if (empCheck==IS_ABSENT){
    console.log("UC1 - employee is Absent. Exiting the program");
    return;
    }else{
      console.log("UC1 - employee is Present");
    }
}


const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 100;

//UC5 - Calculating Wages till Number of Working Days Reached.

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
let totalEmpHr = 0;
let totalWorkingDay = 0;
while(totalEmpHr <= MAX_HRS_IN_MONTH &&
   totalWorkingDay < NUM_OF_WORKING_DAY ){
  totalWorkingDay++;
  let empCheck = Math.floor(Math.random()*10)%3;
  totalEmpHr += getWorkingHours(empCheck);
}
let empWage = totalEmpHr * WAGE_PER_HOURS;
console.log("UC5 --> Total Day: "+totalWorkingDay+ " Total Emp Hrs: "+totalEmpHr+ " Emp Wage: "+empWage );