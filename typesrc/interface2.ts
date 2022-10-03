// Example 2 
// in the interface all methods and property are object

interface std {
    class1: string
    subj1: string

    metd(class1: string, subj1: string): void
}

interface school {
    Sname: string
    adrs: string

    info(Sname: string, adrs: string): void
}

class studentB implements std, school {
    studName: string
    Sname: string
    class1: string
    subj1: string
    adrs: string

    constructor(studName: string, Sname: string, class1: string, subj1: string, adrs: string) {
        this.studName = studName
        this.Sname = Sname
        this.class1 = class1
        this.subj1 = subj1
        this.adrs = adrs
    }

    metd(class1: string, subj1: string) {
        console.log(`${this.studName} in ${class1} his subject is ${subj1}`)
    }

    info(Sname: string, adrs: string) {
        console.log(Sname + " is located in " + adrs)
    }
}

let james = new studentB('james', 'M.H SCHOOL', '10th', 'semi', 'thane')
console.log(james.Sname)
console.log(james.adrs)
james.metd('10th', 'semi')
james.info('M.H SCHOOL', 'thane')

// check the readonly property in interface

interface Crop1 {
    readonly Cname: string
}

interface Vege extends Crop {
    // Cname:string
    info2(durt: string): void;
}

class Potato implements Crop1 {
    Cname: string
    constructor(name: string) {
        this.Cname = name
    }

    info2(durt: string): void {
        console.log(durt)
    }

    setName(name: string) {
        this.Cname = name
    }
}

let nm1 = new Potato("potato")
console.log(nm1.Cname)

// nm1.Cname ="tomato"
// console.log(nm1.Cname)

interface Employee3{
    readonly emCode:number
    emName:string
}

let sham:Employee3={
    emCode:402,
    emName:"sham"
}

// so here  we cannot update the read only proprerty
// sham.emCode = 402