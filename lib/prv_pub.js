"use strict";
// private
// public
//protected
class Crop {
    constructor(type, period) {
        this.type = type;
        this.period = period;
    }
    info() {
        console.log(this.type + " it require the " + this.period + " months");
    }
    setPeriod(a) {
        return this.period = a;
    }
    getType() {
        this.type;
    }
}
class ladyfinger extends Crop {
    constructor(type, period, lName) {
        super(type, period);
        this.lName = lName;
    }
}
let lady = new ladyfinger('kharip', 4, 'ladyfinger');
console.log(lady.lName);
console.log(lady.type);
// console.log(lady.period)
lady.setPeriod(5);
lady.info();
// -------------------------------------------------------
class Employee {
    constructor(fullName, lastName, empId, mobNo, salary, adNum) {
        this.fullName = fullName;
        this.lastName = lastName;
        this.empId = empId;
        this.mobNo = mobNo;
        this.salary = salary;
        this.adNum = adNum;
    }
    getMob(name) {
        if (name == this.fullName) {
            console.log(this.fullName + " your mob num is " + this.mobNo);
        }
        else {
            console.log("you cannot access mob num");
        }
    }
    getsalary(name) {
        if (name == this.fullName) {
            console.log(this.fullName + " your salary is " + this.salary);
        }
        else {
            console.log("Access banned");
        }
    }
    // set the mobile number
    setmob(num) {
        this.mobNo = num;
    }
}
// make the instance object
let emp1 = new Employee('Nityanand', 'Bhosale', 505023, 7522957602, 40000, 45218806);
console.log(emp1.fullName);
console.log(emp1.lastName);
console.log(emp1.empId);
emp1.getMob('Nityanand');
emp1.getsalary('Nityanand');
emp1.setmob(9112997602);
emp1.getMob('Nityanand');
console.log(emp1.adNum);
// beacuse of readonly property you cannot update adhar num
// emp1.adNum=15624646
// private field cannot be accessed outside the class
// public field can acesses within the class and outside the class
// readonly ==> we can read it but cannot update it
