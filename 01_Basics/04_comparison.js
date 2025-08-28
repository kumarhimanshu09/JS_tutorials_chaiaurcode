// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

//The reason is that an equality check == and comparisons > < >= <= works differently.
// comparisons convert null to a number, treating as a 0.
// that's why (3) null >= 0 is true and (1) null > 0 is false



// ===    known as strict vheck, also checks the data types of value

console.log("2" === 2);    //false,    string === number

