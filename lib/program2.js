"use strict";
// for arry
let marks = [2, 15, 56, .597, 6, 46, 2, 3, .46, 45];
let sum = marks.reduce(function (acc, el) {
    return acc + el;
}, 0);
let Ans = sum;
console.log(Ans);
// ----------------------------
let names = ['nityanand', 'sadanand', 'swapnali', 'shubhangi', 'pradip'];
console.log(names);
console.log(names.push('ram'));
console.log(names);
console.log(names[0]);
let wel = names.forEach(function (el) {
    console.log("Hello " + el);
});
console.log(wel);
// make a object
let obj1 = {
    name: "nityanand",
    lastName: "bhosale",
    skill: ['javascript', 12, 'python',]
};
console.log(obj1.name);
console.log(obj1.lastName);
console.log(obj1.skill[2]);
console.log(obj1.skill[1]);
console.log(obj1.skill.push('java'));
console.log(obj1.skill);
// ----------------- program 3 --------------------- 
function Add(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
Add(20, 25);
Add('56', '5');
// let a:string|number =10
// let b:string|boolean = 'nityanand'
let a = 'ram';
let b = true;
let info = {
    company: 'infosys',
    branch: 'BPO'
};
console.log(info.company);
console.log(info.branch);
let info6 = {
    mother: "kanchan",
    father: "jotiram"
};
console.log(info6.father);
console.log(info6.mother);
//------------------------------------------
// program5
// let role = "read_only";
// let role2 = "read_and_write";
// let role3 = 'admin'
var Roles;
(function (Roles) {
    Roles[Roles["Read_only"] = 1] = "Read_only";
    Roles[Roles["Read_and_write"] = 2] = "Read_and_write";
    Roles[Roles["admin"] = 3] = "admin";
    Roles[Roles["customer"] = 4] = "customer";
})(Roles || (Roles = {}));
var Account;
(function (Account) {
    Account[Account["saving"] = 1] = "saving";
    Account[Account["current"] = 2] = "current";
})(Account || (Account = {}));
if (Roles.Read_only) {
    console.log('reading only');
}
if (Roles.Read_and_write) {
    console.log('read and write');
}
if (Roles.admin) {
    console.log('admin');
}
if (Account.saving) {
}
if (Account.current) {
}
