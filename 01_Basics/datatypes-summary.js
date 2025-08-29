// primitive - data type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2143534221524542124n



// Reference (Non primitive) - Data type

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"];    // array always writes in [] this bracket
let myObj = {
    name : "himanshu",                              // object always writes in {} this bracket
    age : 20
} 

const myFunction = function(){
    console.log("Hello World");
    
}

// https://262.ecma-international.org/5.1/#sec-11.4.3