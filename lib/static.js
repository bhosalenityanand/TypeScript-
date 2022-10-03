"use strict";
// we cannot use static method and properties inside non-static things with this 
// if you want to call out you can callout with this keyword
// Interface cannot be assign a value , they all are abstract
// Interface is always related with object
// Interface can only have read only property
// Interface can be split
// What are static method and properties
class Carnew {
    constructor(num, country) {
        this.num = num;
        this.country = country;
        this.year = Carnew.currentYear;
    }
    static CreatEmployee(name) {
        return { fullName: name };
    }
}
Carnew.currentYear = 2022;
console.log(Carnew.currentYear);
console.log(Carnew.CreatEmployee('nityanand bhosale'));
let audi = new Carnew(236505, "india");
console.log(audi);
console.log(audi.num);
console.log(audi.country);
// you can access the static method by using its own className
// like below
let newEmp = Carnew.CreatEmployee('Nityanand bhosale');
console.log(newEmp);
//--------------------------------------------------------- 
class Accounting {
    // private static instance:Accounting
    constructor(id, reports) {
        this.id = id;
        this.reports = reports;
    }
}
// tghis is whatr we can make the more than one boject of class
let act1 = new Accounting(505, 'saving');
console.log(act1);
let act2 = new Accounting(5023, "current");
console.log(act2);
//-------------- Singletone pattern ------------
// sigletone pattern means we can creat only one object of class
class Accounting1 {
    constructor(id, reports) {
        this.id = id;
        this.reports = reports;
    }
    static getInstance(id, reports) {
        if (Accounting1.instance) {
            return this.instance;
        }
        this.instance = new Accounting1(id, reports);
        return this.instance;
    }
}
// it will throws an error be like that
// private constructor are not accessible outside the class
// let per1 = new Accounting1(5021,'saving')
let per1 = Accounting1.getInstance(581, 'cureent');
console.log(per1);
let per2 = Accounting1.getInstance(236, 'saveing');
console.log(per2);
let per3 = Accounting1.getInstance(403, 'current');
console.log(per3);
// so here we make the many object the class  but it acceptace the oniy one 
// which is the first
