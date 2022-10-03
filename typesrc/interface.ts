// ---------------------- Interface ---------------------
//An interface is a syntactical contract that an entity should conform to. 
//In other words, an interface defines the syntax that any entity must adhere to.
//Interfaces define properties, methods, and events, which are the members of the interface. 
//Interfaces contain only the declaration of the members.

//  Interface                                              Type
//The typescript interface supports            The typescript type supports only the data types 
// the use of the object.                      and not the use of an object.


interface studentA {
    name: string
    age: number
    greet(word: string): void
}

//make object of interface
// in interface if there is any propery or method is missing it will gives you an error
let stud1: studentA = {
    name: 'raj',
    age: 22,
    greet(word: string):void {
        console.log(word)
    }
}

console.log(stud1)
stud1.greet('welcome')

// ---- type ---
type candidate = {
    name: string
    age: number
    greet(word: string): void
}

// make the object of type

let cand1:candidate={
    name:'ram',
    age:22,greet(word:string){
        console.log(word)
    }
}

console.log(cand1)
cand1.greet('hello')

// in types suppoers in the datatype

type game =string|number|boolean
type name = 'james'|'john'

// let game= true
// let game= 'sham'
let game= 2052

console.log('------------------------------------------------------')

// example

interface greetable{
    rollno:number
    subj:string

    info(subj:string):void
}

class person implements greetable{
    name:string
    rollno:number
    subj:string

    constructor(name:string,rollno:number,subj:string){
        this.name=name
        this.rollno=rollno
        this.subj=subj
    }

    info(subj: string): void {
        console.log(subj+" is easy to study")
    }

    display(){
        console.log(this.name+" your roll no is "+this.rollno)
    }
}

let robert = new person("robert",102,'economics')
console.log(robert.name)
console.log(robert.rollno)
console.log(robert.subj)

robert.display()
robert.info('economics')



