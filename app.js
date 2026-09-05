// let a = 10;
// let b = 20;

// console.log("The sum of a and b is: " + (a + b));

// let a = 12;
// let b = "13";

// console.log("The sum of a and b is: " + (a + b));
// console.log(typeof (a + b));

// 1 + "2"   is not addition its concatenation because 1 is number and 2 is string so it will convert number to string and then concatenate it.

// let a = 10;
// let b = 20;

// console.log("sum of 10 and 20 is " + (a + b));  

// console.log("1" + 2); // addition when two numbers are added it will give sum but when one number is string and other is number then it will convert number to string and then concatenate it. so the output will be 12 not 3. this is callled type coercion.

// - , * , / , % these operators are used for subtraction, multiplication, division and modulus respectively. when we use these operators with string and number then it will convert string to number and then perform the operation. if the string is not a number then it will return NaN (Not a Number).

// console.log ("me" - 1); // NaN

// let age = Number(prompt("what is your age?")); // prompt is used to take input from user. it will return a string.

// console.log("Your age is: " + age);
// console.log(typeof age); // string

// this is called type casting. we can use Number() to convert string to number. if the string is not a number then it will return NaN (Not a Number).

// let a = 10;
// let b = 20;
// let c;

// c = a; // c is now 10
// a = b; // a is now 20
// b = c; // b is now 10

// console.log("The value of a is: " + a);
// console.log("The value of b is: " + b);               

// let a= 24;
// let b = 6;

// a =  a + b; // a is now 30
// b = a - b; // b is now 24
// a = a - b; // a is now 6
// console.log("The value of a is: " + a);
// console.log("The value of b is: " + b);

// let a = 10;
// let b = 20;

// [a, b] = [b, a]; // destructuring assignment to swap values

// console.log("The value of a is: " + a);
// console.log("The value of b is: " + b);  

let a = 13 ;
let b = 2;

console.log(Math.floor(a/b)); // division
console.log(a%b); // modulus