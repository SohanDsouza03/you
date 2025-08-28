// PRIMITIVE

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  // false, because every Symbol is unique

const bigNumber = 4645118811653315484n; // BigInt

// References (Non-primitive)

// Array, Object, Functions

const heros = ["megan", "aaron", "steven"];

let myObj = {
    name: "sohan",
    age: 22,
};

const myFunction = function () {
    console.log("hello world");
};

console.log(typeof bigNumber); // "bigint"
