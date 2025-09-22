const user = {
    username : "Himanshu",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Himanshu"
//     console.log(this.username);
    
// }

// chai()


// const chai = function(){
//     let username = "Himanshu"
//     console.log(this.username);
// }


// Arrow function  -->

const chai = () => {
    let username = "Himanshu"
    console.log(this.username);
}

// chai()

// const adTwo = (num1, num2) => {
//     return num1  num2    
// }

// Note:- if you add this bracket "{}" then you have to write return,  and if you use only "()" then yo dont have to write return

// const addTwo = (num1, num2) => num1 + num2    
// const addTwo = (num1, num2) => (num1 + num2)    
const addTwo = (num1, num2) => ({username : "Himanshu"})    

console.log(addTwo(3, 4));
