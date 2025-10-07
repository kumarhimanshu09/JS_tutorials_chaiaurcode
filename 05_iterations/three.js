// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const element of object) {
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

// console.log(map);

// for (const key of map) {
//     console.log(key);          "outpt" :- will display in array
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);          "output" :- 'for of' will not work in objects
}
