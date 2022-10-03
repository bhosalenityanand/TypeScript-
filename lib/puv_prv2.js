"use strict";
// public and private
class Deparment {
    constructor(n) {
        this.country = "india";
        this.employees = [];
        this.fullName = n;
    }
    describe() {
        console.log(`Department:${this.fullName}`);
    }
    addEmployee(employeeName) {
        this.employees.push(employeeName);
    }
    information() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
let emp = new Deparment('Nityanand');
console.log(emp.fullName);
emp.describe();
emp.addEmployee('sadanand');
emp.addEmployee('ram');
emp.information();
console.log(emp.country);
class Company {
    constructor(Name, establish, city, branch) {
        this.Name = Name;
        this.establish = establish;
        this.city = city;
        this.branch = branch;
    }
    info() {
        console.log(`${this.Name} is big company founded in th year of ${this.establish} in ${this.city}`);
    }
}
class TCS extends Company {
    constructor(Name, establish, city, branch, Bname) {
        super(Name, establish, city, branch);
        this.Bname = Bname;
    }
    info2() {
        console.log(`${this.Bname} is also the part of the ${this.Name}`);
    }
}
let it = new TCS('TATA', 1989, 'mumbai', 'IT', 'tcs');
it.info();
console.log(it.info2());
console.log(it.city);
console.log(it.Name);
console.log(it.Bname);
// public --> it can be accessedd in the class, in extended class, outside the class
// protected --> in the class and the extended class
// pribvate --> it can accessed only in the class
class Student {
    constructor(name, lastname, city) {
        this.name = name;
        this.lastname = lastname;
        this.city = city;
    }
    info() {
        console.log(this.name + " " + this.lastname + " lives in city " + this.city);
    }
}
// make the object of it
let ram = new Student('Ram', 'pawar', 'solapur');
console.log(ram.name);
console.log(ram.lastname);
ram.info();
// now trying with the private class
class Student2 {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    info2() {
        console.log(this.name + " " + this.lastname + " his age is " + this.age);
    }
    getName() {
        console.log(this.name);
        console.log(this.lastname);
    }
    setName(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    getAge() {
        console.log("Age is " + this.age);
    }
    setAge(age) {
        this.age = age;
    }
    getFullname() {
        console.log(this.name + " " + this.lastname);
    }
}
// // because of private we cannot set the value of constructor vis making object
let omkar = new Student2("omkar", "shelke", 20);
// console.log(omkar.name)
// so for that we have to use getter and setter method
omkar.getName();
omkar.setName('shubham', 'kamble');
omkar.getName();
omkar.setAge(21);
omkar.getAge();
omkar.getFullname();
