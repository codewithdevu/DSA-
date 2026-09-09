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

// let a = 13 ;
// let b = 2;

// console.log(Math.floor(a/b)); // division
// console.log(a%b); // modulus

// let a = 4683;

// console.log(Math.floor(a/10)); // 468
// console.log(Math.floor(a/100)); // 46
// console.log(Math.floor(a/1000)); // 4

// it will help us to making a loop to get the digits of a number. we can use this method to get the digits of a number one by one. we can use this method to get the digits of a number in reverse order. we can use this method to get the digits of a number in normal order. we can use this method to get the digits of a number in any order. we can use this method to get the digits of a number in any base. we can use this method to get the digits of a number in any base and any order.

// let a = 11 , b = 22;
// let c = a + b + a++ + b++ + ++a + ++b; // 11 + 22 + 11 + 22 + 13 + 24 = 103
// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);


// Math functions

// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.trunc(18.98)); // 18
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.sqrt(16)); // 4
// console.log(Math.cbrt(27)); // 3
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.abs(-5)); // 5
// console.log(Math.trunc(Math.random()*9000 + 1000)); // 1000 to 9999 random number


// let = a = 10.094384534;

// console.log(a.toFixed(2)); // 10.09
// console.log(typeof a.toFixed(2)); // string

// calculate the area and perimeter of a rectangle using Math functions

// let length = 10;
// let breadth = 5;

// let area = length * breadth;
// let perimeter = 2 * (length + breadth);

// console.log("Area of rectangle is: " + area);
// console.log("Perimeter of rectangle is: " + perimeter);

// Generate OTP

// console.log(Math.trunc(Math.random()*9000 + 1000)); // 1000 to 9999 random number

// are of triangle using Heron's formula

// let a = 5;
// let b = 6;
// let c = 7;  

// let s = (a + b + c) / 2; // semi-perimeter

// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); // Heron's formula

// console.log("Area of triangle is: " + area.toFixed(2));

// circumference of circle

// let radius = 6;

// let circumference = 2 * Math.PI * radius;
// console.log("Circumference of circle is: " + Number(circumference.toFixed(2)));


// valid user who vote or not

// let age = Number(prompt("Enter your age: "));


// if (isNaN(age)) {
//     console.log("Please enter a valid number for age.");
// } else if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

// shop discount

// let amount = Number(prompt("Enter the total amount: "));
// let discount = 0;
// if (isNaN(amount)) {
//     console.log("Please enter a valid number for amount.");
// } else {
//     if(amount > 0 && amount <= 5000) {
//         discount = 0;
//     } else if(amount > 5000 && amount <= 7000) {
//         discount = 5;
//     } else if(amount > 7000 && amount <= 9000) {
//         discount = 10;
//     }else if (amount > 9000) {
//         discount = 20;
//     }
// }

// console.log(amount - Math.floor((discount*amount)/100)); // final amount after discount

// bijli bill

// let units = Number(prompt("Enter the number of units consumed: "));
// let amount = 0;

// if (isNaN(units)) {
//     console.log("Please enter a valid number for units.");
// }

// if(units > 400) {
//     amount = (units - 400) * 13;
//     units = 400;
// }

// if(units>200 && units <= 400){
//     amount += (units - 200) * 8;
//     units = 200;
// }

// if(units>100 && units <= 200){
//     amount += (units - 100) * 6;
//     units = 100;
// }

// amount += units * 4; // for first 100 units

// console.log("Total amount to be paid: " + amount);

// INR dinominations

// let amount = Number(prompt("Enter the amount in INR: "));

// if (isNaN(amount)) {
//     console.log("Please enter a valid number for amount.");
// } 
// if (amount >= 500) {
//     console.log("500 INR notes: " + Math.floor(amount / 500));
//     amount = amount % 500;
// }
// if (amount >= 200) {
//     console.log("200 INR notes: " + Math.floor(amount / 200));
//     amount = amount % 200;
// }
// if (amount >= 100) {
//     console.log("100 INR notes: " + Math.floor(amount / 100));
//     amount = amount % 100;
// }
// if (amount >= 50) {
//     console.log("50 INR notes: " + Math.floor(amount / 50));
//     amount = amount % 50;
// }
// if (amount >= 20) { 
//     console.log("20 INR notes: " + Math.floor(amount / 20));
//     amount = amount % 20;
// } 
// if (amount >= 10) {
//     console.log("10 INR notes: " + Math.floor(amount / 10));
//     amount = amount % 10;
// }
// if (amount >= 5) {
//     console.log("5 INR notes: " + Math.floor(amount / 5));
//     amount = amount % 5;
// } 
// if (amount >= 2) {
//     console.log("2 INR notes: " + Math.floor(amount / 2));
//     amount = amount % 2;
// }
// if (amount === 1) {
//     console.log("1 INR notes: " + amount);
// }

// ternary operator

// 112 > 12 ? console.log("112 is greater than 12") : console.log("112 is not greater than 12");
// console.log(112 > 12 ? "112 is greater than 12" : "112 is not greater than 12");

// nested ternary operator

// switch case 

// let day = Number(prompt("Enter the day number (1-7): "));

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number. Please enter a number between 1 and 7.");
// }

// we use true in switch case when we want to use comparison operators in case statements. we can use if else statements instead of switch case but switch case is more readable and easier to understand.

let num = (0.1 + 0.2).toFixed(1);

switch (num) {
    case "0.3":
        console.log("num is equal to 0.3");
        break;
    default:
        console.log("num is not equal to 0.3");
        break;
}

// how to handle precision issues in floating point arithmetic in JavaScript. we can use toFixed() method to round the number to a fixed number of decimal places. we can also use Math.round() method to round the number to the nearest integer. we can also use Number.EPSILON to compare two floating point numbers for equality. we can also use a small tolerance value to compare two floating point numbers for equality.