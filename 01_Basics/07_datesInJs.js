//Date
let myDate = new Date();

// console.log(typeof myDate);//object

// console.log(myDate);//2025-01-17T14:40:19.039Z
// console.log(myDate.toString());//Fri Jan 17 2025 20:10:19 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());//17/1/2025, 8:10:19 pm
// console.log(myDate.toDateString());//Fri Jan 17 2025
// console.log(myDate.toLocaleTimeString());//8:12:55 pm

// let myCreatedDate=new Date(2024,1,11)//11/2/2024, 12:00:00 am
// let myCreatedDate=new Date(2024,1,11,13,31)//11/2/2024, 1:31:00 pm
// let myCreatedDate=new Date("2024-1-11")//11/1/2024, 12:00:00 am
// let myCreatedDate = new Date("2-11-2024"); //11/2/2024, 12:00:00 am
let myCreatedDate = new Date("12-22-2024"); //22/12/2024, 12:00:00 am
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

const weekDay = newDate.toLocaleString("default", {
  weekday: "long",
});
// console.log(weekDay); //Friday

const fullDate = newDate.toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});
// console.log(fullDate); //Friday 17 January, 2025

//  Including time zone
const dateTimeWithTimeZone = newDate.toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
});
console.log(dateTimeWithTimeZone);//17 January 2025 at 11:19 pm IST
