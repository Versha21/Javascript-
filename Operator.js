let a = 5;
let b = 2;

// 1. Arithmetic operator
console.log("a = ", a , " & b =", b);
console.log(" a + b =" , a+b);
console.log(" a - b =" , a-b);
console.log(" a * b =" , a*b);
console.log(" a / b =" , a/b);
console.log(" a % b =" , a%b);

// 2. Exponentiation
console.log(" a ** b =" , a**b);//let , 5^2=25

// 3. comparision operator
console.log("5==2", a==b);
console.log("5!=2", a!=b);
console.log("6<=3" , a<=b);
console.log("6>=3" , a>=b);

// // 4. unary operator
//let a = 5;
a++;
//a--; post decrement
console.log("a = ", a);
// a = ++a;
// // a = --a; pre decrement
// console.log("a++ = ",a++)
// console.log(" a " , a);

// 5. logical operator
console.log("cond1 && cond2 = ", a>b && a===6);
console.log("cond1 || cond2 = ", a>b || a===6);
console.log("!(a > b) = " , ! (a>b));

