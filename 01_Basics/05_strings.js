const name = "himanshu"
const repoCount = 50

// console.log(name + repoCount + " value");
// this is outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Modern way of writing syntax

const gameName = new String('himanshu-hc')

// console.log(gameName.length);  
// console.log(gameName[0]);  // shows length of the string, starts from '0'
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase()); // here toUpperCase is a prototype which we are using directly without __proto__
console.log(gameName.indexOf('m'));  // displays position 
console.log(gameName.charAt(2)); 

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    himanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://himanshu.com/himanshu%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('himanshu'));  // includes used to get the word that use in the string or not
console.log(url.includes('sunday'));


console.log(gameName.split('-'));