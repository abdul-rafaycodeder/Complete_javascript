//! JavaScrirpt Variables
//* var, let, const
// ^^^^^^^^^^^^^^^^^^^^^

//! First "var"
// var a;         //* Delcare karna
// var b = 10;    //* Delcare and intialize
// var            //* Function scoped hota hai
// var            //* You can redelcare and reintialize
// var            //* window object ke sath attach hota hai
// var            //* hoisting hota hai

//! Second "let"
// let c;         //* Delcare karna
// let d = 10;    //* Delcare and intialize
// let            //* block scope hota hai
// let            //* You can just reintialize
// let            //* hoisting hota hai but you can not access it before initialization

//! third "const"
// const a;       //* Esa declare karna allowed nahi hai
// const b = 10;  //* Delcare and intialize
// const          //* block scope hota hai
// const          //* You can not reintialize and redeclare
// const          //* hoisting hota hai but you can not access it before initialization

// ==>---------------------------------------------------------------------------------------------<== //

//! JavaScript Data Types
// Primitives: string, number, boolean, null, undefined, symbol, bigint
// reference: object, array, function
// Non-Primitive / Reference Data Types: object, array, function

//! ==> Primitive Data Types <== //
//! 1. ( String )
//* String text/data ko represent karta hai
// let a = "Rafay";
// let b = 'Karachi';
// let c = `Pakistan`;


//! 2. ( Number )
//* Number integer aur decimal dono values ko represent karta hai
// let age = 18;
// let price = 99.99;


//! 3. ( Boolean )
//* Boolean ki sirf 2 values hoti hain: true aur false
// let isLoggedIn = true;
// let isAdmin = false;


//! 4. ( Undefined )
//* Variable declare ho lekin usko koi value assign na ki gayi ho
// let username;
// console.log(username); // undefined


//! 5. ( Null )
//* Intentionally empty ya no value ko represent karta hai
// let selectedUser = null;


//! 6. ( Symbol )
// Unique value/identifier create karne ke liye use hota hai
// let id = Symbol("id");


//! 7. ( BigInt )
// Bohat bade integers ko store karne ke liye use hota hai
// let bigNumber = 123456789012345678901234567890n;


//! ==> Non-Primitive / Reference Data Type <== //
//! 8. ( Object )
//* Key-value pairs mein data store karta hai
// let user = {
//     name: "Rafay",
//     age: 18
// };


//! ( Array )
//* Multiple values ko ek variable mein store karta hai
// let fruits = ["Apple", "Mango", "Banana"];


//! ( Function )
//* Function bhi JavaScript mein ek Object hota hai
// function greet() {
//     console.log("Hello");
// }


//! ==> Important Point <== //

// Primitive:
// string
// number
// boolean
// undefined
// null
// symbol
// bigint

// Non-Primitive / Reference:
// object
// array
// function


//! ==> typeof Operator <== //

// typeof se hum kisi value ka data type check kar sakte hain

//* console.log(typeof "Rafay");       // string
//* console.log(typeof 100);           // number
//* console.log(typeof true);          // boolean
//* console.log(typeof undefined);     // undefined
//* console.log(typeof 123n);          // bigint
//* console.log(typeof Symbol("id"));  // symbol
//* console.log(typeof {});            // object
//* console.log(typeof []);            // object
//* console.log(typeof function(){});  // function


//! ==> Important JavaScript Weirdness <== //

// typeof null "object" return karta hai
// console.log(typeof null); // object

// Array technically Object hota hai
// console.log(typeof []); // object

// Array check karne ka correct method:
// console.log(Array.isArray([])); // true

//! ==> JavaScript operators <== //
//* Arithmetic Operators: ( +, -, *, /, %, ++, -- )
//* Assignment Operators: ( =, +=, -=, *=, /=, %= )
//* Comparison Operators: ( ==, ===, !=, !==, >, <, >=, <= )
//* Logical Operators: ( &&, ||, ! )
//* unary Operators: ( typeof, void, delete )
//* ternary Operators: ( condition ? expr1 : expr2 )