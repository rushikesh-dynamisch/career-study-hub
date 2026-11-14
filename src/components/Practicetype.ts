// function Practicetype () {
// // Unions in typescript.
// // unions is like we can assign different types to a variable if we are not sure in between data is number or string or array type
// // we can add it to functionsa parameters and a return type 


// console.log('practise type called');
// var name: string | number = 'hrishikesh';

// function add (name:string | number): string[] | string {
//     if(true)
//     {
//         return 'hrishikesh'
//     }
//    return ['risi', 'kajal', 'suvichar']
// }  
// // in the above sections unios are added

// // Interfaces.

// interface obj  {
//     name:string,
//     age: Number,
//     isTrue: Boolean,
// }

// interface studentObj extends obj {
//     city?: string
// }

// const student: obj ={
//     name:'hrishikesh',
//     age:30,
//     isTrue: true
// }

// const student1: obj ={
//     name:'hrishikesh1',
//     age:20,
//     isTrue: true
// }

// const student3: studentObj ={
//     name:'hrishikesh',
//     age:30,
//     isTrue: true,
//     city:'pune',
// }
// // Example of the interface

// // Intersections 

// type objInter = {
//     name: String,
//     age: Number
// }

// type cityInter = {
//     city: String
// }

// type objCombine = objInter & cityInter; // combining two types using intersections

// const ExampleInter: objCombine = {
//     name:'vikas',
//     age:40,
//     city:'pune'
// }

// console.log('ExampleInter', ExampleInter);

// // type:

// // var objType : {name:string, age: Number} = {
// //     name:'praful',
// //     age:25
// // }   // that is also going to work instead of defining type like this we can do

// type objType = {
//     name: String
//     age: 25
// }

// var objType : objType = {
//     name:'praful',
//     age:25
// } 

// // then it is similar to interface but the difference is we can not extend the   type like interface we can only combine it using intersections or we can use union with type but we can extend the interface and we can not use union with interface.
// // that is the main difference between type and interface.

// //Enum in typescript is a way to define a set of named constants. It allows you to create a collection of related values that can be used as a type. Enums can be numeric or string-based, and they provide a way to give more meaningful names to values, making the code more readable and maintainable.   

// enum Direction {
//     first = 'first',
//     second = 'second',
//     third ='third'
// }

// var direction : Direction = Direction.first;
// console.log(direction); // Output: first

// enum Colours {
//     red,
//     whilte,
//     yellow,
// }

// var bgColor: Colours = Colours.red;

// console.log(bgColor); // Output: 0


// }

// // Claasses in typescript is a blueprint for creating objects with properties and methods. It allows you to define the structure and behavior of objects, encapsulating data and functionality together. Classes can have constructors, methods, and access modifiers (public, private, protected) to control visibility. They support inheritance, enabling the creation of subclasses that inherit properties and methods from a parent class. Classes provide a way to organize code, promote reusability, and implement object-oriented programming principles in TypeScript.

// // Example of classes 

// // class Product {
// //    name: string;
// //    price: number;
// //    isAvailable: boolean = false;
// //    constructor(name: string, price: number) {
// //     this.name = name;
// //     this.price = price;
// // }

// // addProduct():void {
// //     this.isAvailable = true;
// // }

// // var product = new Product("Laptop",1000);
// // product.addProduct();

// // var product1 = new Product('IPHone', 1000000);
// // product1.addProduct();

// // } 


// class Product {
//     name: String;
//     price: Number;
//     isAvailable: Boolean;

//     constructor(name: String, price: Number) {
//         this.name = name;
//         this.price = price;
//     }

//     addToProduct(): void {
//         this.isAvailable = true;
//         console.log('isAvailable');
//     }
// }

// var product = new Product('Apple',10000);

// console.log(product.addToProduct());

// // this way we can define the classes in typescript and we can use it in our project.

console.log("practice type called");

export {}