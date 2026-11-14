
function Practicejs() {
// console.log('learn javascript code');
// // console.log(false === 0);
// console.log(undefined === null);

// const getName = ()=> {
//     var name = 'hrishikesh'
// }
// console.log('print name', name);

// uses of call apply and bind method.

// const user = {
//     name: 'rhishikehs',
//     designation:'Engineer'
// };

// function getName() {
//     console.log(`what is the valud of ${this.designation}`);
// }
// // lets learn about higher order functions.

// function Calculate(a, b, op) {
// return op(a,b);
// }

// function Add (a,b){
//     return a + b;
// }

// function multiply (a,b) {
//     return a * b;
// }
// let result = Calculate(10,20,multiply);

// console.log('result is', result);
// getName.call(user);

// try to use this in arraow function
// const setResult =()=> {
// let name = 'hrishi'
//  console.log(`check the setResult this value${this.name}`);
// }

function setResult() {
 let user = {
    name : 'hrishikesh'
 }
 console.log(`check the setResult this value${user.name}`);
}

// use of reducer 
// const arr = [1,2,3,4,5];
// const arrResult = arr.reduce((acc, currentValue)=>{
// console.log('value of acc', acc);
// console.log('value of currentValue', currentValue);
// return acc + currentValue;
// },0);

// console.log('value of arr', arrResult);
// setResult();

// learn foreach 

// const fruits = ['apple', 'banana', 'cherry'];

// const showResult = fruits.forEach((item)=>{
//     console.log('item value in foreach', item);
// });

// console.log('ShowResult in foreach', showResult);

// learn map

const num = [1,2,3,4,5,6];

const numResult = num.map((item)=>{
    return item * 2;
});

console.log('NumResult is ', numResult);

  return (
    <div>
       <h1>Learn  javascript</h1>
    </div>
  );
}

export default Practicejs;
