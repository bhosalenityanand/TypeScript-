"use strict";
// here we write thr different type of function
function addM(x, y) {
    console.log(x + y);
}
addM(50, 25);
function addM1(x, y) {
    console.log(x + y);
    return;
}
addM1(20, 30);
//-----------------------------------------------
// program3
function displayFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let q = displayFullName("sunil", "chetri");
console.log(q);
//-------------------------------------]
// program 4
function ad(x, y) {
    return x + y;
}
function disResult(x, y, fn) {
    console.log(`Result of sum ${fn(x, y)}`);
}
disResult(75, 25, ad);
//----------------------------------------
function displayResultA(x, y, fn) {
    console.log(`Result of sum ${fn(x, y)}`);
}
displayResultA(12, 34, ad);
//--------------------------------------
class Car {
    constructor() {
        this.name = "swift";
        this.year = 2020;
    }
}
let swift = new Car();
console.log(swift.name);
console.log(swift.year);
//----------------------------
// public , private , protected , default
class Car2 {
    constructor(model, num) {
        this.model = model;
        this.num = num;
    }
    // getter
    getName() {
        return this.model;
    }
    // setter
    setName(a) {
        return this.model = a;
    }
}
class Baleno extends Car2 {
    constructor(model, num, cName) {
        super(model, num);
        this.cName = cName;
    }
}
// this will get when the model is public in class
// let breeza=new Car2('DDIS',2021)
// console.log(breeza.model)
//if the property in the class is private tyhe we have to use the gettr end setter method
let suzuki = new Car2('DD', 2112);
let nm = suzuki.getName();
console.log(nm);
console.log(suzuki.setName('baleno'));
console.log(suzuki.getName());
