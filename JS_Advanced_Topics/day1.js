// Var and let difference

// function example() {
//     if (true) {
//         var x = 10;
//         console.log("called first ", x); // 10
//     }
//     console.log(x); // 10 (accessible outside the block)
// }

// example();
// console.log(x); // 10 (global scope) should  give an error (ReferenceError: x is not defined)

function example() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    // console.log(y); // ReferenceError: y is not defined (not accessible outside the block)
}

example();
// console.log(y); // ReferenceError: y is not defined (not accessible outside the function)


// 2. Hoisting: > variables declared with var are hoisted at the top of their scope during the compilation phase, 
// meaning one can use it before it decalred but it will have a value of "undefined"
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// let variables are alos hoisted but they are not initialised if you try to access them
// it gives ReferenceError 
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// let was introduced to habdle var drawaback or failures -> meaning it provides better scopping and doesn't allow re-declaring of the variables in the
// same scope

// var variables are function scoped and can be re-declared with in the same function
var myVar = 5;
var myVar = 10; // No error, value of myVar is now 10
console.log(myVar); // it will print the latest value of var

// use let when you want block scopping
// use var you want to support function scoppping and want to suport older variant's of javascript





// Asynchronous JS, Callbacks, Promises, Arrow functions - to be cover tomorrow