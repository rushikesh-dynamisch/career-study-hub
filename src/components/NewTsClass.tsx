// import { Component } from 'react';

// class NewTsClass extends Component<{}, { count: number }> {
//   state = { count: 0 };

//   handleIncrement = () => {
//     this.setState(({ count }) => ({ count: count + 1 }));
//   };

//   render() {
//     return (
//       <section>
//         <h2>Class component</h2>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </section>
//     );
//   }
// }

// export default NewTsClass;


import { Component } from 'react';

class NewTsClass extends Component<{}, { count: number }> {
   name: string;
   public price: number;
   protected isAdded: boolean;

   constructor(name: string, price: number, isAdded: boolean) {
     super({});
     this.name =name;
     this.price = price;
    this.isAdded = isAdded;
    }

  isAddedToCart(): void {
    this.isAdded = true;
    console.log('isAddedToCard Called');
  }

  state = { count: 0 };
   
  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };


  render() {
    return (
      <section>
        <h2>Class component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </section>
    );
  }
}

console.log('Check the console outside the class');
var newObj = new NewTsClass('Apple',100, false);
console.log(newObj.isAddedToCart());
console.log('Check value of isAdded', newObj?.price);

class B extends NewTsClass {
  constructor() {
    super('Apple', 100, false);
    console.log('valud is added in B', this.isAdded);
  } 
}

var newObj2 = new B();
newObj2.isAddedToCart();
export default NewTsClass;

// Getter and setter example 
class Empolyee {
  name:String = 'hrishikesh';
  email:string = 'hrish@gmail.com'

  get _name():string{
    return "Mr" +this.name
  }
  
 set _email(val: string) {
  this.email = val;
 }
  
}

var newObj123 = new Empolyee();
console.log('newOBJ Value 123', newObj123?._name);   // this way we can get the value using getter and setter now we will set values
newObj123._email = 'Dynamisch@gmail.com';

console.log("new obj email value", newObj123?.email);

// getter and setter are used to get and set the values of the class properties. It is a way to encapsulate the properties of a class and provide controlled access to them. The getter method allows you to retrieve the value of a property, while the setter method allows you to set the value of a property. This can be useful for validation, logging, or other logic that needs to be executed when getting or setting a property.



// interface can use in class for defining its structure 

// interface CollageDataType {
//   name: string,
//   getCollageName(): void,
// }

// class CollageData implements CollageDataType {
//   name: string;
//    constructor(sName: string){
//     this.name = sName;
//    }
//    getCollageName(): void {
//      console.log('print the values hrishi dyna ammol');
//    }
// }

// var CollageObj = new CollageData("Dynamisch");

// We can define the structure of a class using an interface. The interface defines the properties and methods that the class must implement. In this example, the CollageDataType interface defines a name property and a getCollageName method. The CollageData class implements this interface and provides the implementation for the getCollageName method. This allows us to create objects of the CollageData class that conform to the structure defined by the CollageDataType interface.