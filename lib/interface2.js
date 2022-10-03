"use strict";
// Example 2 
// in the interface all methods and property are object
class studentB {
    constructor(studName, Sname, class1, subj1, adrs) {
        this.studName = studName;
        this.Sname = Sname;
        this.class1 = class1;
        this.subj1 = subj1;
        this.adrs = adrs;
    }
    metd(class1, subj1) {
        console.log(`${this.studName} in ${class1} his subject is ${subj1}`);
    }
    info(Sname, adrs) {
        console.log(Sname + " is located in " + adrs);
    }
}
let james = new studentB('james', 'M.H SCHOOL', '10th', 'semi', 'thane');
console.log(james.Sname);
console.log(james.adrs);
james.metd('10th', 'semi');
james.info('M.H SCHOOL', 'thane');
class Potato {
    constructor(name) {
        this.Cname = name;
    }
    info2(durt) {
        console.log(durt);
    }
    setName(name) {
        this.Cname = name;
    }
}
let nm1 = new Potato("potato");
console.log(nm1.Cname);
let sham = {
    emCode: 402,
    emName: "sham"
};
// so here  we cannot update the read only proprerty
// sham.emCode = 402
