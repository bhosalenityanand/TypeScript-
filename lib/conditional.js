"use strict";
// conditional types in typescript
let s1 = {
    name: "suraj",
    city: ['pune', 'thane'],
    startDate: new Date()
};
// in and operator of typescript it will take boths types of property
console.log(s1.city);
// in or operator of typescript it will take the common property
let ss = 2;
console.log(ss);
console.log('----------------------------------------');
function addition1(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
    }
}
let a11 = addition1('nityanand', ' bhosale');
let a2 = addition1(212, 'india');
let a23 = addition1(25, 23);
let a24 = addition1('Nityanand', 100);
console.log(a11);
console.log(a2);
console.log(a23);
console.log(a24);
console.log(typeof a11);
console.log(typeof a23);
console.log(typeof a24);
console.log(typeof a2);
function callPerson(sd) {
    // if (typeof sd === "Admin2") {
    // }
    // if(typeof sd === "Work"){
    // }
    if ('city' in sd) {
        console.log(sd.city);
    }
    else if ('startDate' in sd) {
        console.log(sd.startDate);
    }
}
// callPerson({name:"Nityanand",city:["India","US","UK"],startDate:new Date})
callPerson({ name: 'nityanand', startDate: new Date });
callPerson({ name: 'sham', city: ['india', 'UK', 'US'] });
// -------------- program 5 ------------------
class CarA {
    drive() {
        console.log("i m diving the car....");
    }
}
class Truck {
    drive() {
        console.log("i m diiving the truck....");
    }
    TruckLoad(quantity) {
        console.log(quantity);
    }
}
let b1 = new CarA();
let b2 = new Truck();
function vehicelInfo(vel) {
    if ('TruckLoad' in vel) {
        vel.TruckLoad(10000);
    }
    // or one more way make instance
    if (vel instanceof Truck) {
        console.log(10000);
    }
    else if (vel instanceof CarA) {
        console.log("speed of car is 200km/h");
    }
}
vehicelInfo(b1); // it will not gives you any output
vehicelInfo(b2);
function animalMovenment(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'tiger':
            speed = animal.runningSpeed;
            break;
        default:
            console.log('Incorrect');
    }
    console.log(speed);
}
animalMovenment({ type: 'bird', 'flyingSpeed': 10 });
animalMovenment({ type: 'tiger', 'runningSpeed': 10 });
// for html in typescript
// Program 7
let a111 = document.querySelector('p');
let a1122 = document.querySelector('input'); // beacuse of ! it will never be null
let a2223 = document.querySelector('#two');
let aaa = document.querySelector('#three');
//let a222= <String>prompt()!
a1122.value;
a2223.value;
aaa.alt;
