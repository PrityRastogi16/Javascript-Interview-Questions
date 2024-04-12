// class User{
//     constructor(name, email,password){
//         this.name=name;
//         this.email=email;
//         this.password = password
//     }
//     encryptPass(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// const user = new User("prity", "pri@gmail.com", "123")
// console.log(user.encryptPass());
// console.log(user.changeUsername());

// BTS

// function User(name, email, password){
//     this.name=name;
//         this.email=email;
//         this.password = password
// }
// User.prototype.encryptPass = function(){
//     return `${this.password}abc`;
// }
// const user = new User("prity", "pri@gmail.com", "123")
// console.log(user.encryptPass());


// let data = [
//     {"a":"1"},
//     {"b":"2"},
//     {"c":"3", "d":"4", "e":"5"}
// ]

// let output = data.map(obj => {
//     return Object.entries(obj).map(([key, value]) => `${key}:${value}`).join(', ');
// }).join(', ');

// console.log(output);