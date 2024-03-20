// MAP, FILTER , REDUCE

let students = [
    {name:"Prity", rollNo: 2, marks:70},
    {name:"Kartik", rollNo: 4, marks:80},
    {name:"Naman", rollNo: 9, marks:98}
];

// convert all name in uppercae

const names = students.map(stu => stu.name.toUpperCase());
console.log(names);

// Find detail of stu whose marks is greater that 80
const details = students.filter(stu => stu.marks>=80);
console.log(details);

// Sum of marks
const total = students.reduce((acc,curr) => acc+curr.marks, 0);
console.log(total);

// Return only name of stu whose marks is greater less than 80

const stunames = students.filter((stu)=> stu.marks<80).map(stu=>stu.name);
console.log(stunames)

// When function treated like a variable , this function is callend first class func,In this func can pass into another function, used as parameter and return.


// IIFE- Immediately invoked finction expression, use () to make IIFE

// (function square(num){
//      console.log(num*num);
// })()

// Example code
// (function (x){
//     return (function(y){
//         console.log(x);  //Give output 1,  due to closure
//     })(2);
// })(1);


var x = 21;
var fun = function(){
    console.log(x);
    var x = 20;
};

fun();