// var c = 300
let a = 300 
 
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Himanshu"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  --> will show error!
    
    two()
}
// one()

if (true) {
    const username = "Himanshu"
    if (username === "Himanshu") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  --> will show error!
    
}

//+++++++++++++++++++++Insteresting++++++++++++++++++++++

function addOne(num) {
    return num + 1
}

addOne(5)
// console.log(addOne(5));

const addTwo = function (num){
    return num + 2
}

addTwo(5)
// console.log(addTwo(5));
