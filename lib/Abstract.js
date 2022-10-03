"use strict";
// Abstract in javascript
//An abstract class is a class that includes both abstract and regular methods. 
//It is a class that is inherited by multiple classes. We can not create objects of an abstract class.
//Abstract class does not support multiple inheritances.
//	Abstract class compile JavaScript functions.
//An abstract class is declared by using the keyword abstract.
// Example
class WorldBank {
    country() {
        console.log('India');
    }
}
class SBI extends WorldBank {
    loan(interest) {
        console.log('SBI interest on the loan amount is ' + interest + '%');
    }
    saveing(interest) {
        console.log('SBI interest on the saving amount ' + interest + '%');
    }
}
class HDFC extends WorldBank {
    loan(interest) {
        console.log('HDFC interest on the loan amount is ' + interest + '%');
    }
    saveing(interest) {
        console.log('HDFC interest on the saving amount ' + interest + '%');
    }
    check(amount, interest) {
        console.log('interest on the amount is ' + amount * interest / 100);
    }
}
// suppose i try to make th object of the abstract class
// let hdfc = new WorldBank() // so the error shows we cannot make the instance of the abstract
let icici = new SBI();
icici.loan(5);
let hdfc = new HDFC();
hdfc.check(20000, 5);
//---------------------------------------------------------
// example 2 
class Employee2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getStipend()} a month.`;
    }
}
class FullTimeEmployee extends Employee2 {
    constructor(firstName, lastName, stipend) {
        super(firstName, lastName);
        this.stipend = stipend;
    }
    getStipend() {
        return this.stipend;
    }
}
class Contractor extends Employee2 {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
    getStipend() {
        return this.getSalary();
    }
}
let empy1 = new FullTimeEmployee('sagar', 'chavan', 1000);
let st = empy1.compensationStatement();
console.log(st);
let empy2 = new Contractor('james', 'hard', 60, 5);
let sp = empy2.getStipend();
console.log(sp);
let sd = empy2.compensationStatement();
console.log(sd);
