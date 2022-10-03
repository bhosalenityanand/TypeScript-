// we cannot use static method and properties inside non-static things with this 
// if you want to call out you can callout with this keyword
// Interface cannot be assign a value , they all are abstract
// Interface is always related with object
// Interface can only have read only property
// Interface can be split

// What are static method and properties

class Carnew {
    num:number;
    country:String;
    year:number;
    static currentYear = 2022

    constructor(num:number,country:String){
        this.num=num
        this.country=country
        this.year=Carnew.currentYear
    }

    static CreatEmployee(name:String){
        return {fullName:name}
    }
}
console.log(Carnew.currentYear)
console.log(Carnew.CreatEmployee('nityanand bhosale'))

let audi = new Carnew(236505,"india")
console.log(audi)
console.log(audi.num)
console.log(audi.country)

// you can access the static method by using its own className
// like below

let newEmp = Carnew.CreatEmployee('Nityanand bhosale')
console.log(newEmp)

//--------------------------------------------------------- 
class Accounting{
    id:number;
    reports:string
    // private static instance:Accounting

    constructor(id:number,reports:string){
        this.id=id
        this.reports=reports
    }

}
// tghis is whatr we can make the more than one boject of class

let act1 = new Accounting(505,'saving')
console.log(act1)

let act2 = new Accounting(5023,"current")
console.log(act2)

//-------------- Singletone pattern ------------
// sigletone pattern means we can creat only one object of class

class Accounting1{
    id:number;
    reports:string
    private static instance:Accounting

    private constructor(id:number,reports:string){
        this.id=id
        this.reports=reports
    }

    static getInstance(id:number,reports:string){
        if(Accounting1.instance){
            return this.instance
        }

        this.instance = new Accounting1(id,reports)
        return this.instance
    }

}

// it will throws an error be like that
// private constructor are not accessible outside the class
// let per1 = new Accounting1(5021,'saving')

let per1 = Accounting1.getInstance(581,'cureent')
console.log(per1)
let per2 = Accounting1.getInstance(236,'saveing')
console.log(per2)
let per3 = Accounting1.getInstance(403,'current')
console.log(per3)

// so here we make the many object the class  but it acceptace the oniy one 
// which is the first
