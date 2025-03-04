// 3 types of variables: var, let, const

// var
// var has global scope it means if it is declared inside a block of code it can be accessed outside the block of code

{
 var x = 8;
}
console.log(x); // 8
// accessing x outside the block of code

// but if we use function instead of block of code then it will not be accessible outside the function
function test() {
  var y = 10;
}
console.log(y); // ❌ Error: y is not defined
// accessing y outside the function







// let
// let has block scope it means if it is declared inside a block of code it can not be accessed outside the block of code

{
 let y = 9;
}
console.log(y); // ReferenceError: y is not defined
// accessing y outside the block of code






// const
// const has block scope it means if it is declared inside a block of code it can not be accessed outside the block of code
// const can not be reassigned
// const must be initialized at the time of declaration

{
 const z = 10;
}
console.log(z); // ReferenceError: z is not defined
// accessing z outside the block of code

const a; // SyntaxError: Missing initializer in const declaration

const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.