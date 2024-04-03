const user = {
    name:"Prity",
    logMsg(){
        // console.log(this.name);
    }
}
// setTimeout(user.logMsg,1000); //because user.logMsg is callback
setTimeout(function(){
    user.logMsg();
},1000);


const users = {
    name:"Prity",
    greet(){
        return `Hello, ${this.name}!`;
    },
    farewll:()=>{
        return `Bye ${this.name}!`;
    }
}
// console.log(users.greet());
// console.log(users.farewll())


// Create Object Calculator
let calculator={
    read(){
        this.a = +prompt('a=',0);
        this.b = +prompt("b=",0);
    },
    sum(){
        return this.a+this.b
    },
    mul(){
        return this.a*this.b
    }
}

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

var length = 4;
function callBack(){
    console.log(this.length)
}

const obj={
    length:5,
    method(fn){
        fn();
    },
}
obj.method(callBack)

let arr1 = [1,2,2,4];
let arr2 = [2,4,5,6];
// [1,2,3,4,5,6]

for(let i = 0; i<arr2.length; i++){
    if(!arr1.includes(arr2[i])){
arr1.push(arr2[i]);
    }

}
console.log(arr1);
