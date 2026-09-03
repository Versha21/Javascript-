//STRING

// //both single and double quotes are used to define string in javascript
let string1  = "MY Javascript";
let string2 = 'Versha Dewangan';

console.log(string1[5]);
console.log(string2[5]);

//template literals
let something= {
  item: "laptop",
  price: 50000,
};

// String interpolation
let output = `the price of ${something.item} is ${something.price} rupees`;
console.log(output);

let specialstring = ` This is the template literal ${1+2+3}`;
console.log(specialstring);
console.log(typeof specialstring);

//Escape Characters
console.log("versha \n dewangan");
console.log(`versha \t dewangan`);

let myname = "versha \t dewangan";
console.log(myname.length);

// String Methods

//str.toUpercase() - converts string to uppercase
//str.toLowercase() - converts string to lowercase
string1 = string1.toUpperCase();
console.log(string1);
string2 = string2.toLowerCase();
console.log(string2);

//str.trim() - removes whitespace from both ends of a string
let str1 = "   Hello World!   ";
console.log(str1.trim());

//str.slice() - return part of string from start index to end index (end index not included)
let str2 = "0123456";
console.log(str2.slice(1 ,5));
let str3 = "something";
console.log(str3.slice(0, 5));

//str.concat() - joins two or more strings and returns a new string
let result1 = string1.concat(string2);
let res = string2.concat(string1);
let res2 = "hello!"+ string1+string2
console.log(result1);
console.log(res);
console.log(res2);

//replace - replaces a specified value with another value in a string but only replaces the first match
let str4 = "Hello";
console.log(str4.replace("lo", "p"));

//str.chatAt() - returns the character at a specified index (position) in a string
console.log(string1.charAt(5));

//replace - replaces a specified value with another value in a string but only replaces the first match (original string is not changed we create a new string to replace the value)
let str5 = "Hello";
str5 = str5.replace("lo", "p");
console.log(str5);
