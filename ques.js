// function add(item, list){
//     return list.push(item);
// }
// const res = add('apple',['banana']);
// console.log(res);


// function squareRoot(x,n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return x*squareRoot(x,n-1);
//     }
// }
// console.log(squareRoot(3,2))


// const promise1 = new Promise()
// Promise.race
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'one');
// });


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 900, 'two');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'three');
// });

// Promise.all([promise1, promise2, promise3]).then((value) => {
//     console.log(value); 
// }).catch((err)=>{
//     console.log(err);
// })

// const person = { name: 'Lydia' };
// console.log(Object.defineProperty (person, 'age', { value: 21 }));
// console.log(person);


// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5];

// let set = new Set([...arr1,...arr2])

// console.log(set);

// for(let i = 0; i<arr2.length; i++){
//     if(!arr1.includes(arr2[i])){
//       arr2.splice(i,1);
//       i--;
//     }
// }
// console.log(arr2)
