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

// let obj = {
//     name1: "Prity",
//     name2:"Shraddha"
// }
// for(let a in obj){
//     console.log(a);
// }
// for(let b of "Prity"){
//     console.log(b);
// }

// for (var i =0; i<3; i++){
//     setTimeout(function log(){
//         console.log(i); // 3 3 3
//     }, i*1000)
// }
// Print 1 23 using var
for (var i = 0; i<3; i++){
     function inner(i){
        setTimeout(function log(){
            console.log(i); 
        }, i*1000)
    }
    inner(i);
}