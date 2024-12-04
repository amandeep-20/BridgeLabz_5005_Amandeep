//uc 1
// let present = 1;
// let absent = 0;

// let attend = Math.floor(Math.random()*2);

// if(attend==present){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }

//uc 2
// let work = Math.floor(Math.random()*3);
// let hour = 0;
// let wage = 0;
// switch(work){
//     case 0:
//         hour = 4;
//         wages = hour * 20;
//         console.log("part time wages : " + wages);
//         break;
//     case 1:
//         hour = 8;
//         wages = hour * 20;
//         console.log("full time wages : " + wages);
//         break;
//     case 2:
//         hour = 0;
//         wages = 0;
//         console.log("no time wages : " + wages);
//         break;
//     default:
//         console.log("invalid....");
// }

//u3
// function getWages(){
//     let work = Math.floor(Math.random()*3);
// let hour = 0;
// let wage = 0;
// switch(work){
//     case 0:
//         hour = 4;
//         wage = hour*20;
//         break;
//     case 1:
//         hour = 8;
//         wage = hour*20;
//         break;
//     case 2:
//         hour = 0;
//         break;
//     default:
//         console.log("invalid....");
// }
// return wage;
// }
// console.log(getWages());

//u4
// function getWages(){
//     let work = Math.floor(Math.random()*3);
// let hour = 0;
// let wage = 0;
// switch(work){
//     case 0:
//         hour = 4;
//         wage = hour*20;
//         break;
//     case 1:
//         hour = 8;
//         wage = hour*20;
//         break;
//     case 2:
//         hour = 0;
//         break;
//     default:
//         console.log("invalid....");
// }
// return wage;
// }
// let result = getWages();
// console.log(result*20);


//uc 1
// let present = 1;
// let absent = 0;

// let attend = Math.floor(Math.random()*2);

// if(attend==present){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }


//uc2
// Constants
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;

// let workType = Math.floor(Math.random() * 3);
// let dailyHours;

// switch (workType) {
//     case 0:
//         dailyHours = 0;
//         console.log("not work today.");
//         break;
//     case 1:
//         dailyHours = PART_TIME_HOURS;
//         console.log("part-time today.");
//         break;
//     case 2:
//         dailyHours = FULL_TIME_HOURS;
//         console.log("full-time today.");
//         break;
//     default:
//         console.log("Invalid work type.");
//         dailyHours = 0;
// }

// const dailyWage = dailyHours * WAGE_PER_HOUR;
// console.log(`Daily Hours: ${dailyHours}`);
// console.log(`Daily Wage: $${dailyWage}`);

//uc3 
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;
// function getWorkHours(workType) {
//     switch (workType) {
//         case 0:
//             return 0;
//         case 1:
//             return PART_TIME_HOURS;
//         case 2: 
//             return FULL_TIME_HOURS;
//         default:
//             console.log("Invalid work type.");
//             return 0;
//     }
// }

// const workType = Math.floor(Math.random() * 3);
// const dailyHours = getWorkHours(workType);
// if (dailyHours === 0) {
//     console.log("Employee did not work today.");
// } else {
//     console.log(`Employee worked ${dailyHours} hours today.`);
// }


// //uc4
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;
// const WORKING_DAYS = 20;
// function getWorkHours(workType) {
//     switch (workType) {
//         case 0:
//             return 0;
//         case 1:
//             return PART_TIME_HOURS;
//         case 2:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;
//     }
// }
// function calculateMonthlyWages() {
//     let totalWages = 0;
//     let totalHours = 0;

//     for (let day = 1; day <= WORKING_DAYS; day++) {
//         const workType = Math.floor(Math.random() * 3);
//         const dailyHours = getWorkHours(workType);
//         const dailyWage = dailyHours * WAGE_PER_HOUR;

//         totalHours += dailyHours;
//         totalWages += dailyWage;

//         console.log(`Day ${day}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
//     }

//     console.log(`\nTotal Hours Worked in the Month: ${totalHours}`);
//     console.log(`Total Wages for the Month: $${totalWages}`);
// }
// calculateMonthlyWages();

// //uc5
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;
// const MAX_WORKING_DAYS = 20;
// const MAX_WORKING_HOURS = 160;
// function getWorkHours(workType) {
//     switch (workType) {
//         case 0:
//             return 0;
//         case 1:
//             return PART_TIME_HOURS;
//         case 2:
//             return FULL_TIME_HOURS;
//         default:
//             return 0;
//     }
// }
// function calculateConditionalWages() {
//     let totalHours = 0;
//     let totalWages = 0;
//     let totalDays = 0;

//     while (totalHours < MAX_WORKING_HOURS && totalDays < MAX_WORKING_DAYS) {
//         const workType = Math.floor(Math.random() * 3);
//         const dailyHours = getWorkHours(workType);

//         if (totalHours + dailyHours > MAX_WORKING_HOURS) break;

//         const dailyWage = dailyHours * WAGE_PER_HOUR;

//         totalHours += dailyHours;
//         totalWages += dailyWage;
//         totalDays++;

//         console.log(`Day ${totalDays}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
//     }

//     console.log(`Total Days Worked: ${totalDays}`);
//     console.log(`Total Hours Worked: ${totalHours}`);
//     console.log(`Total Wages Earned: $${totalWages}`);
// }
// calculateConditionalWages();



