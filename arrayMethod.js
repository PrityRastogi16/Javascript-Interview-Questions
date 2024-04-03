 var obj = {name:"Prity"}
 function sayHello(age){
    return "Hello "+ this.name + 'is' + age;
 }
//  console.log(sayHello.call(obj,24));

//  APlly-  takes arg as an array
var obj2 = {name:"Prity"}
function sayHello2(age,profession){
   return "Hello "+ this.name + 'is' + age + profession;
}
// console.log(sayHello2.apply(obj,[24, "IT"]));


const agee = 10;
var person={
    name:"Prity",
    age:20,
    getAge:function(){
        return this.age;
    },
};
var person2 = {age:24};
// console.log(person.getAge.call(person2));
// console.log(person.getAge. bind(person2)());

const array = ["a","b"]
const el = [0,1,2];
// el.push.apply(el,array);
// console.log(el)


// USE APPLY AND MIND MAX
const numbers = [5,4,6,7,2,1,8,0];
// console.log(Math.max.apply(null,numbers));

function f(){
    console.log(this);
}
let user = {
    g:f.bind(null),
};
user.g();