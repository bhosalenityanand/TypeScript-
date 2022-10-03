"use strict";
// types of js we use inthe typescript
// 1> Explicit function
// here you give the strict type of values
let firstName = "nityanand";
console.log(firstName);
let x = 200;
console.log(x);
console.log(typeof (x));
// 2> Implicit
// here type of the value get dynamically
let ans = true;
console.log(ans);
let student = "nityanand";
let p = 110;
console.log(typeof (ans));
console.log(typeof (p));
console.log(typeof (student));
//  example
function comp(p, q) {
    return p + q;
}
let add = comp(500, 600);
console.log(add);
function anything(fn, ln, ag) {
    return (fn + " " + ln + " and your age is " + ag);
}
console.log(anything('nityanand', 'bhosale', 23));
console.log(anything('nityanand', true, 20));
console.log('----------------------------------------');
// ************** Arry *********************
// in normal we write in js
let num = [10, 20, 30, 40, 50, 60, 70];
let candidate = ['nityanand', 'sumit', 'shubham', 'raj', 'sangram'];
console.log(num);
console.log(candidate);
// in typescript
let num1 = [10, 20, 30, 40, 50, 60, 70];
let candidate1 = ['nityanand', 'sumit', 'shubham', 'raj', 'sangram'];
console.log(num1);
console.log(candidate1);
// tuple --> tuple is the arry but its length is defined
let tup = ['nityanand', 'bhosale', 20];
// there is one expection in tuple we can push the value
tup.push('student');
console.log(tup);
// we can destructure
let [f1, f2, f3] = tup;
console.log(f1);
console.log(f3);
console.log('------------ Object ------------------------');
// this is the normal type
let student1 = {
    name: 'nityanand',
    age: 23,
    class: 12,
    grade: "pass"
};
// in type script
let student2 = {
    name: 'sangram',
    age: 24,
    class: 13,
    grade: "pass"
};
function callme() {
    return {
        name: 'shubham',
        age: 17,
        class: 10,
        grade: "pass"
    };
}
let nitin = callme();
console.log(nitin);
function apicall() {
    return {
        first_name: "nityanand",
        last_name: "bhosale",
        id: 236505,
        email: "bhosale@gmail.com",
        avatar: "src img ava"
    };
}
let shubham = apicall();
console.log();
console.log('--------------------------------');
// function 
function additionC(x, y) {
    return x + y;
}
let h = additionC(12, 13);
console.log(h);
function printFullName(firstName, lastName) {
    return firstName + lastName;
}
let fullName = printFullName('nityanand', 'bhosale');
console.log(fullName);
function greet(greeting) {
    console.log("hello");
}
greet("hello");
function greet1(greeting) {
    return true;
}
greet("hello");
