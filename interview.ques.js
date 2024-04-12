// const a = []
// const b = []
// console.log(a==b)
// console.log(a===b)


// let a = [20]
// let b = [20];
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])

// let data = 10 - -10;
// console.log(data);

// let data = {name:"Prity"}
// console.log(delete data.name);

// const data = ["Prits", "Kartik", "Naman"];
// const [,y,x] = data;
// console.log(y,x);


// let data = {name:"PRity", age:21, skill:"JS"};
// let info = {city:"VNS", skill:"Node"}
// data = {...data,...info};
// console.log(data)

// const res = false || 0 || true  
// console.log(res);


// let data = ["pri","aditi","shraddha","Anjali"]
// delete data[1];
// console.log(data);

// let a = 2;
// setTimeout(()=>{
//     console.log(a)
// },0)
// a=100


// let a = 1;
// let c = 2;
// console.log(--c === a);

// let a = 1;
// let b=1;
// let c = 1;
// console.log(a === b === c);



// myFun();

// var myFun = function(){
//     console.log("First");

// }
// myFun()
// function myFun(){
//     console.log("second")
// }
// myFun()



// var variable = 10;
// (()=>{
//     console.log(variable);
//      variable = 20;
//     console.log(variable)
// })();
// console.log(variable)
// var variable=30;

// foo = 30;
// console.log(foo);
// var foo = 100;
// console.log(foo);


// const prity = {
//     name:"Prity Rastogi",
//     sayName: function (){
//         console.log(this.name);
//     },
// };
// const shraddha = {
//     name:"Shraddha Gawde",
//     sayName: function (){
//         console.log(this.name);
//     },
// }
// shraddha.sayName.call(prity)



// const prity = {
//     name:"Prity Rastogi",
//     sayName: function (){
//         console.log(this.name);
//     },
// };
// setTimeout(prity.sayName, 3*100)
// setTimeout(prity.sayName.bind(prity), 3*100)

// let amazon = [
//     {name:"speakers", price:5400, rating:4},
//     {name:"phone", price:300, rating:3},
//     {name:"play", price:50000, rating:4},
//     {name:"watch", price:30000, rating:4},
// ]

// let highestRatedPrduct = amazon.reduce((highest, curr)=>{
//     return curr.rating>highest.rating ? curr:highest
// })
// console.log("Name:", highestRatedPrduct.name);
// console.log("Rating:", highestRatedPrduct.rating);

// const obj = {
//     key1: 'value1',
//     key2: 123,
//     key3: true
//   };

//   for (let key in obj) {
//     console.log(`${typeof key}`);
//   }
  

// const obj={
//     "1" : "a",
//     1 : "b",
//     [1] : "c"
//     };
//     console.log( obj [ "1" ] );



// Use Reduce to transform an array into an object

const data = [['a',1],['b',2],['c',3]];
const obj = data.reduce((acc,[key,value])=>{
    acc[key] = value
    return acc;
}, {});
console.log(obj)