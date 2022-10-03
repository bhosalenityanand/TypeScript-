"use strict";
// ---------------------- Interface ---------------------
//An interface is a syntactical contract that an entity should conform to. 
//In other words, an interface defines the syntax that any entity must adhere to.
//Interfaces define properties, methods, and events, which are the members of the interface. 
//Interfaces contain only the declaration of the members.
//make object of interface
// in interface if there is any propery or method is missing it will gives you an error
let stud1 = {
    name: 'raj',
    age: 22,
    greet(word) {
        console.log(word);
    }
};
console.log(stud1);
stud1.greet('welcome');
// make the object of type
let cand1 = {
    name: 'ram',
    age: 22, greet(word) {
        console.log(word);
    }
};
console.log(cand1);
cand1.greet('hello');
// let game= true
// let game= 'sham'
let game = 2052;
console.log('------------------------------------------------------');
class person {
    constructor(name, rollno, subj) {
        this.name = name;
        this.rollno = rollno;
        this.subj = subj;
    }
    info(subj) {
        console.log(subj + " is easy to study");
    }
    display() {
        console.log(this.name + " your roll no is " + this.rollno);
    }
}
let robert = new person("robert", 102, 'economics');
console.log(robert.name);
console.log(robert.rollno);
console.log(robert.subj);
robert.display();
robert.info('economics');
