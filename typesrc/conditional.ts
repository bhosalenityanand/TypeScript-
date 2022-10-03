// conditional types in typescript

type Admin11 = {
    name: string
    city: string[]
}

type Worker1 = {
    name: string
    startDate: Date

}

type AdminWorker = Admin11 & Worker1

let s1: AdminWorker = {
    name: "suraj",
    city: ['pune', 'thane'],
    startDate: new Date()
}

// in and operator of typescript it will take boths types of property
console.log(s1.city)

type sam = string | number
type sam2 = boolean | number
type both = sam & sam2

// in or operator of typescript it will take the common property
let ss: both = 2
console.log(ss)

console.log('----------------------------------------')
//----------------------------------------------------
// check the type gurd

function addition1(a: number, b: number): number
function addition1(a: string, b: string): string
function addition1(a: number, b: string): string
function addition1(a: string, b: number): string

function addition1(a: sam, b: sam) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString()
    }
    else {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        }
    }
}

let a11 = addition1('nityanand', ' bhosale')
let a2 = addition1(212, 'india')
let a23 = addition1(25, 23)
let a24 = addition1('Nityanand', 100)

console.log(a11)
console.log(a2)
console.log(a23)
console.log(a24)

console.log(typeof a11)
console.log(typeof a23)
console.log(typeof a24)
console.log(typeof a2)

// program 5

// type Admin2={
//     name:string
//     city:string[]
// }

// type Work={
//     name:string
//     startDate:Date
// }

// type Person1 = Admin2 & Work

// function callPerson(sd:Person1){
//     console.log(sd)
// }

// callPerson({name:"Nityanand",city:["India","US","UK"],startDate:new Date})

// no check for the same for or condition

type Admin2 = {
    name: string
    city: string[]
}

type Work = {
    name: string
    startDate: Date
}

type Person1 = Admin2 | Work

function callPerson(sd: Person1) {
    // if (typeof sd === "Admin2") {

    // }
    // if(typeof sd === "Work"){

    // }
    if('city' in sd){
        console.log(sd.city)
    }

    else if('startDate' in sd){
        console.log(sd.startDate)
    }
}

// callPerson({name:"Nityanand",city:["India","US","UK"],startDate:new Date})
callPerson({name:'nityanand',startDate:new Date})
callPerson({name:'sham',city:['india','UK','US']})

// -------------- program 5 ------------------

class CarA {
    drive(){
        console.log("i m diving the car....")
    }
}

class Truck{
    drive(){
        console.log("i m diiving the truck....")
    }

    TruckLoad(quantity:number){
        console.log(quantity)
    }
}

type vehicle = CarA|Truck

let b1 = new CarA()
let b2 = new Truck()

function vehicelInfo(vel:vehicle){
    if('TruckLoad' in vel){
        vel.TruckLoad(10000)
    }
    // or one more way make instance
    if(vel instanceof Truck){
        console.log(10000)
    }
    else if(vel instanceof CarA){
        console.log("speed of car is 200km/h")
    }
}

vehicelInfo(b1)  // it will not gives you any output
vehicelInfo(b2)

//----------------program 5 ------------------
interface Bird{
    type:'bird';
    flyingSpeed:number  
}  

interface Tiger{
    type:'tiger'
    runningSpeed:number  
}  

type Animal = Bird|Tiger
function animalMovenment(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'tiger':
            speed = animal.runningSpeed
            break
        default:
            console.log('Incorrect')
    }
    console.log(speed)
}

animalMovenment({type:'bird','flyingSpeed':10})
animalMovenment({type:'tiger','runningSpeed':10})


// for html in typescript
// Program 7
let a111 = document.querySelector('p')
let a1122 = document.querySelector('input')!   // beacuse of ! it will never be null
let a2223= <HTMLInputElement>document.querySelector('#two')!
let aaa = <HTMLImageElement>document.querySelector('#three')!
//let a222= <String>prompt()!

a1122.value
a2223.value
aaa.alt





