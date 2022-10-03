// program one 
// in normal js

// function add(x,y){
//     console.log(x+y)
// }

// //call the function

// add('15','20')       output = >1520

// In typescript

function addition(x: number, y: number) {
    console.log(x + y)
}
addition(10, 15)

// function add2(x,y){
//     if( x==Number && y==Number){
//         console.log(x=y)
//     }
//     else{
//         console.log("Incorrect input")
//     }
// }
// add2('10','25')

// program two
function addition2(x: number, y: number, result: boolean, message: string): void {
    if (result) {
        console.log(x + y)
        console.log(message)
    }
}

//call the function

addition2(10, 20, true, "done")

// for return type

function sub(x: number, y: number, result: boolean, message: string): number {
    if (result) {
        console.log(x - y)
        console.log(message)
        return x - y
    }
    else {
        return 0
    }
}

let minus = sub(50, 21, true, "Done")

// for the object
let stud: object = {
    name: "sumit",
    lastname: "pawar",
    age: 23

}

console.log(stud)

// by typescript

let car:{
    name:string,
    model:string,
    year:number
}={
    name:"swift",
    model:"DDSI",
    year:2020,
}
console.log(car)
