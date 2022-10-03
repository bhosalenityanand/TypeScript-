"use strict";
// Inheritance in the typescript
// it not different it is same like the javascript
class Father {
    constructor(name, lastName, profection) {
        this.name = name;
        this.lastName = lastName;
        this.profection = profection;
    }
    infofather() {
        console.log(this.name + " " + this.lastName + " he is " + this.profection);
    }
}
class Son extends Father {
    constructor(name, lastName, profection, sonName, job) {
        super(name, lastName, profection);
        this.sonName = sonName;
        this.job = job;
    }
    sonInfo() {
        console.log(this.sonName + " " + this.lastName + " he is " + this.job);
    }
}
let nityanand = new Son('Jotiram', 'Bhosale', 'Farmer', 'Nityanand', 'Developer');
console.log(nityanand.name);
console.log(nityanand.sonName);
nityanand.infofather();
nityanand.sonInfo();
