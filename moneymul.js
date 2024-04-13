// Bubble Sort
let arr = [2,5,4,1,6,9,0,2,47,4];
// function bubbleSort(arr){
//     const n = arr.length;
//     for(let i = 0; i<n-1; i++){
//         for(let j = 0; j<n-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr));

// Quick Sort
// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     const pivot = arr[arr.length-1];
//     const left = []
//     const right =[]
//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(arr))

// Selection Sort
// function selectionSort(arr){
//     const n = arr.length
//     for(let i = 0; i<n-1; i++){
//         let minIdx = i;
//         for(let j = i+1; j<n; j++){
//             if(arr[j] < arr[minIdx]){
//                 minIdx = j;
//             }
//         }
//         if(minIdx !== i){
//             [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//         }
//     }
//     return arr;
// }
// console.log(selectionSort(arr))


// const students = [
//     { title: 'java', grade: 'A' },
//     { title: 'python', grade: 'B' },
//     { title: 'java', grade: 'A-' },
//     { title: 'javascript', grade: 'C' }
//   ];

//   const ans = {}

// const filterStu = students.filter(stu =>{
//     if(ans[stu.title]){
//         return false;
//     }else{
//         ans[stu.title] = true;
//         return true;
//     }
// })

// console.log(filterStu)

// const set = new Set()
// students.forEach(stu =>{
//     set.add(stu.title)
// })

// const uniqueStu = Array.from(set, title =>{
//     return students.find(stu => stu.title === title)
// })
// console.log(uniqueStu)











//   const filterStu = arrr.filter(stu =>{
//       if(ans[stu.title]){
//         return false;
//       }else{
//         ans[stu.title] = true;
//         return true;
//       }
//   })
//   console.log(filterStu)