// Undefined 
// var x = 21;
// var fun = function(){
//     console.log(x);
//     var x = 20;
// };

// fun();

// const fn = (a, x,y, ...numbers)=>{
//     console.log(x,y);
//     console.log(numbers)
// }

// fn(2,3,4,6,7,8);

let obj = [ "Prity","Shraddha"]
   

// for(let a in obj){
//     console.log(obj[a]);
// }
// for(let [a,b,c,d,e] of  ["Prity","Shraddha"]){
//     console.log(a,b,c,d,e);
// }

// for (var i =0; i<3; i++){
//     setTimeout(function log(){
//         console.log(i); // 3 3 3
//     }, i*1000)
// }
// Print 1 23 using var
// for (var i = 0; i<3; i++){
//      function inner(i){
//         setTimeout(function log(){
//             console.log(i); 
//         }, i*1000)
//     }
//     inner(i);
// }

// function foo(num) {
//     return (num ^ -1) + 1;
// }

// console.log(foo(10));


function foo(num) {
    if (num < 0) {
        return -num; // If num is negative, return its positive
    } else {
        return (num ^ -1) + 1; // Otherwise, return the negation of num
    }
}
console.log(foo(foo(10))); 

// function foo(num) {
//     return num < 0 ? (num ^ -1) + 1 : num;
// }

function foo(x) {
    return x < 0 ? -(Math.abs(x) + 1) : -(Math.abs(x) - 1);
}

console.log(foo(foo(5)));
// function foo(num) {
//     return (num < 0) ? (num ^ -1) + 1 : num;
// }

// console.log(foo(foo(-10))); // Output: 10