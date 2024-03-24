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