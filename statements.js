// conditional statement

//  1. If statement
// 1(a).
let agelimit = 30;

if (agelimit >= 18){
  console.log("you CAN vote");
}
if (agelimit < 18){
  console.log("you CANNOT vote");
}
// 1(b).
let mode = "Dark";
let color;

if (mode == "Dark"){
  color ="black";
}
if (mode == "Light"){
  color ="white";
}
console.log(color);


// 2. if - else statement
if (mode == "Dark"){
  color ="blue";
}
else {
  color ="white";
}
console.log(color);

let x = 10;

if (x%2 == 0){
  console.log("This is the Even number");
}
else {
  console.log("This is the Odd number");
}


// 3. else - if statement
let year = 2006

if (year < 1997){
  console.log("Millennial");
}
else if (year >= 1997 && year <= 2006){
  console.log("Gen-z");
}
else{
  console.log("Gen-alpha");
}

let score = 85;
let grade;
if (score >= 90 && score <= 100){
 grade = "A";
}
else if (score >= 70 && score <= 89){
  grade = "B";
}
else if (score >= 60  && score <= 70){
  grade = "C";
}
else if (score >= 50 && score <= 59){
  grade = "D";
}
else if (score >= 0 && score <= 49){
  grade = "F";
}

console.log("According to your score ,Your grade was :"+grade);

// // 4. alert statement
// alert("Hello! Welcome to the world of JavaScript");


// // 5. prompt statement
// let num = prompt("enter a number");
//  if (num%5 == 0){
//   console.log("This number is divisible by 5");
//   }
//   else{
//     console.log("This number is NOT divisible by 5");
//   }
// let marks = prompt("Enter your score(0-100):");
// let grad;
// if (marks >= 90 && marks <= 100){
//  grad = "A";
// }
// else if (marks >= 70 && marks <= 89){
//   grad = "B";
// }
// else if (marks >= 60  && marks <= 70){
//   grad = "C";
// }
// else if (marks >= 50 && marks <= 59){
//   grad = "D";
// }
// else {
//   grad = "E";
// }

// console.log("According to your score ,Your grade was :"+grad);


// but prompt statement is not working in nodejs or VS Code.


