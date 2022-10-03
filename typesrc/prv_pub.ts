// private
// public
//protected

class Crop {
    type: string;
    private period: number;

    public constructor(type: string, period: number) {
        this.type = type
        this.period = period
    }

    info() {
        console.log(this.type + " it require the " + this.period + " months")
    }

    setPeriod(a: number) {
        return this.period = a

    }

    getType(){
        this.type
    }
}

class ladyfinger extends Crop {
    lName: string
    public constructor(type: string, period: number, lName: string) {
        super(type, period)
        this.lName = lName
    }
}


let lady = new ladyfinger('kharip', 4, 'ladyfinger')

console.log(lady.lName)
console.log(lady.type)
// console.log(lady.period)

lady.setPeriod(5)
lady.info()

// -------------------------------------------------------

class Employee{
    public fullName:string
    public lastName:string
    public empId:number
    private mobNo:number
    private salary:number
    public readonly adNum:number

    constructor(fullName:string,lastName:string,empId:number,mobNo:number,salary:number,adNum:number){
        this.fullName=fullName
        this.lastName=lastName
        this.empId=empId
        this.mobNo=mobNo
        this.salary=salary
        this.adNum=adNum

    }

    getMob(name:string){
        if(name==this.fullName){
            console.log(this.fullName+" your mob num is "+this.mobNo)
        }
        else{
            console.log("you cannot access mob num")
        }
    }

    getsalary(name:string){
        if(name==this.fullName){
            console.log(this.fullName+" your salary is "+this.salary)
        }
        else{
            console.log("Access banned")
        }
    }

    // set the mobile number
    setmob(num:number){
       this.mobNo=num
    }
    
}

// make the instance object
let emp1=new Employee('Nityanand','Bhosale',505023,7522957602,40000,45218806)
console.log(emp1.fullName)
console.log(emp1.lastName)
console.log(emp1.empId)

emp1.getMob('Nityanand')
emp1.getsalary('Nityanand')
emp1.setmob(9112997602)
emp1.getMob('Nityanand')
console.log(emp1.adNum)

// beacuse of readonly property you cannot update adhar num
// emp1.adNum=15624646


// private field cannot be accessed outside the class
// public field can acesses within the class and outside the class
// readonly ==> we can read it but cannot update it



