// Abstract in javascript
//An abstract class is a class that includes both abstract and regular methods. 
//It is a class that is inherited by multiple classes. We can not create objects of an abstract class.
//Abstract class does not support multiple inheritances.
//	Abstract class compile JavaScript functions.

//An abstract class is declared by using the keyword abstract.

// Example

abstract class WorldBank {
    abstract loan(interest: number): void
    abstract saveing(interest: number): void

    country() {
        console.log('India')
    }
}

class SBI extends WorldBank {

    loan(interest: number) {
        console.log('SBI interest on the loan amount is ' + interest+'%')
    }

    saveing(interest: number): void {
        console.log('SBI interest on the saving amount '+interest+'%')
    }

}

class HDFC extends WorldBank{
    loan(interest: number): void {
        console.log('HDFC interest on the loan amount is '+interest+'%')
    }

    saveing(interest: number): void {
        console.log('HDFC interest on the saving amount '+interest+'%')
    }

    check(amount:number,interest:number){
        console.log('interest on the amount is '+amount*interest/100)
    }
}

// suppose i try to make th object of the abstract class

// let hdfc = new WorldBank() // so the error shows we cannot make the instance of the abstract

let icici = new SBI()
icici.loan(5)

let hdfc = new HDFC()
hdfc.check(20000,5)

//---------------------------------------------------------

// example 2 

abstract class Employee2 {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getStipend(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getStipend()} a month.`;
    }
}

class FullTimeEmployee extends Employee2 {
    constructor(firstName: string, lastName: string, private stipend: number) {
        super(firstName, lastName);
    }
    getStipend(): number {
        return this.stipend;
    }
}

class Contractor extends Employee2 {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }

    getStipend(): number {
        return this.getSalary()
    }
}

let empy1 = new FullTimeEmployee('sagar','chavan',1000)
let st = empy1.compensationStatement()
console.log(st)

let empy2 = new Contractor('james','hard',60,5)
let sp = empy2.getStipend()
console.log(sp)

let sd = empy2.compensationStatement()
console.log(sd)
