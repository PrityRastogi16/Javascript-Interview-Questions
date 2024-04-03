//  console.log("start");
//  const promise1 = new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve(2)
//     console.log(3);
//  })
// console.log(4)
//  promise1.then((res)=>{
//     console.log(res);
//  })









// $$$$$$$$$$$$$$$$$$$4444
// const fn = ()=>
// new Promise((resolve,reject)=>{
//     console.log(1);
//     resolve("success");
// })
// console.log("middle");
// fn().then((res)=>{
//     console.log(res);
// })

//  console.log("end")

// function outer() {
//     var count = 0;
  
//     function inner() {
//       return ++count;
//     }
  
//     return inner;
//   }
  
//   const closure1 = outer();
//   const closure2 = outer();
  
//   console.log(closure1()); // Output: ? 1
//   console.log(closure1()); // Output: ? 2
//   console.log(closure2()); // Output: ? 1 
//   console.log(closure2()); // Output: ?
//   console.log(closure1()); // Output: ?


// function counter() {
//     let count = 0;
  
//     return function() {
//       return ++count;
//     };
//   }
  
//   const increment = counter();
  
//   console.log(increment()); // Output: ?
//   console.log(increment()); // Output: ?
//   console.log(increment()); // Output: ?


// function adder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   const add5 = adder(5);
  
//   console.log(add5(3)); // Output: ?
//   console.log(add5(7)); // Output: ?

// function memoize(func) {
//   const cache = {};

//   return function(n) {
//     if (n in cache) {
//       console.log("From cache");
//       return cache[n];
//     } else {
//       console.log("Computing...");
//       const result = func(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// }

// function square(n) {
//   return n * n;
// }

// const memoSquare = memoize(square);

// console.log(memoSquare(3)); // Output: ?
// console.log(memoSquare(4)); // Output: ?
// console.log(memoSquare(3)); // Output: ?


// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = 'Some data';
//         resolve(data);
//       }, 1000);
//     });
//   }
  
//   fetchData()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });