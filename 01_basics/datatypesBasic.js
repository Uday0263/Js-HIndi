// Primitive dataTypes

// 7 types : String ,Number,Boolean,null,undefined,BigInt,Symbol

//const score = 100


// Refrence Type (Non primitive)
// Array ,Object, Functions

// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) copy mitli hai, Heap(Non-Primitive) refrence milta hai

let myName="uday"

let anothername = myName

anothername = "hitesh"
console.log(myName);
console.log(anothername);

let user = {
    email : "user@gamil.com",
    upi : "user@ybl"
}

let user1 = user
user1.email = "uday.gmail.com"

console.log(user.email);
console.log(user1.email);
