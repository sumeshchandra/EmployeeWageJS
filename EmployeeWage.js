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