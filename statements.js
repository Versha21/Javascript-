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


//practice question
let num = prompt("Enter a number :");
if (num % 5 === 0){
  console.log(num ,"This number is divisible by 5");
}
else {
  console.log(num ,"This number is not divisible by 5");
}
