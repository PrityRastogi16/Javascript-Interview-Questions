function add(item, list){
    return list.push(item);
}
const res = add('apple',['banana']);
console.log(res);


function squareRoot(x,n){
    if(n==0){
        return 1;
    }
    else{
        return x*squareRoot(x,n-1);
    }
}
console.log(squareRoot(3,2))


// const promise1 = new Promise()
// Promise.race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 900, 'two');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'three');
});

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value); // Output will be 'one' because promise1 resolves first
});

const person = { name: 'Lydia' };
console.log(Object.defineProperty (person, 'age', { value: 21 }));
console.log(person);
// console.log(Object.keys(person));

[[0,1],[2,3].reduce((acc,curr)=>{
    return acc.concat(curr);
})]