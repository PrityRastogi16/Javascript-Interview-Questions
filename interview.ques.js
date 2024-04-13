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

// const data = [['a',1],['b',2],['c',3]];
// const obj = data.reduce((acc,[key,value])=>{
//     acc[key] = value
//     return acc;
// }, {});
// console.log(obj)

//  function that takes an array of strings and returns a new array where each string is capitalized.
// let strArr = ["apple", "jsdh" ,"sjsdhjsd"];
// function capitalized(strings){
//     return strings.map(str=>str.toUpperCase())
// }
// console.log(capitalized(strArr));


// let arr = [[1, 2], [3, 4], [5, 6]];
// function filterArr(arryas){
//     return arryas.reduce((acc,curr)=> acc.concat(curr),[])
// }
// console.log(filterArr(arr));



// const data = [
//     { numbers: [1, 2, 3] },
//     { numbers: [4, 5, 6] },
//     { numbers: [7, 8, 9] }
// ];

// function double(data){
//     return data.flatMap(obj=> obj.numbers.map(n=>n*2))
// }

// console.log(double(data))


// const data = [
//     { words: ['apple', 'banana', 'cherry'] },
//     { words: ['orange', 'pear', 'kiwi'] },
//     { words: ['grape', 'pineapple', 'strawberry'] }
// ];
// function filterArray(data){
//     return data.flatMap(obj => obj.words.filter(el => el.length >= 6))
// }

// console.log(filterArray(data))


// const data = [
//     { numbers: [1, 2, 3] },
//     { numbers: [4, 5, 6] },
//     { numbers: [7, 8, 9] }
// ];
// function sum(data){
//     return data.reduce((acc,curr)=> acc+curr.numbers.reduce((sum,num)=>sum+num,0),0)

// }
// console.log(sum(data));

// const students = [
//     { title: 'java', grade: 'A' },
//     { title: 'python', grade: 'B' },
//     { title: 'java', grade: 'A-' },
//     { title: 'javascript', grade: 'C' }
//   ];

//   function remove(data){
//     const set = new Set();
//     const result = [];
//     for(const stu of data)
//   }

