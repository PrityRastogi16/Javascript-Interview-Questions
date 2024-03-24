
const user = {
     name:"Prity",
     age:21
}
// console.log(JSON.stringify(user));

// console.log([..."Prity"]);
const users = {name:"PRITS",age:21,
fullName:{
     firstName:"Pri",
     lastName:"Sah"
},
 level:19, health:90}
// const admin = {...users,admin:true}
// console.log(admin);
const data=JSON.stringify(users);
// console.log(data);

const shape={
     radius:10,
     diameter(){
          return this.radius*2;
     },
     perimeter:()=>2*Math.PI*this.radius,
};

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); // NaN
// const {name:myName} = users;



// let name = "Rastogi"
const {fullName:{firstName,lastName}} = users
console.log(firstName,lastName);



function getItems(fruitList,favoriteFruits,...args) {
     return [...fruitList,...args,favoriteFruits];

}
// console.log(getItems(["banana","apple"],"pear","orange","mango", "peer"));


// Object Refrencing

let c = {greeting:"Hey!"};
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting); 




let arr = [{id:1, click:4.5},{id:2, click:4.5},{id:"1", click:5.5},{id:2, click:null},{id:3, click:4.5},{id:1, click:undefined}];

function solve(arr){
     let ans = {};
     arr.forEach(el =>{
          const id = el.id.toString();
          const click = el.click
          if(click && typeof click === 'number'){
               ans[id] = (ans[id]||0)+click;

          }
     })
     let newArr = [];
     for(let id in ans){
          newArr.push({id:parseInt(id), click:ans[id]});
     }
     return newArr;
}

// console.log(solve(arr));

// //////////////////////////
// console.log({a:1} == {a:1});
// console.log({a: 1} === {a: 1});

let person = {name:"PRITY"};
const members = [person];
person.name = null;
// console.log(members);

// /////////////////////

const value = {number:10};
const multiply = (x = {...value}) =>{
     // console.log((x.number *=2));  
}
multiply(); //20
multiply(); 
multiply(value); //20
multiply(value) //40

// 4444444444444444444444444

function changeAgeAndRefrence(per){
     per.age = 25;
     per={
          name:"John",
          age:50,

     };
     return per;
}
const personObj1 = {
     name:"Alex",
     age:20,
};
// console.log(personObj1);
const personObj2 = changeAgeAndRefrence(personObj1);
// console.log(personObj1);
// console.log(personObj2);

// Cloning og object

const userForClone = {
     name:"Prits",
     age:20,
};
// 1st way
const objClone = Object.assign({},userForClone);
// console.log(userForClone, objClone);

// 2nd way
const objClone2 = JSON.parse(JSON.stringify(userForClone));
// console.log(userForClone, objClone2);

// 3rd way
const objClone3 = {...userForClone}
console.log(userForClone, objClone3);