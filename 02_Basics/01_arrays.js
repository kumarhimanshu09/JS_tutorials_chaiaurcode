// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); 

// Array methods

// myArr.push(6)          // will add value
// myArr.pop()            // will delete the last value


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));                           

// const newArr = myArr.join()       // will convert array to string

// console.log(myArr); 
// console.log(newArr); 


// slice, splice

console.log("A ", myArr);          // "output" :- "A  [ 0, 1, 2, 3, 4, 5 ]"

const myn1 = myArr.slice(1, 3)

console.log(myn1);          // "output" :- "[ 1, 2 ]"

console.log("B ", myArr);          // "output" :- "B  [ 0, 1, 2, 3, 4, 5 ]"



const myn2 = myArr.splice(1, 3)
console.log(myn2);          // "output" :- "[ 1, 2, 3 ]"


console.log("c ", myArr);          // "output" :- "c  [ 0, 4, 5 ]"




