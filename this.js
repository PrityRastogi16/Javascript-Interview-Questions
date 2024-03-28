const user = {
    firstName: "Prits",
    getName() {
        const firstName = "PrityRastogi";
      return this.firstName;
    },
};
// console.log(user.getName())

function makeUser(){
    return {
        name:"PRITY",
        ref: this,
    };
}

let auser = makeUser();
// console.log(auser.ref.name);

// %%%%%%%%%%%%%%555
function makenewUser(){
    return {
        name:"PRITY",
        ref(){
        return this;
        },
       
    };
}

let anewuser = makenewUser();
// console.log(anewuser.ref().name);



// 888888888888888888888888888

const users = {
     name:"PriSah",
     logMsg(){
        // console.log(this.name);
     },
}
// setTimeout(users.logMsg,1000)
// users.logMsg();

const person = {
    name:'Prity',
    age:21,
}
for(const [x,y] of Object.entries(person)){
    // console.log(x,y);
}

// users.logMsg -> it send as a callBack, not a function so it doesnot have access of obj users, so in this this point window object, which is undefined(no name present)

function Person(fn,ln){
    this.fn = fn;
    this.ln = ln;
}
const ly = new Person('Prit', 'sh');
const s = Person('s','p');
// console.log(ly);
// console.log(s)


const a={};
const b = {key:'b'}
const c = {key:'c'}
a[b]= 143;
a[c] = 257;
// console.log(a[b]);

// let x = 1
// function foo(){
//     x = 2;
//     console.log(x);
// }
// setTimeout(foo,0);
// x=3;

// console.log(x);
// const set = new Set();
// set.add(1);
// set.add('Prity');
// set.add({key:'2'})

// for(let item of set){
//     // console.log(item+2);
// }


function add(item, list){
    return list.push(item);
}
const res = add('apple',['banana']);
console.log(res);