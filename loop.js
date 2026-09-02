//Print 1 to 5
// for (i = 0; i <= 5; i++) {
//   console.log("The value of i is :" + i);
// }

//calculate the sum of first 5 numbers
let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log("sum = " + sum);
console.log("loop was ended");

//also use this for 1 10 n
let s = 0;
let n = 5;
for (let i = 0 ; i <= n ; i++){
  s += i;
}
console.log("sum = " + s);
console.log("loop was ended");

// while loop
let i = 1;
while (i <= 10) {
  console.log("Apna College");
  i++;
}

//do while loop
let j = 20;
do {
  console.log("Apna College");
  j++;
} while (j <= 10);

//for-of loop
let str = "javascript";
let size = 0;
for (let val of str) {
  console.log("val=", val);
  size++;
}
console.log("Size of the string is:", size);

//for-in loop
let student = {
  Name: "versha dewangan",
  age: 20,
  cgpa: 7.5,
  ispass: true,
};
for (let key in student) {
  console.log(key, ":", student[key]);
}

//question 1
for (let num = 0; num <= 100; num++) {
  if (num % 2 == 0) {
    console.log("Even number =", num);
  }
}

// PROMPT - THIS IS NOT WORKING IN VSCODE, SO I COMMENTED IT OUT
// //question 2
// let gamenumber = 25;
// let usernum = prompt("Guess the game number:");
// while (usernum != gamenumber) {
//   usernum = prompt("You entered the wrong number, guess again:");
// }
// console.log("Congratulations! you entered the right number");



