// Reverse String
let str = "HELLO PRITY";
function reverseStr(str){
    return str.split(' ').reverse().join(' ');
}
// console.log(reverseStr(str));

// PALINDROME

let str1 = "aba";
let newStr = str1.split('').reverse().join('');
function isPalindrome(str){
    return str === newStr;

}
// console.log(isPalindrome(str1));

// Largest in Array
let arr = [1,2,3,4,1,9];
// let max = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
    
// }

// console.log(max)

let name = "spaa rastsogi";
// function reverse(name){
//     return name.split(' ').reverse().join(' ')
// }
// console.log(reverse(name));

// let st = name.split(' ');
// let ss = ""
// for(let i = st.length-1; i>=0; i--){
//     ss+=st[i]+" ";
// }
// console.log(ss);


// function fact(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*fact(n-1);
//     }
// }

// console.log(fact(6))


// Palindrome
// let num = 1221;

// function reverse(num){
//    return parseInt(num.toString().split('').reverse().join(''))===num
    
// }
// console.log(reverse(num))
// let i = 0;
// function rev(num){
// let reversess = 0;
// // let original = num;
// while(num != 0){
//    let rem = num %10;
//    reversess = reversess*10+rem;
//    num = Math.floor(num / 10);
// }
// return reversess
// }


// console.log(rev(num) == num)

let a = [1,2,2,4,5,6];
  
// function sum(a){
//     return a.reduce((acc,curr)=>
//         acc+=curr
//     ,0)
// }
// console.log(sum(a))

// REmove duplicate
a.sort((a, b) => a - b);

for(let i = 1; i<a.length; i++){
    if(a[i]==a[i-1]){
        a.splice(i,1);
        i--;
    }
}

// console.log(a);

// PRIME
let number = 4;
function isPrime(number){
    if(number<=1){
        return false;
    }
    else{
       for(let i = 2; i<=Math.sqrt(number); i++){
       if(number % i == 0){
        return false;
       }
       
       }
       return true;
    }
}

// console.log(isPrime(number))

let abc = 10;

function foo() {
    console.log(abc);
    let abc = 20;
    console.log(abc);
}

foo();







