// singleton
// Object.create  -->  construction method (makes singleton)

// object literals  -->  dont make singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Patna",
    email: "busk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);  
// console.log(JsUser[mySym]);   

JsUser.email = "busk@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "busk@microsoft.com"        // this will not print because "busk@chatgpt" got freeze
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}


// console.log(JsUser.greeting());  --> It will return undefined
// console.log(JsUser.greetingTwo());  --> It also

JsUser.greeting();  // output : "Hello JS User"
JsUser.greetingTwo();  // output : "Hello JS User"
