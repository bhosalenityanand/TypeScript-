// here we write thr different type of function

function addM(x:number,y:number):void{
    console.log(x+y)
}
addM(50,25)

function addM1(x:number,y:number):undefined{
    console.log(x+y)
    return;
}

addM1(20,30)

//-----------------------------------------------
// program3
function displayFullName(firstName:string,lastName:string){
    return firstName +" "+ lastName
}
let q = displayFullName("sunil","chetri")
console.log(q)

//-------------------------------------]
// program 4

function ad(x:number,y:number){
    return x + y
}
function disResult(x:number,y:number,fn:Function){
    console.log(`Result of sum ${fn(x,y)}`)
}

disResult(75,25,ad)
//----------------------------------------
function displayResultA(x:number,y:number,fn:(x:number,y:number) => number){
    console.log(`Result of sum ${fn(x,y)}`)
}
displayResultA(12,34,ad)

//--------------------------------------

class Car {
    name:string="swift";
    year:number=2020
}

let swift = new Car()
console.log(swift.name)
console.log(swift.year)

//----------------------------
// public , private , protected , default

class Car2 {
    private model:string;
    private num:number
    public constructor(model:string,num:number){
        this.model=model
        this.num=num
    }
    // getter
    public getName():string{
        return this.model
    }

    // setter
    public setName(a:string){
        return this.model = a
    }
}

class Baleno extends Car2 {
    public cName:string;
    public constructor(model:string,num:number,cName:string){
        super(model,num)
        this.cName=cName
    }
}
// this will get when the model is public in class
// let breeza=new Car2('DDIS',2021)
// console.log(breeza.model)

//if the property in the class is private tyhe we have to use the gettr end setter method
let suzuki = new Car2('DD',2112)
let nm=suzuki.getName()
console.log(nm)

console.log(suzuki.setName('baleno'))
console.log(suzuki.getName())


