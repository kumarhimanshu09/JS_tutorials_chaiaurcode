// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log(`DB CONNECTED`);
})();


(function(name) {
    console.log(`Hello, ${name}`);
})("Himanshu");


// IIFE with arrow function

(() => {
    console.log("Arrow IIFE");
})();


((name) => {
    console.log(`Arrow IIFE with ${name}`);
})("Himanshu");



