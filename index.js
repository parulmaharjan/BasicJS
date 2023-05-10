// var x=90;
// console.log(x);
// x=120;
// console.log(x);
// var x=10-5;
// console.log(x);
// for LET
// let x=20;
// console.log(x);
// x=30;
// console.log(x);
// let x=5+3;
// // console.log(x);
// const x=170;
// console.log(x);
// x=145;
// console.log(x);
//string method
//const result="   my name is lord ";
//console.log(result.length);

//concat
//console.log(result.concat("hare krishna"));

//substring
//console.log(result.substring(1,4));//index no. linxa
//console.log(result.substr(1,4));//lenght linxa

//replace
// // console.log(result.replace("my","his"));
// // //includes=simply reads boolean and return value
// // console.log(result.includes("lord"));

// //charat=returns character
// console.log(result.charAt(8));

//indexof
//console.log(result.indexOf("l"));

//last index of
//console.log(result.lastIndexOf("r"));
//console.log(result.split(" "));
// lower case and upper case
// console.log(result.toLowerCase());
// console.log(result.toUpperCase());

//trim
//console.log(result.trim());

//statement(if else statement)

// const email="parulmhrzn@gmail.com";
// const password="parul";
// if (email==="parulmhrzn@gmail.com"&& password==="parul") {
//     console.log("login sucessfully");

// }
//     else{
//         console.log("invalid credentials");
//     }

//simple arthemetic

// let x=10;
// if(x>15){
//     console.log("x is greater than 15");
// }
// else if(x>5){
//     console.log("x is greater than 5 but not equal to 15 ");

// }
// else{
//     console.log("x is not greater than 15");
// }

// let weather="rainy";
// if(weather==="sunny"){
//     console.log("its a sunny day!!!");
// }
// else if(weather==="rainy"){
//     console.log("its rainy day. carry your umbrella!");
// }
// else if(weather==="winter"){
//     console.log("its cold outside");
// }
// else if(weather==="cloudy"){
//     console.log("cloudy weather");
// }
// else{
//     console.log("invalid!!");
// }

//switch statement
// let grade = "A";
// switch (grade) {
//   case "B":
//     console.log("you got B. nice");

//     break;

//   case "B+":
//     console.log("you got B+. nice");

//     break;
//   case "C":
//     console.log("you got C. ");
//     break;

//   case "C+":
//     console.log("you got C+. ");

//     break;

//   case "A+":
//     console.log("you got A+. excillent");

//     break;
//   case "A":
//     console.log("you got A. very good");

//     break;

//   default:
//     console.log("you failed");
//     break;
// }


// let month = "May";
// switch (month) {
//     case "Jan":
//     case "Feb":
//     case "March":
//         console.log("the month is in Q1");
//         break;

//     case "april":
//     case "May":
//     case "June":
//         console.log("the month is in Q2");
//         break;
//     case "July":
//     case "august":
//     case "sept":
//         console.log("the month is in Q3");
//         break;
//     case "Jan":
//     case "Oct":
//     case "Nov":
//     case "Dec":

//         console.log("the month is in Q4");
//         break;

//     default:
//         console.log("vetiyena")
//         break;
// }

// let weather = "Rainy";
// switch (weather) {
//     case "sunny":
//         console.log("sunny weather");

//         break;
//     case "windy":
//         console.log("windy weather");

//         break;
//     case "Rainy":
//         console.log("Rainy weather");

//         break;
//     case "cloudy":
//         console.log("cloudy weather");

//         break;

//     default:
//         console.log("no weather updates");
//         break;
// }
//DOM(Document object model)
const title=document.getElementById("mytitle");
title.innerHTML="Dom manipulation";
title.style.backgroundColor="red";
title.style.color="white";
title.style.cursor="pointer"
console.log(title);
