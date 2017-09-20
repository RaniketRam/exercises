var givenDate = new Date(Date.UTC(2015, 8 , 14));

// function date(givenDate){

//     var sec = 1000000000;
//     console.log(sec);

//     var data = sec / 60;
//     var totalMinutes = parseInt(data);
//     console.log(data);
//     console.log(totalMinutes);
   
//     var totalHours = totalMinutes / 60;
//     console.log(totalHours);

//     var totalDays = totalHours / 24;
//     console.log(totalDays); 

//     console.log(givenDate);
// }

// console.log(date(givenDate));

// USING A LOOP

var minutes = 0;
var hours = 0;
var days = 0;
var months = 0;
var years = 0;
// for(var i = 0; i <= 1000000000; i++){
//     // HH:MM:SS

//     var counter = i;
//     if(counter%60 === 0){
//          minutes = minutes + 1;
//     }

//     if(minutes%60 == 0){
//         hours = hours + 1;
//     }

//     if(hours%24 === 0){
//         days = days + 1;
//     }

//     if(days%30 === 0){
//         months = months + 1;
//     }

//     if(months%365 === 0){
//         years = years + 1;
//     }

// }

// console.log('Minutes: ' + minutes);
// console.log('Hours: ' + hours);
// console.log('Days: ' + days);
// console.log('Months: ' + months);
// console.log('Years: ' + years);
// console.log('' + );



// console.log(givenDate.getTime());

var inMiliSeconds = givenDate.getTime(); // Return the number of milliseconds since 1970/01/01:
console.log(inMiliSeconds);


var givenSeconds = 1000000000;
var totalInMS = inMiliSeconds + 1e9;

console.log( new Date(totalInMS));