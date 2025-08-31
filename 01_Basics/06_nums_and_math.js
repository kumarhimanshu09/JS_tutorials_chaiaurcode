const score = 400;                 // Primitive number
// console.log(score);                // Output: 400

const balance = new Number(100);   // Number object (not primitive)
// console.log(balance);              // Output: [Number: 100]

// console.log(balance.toString());   // Output: "100" (a string)
// After converting to string we can also use prototype of strings, like:

// console.log(balance.toString().length);   // Output: "3" (cause '100' have 3 characters)
// console.log(balance.toFixed(2));

const otherNo = 123.8966
// console.log(otherNo.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());    // counts as per the international number system   // Output: "1,000,000" 
// console.log(hundreds.toLocaleString('en-IN'));    // counts as per the indian number system   // Output: "10,00,000" 


// ****************************** Maths ******************************

console.log(Math);
// console.log(Math.abs(-5));    //Abs (absolute) turns any negative to positive number, but not positive to negative
// console.log(Math.round(5.2));   // Output: "5"
// console.log(Math.ceil(5.2));  // ceil will display the top value    //Output: "6"
// console.log(Math.floor(5.9));  // floor will display the lower value    //Output: "5"

// console.log(Math.sqrt(625));     // Output: "25"

// console.log(Math.random());     // Math random always give value between 0 and 1
// console.log(Math.floor(Math.random()*6) + 1);    // It will give outcome between 1-6, like dice games
// console.log((Math.random()*10) + 1);     // Output: "between 1-11"

//-------------------------------------------------------------------------------------------------

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1)) + min);     // get detailed analysis through chatgpt or any A.I

// Explanation :

// 1. Math.random()

// Returns a random decimal between 0 (inclusive) and 1 (exclusive).
// Example: 0.5432


// 2. Math.random() * (max - min + 1)

// You multiply by (max - min + 1) to scale the range.

// max - min gives you the range size — here 20 - 10 = 10

// + 1 is added so the upper bound (20) is included in the result

// So, you're multiplying by 11 → range is now [0, 11)      // could be 0.0 and 10.999...

// 3. Math.floor(...)

// Rounds down to the nearest whole number.

// So, your result becomes an integer from 0 to 10


// 4. + min

// You add min (which is 10) to shift the result into the desired range:

// 0 + 10 = 10

// 10 + 10 = 20


//-------------------------------------------------------------------------------------------------

// Example for a dice roll :

// const roll = Math.floor(Math.random() * 6) + 1;
// console.log("You rolled:", roll);


// Example for two dice roll :

// const die1 = Math.floor(Math.random() * 6) + 1;
// const die2 = Math.floor(Math.random() * 6) + 1;

// console.log(`You rolled: ${die1} and ${die2}`);
// console.log(`Total: ${die1 + die2}`);

