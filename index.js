// const arrow = ()=>{
//     console.log("Heklp")
// }

// function nor(){
//     console.log(this)
// }

// let obj = {
//      name:"Prity"
// }

// CURRYINGG- f(a,b) => f(a)(b)
// function fun(a,b){
//     console.log(a,b);
// }
// fun(5,6);

// function fun(a){
//     return function (b){
//         return `${a} ${b}`;
//     };
// }
// console.log(fun(5)(6));


// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(3)(3));

// QUESTION 
// evaluate("sum")(2)(4) , 6

// function evaluate(operation){
//     return function (a){
//         return function (b){
//            if(operation === "sum") return a+b;
//            else if(operation === "multiply") return a*b;
//         }
//     }
// }

// console.log(evaluate("sum")(2)(4));

// console.log(evaluate("multiply")(2)(4));

// IIFE
// const fun = (function (a){
//     delete a;
//     return a;

// })(5);
// console.log(fun);
// const property = "fname";
// const name = "Prity"
// const user = {
//     a:"One",
//     b:"Two",
//     c:"Three"
// }
// // console.log(user);
// for(let x in user){
//     console.log(user[x]);
// }

// const a = {}
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123
// a[c] = 456
// console.log(a[b]); 
let a = null;
if(a){
    console.log("Hello");
}
else{
    console.log("Hey");
}