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

function fun(a){
    return function (b){
        return `${a} ${b}`;
    };
}
console.log(fun(5)(6));

// Implement sum(2)(5)(3) , 10
function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(3)(5))

// QUESTION 
// evaluate("sum")(2)(4) , 6

