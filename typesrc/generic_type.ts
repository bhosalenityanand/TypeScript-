//-------------------------- Generics ---------------------------------
//--------------------- generic --------------------------
//TypeScript Generics is a tool which provides a way to create reusable components
//It creates a component that can work with a variety of data types rather than a single data type.
// It allows users to consume these components and use their own types. 
// Generics ensures that the program is flexible as well as scalable in the long term.

// ----------------- Advantage -------------------
//Type-safety: We can hold only a single type of objects in generics. It doesn't allow to store other objects.
//Typecasting is not required: There is no need to typecast the object.
//Compile-Time Checking: It is checked at compile time so the problem will not occur at runtime.

// suppose i have to make the arry which includes string only

let country:Array<String>=["india","UK","US","Russia"]
console.log(country)

// let as = country.push(200) // so here we cannot push any type other than string into this arry
// console.log(as)
let ds = country.push("Bhutan")
console.log(ds)
console.log(country)

// suppose i make the arry which include only number
let marks2:Array<Number>=[20,23,52,26,45,50,46]
console.log(marks2.length)
console.log(marks2[3])
 
//-------------------------------------------
//------ program promise ------

let pro = new Promise<string>(function(resolve,reject){
    setTimeout(function(){
        resolve("hello")
    }, 2000);
})

pro.then(function(e){
    console.log(e.includes('h'))
})

console.log(pro)

//-----------------------------------------------

//program 3
//---------------- merge -------------------

function merge<T extends object,U extends object>(objOne:T,objTwo:U){
    return Object.assign(objOne,objTwo)
}

let f22 = merge({city:"mumbai",place:200},{state:"maharashtra",country:"india"})
console.log(f22)
console.log(f22.city)
for(let key in f22){
    console.log(key)
}


//----------------- program -----------------------
// so here makre the interface method for the function
interface lengthy{
    length:number
}

function countLength<T extends lengthy>(element:T){
    console.log("length of element is => "+element.length)
}

countLength("nityanand")
countLength([20,156,23,4,5,6,658,43])

// ------------- program 5 -------------------

interface sizeB{
    size:number
}

function countSize<T extends sizeB>(element:T){
    console.log(element.size)
}

// call the method
countSize(new Set([65,23,45,78,98,2,332,32,32,45,65]))
countSize(new Map([[name,"hulk"],[,"fight"]]))

//--------------------- generic --------------------------
//TypeScript Generics is a tool which provides a way to create reusable components
//It creates a component that can work with a variety of data types rather than a single data type.
// It allows users to consume these components and use their own types. 
// Generics ensures that the program is flexible as well as scalable in the long term.

// ----------------- Advantage -------------------
//Type-safety: We can hold only a single type of objects in generics. It doesn't allow to store other objects.
//Typecasting is not required: There is no need to typecast the object.
//Compile-Time Checking: It is checked at compile time so the problem will not occur at runtime.

// program 6 

// function convertType(obj:object,key:String){
//     return obj[key]
// }                  // so this will show an error beacuse obj cannot find is key property

// by the correcct way to generic type

function convertType<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key]
}

// now call the function and make the object

let aa =convertType({name:"nityanand",age:22,lastName:"bhosale"},'lastName')
console.log(aa)

// program 7

class CheckFun<T extends string |number| boolean>{
    private data:T[]=[];

    addNumber(Num:T){
        this.data.push(Num)
    }

    // make the method for remove

    removeNum(Num:T){
        this.data.splice(this.data.indexOf(Num),1)
    }

    // for the prininting the arry

    getArry(){
        console.log(this.data)
    }
}

// now make thw object of class check fun

let a22 = new CheckFun()
a22.addNumber(23)
a22.addNumber(32)
a22.addNumber(56)
a22.addNumber(45)
a22.addNumber(89)
a22.getArry()

// for remove the element
a22.removeNum(56)
a22.getArry()